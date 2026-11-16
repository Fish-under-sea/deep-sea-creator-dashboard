var Y1 = Object.create;
var zu = Object.defineProperty;
var G1 = Object.getOwnPropertyDescriptor;
var L1 = Object.getOwnPropertyNames;
var X1 = Object.getPrototypeOf,
  Q1 = Object.prototype.hasOwnProperty;
var cn = (t, e) => () => {
    try {
      return (e || t((e = { exports: {} }).exports, e), e.exports);
    } catch (n) {
      throw ((e = 0), n);
    }
  },
  Ac = (t, e) => {
    for (var n in e) zu(t, n, { get: e[n], enumerable: !0 });
  },
  dd = (t, e, n, a) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let l of L1(e))
        !Q1.call(t, l) &&
          l !== n &&
          zu(t, l, {
            get: () => e[l],
            enumerable: !(a = G1(e, l)) || a.enumerable,
          });
    return t;
  };
var yt = (t, e, n) => (
    (n = t != null ? Y1(X1(t)) : {}),
    dd(
      e || !t || !t.__esModule
        ? zu(n, "default", { value: t, enumerable: !0 })
        : n,
      t,
    )
  ),
  V1 = (t) => dd(zu({}, "__esModule", { value: !0 }), t);
var Ed = cn((j) => {
  "use strict";
  var Dc = Symbol.for("react.transitional.element"),
    Z1 = Symbol.for("react.portal"),
    K1 = Symbol.for("react.fragment"),
    J1 = Symbol.for("react.strict_mode"),
    $1 = Symbol.for("react.profiler"),
    W1 = Symbol.for("react.consumer"),
    F1 = Symbol.for("react.context"),
    I1 = Symbol.for("react.forward_ref"),
    P1 = Symbol.for("react.suspense"),
    tb = Symbol.for("react.memo"),
    bd = Symbol.for("react.lazy"),
    eb = Symbol.for("react.activity"),
    nb = Symbol.for("react.view_transition"),
    pd = Symbol.iterator;
  function ab(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pd && t[pd]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var vd = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    yd = Object.assign,
    xd = {};
  function ul(t, e, n) {
    ((this.props = t),
      (this.context = e),
      (this.refs = xd),
      (this.updater = n || vd));
  }
  ul.prototype.isReactComponent = {};
  ul.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  ul.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Sd() {}
  Sd.prototype = ul.prototype;
  function _c(t, e, n) {
    ((this.props = t),
      (this.context = e),
      (this.refs = xd),
      (this.updater = n || vd));
  }
  var Rc = (_c.prototype = new Sd());
  Rc.constructor = _c;
  yd(Rc, ul.prototype);
  Rc.isPureReactComponent = !0;
  var md = Array.isArray;
  function kc() {}
  var ft = { H: null, A: null, T: null, S: null },
    Nd = Object.prototype.hasOwnProperty;
  function Uc(t, e, n) {
    var a = n.ref;
    return {
      $$typeof: Dc,
      type: t,
      key: e,
      ref: a !== void 0 ? a : null,
      props: n,
    };
  }
  function lb(t, e) {
    return Uc(t.type, e, t.props);
  }
  function Hc(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Dc;
  }
  function ib(t) {
    var e = { "=": "=0", ":": "=2" };
    return (
      "$" +
      t.replace(/[=:]/g, function (n) {
        return e[n];
      })
    );
  }
  var gd = /\/+/g;
  function Cc(t, e) {
    return typeof t == "object" && t !== null && t.key != null
      ? ib("" + t.key)
      : e.toString(36);
  }
  function ub(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (
          (typeof t.status == "string"
            ? t.then(kc, kc)
            : ((t.status = "pending"),
              t.then(
                function (e) {
                  t.status === "pending" &&
                    ((t.status = "fulfilled"), (t.value = e));
                },
                function (e) {
                  t.status === "pending" &&
                    ((t.status = "rejected"), (t.reason = e));
                },
              )),
          t.status)
        ) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function il(t, e, n, a, l) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var u = !1;
    if (t === null) u = !0;
    else
      switch (i) {
        case "bigint":
        case "string":
        case "number":
          u = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case Dc:
            case Z1:
              u = !0;
              break;
            case bd:
              return ((u = t._init), il(u(t._payload), e, n, a, l));
          }
      }
    if (u)
      return (
        (l = l(t)),
        (u = a === "" ? "." + Cc(t, 0) : a),
        md(l)
          ? ((n = ""),
            u != null && (n = u.replace(gd, "$&/") + "/"),
            il(l, e, n, "", function (r) {
              return r;
            }))
          : l != null &&
            (Hc(l) &&
              (l = lb(
                l,
                n +
                  (l.key == null || (t && t.key === l.key)
                    ? ""
                    : ("" + l.key).replace(gd, "$&/") + "/") +
                  u,
              )),
            e.push(l)),
        1
      );
    u = 0;
    var o = a === "" ? "." : a + ":";
    if (md(t))
      for (var c = 0; c < t.length; c++)
        ((a = t[c]), (i = o + Cc(a, c)), (u += il(a, e, n, i, l)));
    else if (((c = ab(t)), typeof c == "function"))
      for (t = c.call(t), c = 0; !(a = t.next()).done;)
        ((a = a.value), (i = o + Cc(a, c++)), (u += il(a, e, n, i, l)));
    else if (i === "object") {
      if (typeof t.then == "function") return il(ub(t), e, n, a, l);
      throw (
        (e = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return u;
  }
  function Eu(t, e, n) {
    if (t == null) return t;
    var a = [],
      l = 0;
    return (
      il(t, a, "", "", function (i) {
        return e.call(n, i, l++);
      }),
      a
    );
  }
  function ob(t) {
    if (t._status === -1) {
      var e = t._result,
        n = e();
      (n.then(
        function (a) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1),
            (t._result = a),
            n.status === void 0 && ((n.status = "fulfilled"), (n.value = a)));
        },
        function (a) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2),
            (t._result = a),
            n.status === void 0 && ((n.status = "rejected"), (n.reason = a)));
        },
      ),
        t._status === -1 && ((t._status = 0), (t._result = n)));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var hd =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function wd(t) {
    var e = ft.T,
      n = {};
    ((n.types = e !== null ? e.types : null), (ft.T = n));
    try {
      var a = t(),
        l = ft.S;
      (l !== null && l(n, a),
        typeof a == "object" &&
          a !== null &&
          typeof a.then == "function" &&
          a.then(kc, hd));
    } catch (i) {
      hd(i);
    } finally {
      (e !== null && n.types !== null && (e.types = n.types), (ft.T = e));
    }
  }
  function zd(t) {
    var e = ft.T;
    if (e !== null) {
      var n = e.types;
      n === null ? (e.types = [t]) : n.indexOf(t) === -1 && n.push(t);
    } else wd(zd.bind(null, t));
  }
  var cb = {
    map: Eu,
    forEach: function (t, e, n) {
      Eu(
        t,
        function () {
          e.apply(this, arguments);
        },
        n,
      );
    },
    count: function (t) {
      var e = 0;
      return (
        Eu(t, function () {
          e++;
        }),
        e
      );
    },
    toArray: function (t) {
      return (
        Eu(t, function (e) {
          return e;
        }) || []
      );
    },
    only: function (t) {
      if (!Hc(t))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return t;
    },
  };
  j.Activity = eb;
  j.Children = cb;
  j.Component = ul;
  j.Fragment = K1;
  j.Profiler = $1;
  j.PureComponent = _c;
  j.StrictMode = J1;
  j.Suspense = P1;
  j.ViewTransition = nb;
  j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ft;
  j.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (t) {
      return ft.H.useMemoCache(t);
    },
  };
  j.addTransitionType = zd;
  j.cache = function (t) {
    return function () {
      return t.apply(null, arguments);
    };
  };
  j.cacheSignal = function () {
    return null;
  };
  j.cloneElement = function (t, e, n) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + ".",
      );
    var a = yd({}, t.props),
      l = t.key;
    if (e != null)
      for (i in (e.key !== void 0 && (l = "" + e.key), e))
        !Nd.call(e, i) ||
          i === "key" ||
          i === "__self" ||
          i === "__source" ||
          (i === "ref" && e.ref === void 0) ||
          (a[i] = e[i]);
    var i = arguments.length - 2;
    if (i === 1) a.children = n;
    else if (1 < i) {
      for (var u = Array(i), o = 0; o < i; o++) u[o] = arguments[o + 2];
      a.children = u;
    }
    return Uc(t.type, l, a);
  };
  j.createContext = function (t) {
    return (
      (t = {
        $$typeof: F1,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (t.Provider = t),
      (t.Consumer = { $$typeof: W1, _context: t }),
      t
    );
  };
  j.createElement = function (t, e, n) {
    var a,
      l = {},
      i = null;
    if (e != null)
      for (a in (e.key !== void 0 && (i = "" + e.key), e))
        Nd.call(e, a) &&
          a !== "key" &&
          a !== "__self" &&
          a !== "__source" &&
          (l[a] = e[a]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var o = Array(u), c = 0; c < u; c++) o[c] = arguments[c + 2];
      l.children = o;
    }
    if (t && t.defaultProps)
      for (a in ((u = t.defaultProps), u)) l[a] === void 0 && (l[a] = u[a]);
    return Uc(t, i, l);
  };
  j.createRef = function () {
    return { current: null };
  };
  j.forwardRef = function (t) {
    return { $$typeof: I1, render: t };
  };
  j.isValidElement = Hc;
  j.lazy = function (t) {
    return { $$typeof: bd, _payload: { _status: -1, _result: t }, _init: ob };
  };
  j.memo = function (t, e) {
    return { $$typeof: tb, type: t, compare: e === void 0 ? null : e };
  };
  j.startTransition = wd;
  j.unstable_useCacheRefresh = function () {
    return ft.H.useCacheRefresh();
  };
  j.use = function (t) {
    return ft.H.use(t);
  };
  j.useActionState = function (t, e, n) {
    return ft.H.useActionState(t, e, n);
  };
  j.useCallback = function (t, e) {
    return ft.H.useCallback(t, e);
  };
  j.useContext = function (t) {
    return ft.H.useContext(t);
  };
  j.useDebugValue = function () {};
  j.useDeferredValue = function (t, e) {
    return ft.H.useDeferredValue(t, e);
  };
  j.useEffect = function (t, e) {
    return ft.H.useEffect(t, e);
  };
  j.useEffectEvent = function (t) {
    return ft.H.useEffectEvent(t);
  };
  j.useId = function () {
    return ft.H.useId();
  };
  j.useImperativeHandle = function (t, e, n) {
    return ft.H.useImperativeHandle(t, e, n);
  };
  j.useInsertionEffect = function (t, e) {
    return ft.H.useInsertionEffect(t, e);
  };
  j.useLayoutEffect = function (t, e) {
    return ft.H.useLayoutEffect(t, e);
  };
  j.useMemo = function (t, e) {
    return ft.H.useMemo(t, e);
  };
  j.useOptimistic = function (t, e) {
    return ft.H.useOptimistic(t, e);
  };
  j.useReducer = function (t, e, n) {
    return ft.H.useReducer(t, e, n);
  };
  j.useRef = function (t) {
    return ft.H.useRef(t);
  };
  j.useState = function (t) {
    return ft.H.useState(t);
  };
  j.useSyncExternalStore = function (t, e, n) {
    return ft.H.useSyncExternalStore(t, e, n);
  };
  j.useTransition = function () {
    return ft.H.useTransition();
  };
  j.version = "19.3.0";
});
var rn = cn((Nx, Td) => {
  "use strict";
  Td.exports = Ed();
});
var Hd = cn((bt) => {
  "use strict";
  function Yc(t, e) {
    var n = t.length;
    t.push(e);
    t: for (; 0 < n;) {
      var a = (n - 1) >>> 1,
        l = t[a];
      if (0 < Tu(l, e)) ((t[a] = e), (t[n] = l), (n = a));
      else break t;
    }
  }
  function sn(t) {
    return t.length === 0 ? null : t[0];
  }
  function Ou(t) {
    if (t.length === 0) return null;
    var e = t[0],
      n = t.pop();
    if (n !== e) {
      t[0] = n;
      t: for (var a = 0, l = t.length, i = l >>> 1; a < i;) {
        var u = 2 * (a + 1) - 1,
          o = t[u],
          c = u + 1,
          r = t[c];
        if (0 > Tu(o, n))
          c < l && 0 > Tu(r, o)
            ? ((t[a] = r), (t[c] = n), (a = c))
            : ((t[a] = o), (t[u] = n), (a = u));
        else if (c < l && 0 > Tu(r, n)) ((t[a] = r), (t[c] = n), (a = c));
        else break t;
      }
    }
    return e;
  }
  function Tu(t, e) {
    var n = t.sortIndex - e.sortIndex;
    return n !== 0 ? n : t.id - e.id;
  }
  bt.unstable_now = void 0;
  typeof performance == "object" && typeof performance.now == "function"
    ? ((Md = performance),
      (bt.unstable_now = function () {
        return Md.now();
      }))
    : ((jc = Date),
      (Od = jc.now()),
      (bt.unstable_now = function () {
        return jc.now() - Od;
      }));
  var Md,
    jc,
    Od,
    An = [],
    In = [],
    rb = 1,
    Be = null,
    It = 3,
    Gc = !1,
    di = !1,
    pi = !1,
    Lc = !1,
    kd = typeof setTimeout == "function" ? setTimeout : null,
    Dd = typeof clearTimeout == "function" ? clearTimeout : null,
    Ad = typeof setImmediate != "undefined" ? setImmediate : null;
  function Mu(t) {
    for (var e = sn(In); e !== null;) {
      if (e.callback === null) Ou(In);
      else if (e.startTime <= t)
        (Ou(In), (e.sortIndex = e.expirationTime), Yc(An, e));
      else break;
      e = sn(In);
    }
  }
  function Xc(t) {
    if (((pi = !1), Mu(t), !di))
      if (sn(An) !== null) ((di = !0), cl || ((cl = !0), ol()));
      else {
        var e = sn(In);
        e !== null && Qc(Xc, e.startTime - t);
      }
  }
  var cl = !1,
    mi = -1,
    _d = 5,
    Rd = -1;
  function Ud() {
    return Lc ? !0 : !(bt.unstable_now() - Rd < _d);
  }
  function Bc() {
    if (((Lc = !1), cl)) {
      var t = bt.unstable_now();
      Rd = t;
      var e = !0;
      try {
        t: {
          ((di = !1), pi && ((pi = !1), Dd(mi), (mi = -1)), (Gc = !0));
          var n = It;
          try {
            e: {
              for (
                Mu(t), Be = sn(An);
                Be !== null && !(Be.expirationTime > t && Ud());
              ) {
                var a = Be.callback;
                if (typeof a == "function") {
                  ((Be.callback = null), (It = Be.priorityLevel));
                  var l = a(Be.expirationTime <= t);
                  if (((t = bt.unstable_now()), typeof l == "function")) {
                    ((Be.callback = l), Mu(t), (e = !0));
                    break e;
                  }
                  (Be === sn(An) && Ou(An), Mu(t));
                } else Ou(An);
                Be = sn(An);
              }
              if (Be !== null) e = !0;
              else {
                var i = sn(In);
                (i !== null && Qc(Xc, i.startTime - t), (e = !1));
              }
            }
            break t;
          } finally {
            ((Be = null), (It = n), (Gc = !1));
          }
          e = void 0;
        }
      } finally {
        e ? ol() : (cl = !1);
      }
    }
  }
  var ol;
  typeof Ad == "function"
    ? (ol = function () {
        Ad(Bc);
      })
    : typeof MessageChannel != "undefined"
      ? ((qc = new MessageChannel()),
        (Cd = qc.port2),
        (qc.port1.onmessage = Bc),
        (ol = function () {
          Cd.postMessage(null);
        }))
      : (ol = function () {
          kd(Bc, 0);
        });
  var qc, Cd;
  function Qc(t, e) {
    mi = kd(function () {
      t(bt.unstable_now());
    }, e);
  }
  bt.unstable_IdlePriority = 5;
  bt.unstable_ImmediatePriority = 1;
  bt.unstable_LowPriority = 4;
  bt.unstable_NormalPriority = 3;
  bt.unstable_Profiling = null;
  bt.unstable_UserBlockingPriority = 2;
  bt.unstable_cancelCallback = function (t) {
    t.callback = null;
  };
  bt.unstable_forceFrameRate = function (t) {
    0 > t || 125 < t
      ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
        )
      : (_d = 0 < t ? Math.floor(1e3 / t) : 5);
  };
  bt.unstable_getCurrentPriorityLevel = function () {
    return It;
  };
  bt.unstable_next = function (t) {
    switch (It) {
      case 1:
      case 2:
      case 3:
        var e = 3;
        break;
      default:
        e = It;
    }
    var n = It;
    It = e;
    try {
      return t();
    } finally {
      It = n;
    }
  };
  bt.unstable_requestPaint = function () {
    Lc = !0;
  };
  bt.unstable_runWithPriority = function (t, e) {
    switch (t) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        t = 3;
    }
    var n = It;
    It = t;
    try {
      return e();
    } finally {
      It = n;
    }
  };
  bt.unstable_scheduleCallback = function (t, e, n) {
    var a = bt.unstable_now();
    switch (
      (typeof n == "object" && n !== null
        ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? a + n : a))
        : (n = a),
      t)
    ) {
      case 1:
        var l = -1;
        break;
      case 2:
        l = 250;
        break;
      case 5:
        l = 1073741823;
        break;
      case 4:
        l = 1e4;
        break;
      default:
        l = 5e3;
    }
    return (
      (l = n + l),
      (t = {
        id: rb++,
        callback: e,
        priorityLevel: t,
        startTime: n,
        expirationTime: l,
        sortIndex: -1,
      }),
      n > a
        ? ((t.sortIndex = n),
          Yc(In, t),
          sn(An) === null &&
            t === sn(In) &&
            (pi ? (Dd(mi), (mi = -1)) : (pi = !0), Qc(Xc, n - a)))
        : ((t.sortIndex = l),
          Yc(An, t),
          di || Gc || ((di = !0), cl || ((cl = !0), ol()))),
      t
    );
  };
  bt.unstable_shouldYield = Ud;
  bt.unstable_wrapCallback = function (t) {
    var e = It;
    return function () {
      var n = It;
      It = e;
      try {
        return t.apply(this, arguments);
      } finally {
        It = n;
      }
    };
  };
});
var Bd = cn((zx, jd) => {
  "use strict";
  jd.exports = Hd();
});
var Gd = cn((Pt) => {
  "use strict";
  var sb = rn();
  function Yd(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Pn() {}
  var ae = {
      d: {
        f: Pn,
        r: function () {
          throw Error(Yd(522));
        },
        D: Pn,
        C: Pn,
        L: Pn,
        m: Pn,
        X: Pn,
        S: Pn,
        M: Pn,
      },
      p: 0,
      findDOMNode: null,
    },
    fb = Symbol.for("react.portal"),
    db = Symbol.for("react.recoverable"),
    qd = Symbol.for("react.optimistic_key");
  function pb(t, e, n) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fb,
      key: a == null ? null : a === qd ? qd : "" + a,
      children: t,
      containerInfo: e,
      implementation: n,
    };
  }
  var gi = sb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Au(t, e) {
    if (t === "font") return "";
    if (typeof e == "string") return e === "use-credentials" ? e : "";
  }
  Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae;
  Pt.browser = function (t) {
    return { $$typeof: db, _reason: t };
  };
  Pt.createPortal = function (t, e) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
      throw Error(Yd(299));
    return pb(t, e, null, n);
  };
  Pt.flushSync = function (t) {
    var e = gi.T,
      n = ae.p;
    try {
      if (((gi.T = null), (ae.p = 2), t)) return t();
    } finally {
      ((gi.T = e), (ae.p = n), ae.d.f());
    }
  };
  Pt.preconnect = function (t, e) {
    typeof t == "string" &&
      (e
        ? ((e = e.crossOrigin),
          (e =
            typeof e == "string" ? (e === "use-credentials" ? e : "") : void 0))
        : (e = null),
      ae.d.C(t, e));
  };
  Pt.prefetchDNS = function (t) {
    typeof t == "string" && ae.d.D(t);
  };
  Pt.preinit = function (t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
      var n = e.as,
        a = Au(n, e.crossOrigin),
        l = typeof e.integrity == "string" ? e.integrity : void 0,
        i = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
      n === "style"
        ? ae.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
            crossOrigin: a,
            integrity: l,
            fetchPriority: i,
          })
        : n === "script" &&
          ae.d.X(t, {
            crossOrigin: a,
            integrity: l,
            fetchPriority: i,
            nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          });
    }
  };
  Pt.preinitModule = function (t, e) {
    if (typeof t == "string")
      if (typeof e == "object" && e !== null) {
        if (e.as == null || e.as === "script") {
          var n = Au(e.as, e.crossOrigin);
          ae.d.M(t, {
            crossOrigin: n,
            integrity: typeof e.integrity == "string" ? e.integrity : void 0,
            nonce: typeof e.nonce == "string" ? e.nonce : void 0,
            fetchPriority:
              typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
          });
        }
      } else e == null && ae.d.M(t);
  };
  Pt.preload = function (t, e) {
    if (
      typeof t == "string" &&
      typeof e == "object" &&
      e !== null &&
      typeof e.as == "string"
    ) {
      var n = e.as,
        a = Au(n, e.crossOrigin);
      ae.d.L(t, n, {
        crossOrigin: a,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0,
        type: typeof e.type == "string" ? e.type : void 0,
        fetchPriority:
          typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        referrerPolicy:
          typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
        imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
        imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
        media: typeof e.media == "string" ? e.media : void 0,
      });
    }
  };
  Pt.preloadModule = function (t, e) {
    if (typeof t == "string")
      if (e) {
        var n = Au(e.as, e.crossOrigin);
        ae.d.m(t, {
          as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
          crossOrigin: n,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          fetchPriority:
            typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
        });
      } else ae.d.m(t);
  };
  Pt.requestFormReset = function (t) {
    ae.d.r(t);
  };
  Pt.unstable_batchedUpdates = function (t, e) {
    return t(e);
  };
  Pt.useFormState = function (t, e, n) {
    return gi.H.useFormState(t, e, n);
  };
  Pt.useFormStatus = function () {
    return gi.H.useHostTransitionStatus();
  };
  Pt.version = "19.3.0";
});
var Qd = cn((Tx, Xd) => {
  "use strict";
  function Ld() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld);
      } catch (t) {
        console.error(t);
      }
  }
  (Ld(), (Xd.exports = Gd()));
});
var Ch = cn((fc) => {
  "use strict";
  var Ht = Bd(),
    Ap = rn(),
    mb = Qd();
  function O(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Cp(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function nu(t) {
    for (var e = t, n = e; n && !n.alternate;)
      ((e = n), (e.flags & 4098) !== 0 && (t = e.return), (n = e.return));
    for (; e.return;) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function kp(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function Dp(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function Vd(t) {
    if (nu(t) !== t) throw Error(O(188));
  }
  function gb(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = nu(t)), e === null)) throw Error(O(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ;) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i;) {
          if (i === n) return (Vd(l), t);
          if (i === a) return (Vd(l), e);
          i = i.sibling;
        }
        throw Error(O(188));
      }
      if (n.return !== a.return) ((n = l), (a = i));
      else {
        for (var u = !1, o = l.child; o;) {
          if (o === n) {
            ((u = !0), (n = l), (a = i));
            break;
          }
          if (o === a) {
            ((u = !0), (a = l), (n = i));
            break;
          }
          o = o.sibling;
        }
        if (!u) {
          for (o = i.child; o;) {
            if (o === n) {
              ((u = !0), (n = i), (a = l));
              break;
            }
            if (o === a) {
              ((u = !0), (a = i), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!u) throw Error(O(189));
        }
      }
      if (n.alternate !== a) throw Error(O(190));
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? t : e;
  }
  function _p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = _p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  function me(t, e, n, a, l, i) {
    for (; t !== null;) {
      if (
        ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, l, i)) ||
        ((t.tag !== 22 || t.memoizedState === null) &&
          (e || (t.tag !== 5 && t.tag !== 27)) &&
          me(t.child, e, n, a, l, i))
      )
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function Ia(t) {
    for (t = t.return; t !== null;) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function Zd(t) {
    var e = !1;
    for (
      t = t.return;
      t !== null &&
      (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27));
    )
      t = t.return;
    return e;
  }
  function Rp(t) {
    var e = [null, null],
      n = Ia(t);
    return (n === null || Up(e, t, n.child, { foundSelf: !1 }), e);
  }
  function Up(t, e, n, a) {
    for (; n !== null;) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return ((t[1] = n), !0);
        t[0] = n;
      } else if (
        (n.tag !== 22 || n.memoizedState === null) &&
        Up(t, e, n.child, a)
      )
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function Ut(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(O(559));
    }
  }
  var gl = null,
    Nr = null;
  function hb(t, e, n) {
    return t === n ? !0 : t === e ? ((gl = t), !0) : !1;
  }
  function bb(t, e, n) {
    return t === n
      ? ((Nr = t), !1)
      : t === e
        ? (Nr !== null && (gl = t), !0)
        : !1;
  }
  function Kd(t) {
    if (t === null) return null;
    do t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function wr(t, e, n) {
    for (var a = 0, l = t; l; l = n(l)) a++;
    l = 0;
    for (var i = e; i; i = n(i)) l++;
    for (; 0 < a - l;) ((t = n(t)), a--);
    for (; 0 < l - a;) ((e = n(e)), l--);
    for (; a--;) {
      if (t === e || (e !== null && t === e.alternate)) return t;
      ((t = n(t)), (e = n(e)));
    }
    return null;
  }
  var rt = Object.assign,
    vb = Symbol.for("react.element"),
    Cu = Symbol.for("react.transitional.element"),
    Ni = Symbol.for("react.portal"),
    hl = Symbol.for("react.fragment"),
    Hp = Symbol.for("react.strict_mode"),
    zr = Symbol.for("react.profiler"),
    jp = Symbol.for("react.consumer"),
    hn = Symbol.for("react.context"),
    _s = Symbol.for("react.forward_ref"),
    Er = Symbol.for("react.suspense"),
    Tr = Symbol.for("react.suspense_list"),
    Rs = Symbol.for("react.memo"),
    aa = Symbol.for("react.lazy"),
    Mr = Symbol.for("react.activity"),
    yb = Symbol.for("react.legacy_hidden"),
    xb = Symbol.for("react.memo_cache_sentinel"),
    Or = Symbol.for("react.view_transition"),
    Sb = Symbol.for("react.recoverable"),
    Jd = Symbol.iterator;
  function hi(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Jd && t[Jd]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Nb = Symbol.for("react.client.reference");
  function Ar(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Nb ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case hl:
        return "Fragment";
      case zr:
        return "Profiler";
      case Hp:
        return "StrictMode";
      case Er:
        return "Suspense";
      case Tr:
        return "SuspenseList";
      case Mr:
        return "Activity";
      case Or:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Ni:
          return "Portal";
        case hn:
          return t.displayName || "Context";
        case jp:
          return (t._context.displayName || "Context") + ".Consumer";
        case _s:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Rs:
          return (
            (e = t.displayName || null),
            e !== null ? e : Ar(t.type) || "Memo"
          );
        case aa:
          ((e = t._payload), (t = t._init));
          try {
            return Ar(t(e));
          } catch (n) {}
      }
    return null;
  }
  var wi = Array.isArray,
    H = Ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = mb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    qa = { pending: !1, data: null, method: null, action: null },
    Cr = [],
    bl = -1;
  function wn(t) {
    return { current: t };
  }
  function Zt(t) {
    0 > bl || ((t.current = Cr[bl]), (Cr[bl] = null), bl--);
  }
  function mt(t, e) {
    (bl++, (Cr[bl] = t.current), (t.current = e));
  }
  var xn = wn(null),
    Yi = wn(null),
    da = wn(null),
    bo = wn(null);
  function vo(t, e) {
    switch ((mt(da, e), mt(Yi, t), mt(xn, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? cp(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = cp(e)), (t = ih(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Zt(xn), mt(xn, t));
  }
  function jl() {
    (Zt(xn), Zt(Yi), Zt(da));
  }
  function kr(t) {
    var e = t.memoizedState;
    (e !== null && ((Kl._currentValue = e.memoizedState), mt(bo, t)),
      (e = xn.current));
    var n = ih(e, t.type);
    e !== n && (mt(Yi, t), mt(xn, n));
  }
  function yo(t) {
    (Yi.current === t && (Zt(xn), Zt(Yi)),
      bo.current === t && (Zt(bo), (Kl._currentValue = qa)));
  }
  var Vc, $d;
  function ea(t) {
    if (Vc === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Vc = (e && e[1]) || ""),
          ($d =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Vc +
      t +
      $d
    );
  }
  var Zc = !1;
  function Kc(t, e) {
    if (!t || Zc) return "";
    Zc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var f = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(f.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(f, []);
                } catch (w) {
                  var g = w;
                }
                Reflect.construct(t, [], f);
              } else {
                try {
                  f.call();
                } catch (w) {
                  g = w;
                }
                f = !1;
                try {
                  var b = Object.getOwnPropertyDescriptor(t.prototype, "props");
                  (Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (f = !0),
                    new t());
                } finally {
                  f &&
                    (b !== void 0
                      ? Object.defineProperty(t.prototype, "props", b)
                      : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                g = w;
              }
              (f = t()) &&
                typeof f.catch == "function" &&
                f.catch(function () {});
            }
          } catch (w) {
            if (w && g && typeof w.stack == "string") return [w.stack, g.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        u = i[0],
        o = i[1];
      if (u && o) {
        var c = u.split(`
`),
          r = o.split(`
`);
        for (
          l = a = 0;
          a < c.length && !c[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; l < r.length && !r[l].includes("DetermineComponentFrameRoot");)
          l++;
        if (a === c.length || l === r.length)
          for (
            a = c.length - 1, l = r.length - 1;
            1 <= a && 0 <= l && c[a] !== r[l];
          )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (c[a] !== r[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || c[a] !== r[l])) {
                  var s =
                    `
` + c[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", t.displayName)),
                    s
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((Zc = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? ea(n) : "";
  }
  function wb(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ea(t.type);
      case 16:
        return ea("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? ea("Suspense Fallback")
          : ea("Suspense");
      case 19:
        return ea("SuspenseList");
      case 0:
      case 15:
        return Kc(t.type, !1);
      case 11:
        return Kc(t.type.render, !1);
      case 1:
        return Kc(t.type, !0);
      case 31:
        return ea("Activity");
      case 30:
        return ea("ViewTransition");
      default:
        return "";
    }
  }
  function Wd(t) {
    try {
      var e = "",
        n = null;
      do ((e += wb(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Dr = Object.prototype.hasOwnProperty,
    Us = Ht.unstable_scheduleCallback,
    Jc = Ht.unstable_cancelCallback,
    zb = Ht.unstable_shouldYield,
    Eb = Ht.unstable_requestPaint,
    ze = Ht.unstable_now,
    Tb = Ht.unstable_getCurrentPriorityLevel,
    Bp = Ht.unstable_ImmediatePriority,
    qp = Ht.unstable_UserBlockingPriority,
    xo = Ht.unstable_NormalPriority,
    Mb = Ht.unstable_LowPriority,
    Yp = Ht.unstable_IdlePriority,
    Ob = Ht.log,
    Ab = Ht.unstable_setDisableYieldValue,
    au = null,
    Ee = null;
  function ua(t) {
    if (
      (typeof Ob == "function" && Ab(t),
      Ee && typeof Ee.setStrictMode == "function")
    )
      try {
        Ee.setStrictMode(au, t);
      } catch (e) {}
  }
  var Te = Math.clz32 ? Math.clz32 : Db,
    Cb = Math.log,
    kb = Math.LN2;
  function Db(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Cb(t) / kb) | 0)) | 0);
  }
  var ku = 256,
    Du = 262144,
    _u = 4194304;
  function Ra(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Zo(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      i = t.suspendedLanes,
      u = t.pingedLanes;
    t = t.warmLanes;
    var o = a & 134217727;
    return (
      o !== 0
        ? ((a = o & ~i),
          a !== 0
            ? (l = Ra(a))
            : ((u &= o),
              u !== 0
                ? (l = Ra(u))
                : n || ((n = o & ~t), n !== 0 && (l = Ra(n)))))
        : ((o = a & ~i),
          o !== 0
            ? (l = Ra(o))
            : u !== 0
              ? (l = Ra(u))
              : n || ((n = a & ~t), n !== 0 && (l = Ra(n)))),
      l === 0
        ? 0
        : e !== 0 &&
            e !== l &&
            (e & i) === 0 &&
            ((i = l & -l),
            (n = e & -e),
            i >= n || (i === 32 && (n & 4194048) !== 0))
          ? e
          : l
    );
  }
  function lu(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Gp(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n;) {
        var a = 31 - Te(n),
          l = 1 << a;
        ((e |= t[a]), (n &= ~l));
      }
    return e;
  }
  function _b(t, e) {
    switch (t) {
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
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Lp() {
    var t = _u;
    return ((_u <<= 1), (_u & 62914560) === 0 && (_u = 4194304), t);
  }
  function $c(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function iu(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Rb(t, e, n, a, l, i) {
    var u = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var o = t.entanglements,
      c = t.expirationTimes,
      r = t.hiddenUpdates;
    for (n = u & ~n; 0 < n;) {
      var s = 31 - Te(n),
        f = 1 << s;
      ((o[s] = 0), (c[s] = -1));
      var g = r[s];
      if (g !== null)
        for (r[s] = null, s = 0; s < g.length; s++) {
          var b = g[s];
          b !== null && (b.lane &= -536870913);
        }
      n &= ~f;
    }
    (a !== 0 && Xp(t, a, 0),
      i !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e)));
  }
  function Xp(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - Te(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function Qp(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
      var a = 31 - Te(n),
        l = 1 << a;
      ((l & e) | (t[a] & e) && (t[a] |= e), (n &= ~l));
    }
  }
  function Vp(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Hs(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Hs(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function js(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Zp() {
    var t = et.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Mh(t.type));
  }
  function Fd(t, e) {
    var n = et.p;
    try {
      return ((et.p = t), e());
    } finally {
      et.p = n;
    }
  }
  var Ln = Math.random().toString(36).slice(2),
    Qt = "__reactFiber$" + Ln,
    ge = "__reactProps$" + Ln,
    Wl = "__reactContainer$" + Ln,
    Id = "__reactEvents$" + Ln,
    Ub = "__reactListeners$" + Ln,
    Hb = "__reactHandles$" + Ln,
    Pd = "__reactResources$" + Ln,
    uu = "__reactMarker$" + Ln,
    So = "__reactLoad$" + Ln;
  function Ko(t) {
    (delete t[Qt], delete t[ge], delete t[Ub], delete t[Hb]);
  }
  function ja(t) {
    var e;
    if ((e = t[Qt])) return e;
    for (var n = t.parentNode; n;) {
      if ((e = n[Wl] || n[Qt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = hp(t); t !== null;) {
            if ((n = t[Qt])) return n;
            t = hp(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Fl(t) {
    if ((t = t[Qt] || t[Wl])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function zi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(O(33));
  }
  function Ml(t) {
    var e = t[Pd];
    return (
      e ||
        (e = t[Pd] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Yt(t) {
    t[uu] = !0;
  }
  function Kp(t) {
    t[So] = void 0;
  }
  var Jp = new Set(),
    $p = {};
  function Pa(t, e) {
    (Bl(t, e), Bl(t + "Capture", e));
  }
  function Bl(t, e) {
    for ($p[t] = e, t = 0; t < e.length; t++) Jp.add(e[t]);
  }
  var jb = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    t0 = {},
    e0 = {};
  function Bb(t) {
    return Dr.call(e0, t)
      ? !0
      : Dr.call(t0, t)
        ? !1
        : jb.test(t)
          ? (e0[t] = !0)
          : ((t0[t] = !0), !1);
  }
  var P = !1;
  function n0() {
    var t = P;
    return ((P = !1), t);
  }
  function Fu(t, e, n) {
    if (Bb(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function Ru(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Cn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, a);
    }
  }
  function xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Wp(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function qb(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a != "undefined" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var l = a.get,
        i = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            ((n = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (u) {
            n = "" + u;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function _r(t) {
    if (!t._valueTracker) {
      var e = Wp(t) ? "checked" : "value";
      t._valueTracker = qb(t, e, "" + t[e]);
    }
  }
  function Fp(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Wp(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  var Yb = /[\n"\\]/g;
  function Xe(t) {
    return t.replace(Yb, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Rr(t, e, n, a, l, i, u, o) {
    ((t.name = ""),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (t.type = u)
        : t.removeAttribute("type"),
      e != null
        ? u === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + xe(e))
          : t.value !== "" + xe(e) && (t.value = "" + xe(e))
        : (u !== "submit" && u !== "reset") || t.removeAttribute("value"),
      e != null
        ? u === "number" && t.value == e
          ? Wc(t, xe(t.value))
          : Wc(t, xe(e))
        : n != null
          ? Wc(t, xe(n))
          : a != null && t.removeAttribute("value"),
      l == null && i != null && (t.defaultChecked = !!i),
      l != null &&
        (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (t.name = "" + xe(o))
        : t.removeAttribute("name"));
  }
  function Ip(t, e, n, a, l, i, u, o) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || n != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) {
        _r(t);
        return;
      }
      ((n = n != null ? "" + xe(n) : ""),
        (e = e != null ? "" + xe(e) : n),
        o || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a != null ? a : l),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = o ? t.checked : !!a),
      (t.defaultChecked = !!a),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.name = u),
      _r(t));
  }
  function Wc(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Ol(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
      for (n = 0; n < t.length; n++)
        ((l = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== l && (t[n].selected = l),
          l && a && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + xe(n), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === n) {
          ((t[l].selected = !0), a && (t[l].defaultSelected = !0));
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Pp(t, e, n) {
    if (
      e != null &&
      ((e = "" + xe(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + xe(n) : "";
  }
  function tm(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(O(92));
        if (wi(a)) {
          if (1 < a.length) throw Error(O(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = xe(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      _r(t));
  }
  function ql(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Gb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function a0(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Gb.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function em(t, e, n) {
    if (e != null && typeof e != "object") throw Error(O(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""),
          (P = !0));
      for (var l in e)
        ((a = e[l]),
          e.hasOwnProperty(l) && n[l] !== a && (a0(t, l, a), (P = !0)));
    } else for (var i in e) e.hasOwnProperty(i) && a0(t, i, e[i]);
  }
  function Bs(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
        return !0;
    }
  }
  var Lb = new Map([
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
      ["maskType", "mask-type"],
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
      ["xHeight", "x-height"],
    ]),
    Xb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Iu(t) {
    return Xb.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function bn() {}
  var Ur = null;
  function qs(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var vl = null,
    Al = null;
  function l0(t) {
    var e = Fl(t);
    if (e && (t = e.stateNode)) {
      var n = t[ge] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Rr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Xe("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var l = a[ge] || null;
                if (!l) throw Error(O(90));
                Rr(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((a = n[e]), a.form === t.form && Fp(a));
          }
          break t;
        case "textarea":
          Pp(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Ol(t, !!n.multiple, e, !1));
      }
    }
  }
  var Fc = !1;
  function nm(t, e, n) {
    if (Fc) return t(e, n);
    Fc = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Fc = !1),
        (vl !== null || Al !== null) &&
          (oc(), vl && ((e = vl), (t = Al), (Al = vl = null), l0(e), t)))
      )
        for (e = 0; e < t.length; e++) l0(t[e]);
    }
  }
  function Gi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ge] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
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
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(O(231, e, typeof n));
    return n;
  }
  var Hn = !(
      typeof window == "undefined" ||
      typeof window.document == "undefined" ||
      typeof window.document.createElement == "undefined"
    ),
    Hr = !1;
  if (Hn)
    try {
      ((rl = {}),
        Object.defineProperty(rl, "passive", {
          get: function () {
            Hr = !0;
          },
        }),
        window.addEventListener("test", rl, rl),
        window.removeEventListener("test", rl, rl));
    } catch (t) {
      Hr = !1;
    }
  var rl,
    oa = null,
    Ys = null,
    Pu = null;
  function am() {
    if (Pu) return Pu;
    var t,
      e = Ys,
      n = e.length,
      a,
      l = "value" in oa ? oa.value : oa.textContent,
      i = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var u = n - t;
    for (a = 1; a <= u && e[n - a] === l[i - a]; a++);
    return (Pu = l.slice(t, 1 < a ? 1 - a : void 0));
  }
  function to(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Uu() {
    return !0;
  }
  function i0() {
    return !1;
  }
  function oe(t) {
    function e(n, a, l, i, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var o in t)
        t.hasOwnProperty(o) && ((n = t[o]), (this[o] = n ? n(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Uu
          : i0),
        (this.isPropagationStopped = i0),
        this
      );
    }
    return (
      rt(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Uu));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Uu));
        },
        persist: function () {},
        isPersistent: Uu,
      }),
      e
    );
  }
  var Ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Jo = oe(Ma),
    ou = rt({}, Ma, { view: 0, detail: 0 }),
    Qb = oe(ou),
    Ic,
    Pc,
    bi,
    $o = rt({}, ou, {
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
      getModifierState: Gs,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== bi &&
              (bi && t.type === "mousemove"
                ? ((Ic = t.screenX - bi.screenX), (Pc = t.screenY - bi.screenY))
                : (Pc = Ic = 0),
              (bi = t)),
            Ic);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Pc;
      },
    }),
    u0 = oe($o),
    Vb = rt({}, $o, { dataTransfer: 0 }),
    Zb = oe(Vb),
    Kb = rt({}, ou, { relatedTarget: 0 }),
    tr = oe(Kb),
    Jb = rt({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $b = oe(Jb),
    Wb = rt({}, Ma, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Fb = oe(Wb),
    Ib = rt({}, Ma, { data: 0 }),
    o0 = oe(Ib),
    Pb = {
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
      MozPrintableKey: "Unidentified",
    },
    tv = {
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
      224: "Meta",
    },
    ev = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function nv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ev[t])
        ? !!e[t]
        : !1;
  }
  function Gs() {
    return nv;
  }
  var av = rt({}, ou, {
      key: function (t) {
        if (t.key) {
          var e = Pb[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = to(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? tv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Gs,
      charCode: function (t) {
        return t.type === "keypress" ? to(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? to(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    lv = oe(av),
    iv = rt({}, $o, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    c0 = oe(iv),
    uv = rt({}, Ma, { submitter: 0 }),
    ov = oe(uv),
    cv = rt({}, ou, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gs,
    }),
    rv = oe(cv),
    sv = rt({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fv = oe(sv),
    dv = rt({}, $o, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pv = oe(dv),
    mv = rt({}, Ma, { newState: 0, oldState: 0, source: 0 }),
    gv = oe(mv),
    hv = [9, 13, 27, 32],
    Ls = Hn && "CompositionEvent" in window,
    Mi = null;
  Hn && "documentMode" in document && (Mi = document.documentMode);
  var bv = Hn && "TextEvent" in window && !Mi,
    lm = Hn && (!Ls || (Mi && 8 < Mi && 11 >= Mi)),
    r0 = " ",
    s0 = !1;
  function im(t, e) {
    switch (t) {
      case "keyup":
        return hv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function um(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var yl = !1;
  function vv(t, e) {
    switch (t) {
      case "compositionend":
        return um(e);
      case "keypress":
        return e.which !== 32 ? null : ((s0 = !0), r0);
      case "textInput":
        return ((t = e.data), t === r0 && s0 ? null : t);
      default:
        return null;
    }
  }
  function yv(t, e) {
    if (yl)
      return t === "compositionend" || (!Ls && im(t, e))
        ? ((t = am()), (Pu = Ys = oa = null), (yl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return lm && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var xv = {
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
    week: !0,
  };
  function f0(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!xv[t.type] : e === "textarea";
  }
  function om(t, e, n, a) {
    (vl ? (Al ? Al.push(a) : (Al = [a])) : (vl = a),
      (e = Xo(e, "onChange")),
      0 < e.length &&
        ((n = new Jo("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e })));
  }
  var Oi = null,
    Li = null;
  function Sv(t) {
    nh(t, 0);
  }
  function Wo(t) {
    var e = zi(t);
    if (Fp(e)) return t;
  }
  function d0(t, e) {
    if (t === "change") return e;
  }
  var cm = !1;
  Hn &&
    (Hn
      ? ((ju = "oninput" in document),
        ju ||
          ((er = document.createElement("div")),
          er.setAttribute("oninput", "return;"),
          (ju = typeof er.oninput == "function")),
        (Hu = ju))
      : (Hu = !1),
    (cm = Hu && (!document.documentMode || 9 < document.documentMode)));
  var Hu, ju, er;
  function p0() {
    Oi && (Oi.detachEvent("onpropertychange", rm), (Li = Oi = null));
  }
  function rm(t) {
    if (t.propertyName === "value" && Wo(Li)) {
      var e = [];
      (om(e, Li, t, qs(t)), nm(Sv, e));
    }
  }
  function Nv(t, e, n) {
    t === "focusin"
      ? (p0(), (Oi = e), (Li = n), Oi.attachEvent("onpropertychange", rm))
      : t === "focusout" && p0();
  }
  function wv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Wo(Li);
  }
  function zv(t, e) {
    if (t === "click") return Wo(e);
  }
  function Ev(t, e) {
    if (t === "input" || t === "change") return Wo(e);
  }
  function Tv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Oe = typeof Object.is == "function" ? Object.is : Tv;
  function Xi(t, e) {
    if (Oe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!Dr.call(e, l) || !Oe(t[l], e[l])) return !1;
    }
    return !0;
  }
  function jr(t) {
    if (
      ((t = t || (typeof document != "undefined" ? document : void 0)),
      typeof t == "undefined")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch (e) {
      return t.body;
    }
  }
  function m0(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function g0(t, e) {
    var n = m0(t);
    t = 0;
    for (var a; n;) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = m0(n);
    }
  }
  function sm(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? sm(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function fm(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = jr(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch (a) {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = jr(t.document);
    }
    return e;
  }
  function Xs(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Mv = Hn && "documentMode" in document && 11 >= document.documentMode,
    xl = null,
    Br = null,
    Ai = null,
    qr = !1;
  function h0(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qr ||
      xl == null ||
      xl !== jr(a) ||
      ((a = xl),
      "selectionStart" in a && Xs(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ai && Xi(Ai, a)) ||
        ((Ai = a),
        (a = Xo(Br, "onSelect")),
        0 < a.length &&
          ((e = new Jo("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = xl))));
  }
  function Da(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Sl = {
      animationend: Da("Animation", "AnimationEnd"),
      animationiteration: Da("Animation", "AnimationIteration"),
      animationstart: Da("Animation", "AnimationStart"),
      transitionrun: Da("Transition", "TransitionRun"),
      transitionstart: Da("Transition", "TransitionStart"),
      transitioncancel: Da("Transition", "TransitionCancel"),
      transitionend: Da("Transition", "TransitionEnd"),
    },
    nr = {},
    dm = {};
  Hn &&
    ((dm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sl.animationend.animation,
      delete Sl.animationiteration.animation,
      delete Sl.animationstart.animation),
    "TransitionEvent" in window || delete Sl.transitionend.transition);
  function tl(t) {
    if (nr[t]) return nr[t];
    if (!Sl[t]) return t;
    var e = Sl[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in dm) return (nr[t] = e[n]);
    return t;
  }
  var pm = tl("animationend"),
    mm = tl("animationiteration"),
    gm = tl("animationstart"),
    Ov = tl("transitionrun"),
    Av = tl("transitionstart"),
    Cv = tl("transitioncancel"),
    hm = tl("transitionend"),
    bm = new Map(),
    Yr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Yr.push("scrollEnd");
  function en(t, e) {
    (bm.set(t, e), Pa(e, [t]));
  }
  var kv = 0;
  function jn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = tn.identifierPrefix;
    var n = kv++;
    return ((t = "_" + t + "t_" + n.toString(32) + "_"), (e.autoName = t));
  }
  function b0(t) {
    if (t == null || typeof t == "string") return t;
    var e = null,
      n = Hl;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = t[n[a]];
        if (l != null) {
          if (l === "none") return "none";
          e = e == null ? l : e + (" " + l);
        }
      }
    return e == null ? t.default : e;
  }
  function Xn(t, e) {
    return (
      (t = b0(t)),
      (e = b0(e)),
      e == null ? (t === "auto" ? null : t) : e === "auto" ? null : e
    );
  }
  var No =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ye = [],
    Nl = 0,
    Qs = 0;
  function Fo() {
    for (var t = Nl, e = (Qs = Nl = 0); e < t;) {
      var n = Ye[e];
      Ye[e++] = null;
      var a = Ye[e];
      Ye[e++] = null;
      var l = Ye[e];
      Ye[e++] = null;
      var i = Ye[e];
      if (((Ye[e++] = null), a !== null && l !== null)) {
        var u = a.pending;
        (u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
          (a.pending = l));
      }
      i !== 0 && vm(n, l, i);
    }
  }
  function Io(t, e, n, a) {
    ((Ye[Nl++] = t),
      (Ye[Nl++] = e),
      (Ye[Nl++] = n),
      (Ye[Nl++] = a),
      (Qs |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Vs(t, e, n, a) {
    return (Io(t, e, n, a), wo(t));
  }
  function el(t, e) {
    return (Io(t, null, null, e), wo(t));
  }
  function vm(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = t.return; i !== null;)
      ((i.childLanes |= n),
        (a = i.alternate),
        a !== null && (a.childLanes |= n),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (l = !0)),
        (t = i),
        (i = i.return));
    return t.tag === 3
      ? ((i = t.stateNode),
        l &&
          e !== null &&
          ((l = 31 - Te(n)),
          (t = i.hiddenUpdates),
          (a = t[l]),
          a === null ? (t[l] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        i)
      : null;
  }
  function wo(t) {
    if (50 < qi) throw ((qi = 0), (so = null), Error(O(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var wl = {};
  function Dv(t, e, n, a) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function de(t, e, n, a) {
    return new Dv(t, e, n, a);
  }
  function Zs(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Rn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = de(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 1206910976),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function ym(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function eo(t, e, n, a, l, i) {
    var u = 0;
    if (((a = t), typeof a == "function")) Zs(a) && (u = 1);
    else if (typeof a == "string")
      u = l2(t, n, xn.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (a) {
        case Mr:
          return (
            (t = de(31, n, e, l)),
            (t.elementType = Mr),
            (t.lanes = i),
            t
          );
        case hl:
          return Ya(n.children, l, i, e);
        case Hp:
          ((u = 8), (l |= 24));
          break;
        case zr:
          return (
            (t = de(12, n, e, l | 2)),
            (t.elementType = zr),
            (t.lanes = i),
            t
          );
        case Er:
          return (
            (t = de(13, n, e, l)),
            (t.elementType = Er),
            (t.lanes = i),
            t
          );
        case Tr:
          return (
            (t = de(19, n, e, l)),
            (t.elementType = Tr),
            (t.lanes = i),
            t
          );
        case yb:
        case Or:
          return (
            (t = l | 32),
            (t = de(30, n, e, t)),
            (t.elementType = Or),
            (t.lanes = i),
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            t
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case hn:
                u = 10;
                break t;
              case jp:
                u = 9;
                break t;
              case _s:
                u = 11;
                break t;
              case Rs:
                u = 14;
                break t;
              case aa:
                ((u = 16), (a = null));
                break t;
            }
          ((u = 29),
            (n = Error(O(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = de(u, n, e, l)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = i),
      e
    );
  }
  function Ya(t, e, n, a) {
    return ((t = de(7, t, a, e)), (t.lanes = n), t);
  }
  function ar(t, e, n) {
    return ((t = de(6, t, null, e)), (t.lanes = n), t);
  }
  function xm(t) {
    var e = de(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function lr(t, e, n) {
    return (
      (e = de(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var v0 = new WeakMap();
  function Qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = v0.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Wd(e) }), v0.set(t, e), e);
    }
    return { value: t, source: e, stack: Wd(e) };
  }
  var zl = [],
    El = 0,
    zo = null,
    Qi = 0,
    Ge = [],
    Le = 0,
    Na = null,
    vn = 1,
    yn = "";
  function Dn(t, e) {
    ((zl[El++] = Qi), (zl[El++] = zo), (zo = t), (Qi = e));
  }
  function Sm(t, e, n) {
    ((Ge[Le++] = vn), (Ge[Le++] = yn), (Ge[Le++] = Na), (Na = t));
    var a = vn;
    t = yn;
    var l = 32 - Te(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var i = 32 - Te(e) + l;
    if (30 < i) {
      var u = l - (l % 5);
      ((i = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (l -= u),
        (vn = (1 << (32 - Te(e) + l)) | (n << l) | a),
        (yn = i + t));
    } else ((vn = (1 << i) | (n << l) | a), (yn = t));
  }
  function Po(t) {
    t.return !== null && (Dn(t, 1), Sm(t, 1, 0));
  }
  function Ks(t) {
    for (; t === zo;)
      ((zo = zl[--El]), (zl[El] = null), (Qi = zl[--El]), (zl[El] = null));
    for (; t === Na;)
      ((Na = Ge[--Le]),
        (Ge[Le] = null),
        (yn = Ge[--Le]),
        (Ge[Le] = null),
        (vn = Ge[--Le]),
        (Ge[Le] = null));
  }
  function Nm(t, e) {
    ((Ge[Le++] = vn),
      (Ge[Le++] = yn),
      (Ge[Le++] = Na),
      (vn = e.id),
      (yn = e.overflow),
      (Na = t));
  }
  var Gt = null,
    pt = null,
    V = !1,
    pa = null,
    Ve = !1,
    Gr = Error(O(519));
  function wa(t) {
    var e = Error(
      O(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Vi(Qe(e, t)), Gr);
  }
  function y0(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Qt] = t), (e[ge] = a), n)) {
      case "dialog":
        (J("cancel", e), J("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $i.length; n++) J($i[n], e);
        break;
      case "source":
        J("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (J("error", e), J("load", e));
        break;
      case "details":
        J("toggle", e);
        break;
      case "input":
        (J("invalid", e),
          Ip(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        J("invalid", e);
        break;
      case "textarea":
        (J("invalid", e), tm(e, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      lh(e.textContent, n)
        ? (a.popover != null && (J("beforetoggle", e), J("toggle", e)),
          a.onScroll != null && J("scroll", e),
          a.onScrollEnd != null && J("scrollend", e),
          a.onClick != null && (e.onclick = bn),
          (e = !0))
        : (e = !1),
      e || wa(t, !0));
  }
  function Eo(t) {
    for (Gt = t.return; Gt;)
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          Ve = !1;
          return;
        case 27:
        case 3:
          Ve = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function sl(t) {
    if (t !== Gt) return !1;
    if (!V) return (Eo(t), (V = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Es(t.type, t.memoizedProps))),
        (n = !n)),
      n && pt && wa(t),
      Eo(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(O(317));
      pt = gp(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(O(317));
      pt = gp(t);
    } else
      e === 27
        ? ((e = pt), Oa(t.type) ? ((t = As), (As = null), (pt = t)) : (pt = e))
        : (pt = Gt ? Ze(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Qa() {
    ((pt = Gt = null), (V = !1));
  }
  function ir() {
    var t = pa;
    return (
      t !== null &&
        (se === null ? (se = t) : se.push.apply(se, t), (pa = null)),
      t
    );
  }
  function Vi(t) {
    pa === null ? (pa = [t]) : pa.push(t);
  }
  var Lr = wn(null),
    nl = null,
    _n = null;
  function ca(t, e, n) {
    (mt(Lr, e._currentValue), (e._currentValue = n));
  }
  function Un(t) {
    ((t._currentValue = Lr.current), Zt(Lr));
  }
  function no(t, e, n) {
    for (; t !== null;) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Xr(t, e, n, a) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null;) {
      var i = l.dependencies;
      if (i !== null) {
        var u = l.child;
        i = i.firstContext;
        t: for (; i !== null;) {
          var o = i;
          i = l;
          for (var c = 0; c < e.length; c++)
            if (o.context === e[c]) {
              ((i.lanes |= n),
                (o = i.alternate),
                o !== null && (o.lanes |= n),
                no(i.return, n, t),
                a || (u = null));
              break t;
            }
          i = o.next;
        }
      } else if (l.tag === 18) {
        if (((u = l.return), u === null)) throw Error(O(341));
        ((u.lanes |= n),
          (i = u.alternate),
          i !== null && (i.lanes |= n),
          no(u, n, t),
          (u = null));
      } else
        l.tag === 13 &&
        l.memoizedState !== null &&
        l.memoizedState.dehydrated === null
          ? ((l.lanes |= n),
            (u = l.alternate),
            u !== null && (u.lanes |= n),
            no(l.return, n, t),
            (u = l.child),
            (u = u !== null ? u.sibling : null))
          : (u = l.child);
      if (u !== null) u.return = l;
      else
        for (u = l; u !== null;) {
          if (u === t) {
            u = null;
            break;
          }
          if (((l = u.sibling), l !== null)) {
            ((l.return = u.return), (u = l));
            break;
          }
          u = u.return;
        }
      l = u;
    }
  }
  function Va(t, e, n, a) {
    t = null;
    for (var l = e, i = !1; l !== null;) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var u = l.alternate;
        if (u === null) throw Error(O(387));
        if (((u = u.memoizedProps), u !== null)) {
          var o = l.type;
          Oe(l.pendingProps.value, u.value) ||
            (t !== null ? t.push(o) : (t = [o]));
        }
      } else if (l === bo.current) {
        if (((u = l.alternate), u === null)) throw Error(O(387));
        u.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (t !== null ? t.push(Kl) : (t = [Kl]));
      }
      l = l.return;
    }
    return (t !== null && Xr(e, t, n, a), (e.flags |= 262144), t !== null);
  }
  function To(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Oe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Za(t) {
    ((nl = t),
      (_n = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function Vt(t) {
    return wm(nl, t);
  }
  function Bu(t, e) {
    return (nl === null && Za(t), wm(t, e));
  }
  function wm(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), _n === null)) {
      if (t === null) throw Error(O(308));
      ((_n = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else _n = _n.next = e;
    return n;
  }
  var _v =
      typeof AbortController != "undefined"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Rv = Ht.unstable_scheduleCallback,
    Uv = Ht.unstable_NormalPriority,
    kt = {
      $$typeof: hn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Js() {
    return { controller: new _v(), data: new Map(), refCount: 0 };
  }
  function cu(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Rv(Uv, function () {
          t.controller.abort();
        }));
  }
  function x0(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (
        n === null && (n = t.transitionTypes = []), t = 0;
        t < e.length;
        t++
      ) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Ei = null;
  function Hv(t) {
    var e = t.transitionTypes;
    return ((t.transitionTypes = null), e);
  }
  var Ci = null,
    Qr = 0,
    Ka = 0,
    Cl = null;
  function jv(t, e) {
    if (Ci === null) {
      var n = (Ci = []);
      ((Qr = 0),
        (Ka = wf()),
        (Cl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Qr++, e.then(S0, S0), e);
  }
  function S0() {
    if (--Qr === 0 && ((Ei = null), Ci !== null)) {
      Cl !== null && (Cl.status = "fulfilled");
      var t = Ci;
      ((Ci = null), (Ka = 0), (Cl = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Bv(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var l = 0; l < n.length; l++) (0, n[l])(e);
        },
        function (l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        },
      ),
      a
    );
  }
  var N0 = H.S;
  H.S = function (t, e) {
    if (
      ((Gg = ze()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        jv(t, e),
      Ei !== null)
    )
      for (var n = Ql; n !== null;) (x0(n, Ei), (n = n.next));
    if (((n = t.types), n !== null)) {
      for (var a = Ql; a !== null;) (x0(a, n), (a = a.next));
      if (Ka !== 0) {
        ((a = Ei), a === null && (a = Ei = []));
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    N0 !== null && N0(t, e);
  };
  var Ga = wn(null);
  function $s() {
    var t = Ga.current;
    return t !== null ? t : ct.pooledCache;
  }
  function ao(t, e) {
    e === null ? mt(Ga, Ga.current) : mt(Ga, e.pool);
  }
  function zm() {
    var t = $s();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var Il = Error(O(460)),
    Ws = Error(O(474)),
    tc = Error(O(542)),
    Mo = { then: function () {} };
  function w0(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Em(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(bn, bn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw (
          (t = e.reason),
          E0(t),
          t === void 0 && !("reason" in e) ? Error(O(600)) : t
        );
      default:
        if (typeof e.status == "string") e.then(bn, bn);
        else {
          if (((t = ct), t !== null && 100 < t.shellSuspendCounter))
            throw Error(O(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "fulfilled"), (l.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "rejected"), (l.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), E0(t), t);
        }
        throw ((La = e), Il);
    }
  }
  function Ua(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((La = n), Il)
        : n;
    }
  }
  var La = null;
  function z0() {
    if (La === null) throw Error(O(459));
    var t = La;
    return ((La = null), t);
  }
  function E0(t) {
    if (t === Il || t === tc) throw Error(O(483));
  }
  var kl = null,
    Zi = 0;
  function qu(t) {
    var e = Zi;
    return ((Zi += 1), kl === null && (kl = []), Em(kl, t, e));
  }
  function ta(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Yu(t, e) {
    throw e.$$typeof === vb
      ? Error(O(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          O(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Tm(t) {
    function e(d, m) {
      if (t) {
        var h = d.deletions;
        h === null ? ((d.deletions = [m]), (d.flags |= 16)) : h.push(m);
      }
    }
    function n(d, m) {
      if (!t) return null;
      for (; m !== null;) (e(d, m), (m = m.sibling));
      return null;
    }
    function a(d) {
      for (var m = new Map(); d !== null;)
        (d.key === null ? m.set(d.index, d) : m.set(d.key, d), (d = d.sibling));
      return m;
    }
    function l(d, m) {
      return ((d = Rn(d, m)), (d.index = 0), (d.sibling = null), d);
    }
    function i(d, m, h) {
      return (
        (d.index = h),
        t
          ? ((h = d.alternate),
            h !== null
              ? ((h = h.index), h < m ? ((d.flags |= 2), m) : h)
              : ((d.flags |= 134217730), m))
          : ((d.flags |= 1048576), m)
      );
    }
    function u(d) {
      return (t && d.alternate === null && (d.flags |= 134217730), d);
    }
    function o(d, m, h, y) {
      return m === null || m.tag !== 6
        ? ((m = ar(h, d.mode, y)), (m.return = d), m)
        : ((m = l(m, h)), (m.return = d), m);
    }
    function c(d, m, h, y) {
      var x = h.type;
      return x === hl
        ? ((d = s(d, m, h.props.children, y, h.key)), ta(d, h), d)
        : m !== null &&
            (m.elementType === x ||
              (typeof x == "object" &&
                x !== null &&
                x.$$typeof === aa &&
                Ua(x) === m.type))
          ? ((m = l(m, h.props)), ta(m, h), (m.return = d), m)
          : ((m = eo(h.type, h.key, h.props, null, d.mode, y)),
            ta(m, h),
            (m.return = d),
            m);
    }
    function r(d, m, h, y) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== h.containerInfo ||
        m.stateNode.implementation !== h.implementation
        ? ((m = lr(h, d.mode, y)), (m.return = d), m)
        : ((m = l(m, h.children || [])), (m.return = d), m);
    }
    function s(d, m, h, y, x) {
      return m === null || m.tag !== 7
        ? ((m = Ya(h, d.mode, y, x)), (m.return = d), m)
        : ((m = l(m, h)), (m.return = d), m);
    }
    function f(d, m, h) {
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return ((m = ar("" + m, d.mode, h)), (m.return = d), m);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Cu:
            return (
              (h = eo(m.type, m.key, m.props, null, d.mode, h)),
              ta(h, m),
              (h.return = d),
              h
            );
          case Ni:
            return ((m = lr(m, d.mode, h)), (m.return = d), m);
          case aa:
            return ((m = Ua(m)), f(d, m, h));
        }
        if (wi(m) || hi(m))
          return ((m = Ya(m, d.mode, h, null)), (m.return = d), m);
        if (typeof m.then == "function") return f(d, qu(m), h);
        if (m.$$typeof === hn) return f(d, Bu(d, m), h);
        Yu(d, m);
      }
      return null;
    }
    function g(d, m, h, y) {
      var x = m !== null ? m.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return x !== null ? null : o(d, m, "" + h, y);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Cu:
            return h.key === x ? c(d, m, h, y) : null;
          case Ni:
            return h.key === x ? r(d, m, h, y) : null;
          case aa:
            return ((h = Ua(h)), g(d, m, h, y));
        }
        if (wi(h) || hi(h)) return x !== null ? null : s(d, m, h, y, null);
        if (typeof h.then == "function") return g(d, m, qu(h), y);
        if (h.$$typeof === hn) return g(d, m, Bu(d, h), y);
        Yu(d, h);
      }
      return null;
    }
    function b(d, m, h, y, x) {
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return ((d = d.get(h) || null), o(m, d, "" + y, x));
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Cu:
            return (
              (d = d.get(y.key === null ? h : y.key) || null),
              c(m, d, y, x)
            );
          case Ni:
            return (
              (d = d.get(y.key === null ? h : y.key) || null),
              r(m, d, y, x)
            );
          case aa:
            return ((y = Ua(y)), b(d, m, h, y, x));
        }
        if (wi(y) || hi(y))
          return ((d = d.get(h) || null), s(m, d, y, x, null));
        if (typeof y.then == "function") return b(d, m, h, qu(y), x);
        if (y.$$typeof === hn) return b(d, m, h, Bu(m, y), x);
        Yu(m, y);
      }
      return null;
    }
    function w(d, m, h, y) {
      for (
        var x = null, v = null, S = m, E = (m = 0), _ = null;
        S !== null && E < h.length;
        E++
      ) {
        S.index > E ? ((_ = S), (S = null)) : (_ = S.sibling);
        var D = g(d, S, h[E], y);
        if (D === null) {
          S === null && (S = _);
          break;
        }
        (t && S && D.alternate === null && e(d, S),
          (m = i(D, m, E)),
          v === null ? (x = D) : (v.sibling = D),
          (v = D),
          (S = _));
      }
      if (E === h.length) return (n(d, S), V && Dn(d, E), x);
      if (S === null) {
        for (; E < h.length; E++)
          ((S = f(d, h[E], y)),
            S !== null &&
              ((m = i(S, m, E)),
              v === null ? (x = S) : (v.sibling = S),
              (v = S)));
        return (V && Dn(d, E), x);
      }
      for (S = a(S); E < h.length; E++)
        ((_ = b(S, d, E, h[E], y)),
          _ !== null &&
            (t &&
              ((D = _.alternate),
              D !== null && S.delete(D.key === null ? E : D.key)),
            (m = i(_, m, E)),
            v === null ? (x = _) : (v.sibling = _),
            (v = _)));
      return (
        t &&
          S.forEach(function (R) {
            return e(d, R);
          }),
        V && Dn(d, E),
        x
      );
    }
    function M(d, m, h, y) {
      if (h == null) throw Error(O(151));
      for (
        var x = null, v = null, S = m, E = (m = 0), _ = null, D = h.next();
        S !== null && !D.done;
        E++, D = h.next()
      ) {
        S.index > E ? ((_ = S), (S = null)) : (_ = S.sibling);
        var R = g(d, S, D.value, y);
        if (R === null) {
          S === null && (S = _);
          break;
        }
        (t && S && R.alternate === null && e(d, S),
          (m = i(R, m, E)),
          v === null ? (x = R) : (v.sibling = R),
          (v = R),
          (S = _));
      }
      if (D.done) return (n(d, S), V && Dn(d, E), x);
      if (S === null) {
        for (; !D.done; E++, D = h.next())
          ((D = f(d, D.value, y)),
            D !== null &&
              ((m = i(D, m, E)),
              v === null ? (x = D) : (v.sibling = D),
              (v = D)));
        return (V && Dn(d, E), x);
      }
      for (S = a(S); !D.done; E++, D = h.next())
        ((D = b(S, d, E, D.value, y)),
          D !== null &&
            (t &&
              ((_ = D.alternate),
              _ !== null && S.delete(_.key === null ? E : _.key)),
            (m = i(D, m, E)),
            v === null ? (x = D) : (v.sibling = D),
            (v = D)));
      return (
        t &&
          S.forEach(function (F) {
            return e(d, F);
          }),
        V && Dn(d, E),
        x
      );
    }
    function p(d, m, h, y) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === hl &&
          h.key === null &&
          h.props.ref === void 0 &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case Cu:
            t: {
              for (var x = h.key; m !== null;) {
                if (m.key === x) {
                  if (((x = h.type), x === hl)) {
                    if (m.tag === 7) {
                      (n(d, m.sibling),
                        (y = l(m, h.props.children)),
                        ta(y, h),
                        (y.return = d),
                        (d = y));
                      break t;
                    }
                  } else if (
                    m.elementType === x ||
                    (typeof x == "object" &&
                      x !== null &&
                      x.$$typeof === aa &&
                      Ua(x) === m.type)
                  ) {
                    (n(d, m.sibling),
                      (y = l(m, h.props)),
                      ta(y, h),
                      (y.return = d),
                      (d = y));
                    break t;
                  }
                  n(d, m);
                  break;
                } else e(d, m);
                m = m.sibling;
              }
              h.type === hl
                ? ((y = Ya(h.props.children, d.mode, y, h.key)),
                  ta(y, h),
                  (y.return = d),
                  (d = y))
                : ((y = eo(h.type, h.key, h.props, null, d.mode, y)),
                  ta(y, h),
                  (y.return = d),
                  (d = y));
            }
            return u(d);
          case Ni:
            t: {
              for (x = h.key; m !== null;) {
                if (m.key === x)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === h.containerInfo &&
                    m.stateNode.implementation === h.implementation
                  ) {
                    (n(d, m.sibling),
                      (y = l(m, h.children || [])),
                      (y.return = d),
                      (d = y));
                    break t;
                  } else {
                    n(d, m);
                    break;
                  }
                else e(d, m);
                m = m.sibling;
              }
              ((y = lr(h, d.mode, y)), (y.return = d), (d = y));
            }
            return u(d);
          case aa:
            return ((h = Ua(h)), p(d, m, h, y));
        }
        if (wi(h)) return w(d, m, h, y);
        if (hi(h)) {
          if (((x = hi(h)), typeof x != "function")) throw Error(O(150));
          return ((h = x.call(h)), M(d, m, h, y));
        }
        if (typeof h.then == "function") return p(d, m, qu(h), y);
        if (h.$$typeof === hn) return p(d, m, Bu(d, h), y);
        Yu(d, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          m !== null && m.tag === 6
            ? (n(d, m.sibling), (y = l(m, h)), (y.return = d), (d = y))
            : (n(d, m), (y = ar(h, d.mode, y)), (y.return = d), (d = y)),
          u(d))
        : n(d, m);
    }
    return function (d, m, h, y) {
      try {
        Zi = 0;
        var x = p(d, m, h, y);
        return ((kl = null), x);
      } catch (S) {
        if (S === Il || S === tc) throw S;
        var v = de(29, S, null, d.mode);
        return ((v.lanes = y), (v.return = d), v);
      }
    };
  }
  var Ja = Tm(!0),
    Mm = Tm(!1),
    la = !1;
  function Fs(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Vr(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function ma(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (tt & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
        (a.pending = e),
        (e = wo(t)),
        vm(t, null, n),
        e
      );
    }
    return (Io(t, a, e, n), wo(t));
  }
  function ki(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), Qp(t, n));
    }
  }
  function ur(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (i === null ? (l = i = u) : (i = i.next = u), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = e) : (i = i.next = e);
      } else l = i = e;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var Zr = !1;
  function Di() {
    if (Zr) {
      var t = Cl;
      if (t !== null) throw t;
    }
  }
  function _i(t, e, n, a) {
    Zr = !1;
    var l = t.updateQueue;
    la = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var c = o,
        r = c.next;
      ((c.next = null), u === null ? (i = r) : (u.next = r), (u = c));
      var s = t.alternate;
      s !== null &&
        ((s = s.updateQueue),
        (o = s.lastBaseUpdate),
        o !== u &&
          (o === null ? (s.firstBaseUpdate = r) : (o.next = r),
          (s.lastBaseUpdate = c)));
    }
    if (i !== null) {
      var f = l.baseState;
      ((u = 0), (s = r = c = null), (o = i));
      do {
        var g = o.lane & -536870913,
          b = g !== o.lane;
        if (b ? (W & g) === g : (a & g) === g) {
          (g !== 0 && g === Ka && (Zr = !0),
            s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var w = t,
              M = o;
            g = e;
            var p = n;
            switch (M.tag) {
              case 1:
                if (((w = M.payload), typeof w == "function")) {
                  f = w.call(p, f, g);
                  break t;
                }
                f = w;
                break t;
              case 3:
                w.flags = (w.flags & -65537) | 128;
              case 0:
                if (
                  ((w = M.payload),
                  (g = typeof w == "function" ? w.call(p, f, g) : w),
                  g == null)
                )
                  break t;
                f = rt({}, f, g);
                break t;
              case 2:
                la = !0;
            }
          }
          ((g = o.callback),
            g !== null &&
              ((t.flags |= 64),
              b && (t.flags |= 8192),
              (b = l.callbacks),
              b === null ? (l.callbacks = [g]) : b.push(g)));
        } else
          ((b = {
            lane: g,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            s === null ? ((r = s = b), (c = f)) : (s = s.next = b),
            (u |= g));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((b = o),
            (o = b.next),
            (b.next = null),
            (l.lastBaseUpdate = b),
            (l.shared.pending = null));
        }
      } while (!0);
      (s === null && (c = f),
        (l.baseState = c),
        (l.firstBaseUpdate = r),
        (l.lastBaseUpdate = s),
        i === null && (l.shared.lanes = 0),
        (Ta |= u),
        (t.lanes = u),
        (t.memoizedState = f));
    }
  }
  function Om(t, e) {
    if (typeof t != "function") throw Error(O(191, t));
    t.call(e);
  }
  function Am(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Om(n[t], e);
  }
  var za = wn(null),
    Oo = wn(0);
  function T0(t, e) {
    ((t = Gn), mt(Oo, t), mt(za, e), (Gn = t | e.baseLanes));
  }
  function Kr() {
    (mt(Oo, Gn), mt(za, za.current));
  }
  function Is() {
    ((Gn = Oo.current), Zt(za), Zt(Oo));
  }
  var $t = wn(null),
    te = null;
  function ha(t) {
    var e = t.alternate;
    (mt(Kt, Kt.current & 1),
      mt($t, t),
      te === null &&
        (e === null || za.current !== null || e.memoizedState !== null) &&
        (te = t));
  }
  function Jr(t) {
    (mt(Kt, Kt.current), mt($t, t), te === null && (te = t));
  }
  function Cm(t) {
    t.tag === 22
      ? (mt(Kt, Kt.current), mt($t, t), te === null && (te = t))
      : ba();
  }
  function ba() {
    (mt(Kt, Kt.current), mt($t, $t.current));
  }
  function Se(t) {
    (Zt($t), te === t && (te = null), Zt(Kt));
  }
  var Kt = wn(0);
  function Ki(t, e) {
    (mt($t, $t.current), mt(Kt, e));
  }
  function Ps(t) {
    (Zt(Kt), Zt($t), te === t && (te = null));
  }
  function Ao(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Os(n) || Mf(n)))
          return e;
      } else if (
        e.tag === 19 &&
        e.memoizedProps.revealOrder !== "independent"
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Bn = 0,
    G = null,
    ut = null,
    Ct = null,
    Co = !1,
    Dl = !1,
    $a = !1,
    ko = 0,
    Ji = 0,
    _l = null,
    qv = 0;
  function St() {
    throw Error(O(321));
  }
  function tf(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Oe(t[n], e[n])) return !1;
    return !0;
  }
  function ef(t, e, n, a, l, i) {
    return (
      (Bn = i),
      (G = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? og : cg),
      ($a = !1),
      (i = n(a, l)),
      ($a = !1),
      Dl && (i = Dm(e, n, a, l)),
      km(t),
      i
    );
  }
  function km(t) {
    H.H = Do;
    var e = ut !== null && ut.next !== null;
    if (((Bn = 0), (Ct = ut = G = null), (Co = !1), (Ji = 0), (_l = null), e))
      throw Error(O(300));
    t === null ||
      Dt ||
      ((t = t.dependencies), t !== null && To(t) && (Dt = !0));
  }
  function Dm(t, e, n, a) {
    G = t;
    var l = 0;
    do {
      if ((Dl && (_l = null), (Ji = 0), (Dl = !1), 25 <= l))
        throw Error(O(301));
      if (((l += 1), (Ct = ut = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((H.H = Kv), (i = e(n, a)));
    } while (Dl);
    return i;
  }
  function Yv() {
    var t = H.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? ru(e) : e),
      (t = t.useState()[0]),
      (ut !== null ? ut.memoizedState : null) !== t && (G.flags |= 1024),
      e
    );
  }
  function nf() {
    var t = ko !== 0;
    return ((ko = 0), t);
  }
  function af(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function lf(t) {
    if (Co) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Co = !1;
    }
    ((Bn = 0), (Ct = ut = G = null), (Dl = !1), (Ji = ko = 0), (_l = null));
  }
  function ue() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ct === null ? (G.memoizedState = Ct = t) : (Ct = Ct.next = t), Ct);
  }
  function Mt() {
    if (ut === null) {
      var t = G.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ut.next;
    var e = Ct === null ? G.memoizedState : Ct.next;
    if (e !== null) ((Ct = e), (ut = t));
    else {
      if (t === null)
        throw G.alternate === null ? Error(O(467)) : Error(O(310));
      ((ut = t),
        (t = {
          memoizedState: ut.memoizedState,
          baseState: ut.baseState,
          baseQueue: ut.baseQueue,
          queue: ut.queue,
          next: null,
        }),
        Ct === null ? (G.memoizedState = Ct = t) : (Ct = Ct.next = t));
    }
    return Ct;
  }
  function ec() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ru(t) {
    var e = Ji;
    return (
      (Ji += 1),
      _l === null && (_l = []),
      (t = Em(_l, t, e)),
      (e = G),
      (Ct === null ? e.memoizedState : Ct.next) === null &&
        ((e = e.alternate),
        (H.H = e === null || e.memoizedState === null ? og : cg)),
      t
    );
  }
  function nc(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ru(t);
      if (t.$$typeof === Sb) return;
      if (t.$$typeof === hn) return Vt(t);
    }
    throw Error(O(438, String(t)));
  }
  function uf(t) {
    var e = null,
      n = G.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = G.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ec()), (G.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = xb;
    return (e.index++, n);
  }
  function qn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function lo(t) {
    var e = Mt();
    return of(e, ut, t);
  }
  function of(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(O(311));
    a.lastRenderedReducer = n;
    var l = t.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = i.next), (i.next = u));
      }
      ((e.baseQueue = l = i), (a.pending = null));
    }
    if (((i = t.baseState), l === null)) t.memoizedState = i;
    else {
      e = l.next;
      var o = (u = null),
        c = null,
        r = e,
        s = !1;
      do {
        var f = r.lane & -536870913;
        if (f !== r.lane ? (W & f) === f : (Bn & f) === f) {
          var g = r.revertLane;
          if (g === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: r.action,
                  hasEagerState: r.hasEagerState,
                  eagerState: r.eagerState,
                  next: null,
                }),
              f === Ka && (s = !0));
          else if ((Bn & g) === g) {
            ((r = r.next), g === Ka && (s = !0));
            continue;
          } else
            ((f = {
              lane: 0,
              revertLane: r.revertLane,
              gesture: null,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null,
            }),
              c === null ? ((o = c = f), (u = i)) : (c = c.next = f),
              (G.lanes |= g),
              (Ta |= g));
          ((f = r.action),
            $a && n(i, f),
            (i = r.hasEagerState ? r.eagerState : n(i, f)));
        } else
          ((g = {
            lane: f,
            revertLane: r.revertLane,
            gesture: r.gesture,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null,
          }),
            c === null ? ((o = c = g), (u = i)) : (c = c.next = g),
            (G.lanes |= f),
            (Ta |= f));
        r = r.next;
      } while (r !== null && r !== e);
      if (
        (c === null ? (u = i) : (c.next = o),
        !Oe(i, t.memoizedState) && ((Dt = !0), s && ((n = Cl), n !== null)))
      )
        throw n;
      ((t.memoizedState = i),
        (t.baseState = u),
        (t.baseQueue = c),
        (a.lastRenderedState = i));
    }
    return (l === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function or(t) {
    var e = Mt(),
      n = e.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      l = n.pending,
      i = e.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((i = t(i, u.action)), (u = u.next));
      while (u !== l);
      (Oe(i, e.memoizedState) || (Dt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, a];
  }
  function _m(t, e, n) {
    var a = G,
      l = Mt(),
      i = V;
    if (i) {
      if (n === void 0) throw Error(O(407));
      n = n();
    } else n = e();
    var u = !Oe((ut || l).memoizedState, n);
    if (
      (u && ((l.memoizedState = n), (Dt = !0)),
      (l = l.queue),
      cf(Hm.bind(null, a, l, t), [t]),
      (t =
        l.getSnapshot !== e ||
        u ||
        (Ct !== null && (Ct.memoizedState.tag & 1) !== 0)),
      Yl(t ? 9 : 8, { destroy: void 0 }, Um.bind(null, a, l, n, e), null),
      t)
    ) {
      if (((a.flags |= 2048), ct === null)) throw Error(O(349));
      i || (Bn & 127) !== 0 || Rm(a, e, n);
    }
    return n;
  }
  function Rm(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = G.updateQueue),
      e === null
        ? ((e = ec()), (G.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Um(t, e, n, a) {
    ((e.value = n), (e.getSnapshot = a), jm(e) && Bm(t));
  }
  function Hm(t, e, n) {
    return n(function () {
      jm(e) && Bm(t);
    });
  }
  function jm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Oe(t, n);
    } catch (a) {
      return !0;
    }
  }
  function Bm(t) {
    var e = el(t, 2);
    e !== null && pe(e, t, 2);
  }
  function $r(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), $a)) {
        ua(!0);
        try {
          n();
        } finally {
          ua(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function qm(t, e, n, a) {
    return ((t.baseState = n), of(t, ut, typeof a == "function" ? a : qn));
  }
  function Gv(t, e, n, a, l) {
    if (lc(t)) throw Error(O(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u);
        },
      };
      (H.T !== null ? n(!0) : (i.isTransition = !1),
        a(i),
        (n = e.pending),
        n === null
          ? ((i.next = e.pending = i), Ym(e, i))
          : ((i.next = n.next), (e.pending = n.next = i)));
    }
  }
  function Ym(t, e) {
    var n = e.action,
      a = e.payload,
      l = t.state;
    if (e.isTransition) {
      var i = H.T,
        u = {};
      ((u.types = i !== null ? i.types : null), (H.T = u));
      try {
        var o = n(l, a),
          c = H.S;
        (c !== null && c(u, o), M0(t, e, o));
      } catch (r) {
        Wr(t, e, r);
      } finally {
        (i !== null && u.types !== null && (i.types = u.types), (H.T = i));
      }
    } else
      try {
        ((i = n(l, a)), M0(t, e, i));
      } catch (r) {
        Wr(t, e, r);
      }
  }
  function M0(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            O0(t, e, a);
          },
          function (a) {
            return Wr(t, e, a);
          },
        )
      : O0(t, e, n);
  }
  function O0(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      Gm(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Ym(t, n))));
  }
  function Wr(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = n), Gm(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Gm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Lm(t, e) {
    return e;
  }
  function A0(t, e) {
    if (V) {
      var n = ct.formState;
      if (n !== null) {
        t: {
          var a = G;
          if (V) {
            if (pt) {
              e: {
                for (var l = pt, i = Ve; l.nodeType !== 8;) {
                  if (!i) {
                    l = null;
                    break e;
                  }
                  if (((l = Ze(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                ((i = l.data), (l = i === "F!" || i === "F" ? l : null));
              }
              if (l) {
                ((pt = Ze(l.nextSibling)), (a = l.data === "F!"));
                break t;
              }
            }
            wa(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Lm,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = lg.bind(null, G, a)),
      (a.dispatch = n),
      (a = $r(!1)),
      (i = df.bind(null, G, !1, a.queue)),
      (a = ue()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = l),
      (n = Gv.bind(null, G, l, i, n)),
      (l.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function C0(t) {
    var e = Mt();
    return Xm(e, ut, t);
  }
  function Xm(t, e, n) {
    if (
      ((e = of(t, e, Lm)[0]),
      (t = lo(qn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = ru(e);
      } catch (u) {
        throw u === Il ? tc : u;
      }
    else a = e;
    e = Mt();
    var l = e.queue,
      i = l.dispatch;
    return (
      n !== e.memoizedState &&
        ((G.flags |= 2048),
        Yl(9, { destroy: void 0 }, Lv.bind(null, l, n), null)),
      [a, i, t]
    );
  }
  function Lv(t, e) {
    t.action = e;
  }
  function k0(t) {
    var e = Mt(),
      n = ut;
    if (n !== null) return Xm(e, n, t);
    (Mt(), (e = e.memoizedState), (n = Mt()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = t), [e, a, !1]);
  }
  function Yl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = G.updateQueue),
      e === null && ((e = ec()), (G.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Qm() {
    return Mt().memoizedState;
  }
  function io(t, e, n, a) {
    var l = ue();
    ((G.flags |= t),
      (l.memoizedState = Yl(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function ac(t, e, n, a) {
    var l = Mt();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    ut !== null && a !== null && tf(a, ut.memoizedState.deps)
      ? (l.memoizedState = Yl(e, i, n, a))
      : ((G.flags |= t), (l.memoizedState = Yl(1 | e, i, n, a)));
  }
  function D0(t, e) {
    io(8390656, 8, t, e);
  }
  function cf(t, e) {
    ac(2048, 8, t, e);
  }
  function Xv(t) {
    G.flags |= 4;
    var e = G.updateQueue;
    if (e === null) ((e = ec()), (G.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Vm(t) {
    var e = Mt().memoizedState;
    return (
      Xv({ ref: e, nextImpl: t }),
      function () {
        if ((tt & 2) !== 0) throw Error(O(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Zm(t, e) {
    return ac(4, 2, t, e);
  }
  function Km(t, e) {
    return ac(4, 4, t, e);
  }
  function Jm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function $m(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ac(4, 4, Jm.bind(null, e, t), n));
  }
  function rf() {}
  function Wm(t, e) {
    var n = Mt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && tf(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Fm(t, e) {
    var n = Mt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && tf(e, a[1])) return a[0];
    if (((a = t()), $a)) {
      ua(!0);
      try {
        t();
      } finally {
        ua(!1);
      }
    }
    return ((n.memoizedState = [a, e]), a);
  }
  function sf(t, e, n) {
    return n === void 0 || ((Bn & 1073741824) !== 0 && (W & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Xg()), (G.lanes |= t), (Ta |= t), n);
  }
  function Im(t, e, n, a) {
    return Oe(n, e)
      ? n
      : za.current !== null
        ? ((t = sf(t, n, a)), Oe(t, e) || (Dt = !0), t)
        : (Bn & 106) === 0 || ((Bn & 1073741824) !== 0 && (W & 261930) === 0)
          ? ((Dt = !0), (t.memoizedState = n))
          : ((t = Xg()), (G.lanes |= t), (Ta |= t), e);
  }
  function Pm(t, e, n, a, l) {
    var i = et.p;
    et.p = i !== 0 && 8 > i ? i : 8;
    var u = H.T,
      o = {};
    ((o.types = u !== null ? u.types : null), (H.T = o), df(t, !1, e, n));
    try {
      var c = l(),
        r = H.S;
      if (
        (r !== null && r(o, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var s = Bv(c, a);
        Ri(t, e, s, Me(t));
      } else Ri(t, e, a, Me(t));
    } catch (f) {
      Ri(t, e, { then: function () {}, status: "rejected", reason: f }, Me());
    } finally {
      ((et.p = i),
        u !== null && o.types !== null && (u.types = o.types),
        (H.T = u));
    }
  }
  function Qv() {}
  function Fr(t, e, n, a) {
    if (t.tag !== 5) throw Error(O(476));
    var l = tg(t).queue;
    Pm(
      t,
      l,
      e,
      qa,
      n === null
        ? Qv
        : function () {
            return (eg(t), n(a));
          },
    );
  }
  function tg(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: qa,
      baseState: qa,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: qa,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function eg(t) {
    var e = tg(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Ri(t, e.next.queue, {}, Me()));
  }
  function ff() {
    return Vt(Kl);
  }
  function ng() {
    return Mt().memoizedState;
  }
  function ag() {
    return Mt().memoizedState;
  }
  function Vv(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Me();
          t = ma(n);
          var a = ga(e, t, n);
          (a !== null && (pe(a, e, n), ki(a, e, n)),
            (e = { cache: Js() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Zv(t, e, n) {
    var a = Me();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      lc(t)
        ? ig(e, n)
        : ((n = Vs(t, e, n, a)), n !== null && (pe(n, t, a), ug(n, e, a))));
  }
  function lg(t, e, n) {
    var a = Me();
    Ri(t, e, n, a);
  }
  function Ri(t, e, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (lc(t)) ig(e, l);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var u = e.lastRenderedState,
            o = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), Oe(o, u)))
            return (Io(t, e, l, 0), ct === null && Fo(), !1);
        } catch (c) {}
      if (((n = Vs(t, e, l, a)), n !== null))
        return (pe(n, t, a), ug(n, e, a), !0);
    }
    return !1;
  }
  function df(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: wf(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      lc(t))
    ) {
      if (e) throw Error(O(479));
    } else ((e = Vs(t, n, a, 2)), e !== null && pe(e, t, 2));
  }
  function lc(t) {
    var e = t.alternate;
    return t === G || (e !== null && e === G);
  }
  function ig(t, e) {
    Dl = Co = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function ug(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), Qp(t, n));
    }
  }
  var Do = {
      readContext: Vt,
      use: nc,
      useCallback: St,
      useContext: St,
      useEffect: St,
      useImperativeHandle: St,
      useLayoutEffect: St,
      useInsertionEffect: St,
      useMemo: St,
      useReducer: St,
      useRef: St,
      useState: St,
      useDebugValue: St,
      useDeferredValue: St,
      useTransition: St,
      useSyncExternalStore: St,
      useId: St,
      useHostTransitionStatus: St,
      useFormState: St,
      useActionState: St,
      useOptimistic: St,
      useMemoCache: St,
      useCacheRefresh: St,
      useEffectEvent: St,
    },
    og = {
      readContext: Vt,
      use: nc,
      useCallback: function (t, e) {
        return ((ue().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: Vt,
      useEffect: D0,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          io(4194308, 4, Jm.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return io(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        io(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var a = t();
        if ($a) {
          ua(!0);
          try {
            t();
          } finally {
            ua(!1);
          }
        }
        return ((n.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, n) {
        var a = ue();
        if (n !== void 0) {
          var l = n(e);
          if ($a) {
            ua(!0);
            try {
              n(e);
            } finally {
              ua(!1);
            }
          }
        } else l = e;
        return (
          (a.memoizedState = a.baseState = l),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: l,
          }),
          (a.queue = t),
          (t = t.dispatch = Zv.bind(null, G, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = $r(t);
        var e = t.queue,
          n = lg.bind(null, G, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: rf,
      useDeferredValue: function (t, e) {
        var n = ue();
        return sf(n, t, e);
      },
      useTransition: function () {
        var t = $r(!1);
        return (
          (t = Pm.bind(null, G, t.queue, !0, !1)),
          (ue().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = G,
          l = ue();
        if (V) {
          if (n === void 0) throw Error(O(407));
          n = n();
        } else {
          if (((n = e()), ct === null)) throw Error(O(349));
          (W & 127) !== 0 || Rm(a, e, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: e };
        return (
          (l.queue = i),
          D0(Hm.bind(null, a, i, t), [t]),
          (a.flags |= 2048),
          Yl(9, { destroy: void 0 }, Um.bind(null, a, i, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = ct.identifierPrefix;
        if (V) {
          var n = yn,
            a = vn;
          ((n = (a & ~(1 << (32 - Te(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ko++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = qv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: ff,
      useFormState: A0,
      useActionState: A0,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = df.bind(null, G, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: uf,
      useCacheRefresh: function () {
        return (ue().memoizedState = Vv.bind(null, G));
      },
      useEffectEvent: function (t) {
        var e = ue(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((tt & 2) !== 0) throw Error(O(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    cg = {
      readContext: Vt,
      use: nc,
      useCallback: Wm,
      useContext: Vt,
      useEffect: cf,
      useImperativeHandle: $m,
      useInsertionEffect: Zm,
      useLayoutEffect: Km,
      useMemo: Fm,
      useReducer: lo,
      useRef: Qm,
      useState: function () {
        return lo(qn);
      },
      useDebugValue: rf,
      useDeferredValue: function (t, e) {
        var n = Mt();
        return Im(n, ut.memoizedState, t, e);
      },
      useTransition: function () {
        var t = lo(qn)[0],
          e = Mt().memoizedState;
        return [typeof t == "boolean" ? t : ru(t), e];
      },
      useSyncExternalStore: _m,
      useId: ng,
      useHostTransitionStatus: ff,
      useFormState: C0,
      useActionState: C0,
      useOptimistic: function (t, e) {
        var n = Mt();
        return qm(n, ut, t, e);
      },
      useMemoCache: uf,
      useCacheRefresh: ag,
      useEffectEvent: Vm,
    },
    Kv = {
      readContext: Vt,
      use: nc,
      useCallback: Wm,
      useContext: Vt,
      useEffect: cf,
      useImperativeHandle: $m,
      useInsertionEffect: Zm,
      useLayoutEffect: Km,
      useMemo: Fm,
      useReducer: or,
      useRef: Qm,
      useState: function () {
        return or(qn);
      },
      useDebugValue: rf,
      useDeferredValue: function (t, e) {
        var n = Mt();
        return ut === null ? sf(n, t, e) : Im(n, ut.memoizedState, t, e);
      },
      useTransition: function () {
        var t = or(qn)[0],
          e = Mt().memoizedState;
        return [typeof t == "boolean" ? t : ru(t), e];
      },
      useSyncExternalStore: _m,
      useId: ng,
      useHostTransitionStatus: ff,
      useFormState: k0,
      useActionState: k0,
      useOptimistic: function (t, e) {
        var n = Mt();
        return ut !== null
          ? qm(n, ut, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: uf,
      useCacheRefresh: ag,
      useEffectEvent: Vm,
    };
  function cr(t, e, n, a) {
    ((e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : rt({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Ir = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Me(),
        l = ma(a);
      ((l.payload = e),
        n != null && (l.callback = n),
        (e = ga(t, l, a)),
        e !== null && (pe(e, t, a), ki(e, t, a)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Me(),
        l = ma(a);
      ((l.tag = 1),
        (l.payload = e),
        n != null && (l.callback = n),
        (e = ga(t, l, a)),
        e !== null && (pe(e, t, a), ki(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Me(),
        a = ma(n);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = ga(t, a, n)),
        e !== null && (pe(e, t, n), ki(e, t, n)));
    },
  };
  function _0(t, e, n, a, l, i, u) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, i, u)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Xi(n, a) || !Xi(l, i)
          : !0
    );
  }
  function R0(t, e, n, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Ir.enqueueReplaceState(e, e.state, null));
  }
  function Wa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = rt({}, n));
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
    }
    return n;
  }
  function rg(t) {
    No(t);
  }
  function sg(t) {
    console.error(t);
  }
  function fg(t) {
    No(t);
  }
  function _o(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function U0(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Pr(t, e, n) {
    return (
      (n = ma(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        _o(t, e);
      }),
      n
    );
  }
  function dg(t) {
    return ((t = ma(t)), (t.tag = 3), t);
  }
  function pg(t, e, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      ((t.payload = function () {
        return l(i);
      }),
        (t.callback = function () {
          U0(e, n, a);
        }));
    }
    var u = n.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (t.callback = function () {
        (U0(e, n, a),
          typeof l != "function" &&
            (va === null ? (va = new Set([this])) : va.add(this)));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function Jv(t, e, n, a, l) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Va(e, n, l, !0),
        (n = $t.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return (
              te === null ? Go() : n.alternate === null && Nt === 0 && (Nt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === Mo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  gr(t, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Mo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  gr(t, a, l)),
              !1
            );
        }
        throw Error(O(435, n.tag));
      }
      return (gr(t, a, l), Go(), !1);
    }
    if (V)
      return (
        (e = $t.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = l),
            a !== Gr && ((t = Error(O(422), { cause: a })), Vi(Qe(t, n))))
          : (a !== Gr && ((e = Error(O(423), { cause: a })), Vi(Qe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (l &= -l),
            (t.lanes |= l),
            (a = Qe(a, n)),
            (l = Pr(t.stateNode, a, l)),
            ur(t, l),
            Nt !== 4 && (Nt = 2)),
        !1
      );
    var i = Error(O(520), { cause: a });
    if (
      ((i = Qe(i, n)),
      Bi === null ? (Bi = [i]) : Bi.push(i),
      Nt !== 4 && (Nt = 2),
      e === null)
    )
      return !0;
    ((a = Qe(a, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = l & -l),
            (n.lanes |= t),
            (t = Pr(n.stateNode, a, t)),
            ur(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (i = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (va === null || !va.has(i)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = dg(l)),
              pg(l, t, n, a),
              ur(n, l),
              !1
            );
          break;
        case 22:
          if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var pf = Error(O(461)),
    Dt = !1;
  function Rt(t, e, n, a) {
    e.child = t === null ? Mm(e, null, n, a) : Ja(e, t.child, n, a);
  }
  function H0(t, e, n, a, l) {
    n = n.render;
    var i = e.ref;
    if ("ref" in a) {
      var u = {};
      for (var o in a) o !== "ref" && (u[o] = a[o]);
    } else u = a;
    return (
      Za(e),
      (a = ef(t, e, n, u, i, l)),
      (o = nf()),
      t !== null && !Dt
        ? (af(t, e, l), Yn(t, e, l))
        : (V && o && Po(e), (e.flags |= 1), Rt(t, e, a, l), e.child)
    );
  }
  function j0(t, e, n, a, l) {
    if (t === null) {
      var i = n.type;
      return typeof i == "function" &&
        !Zs(i) &&
        i.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = i), mg(t, e, i, a, l))
        : ((t = eo(n.type, null, a, e, e.mode, l)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !gf(t, l))) {
      var u = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Xi), n(u, a) && t.ref === e.ref)
      )
        return Yn(t, e, l);
    }
    return (
      (e.flags |= 1),
      (t = Rn(i, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function mg(t, e, n, a, l) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Xi(i, a) && t.ref === e.ref)
        if (((Dt = !1), (e.pendingProps = a = i), gf(t, l)))
          (t.flags & 131072) !== 0 && (Dt = !0);
        else return ((e.lanes = t.lanes), Yn(t, e, l));
    }
    return ts(t, e, n, a, l);
  }
  function gg(t, e, n, a) {
    var l = a.children,
      i = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, l = 0; a !== null;)
            ((l = l | a.lanes | a.childLanes), (a = a.sibling));
          a = l & ~i;
        } else ((a = 0), (e.child = null));
        return B0(t, e, i, n, a);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ao(e, i !== null ? i.cachePool : null),
          i !== null ? T0(e, i) : Kr(),
          Cm(e));
      else
        return (
          (a = e.lanes = 536870912),
          B0(t, e, i !== null ? i.baseLanes | n : n, n, a)
        );
    } else
      i !== null
        ? (ao(e, i.cachePool), T0(e, i), ba(), (e.memoizedState = null))
        : (t !== null && ao(e, null), Kr(), ba());
    return (Rt(t, e, l, n), e.child);
  }
  function Ui(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function B0(t, e, n, a, l) {
    var i = $s();
    return (
      (i = i === null ? null : { parent: kt._currentValue, pool: i }),
      (e.memoizedState = { baseLanes: n, cachePool: i }),
      t !== null && ao(e, null),
      Kr(),
      Cm(e),
      t !== null && Va(t, e, a, !0),
      (e.childLanes = l),
      null
    );
  }
  function uo(t, e) {
    return (
      (e = ic({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function q0(t, e, n) {
    return (
      Ja(e, t.child, null, n),
      (t = uo(e, e.pendingProps)),
      (t.flags |= 2),
      Se(e),
      (e.memoizedState = null),
      t
    );
  }
  function $v(t, e, n) {
    var a = e.pendingProps,
      l = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (V) {
        if (a.mode === "hidden")
          return (
            (t = uo(e, a)),
            (e.lanes = 536870912),
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
            Ui(null, t)
          );
        if (
          (Jr(e),
          (t = pt)
            ? ((t = gh(t, Ve)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Na !== null ? { id: vn, overflow: yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = xm(t)),
                (n.return = e),
                (e.child = n),
                (Gt = e),
                (pt = null)))
            : (t = null),
          t === null)
        )
          throw wa(e);
        return ((e.lanes = 536870912), null);
      }
      return uo(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if ((Jr(e), l))
        if (e.flags & 256) ((e.flags &= -257), (e = q0(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(O(558));
      else if (
        (Dt || Va(t, e, n, !1), (l = (n & t.childLanes) !== 0), Dt || l)
      ) {
        if (za.current === null) {
          if (
            ((a = ct),
            a !== null && ((u = Vp(a, n)), u !== 0 && u !== i.retryLane))
          )
            throw ((i.retryLane = u), el(t, u), pe(a, t, u), pf);
          Go();
        }
        e = q0(t, e, n);
      } else
        ((t = i.treeContext),
          (pt = Ze(u.nextSibling)),
          (Gt = e),
          (V = !0),
          (pa = null),
          (Ve = !1),
          t !== null && Nm(e, t),
          (e = uo(e, a)),
          (e.flags |= 134221824));
      return e;
    }
    return (
      (t = Rn(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function dl(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(O(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function ts(t, e, n, a, l) {
    return (
      Za(e),
      (n = ef(t, e, n, a, void 0, l)),
      (a = nf()),
      t !== null && !Dt
        ? (af(t, e, l), Yn(t, e, l))
        : (V && a && Po(e), (e.flags |= 1), Rt(t, e, n, l), e.child)
    );
  }
  function Y0(t, e, n, a, l, i) {
    return (
      Za(e),
      (e.updateQueue = null),
      (n = Dm(e, a, n, l)),
      km(t),
      (a = nf()),
      t !== null && !Dt
        ? (af(t, e, i), Yn(t, e, i))
        : (V && a && Po(e), (e.flags |= 1), Rt(t, e, n, i), e.child)
    );
  }
  function G0(t, e, n, a, l) {
    if ((Za(e), e.stateNode === null)) {
      var i = wl,
        u = n.contextType;
      (typeof u == "object" && u !== null && (i = Vt(u)),
        (i = new n(a, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Ir),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = a),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Fs(e),
        (u = n.contextType),
        (i.context = typeof u == "object" && u !== null ? Vt(u) : wl),
        (i.state = e.memoizedState),
        (u = n.getDerivedStateFromProps),
        typeof u == "function" && (cr(e, n, u, a), (i.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((u = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          u !== i.state && Ir.enqueueReplaceState(i, i.state, null),
          _i(e, a, i, l),
          Di(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      i = e.stateNode;
      var o = e.memoizedProps,
        c = Wa(n, o);
      i.props = c;
      var r = i.context,
        s = n.contextType;
      ((u = wl), typeof s == "object" && s !== null && (u = Vt(s)));
      var f = n.getDerivedStateFromProps;
      ((s =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (o = e.pendingProps !== o),
        s ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((o || r !== u) && R0(e, i, a, u)),
        (la = !1));
      var g = e.memoizedState;
      ((i.state = g),
        _i(e, a, i, l),
        Di(),
        (r = e.memoizedState),
        o || g !== r || la
          ? (typeof f == "function" && (cr(e, n, f, a), (r = e.memoizedState)),
            (c = la || _0(e, n, c, a, g, r, u))
              ? (s ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = r)),
            (i.props = a),
            (i.state = r),
            (i.context = u),
            (a = c))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((i = e.stateNode),
        Vr(t, e),
        (u = e.memoizedProps),
        (s = Wa(n, u)),
        (i.props = s),
        (f = e.pendingProps),
        (g = i.context),
        (r = n.contextType),
        (c = wl),
        typeof r == "object" && r !== null && (c = Vt(r)),
        (o = n.getDerivedStateFromProps),
        (r =
          typeof o == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((u !== f || g !== c) && R0(e, i, a, c)),
        (la = !1),
        (g = e.memoizedState),
        (i.state = g),
        _i(e, a, i, l),
        Di());
      var b = e.memoizedState;
      u !== f ||
      g !== b ||
      la ||
      (t !== null && t.dependencies !== null && To(t.dependencies))
        ? (typeof o == "function" && (cr(e, n, o, a), (b = e.memoizedState)),
          (s =
            la ||
            _0(e, n, s, a, g, b, c) ||
            (t !== null && t.dependencies !== null && To(t.dependencies)))
            ? (r ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, b, c),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, b, c)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === t.memoizedProps && g === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === t.memoizedProps && g === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = b)),
          (i.props = a),
          (i.state = b),
          (i.context = c),
          (a = s))
        : (typeof i.componentDidUpdate != "function" ||
            (u === t.memoizedProps && g === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === t.memoizedProps && g === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      dl(t, e),
      (a = (e.flags & 128) !== 0),
      i || a
        ? ((i = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Ja(e, t.child, null, l)),
              (e.child = Ja(e, null, n, l)))
            : Rt(t, e, n, l),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = Yn(t, e, l)),
      t
    );
  }
  function L0(t, e, n, a) {
    return (Qa(), (e.flags |= 256), Rt(t, e, n, a), e.child);
  }
  var es = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ns(t) {
    return { baseLanes: t, cachePool: zm() };
  }
  function as(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= we), t);
  }
  function hg(t, e, n) {
    var a = e.pendingProps,
      l = !1,
      i = (e.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u =
          t !== null && t.memoizedState === null ? !1 : (Kt.current & 2) !== 0),
      u && ((l = !0), (e.flags &= -129)),
      (u = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (V) {
        if (
          (l ? ha(e) : ba(),
          (t = pt)
            ? ((t = gh(t, Ve)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Na !== null ? { id: vn, overflow: yn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = xm(t)),
                (n.return = e),
                (e.child = n),
                (Gt = e),
                (pt = null)))
            : (t = null),
          t === null)
        )
          throw wa(e);
        return (Mf(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      return (
        (i = a.children),
        (a = a.fallback),
        l
          ? (ba(),
            (l = e.mode),
            (i = ic({ mode: "hidden", children: i }, l)),
            (a = Ya(a, l, n, null)),
            (i.return = e),
            (a.return = e),
            (i.sibling = a),
            (e.child = i),
            (a = e.child),
            (a.memoizedState = ns(n)),
            (a.childLanes = as(t, u, n)),
            (e.memoizedState = es),
            Ui(null, a))
          : (ha(e), mf(e, i))
      );
    }
    var o = t.memoizedState;
    if (o !== null) {
      var c = o.dehydrated;
      if (c !== null) return Wv(t, e, i, u, a, c, o, n);
    }
    return l
      ? (ba(),
        (l = a.fallback),
        (i = e.mode),
        (o = t.child),
        (c = o.sibling),
        (a = Rn(o, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = o.subtreeFlags & 1206910976),
        c !== null ? (l = Rn(c, l)) : ((l = Ya(l, i, n, null)), (l.flags |= 2)),
        (l.return = e),
        (a.return = e),
        (a.sibling = l),
        (e.child = a),
        Ui(null, a),
        (a = e.child),
        (l = t.child.memoizedState),
        l === null
          ? (l = ns(n))
          : ((i = l.cachePool),
            i !== null
              ? ((o = kt._currentValue),
                (i = i.parent !== o ? { parent: o, pool: o } : i))
              : (i = zm()),
            (l = { baseLanes: l.baseLanes | n, cachePool: i })),
        (a.memoizedState = l),
        (a.childLanes = as(t, u, n)),
        (e.memoizedState = es),
        Ui(t.child, a))
      : (ha(e),
        (n = t.child),
        (t = n.sibling),
        (n = Rn(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((u = e.deletions),
          u === null ? ((e.deletions = [t]), (e.flags |= 16)) : u.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function mf(t, e) {
    return (
      (e = ic({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ic(t, e) {
    return ((t = de(22, t, null, e)), (t.lanes = 0), t);
  }
  function Gu(t, e, n) {
    return (
      Ja(e, t.child, null, n),
      (t = mf(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Wv(t, e, n, a, l, i, u, o) {
    if (n)
      return e.flags & 256
        ? (ha(e), (e.flags &= -257), Gu(t, e, o))
        : e.memoizedState !== null
          ? (ba(), (e.child = t.child), (e.flags |= 128), null)
          : (ba(),
            (i = l.fallback),
            (u = e.mode),
            (l = ic({ mode: "visible", children: l.children }, u)),
            (i = Ya(i, u, o, null)),
            (i.flags |= 2),
            (l.return = e),
            (i.return = e),
            (l.sibling = i),
            (e.child = l),
            Ja(e, t.child, null, o),
            (l = e.child),
            (l.memoizedState = ns(o)),
            (l.childLanes = as(t, a, o)),
            (e.memoizedState = es),
            Ui(null, l));
    if ((ha(e), Mf(i))) {
      if (((a = i.nextSibling && i.nextSibling.dataset), a)) var c = a.dgst;
      return (
        (a = c),
        a !== "" &&
          ((l = Error(O(419))),
          (l.stack = ""),
          (l.digest = a),
          Vi({ value: l, source: null, stack: null })),
        Gu(t, e, o)
      );
    }
    if ((Dt || Va(t, e, o, !1), (a = (o & t.childLanes) !== 0), Dt || a)) {
      if (za.current !== null) return Gu(t, e, o);
      if (
        ((a = ct), a !== null && ((l = Vp(a, o)), l !== 0 && l !== u.retryLane))
      )
        throw ((u.retryLane = l), el(t, l), pe(a, t, l), pf);
      return (Os(i) || Go(), Gu(t, e, o));
    }
    return Os(i)
      ? ((e.flags |= 192), (e.child = t.child), null)
      : ((t = u.treeContext),
        (pt = Ze(i.nextSibling)),
        (Gt = e),
        (V = !0),
        (pa = null),
        (Ve = !1),
        t !== null && Nm(e, t),
        (e = mf(e, l.children)),
        (e.flags |= 134221824),
        e);
  }
  function X0(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), no(t.return, e, n));
  }
  function Q0(t) {
    for (var e = null; t !== null;) {
      var n = t.alternate;
      (n !== null && Ao(n) === null && (e = t), (t = t.sibling));
    }
    return e;
  }
  function Lu(t, e, n, a, l, i) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
          treeForkCount: i,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = n),
        (u.tailMode = l),
        (u.treeForkCount = i));
  }
  function rr(t) {
    var e = t.child;
    for (t.child = null; e !== null;) {
      var n = e.sibling;
      ((e.sibling = t.child), (t.child = e), (e = n));
    }
  }
  function ls(t, e, n) {
    var a = e.pendingProps,
      l = a.revealOrder,
      i = a.tail;
    a = a.children;
    var u = Kt.current;
    if (e.flags & 128) return (Ki(e, u), null);
    var o = (u & 2) !== 0;
    if (
      (o ? ((u = (u & 1) | 2), (e.flags |= 128)) : (u &= 1),
      Ki(e, u),
      l === "backwards" && t !== null
        ? (rr(t), Rt(t, e, a, n), rr(t))
        : Rt(t, e, a, n),
      (a = V ? Qi : 0),
      !o && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && X0(t, n, e);
        else if (t.tag === 19) X0(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (l) {
      case "backwards":
        ((n = Q0(e.child)),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null), rr(e)),
          Lu(e, !0, l, null, i, a));
        break;
      case "unstable_legacy-backwards":
        for (n = null, l = e.child, e.child = null; l !== null;) {
          if (((t = l.alternate), t !== null && Ao(t) === null)) {
            e.child = l;
            break;
          }
          ((t = l.sibling), (l.sibling = n), (n = l), (l = t));
        }
        Lu(e, !0, n, null, i, a);
        break;
      case "together":
        Lu(e, !1, null, null, void 0, a);
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        ((n = Q0(e.child)),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Lu(e, !1, l, n, i, a));
    }
    return e.child;
  }
  function V0(t, e, n) {
    var a = e.pendingProps;
    return (ca(e, e.type, a.value), Rt(t, e, a.children, n), e.child);
  }
  function Yn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Ta |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Va(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(O(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Rn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = Rn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function gf(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && To(t)));
  }
  function Fv(t, e, n) {
    switch (e.tag) {
      case 3:
        (vo(e, e.stateNode.containerInfo),
          ca(e, kt, t.memoizedState.cache),
          Qa());
        break;
      case 27:
      case 5:
        kr(e);
        break;
      case 4:
        vo(e, e.stateNode.containerInfo);
        break;
      case 10:
        ca(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Jr(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (ha(e), (e.flags |= 128), null);
          a = Va(t, e, n, !1);
          var l = e.child.childLanes;
          return a || (n & l) !== 0
            ? hg(t, e, n)
            : (ha(e), (t = Yn(t, e, n)), t !== null ? t.sibling : null);
        }
        ha(e);
        break;
      case 19:
        if (e.flags & 128) return ls(t, e, n);
        if (
          ((l = (t.flags & 128) !== 0),
          (a = (n & e.childLanes) !== 0),
          a || (Va(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          l)
        ) {
          if (a) return ls(t, e, n);
          e.flags |= 128;
        }
        if (
          ((l = e.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Ki(e, Kt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), gg(t, e, n, e.pendingProps));
      case 24:
        ca(e, kt, t.memoizedState.cache);
    }
    return Yn(t, e, n);
  }
  function bg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Dt = !0;
      else {
        if (!gf(t, n) && (e.flags & 128) === 0) return ((Dt = !1), Fv(t, e, n));
        Dt = (t.flags & 131072) !== 0;
      }
    else ((Dt = !1), V && (e.flags & 1048576) !== 0 && Sm(e, Qi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Ua(e.elementType)), (e.type = t), typeof t == "function"))
            Zs(t)
              ? ((a = Wa(t, a)), (e.tag = 1), (e = G0(null, e, t, a, n)))
              : ((e.tag = 0), (e = ts(null, e, t, a, n)));
          else {
            if (t != null) {
              var l = t.$$typeof;
              if (l === _s) {
                ((e.tag = 11), (e = H0(null, e, t, a, n)));
                break t;
              } else if (l === Rs) {
                ((e.tag = 14), (e = j0(null, e, t, a, n)));
                break t;
              } else if (l === hn) {
                ((e.tag = 10), (e.type = t), (e = V0(null, e, n)));
                break t;
              }
            }
            throw ((e = Ar(t) || t), Error(O(306, e, "")));
          }
        }
        return e;
      case 0:
        return ts(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((a = e.type), (l = Wa(a, e.pendingProps)), G0(t, e, a, l, n));
      case 3:
        t: {
          if ((vo(e, e.stateNode.containerInfo), t === null))
            throw Error(O(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          ((l = i.element), Vr(t, e), _i(e, a, null, n));
          var u = e.memoizedState;
          if (
            ((a = u.cache),
            ca(e, kt, a),
            a !== i.cache && Xr(e, [kt], n, !0),
            Di(),
            (a = u.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: u.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = L0(t, e, a, n);
              break t;
            } else if (a !== l) {
              ((l = Qe(Error(O(424)), e)), Vi(l), (e = L0(t, e, a, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  pt = Ze(t.firstChild),
                  Gt = e,
                  V = !0,
                  pa = null,
                  Ve = !0,
                  n = Mm(e, null, a, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
          else {
            if ((Qa(), a === l)) {
              e = Yn(t, e, n);
              break t;
            }
            Rt(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          dl(t, e),
          t === null
            ? (n = vp(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : V || (e.stateNode = uh(e.type, e.pendingProps, da.current, e))
            : (e.memoizedState = vp(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          kr(e),
          t === null &&
            V &&
            ((a = e.stateNode = hh(e.type, e.pendingProps, da.current)),
            (Gt = e),
            (Ve = !0),
            (l = pt),
            Oa(e.type) ? ((As = l), (pt = Ze(a.firstChild))) : (pt = l)),
          Rt(t, e, e.pendingProps.children, n),
          dl(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            V &&
            ((l = a = pt) &&
              ((a = Xy(a, e.type, e.pendingProps, Ve)),
              a !== null
                ? ((e.stateNode = a),
                  (Gt = e),
                  (pt = Ze(a.firstChild)),
                  (Ve = !1),
                  (l = !0))
                : (l = !1)),
            l || wa(e)),
          kr(e),
          (l = e.type),
          (i = e.pendingProps),
          (u = t !== null ? t.memoizedProps : null),
          (a = i.children),
          Es(l, i) ? (a = null) : u !== null && Es(l, u) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((l = ef(t, e, Yv, null, null, n)), (Kl._currentValue = l)),
          dl(t, e),
          Rt(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            V &&
            ((t = n = pt) &&
              ((n = Qy(n, e.pendingProps, Ve)),
              n !== null
                ? ((e.stateNode = n), (Gt = e), (pt = null), (t = !0))
                : (t = !1)),
            t || wa(e)),
          null
        );
      case 13:
        return hg(t, e, n);
      case 4:
        return (
          vo(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Ja(e, null, a, n)) : Rt(t, e, a, n),
          e.child
        );
      case 11:
        return H0(t, e, e.type, e.pendingProps, n);
      case 7:
        return ((a = e.pendingProps), dl(t, e), Rt(t, e, a, n), e.child);
      case 8:
        return (Rt(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (Rt(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return V0(t, e, n);
      case 9:
        return (
          (l = e.type._context),
          (a = e.pendingProps.children),
          Za(e),
          (l = Vt(l)),
          (a = a(l)),
          (e.flags |= 1),
          Rt(t, e, a, n),
          e.child
        );
      case 14:
        return j0(t, e, e.type, e.pendingProps, n);
      case 15:
        return mg(t, e, e.type, e.pendingProps, n);
      case 19:
        return ls(t, e, n);
      case 31:
        return $v(t, e, n);
      case 22:
        return gg(t, e, n, e.pendingProps);
      case 24:
        return (
          Za(e),
          (a = Vt(kt)),
          t === null
            ? ((l = $s()),
              l === null &&
                ((l = ct),
                (i = Js()),
                (l.pooledCache = i),
                i.refCount++,
                i !== null && (l.pooledCacheLanes |= n),
                (l = i)),
              (e.memoizedState = { parent: a, cache: l }),
              Fs(e),
              ca(e, kt, l))
            : ((t.lanes & n) !== 0 && (Vr(t, e), _i(e, null, null, n), Di()),
              (l = t.memoizedState),
              (i = e.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (e.memoizedState = l),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = l),
                  ca(e, kt, a))
                : ((a = i.cache),
                  ca(e, kt, a),
                  a !== l.cache && Xr(e, [kt], n, !0))),
          Rt(t, e, e.pendingProps.children, n),
          e.child
        );
      case 30:
        return (
          e.stateNode === null &&
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = e.pendingProps),
          a.name != null && a.name !== "auto"
            ? (e.flags |= t === null ? 18882560 : 18874368)
            : V && Po(e),
          t !== null && t.memoizedProps.name !== a.name
            ? (e.flags |= 4194816)
            : dl(t, e),
          Rt(t, e, a.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(O(156, e.tag));
  }
  function kn(t) {
    t.flags |= 4;
  }
  function sr(t, e, n, a, l) {
    var i;
    if (
      ((i = (t.mode & 32) !== 0) &&
        (i =
          n === null
            ? Sp(e, a)
            : Sp(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)),
      i)
    ) {
      if (((t.flags |= 16777216), (l & 335544128) === l))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Zg()) t.flags |= 8192;
        else throw ((La = Mo), Ws);
    } else t.flags &= -16777217;
  }
  function Z0(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !xh(e)))
      if (Zg()) t.flags |= 8192;
      else throw ((La = Mo), Ws);
  }
  function Xu(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Lp() : 536870912), (t.lanes |= e), (Gl |= e)));
  }
  function vi(t, e) {
    if (!V)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, a = null; n !== null;)
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (e = t.tail, n = null; e !== null;)
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
      }
  }
  function dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var l = t.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 1206910976),
          (a |= l.flags & 1206910976),
          (l.return = t),
          (l = l.sibling));
    else
      for (l = t.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = t),
          (l = l.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = n), e);
  }
  function Iv(t, e, n) {
    var a = e.pendingProps;
    switch ((Ks(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (dt(e), null);
      case 1:
        return (dt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Un(kt),
          jl(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (sl(e)
              ? kn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ir())),
          dt(e),
          null
        );
      case 26:
        var l = e.type,
          i = e.memoizedState;
        return (
          t === null
            ? (kn(e),
              i !== null ? (dt(e), Z0(e, i)) : (dt(e), sr(e, l, null, a, n)))
            : i
              ? i !== t.memoizedState
                ? (kn(e), dt(e), Z0(e, i))
                : (dt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && kn(e),
                dt(e),
                sr(e, l, t, a, n)),
          null
        );
      case 27:
        if (
          (yo(e),
          (n = da.current),
          (l = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && kn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(O(166));
            return (dt(e), (e.subtreeFlags &= -33554433), null);
          }
          ((t = xn.current),
            sl(e) ? y0(e, t) : ((t = hh(l, a, n)), (e.stateNode = t), kn(e)));
        }
        return (dt(e), (e.subtreeFlags &= -33554433), null);
      case 5:
        if ((yo(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && kn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(O(166));
            return (dt(e), (e.subtreeFlags &= -33554433), null);
          }
          if (((i = xn.current), sl(e))) y0(e, i);
          else {
            var u = Fi(da.current);
            switch (i) {
              case 1:
                i = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                i = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    i = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((i = u.createElement("div")),
                      (i.innerHTML = "<script><\/script>"),
                      (i = i.removeChild(i.firstChild)));
                    break;
                  case "select":
                    ((i =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size));
                    break;
                  default:
                    i =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            ((i[Qt] = e), (i[ge] = a));
            t: for (u = e.child; u !== null;) {
              if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null;) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            e.stateNode = i;
            t: switch ((Jt(i, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && kn(e);
          }
        }
        return (
          dt(e),
          (e.subtreeFlags &= -33554433),
          sr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && kn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(O(166));
          if (((t = da.current), sl(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (l = Gt),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((t[Qt] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                lh(t.nodeValue, n)
              )),
              t || wa(e, !0));
          } else
            ((t = Fi(t).createTextNode(a)), (t[Qt] = e), (e.stateNode = t));
        }
        return (dt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = sl(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(O(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(O(557));
              t[Qt] = e;
            } else
              (Qa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (dt(e), (t = !1));
          } else
            ((n = ir()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Se(e), e) : (Se(e), null);
          if ((e.flags & 128) !== 0) throw Error(O(558));
        }
        return (dt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((l = sl(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(O(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(O(317));
              l[Qt] = e;
            } else
              (Qa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (dt(e), (l = !1));
          } else
            ((l = ir()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return e.flags & 256 ? (Se(e), e) : (Se(e), null);
        }
        return (
          Se(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (l = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (l = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== l && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Xu(e, e.updateQueue),
              dt(e),
              null)
        );
      case 4:
        return (
          jl(),
          t === null && zf(e.stateNode.containerInfo),
          (e.flags |= 67108864),
          dt(e),
          null
        );
      case 10:
        return (Un(e.type), dt(e), null);
      case 19:
        if ((Ps(e), (a = e.memoizedState), a === null)) return (dt(e), null);
        if (((l = (e.flags & 128) !== 0), (i = a.rendering), i === null))
          if (l) vi(a, !1);
          else {
            if (Nt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((i = Ao(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      vi(a, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      Xu(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (ym(n, t), (n = n.sibling));
                  return (
                    Ki(e, (Kt.current & 1) | 2),
                    V && Dn(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ze() > qo &&
              ((e.flags |= 128), (l = !0), vi(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = Ao(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Xu(e, t),
                vi(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !i.alternate &&
                  !V)
              )
                return (dt(e), null);
            } else
              2 * ze() - a.renderingStartTime > qo &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), vi(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = a.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (a.last = i));
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (n = t; n !== null;) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return (
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ze()),
            (t.sibling = null),
            (i = Kt.current),
            (i = l ? (i & 1) | 2 : i & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !n || V
              ? Ki(e, i)
              : ((n = i), mt($t, e), mt(Kt, n), te === null && (te = e)),
            V && Dn(e, a.treeForkCount),
            t
          );
        }
        return (dt(e), null);
      case 22:
      case 23:
        return (
          Se(e),
          Is(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : dt(e),
          (n = e.updateQueue),
          n !== null && Xu(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && Zt(Ga),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Un(kt),
          dt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return ((e.flags |= 33554432), dt(e), null);
    }
    throw Error(O(156, e.tag));
  }
  function Pv(t, e) {
    switch ((Ks(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Un(kt),
          jl(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (yo(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Se(e), e.alternate === null)) throw Error(O(340));
          Qa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Se(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(O(340));
          Qa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (
          Ps(e),
          (t = e.flags),
          t & 65536
            ? ((e.flags = (t & -65537) | 128),
              (t = e.memoizedState),
              t !== null && ((t.rendering = null), (t.tail = null)),
              (e.flags |= 4),
              e)
            : null
        );
      case 4:
        return (jl(), null);
      case 10:
        return (Un(e.type), null);
      case 22:
      case 23:
        return (
          Se(e),
          Is(),
          t !== null && Zt(Ga),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Un(kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function vg(t, e) {
    switch ((Ks(e), e.tag)) {
      case 3:
        (Un(kt), jl());
        break;
      case 26:
      case 27:
      case 5:
        yo(e);
        break;
      case 4:
        jl();
        break;
      case 31:
        e.memoizedState !== null && Se(e);
        break;
      case 13:
        Se(e);
        break;
      case 19:
        Ps(e);
        break;
      case 10:
        Un(e.type);
        break;
      case 22:
      case 23:
        (Se(e), Is(), t !== null && Zt(Ga));
        break;
      case 24:
        Un(kt);
    }
  }
  function su(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var i = n.create,
              u = n.inst;
            ((a = i()), (u.destroy = a));
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (o) {
      it(e, e.return, o);
    }
  }
  function Ea(t, e, n) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var u = a.inst,
              o = u.destroy;
            if (o !== void 0) {
              ((u.destroy = void 0), (l = e));
              var c = n,
                r = o;
              try {
                r();
              } catch (s) {
                it(l, c, s);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (s) {
      it(e, e.return, s);
    }
  }
  function yg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Am(e, n);
      } catch (a) {
        it(t, t.return, a);
      }
    }
  }
  function xg(t, e, n) {
    ((n.props = Wa(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      it(t, e, a);
    }
  }
  function mn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var l = t.stateNode,
              i = jn(t.memoizedProps, l);
            ((l.ref === null || l.ref.name !== i) && (l.ref = sh(i)),
              (a = l.ref));
            break;
          case 7:
            if (t.stateNode === null) {
              var u = new Ae(t);
              (me(t.child, !1, Gy, u, void 0, void 0), (t.stateNode = u));
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (o) {
      it(t, e, o);
    }
  }
  function Xt(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          it(t, e, l);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          it(t, e, l);
        }
      else n.current = null;
  }
  function Ro(t, e) {
    if (
      (t.tag === 5 || t.tag === 27 || t.tag === 6) &&
      t.alternate === null &&
      e !== null
    )
      for (var n = 0; n < e.length; n++) mh(t.stateNode, e[n]);
  }
  function K0(t) {
    for (
      var e = t.return;
      e !== null && (bf(e) && mh(t.stateNode, e.stateNode), !hf(e));
    )
      e = e.return;
  }
  function Hi(t) {
    for (
      var e = t.return;
      e !== null && (bf(e) && Ly(t.stateNode, e.stateNode), !hf(e));
    )
      e = e.return;
  }
  function hf(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function bf(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function is(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      it(t, t.return, l);
    }
  }
  function fr(t, e, n) {
    try {
      var a = t.stateNode;
      (wy(a, t.type, n, e), (a[ge] = e));
    } catch (l) {
      it(t, t.return, l);
    }
  }
  function Sg(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Oa(t.type)) ||
      t.tag === 4
    );
  }
  function dr(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Sg(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Oa(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function us(t, e, n, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((l = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(l, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(l),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = bn)),
        Ro(t, a),
        (P = !0));
    else if (
      l !== 4 &&
      (l === 27 &&
        (Ro(t, a), (a = null), Oa(t.type) && ((n = t.stateNode), (e = null))),
      (t = t.child),
      t !== null)
    )
      for (us(t, e, n, a), t = t.sibling; t !== null;)
        (us(t, e, n, a), (t = t.sibling));
  }
  function Uo(t, e, n, a) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((l = t.stateNode),
        e ? n.insertBefore(l, e) : n.appendChild(l),
        Ro(t, a),
        (P = !0));
    else if (
      l !== 4 &&
      (l === 27 && (Ro(t, a), (a = null), Oa(t.type) && (n = t.stateNode)),
      (t = t.child),
      t !== null)
    )
      for (Uo(t, e, n, a), t = t.sibling; t !== null;)
        (Uo(t, e, n, a), (t = t.sibling));
  }
  function Ng(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, l = e.attributes; l.length;)
        e.removeAttributeNode(l[0]);
      (Jt(e, a, n), (e[Qt] = t), (e[ge] = n));
    } catch (i) {
      it(t, t.return, i);
    }
  }
  var Ho = !1,
    Ne = null;
  function J0(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Ho = !0);
  }
  var gn = null;
  function $0() {
    var t = gn;
    return ((gn = null), t);
  }
  var fe = 0;
  function Pl(t, e, n, a, l) {
    return ((fe = 0), wg(t.child, e, n, a, l));
  }
  function wg(t, e, n, a, l) {
    for (var i = !1; t !== null;) {
      if (t.tag === 5) {
        var u = t.stateNode;
        if (a !== null) {
          var o = Ts(u);
          (a.push(o), o.view && (i = !0));
        } else i || (Ts(u).view && (i = !0));
        ((Ho = !0), oh(u, fe === 0 ? e : e + "_" + fe, n), fe++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          ((t.tag === 30 && l) || (wg(t.child, e, n, a, l) && (i = !0)));
      t = t.sibling;
    }
    return i;
  }
  function Nn(t, e) {
    for (; t !== null;)
      (t.tag === 5
        ? ch(t.stateNode, t.memoizedProps)
        : (t.tag !== 22 || t.memoizedState === null) &&
          ((t.tag === 30 && e) || Nn(t.child, e)),
        (t = t.sibling));
  }
  function oo(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null;) {
        if (
          (t.tag !== 22 || t.memoizedState === null) &&
          (oo(t),
          t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)
        ) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto") throw Error(O(544));
          var n = e.name;
          ((e = Xn(e.default, e.share)),
            e !== "none" && (Pl(t, n, e, null, !1) || Nn(t.child, !1)));
        }
        t = t.sibling;
      }
  }
  function os(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode,
        a = t.memoizedProps,
        l = jn(a, n),
        i = Xn(a.default, n.paired ? a.share : a.enter);
      i !== "none"
        ? Pl(t, l, i, null, !1)
          ? (oo(t), n.paired || e || Ll(t, a.onEnter))
          : Nn(t.child, !1)
        : oo(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (os(t, e), (t = t.sibling));
    else oo(t);
  }
  function cs(t) {
    if (Ne !== null && Ne.size !== 0) {
      var e = Ne;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null;) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps,
                a = n.name;
              if (a != null && a !== "auto") {
                var l = e.get(a);
                if (l !== void 0) {
                  var i = Xn(n.default, n.share);
                  if (
                    (i !== "none" &&
                      (Pl(t, a, i, null, !1)
                        ? ((i = t.stateNode),
                          (l.paired = i),
                          (i.paired = l),
                          Ll(t, n.onShare))
                        : Nn(t.child, !1)),
                    e.delete(a),
                    e.size === 0)
                  )
                    break;
                }
              }
            }
            cs(t);
          }
          t = t.sibling;
        }
    }
  }
  function rs(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps,
        n = jn(e, t.stateNode),
        a = Ne !== null ? Ne.get(n) : void 0,
        l = Xn(e.default, a !== void 0 ? e.share : e.exit);
      (l !== "none" &&
        (Pl(t, n, l, null, !1)
          ? a !== void 0
            ? ((l = t.stateNode),
              (a.paired = l),
              (l.paired = a),
              Ne.delete(n),
              Ll(t, e.onShare))
            : Ll(t, e.onExit)
          : Nn(t.child, !1)),
        Ne !== null && cs(t));
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (rs(t), (t = t.sibling));
    else Ne !== null && cs(t);
  }
  function zg(t) {
    for (t = t.child; t !== null;) {
      if (t.tag === 30) {
        var e = t.memoizedProps,
          n = jn(e, t.stateNode);
        ((e = Xn(e.default, e.update)),
          (t.flags &= -5),
          e !== "none" && Pl(t, n, e, (t.memoizedState = []), !1));
      } else (t.subtreeFlags & 33554432) !== 0 && zg(t);
      t = t.sibling;
    }
  }
  function ss(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null;) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && ((e.paired = null), Nn(t.child, !1));
          }
          ss(t);
        }
        t = t.sibling;
      }
  }
  function co(t) {
    if (t.tag === 30) ((t.stateNode.paired = null), Nn(t.child, !1), ss(t));
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null;) (co(t), (t = t.sibling));
    else ss(t);
  }
  function Eg(t) {
    for (t = t.child; t !== null;)
      (t.tag === 30
        ? Nn(t.child, !1)
        : (t.subtreeFlags & 33554432) !== 0 && Eg(t),
        (t = t.sibling));
  }
  function vf(t, e, n, a, l, i, u) {
    for (var o = !1; e !== null;) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (i !== null && fe < i.length) {
          var r = i[fe],
            s = Ts(c);
          (r.view || s.view) && (o = !0);
          var f;
          if ((f = (t.flags & 4) === 0))
            if (s.clip) f = !0;
            else {
              f = r.rect;
              var g = s.rect;
              f =
                f.y !== g.y ||
                f.x !== g.x ||
                f.height !== g.height ||
                f.width !== g.width;
            }
          (f && (t.flags |= 4),
            s.abs
              ? (s = !r.abs)
              : ((r = r.rect),
                (s = s.rect),
                (s = r.height !== s.height || r.width !== s.width)),
            s && (t.flags |= 32));
        } else t.flags |= 32;
        ((t.flags & 4) !== 0 && oh(c, fe === 0 ? n : n + "_" + fe, l),
          (o && (t.flags & 4) !== 0) ||
            (gn === null && (gn = []),
            gn.push(c, fe === 0 ? a : a + "_" + fe, e.memoizedProps)),
          fe++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          (e.tag === 30 && u
            ? (t.flags |= e.flags & 32)
            : vf(t, e.child, n, a, l, i, u) && (o = !0));
      e = e.sibling;
    }
    return o;
  }
  function Tg(t, e) {
    for (t = t.child; t !== null;) {
      if (t.tag === 30) {
        var n = t.memoizedProps,
          a = t.stateNode,
          l = jn(n, a),
          i = Xn(n.default, n.update);
        if (e) {
          a = a.clones;
          var u = a === null ? null : a.map(Ay);
        } else ((u = t.memoizedState), (t.memoizedState = null));
        a = t;
        var o = t.child;
        ((fe = 0),
          (l = vf(a, o, l, l, i, u, !1)),
          (t.flags & 4) !== 0 && l && (e || Ll(t, n.onUpdate)));
      } else (t.subtreeFlags & 33554432) !== 0 && Tg(t, e);
      t = t.sibling;
    }
  }
  var Bt = !1,
    nt = !1,
    fn = !1,
    pr = !1,
    W0 = typeof WeakSet == "function" ? WeakSet : Set,
    qt = null,
    dn = !1,
    Ti = !1,
    jo = !1,
    fs = !1;
  function ty(t, e, n) {
    if (((t = t.containerInfo), (ws = Jl), (t = fm(t)), Xs(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var i = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch (M) {
              a = null;
              break t;
            }
            var o = 0,
              c = -1,
              r = -1,
              s = 0,
              f = 0,
              g = t,
              b = null;
            e: for (;;) {
              for (
                var w;
                g !== a || (i !== 0 && g.nodeType !== 3) || (c = o + i),
                  g !== u || (l !== 0 && g.nodeType !== 3) || (r = o + l),
                  g.nodeType === 3 && (o += g.nodeValue.length),
                  (w = g.firstChild) !== null;
              )
                ((b = g), (g = w));
              for (;;) {
                if (g === t) break e;
                if (
                  (b === a && ++s === i && (c = o),
                  b === u && ++f === l && (r = o),
                  (w = g.nextSibling) !== null)
                )
                  break;
                ((g = b), (b = g.parentNode));
              }
              g = w;
            }
            a = c === -1 || r === -1 ? null : { start: c, end: r };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      zs = { focusedElem: t, selectionRange: a },
        Jl = !1,
        n = (n & 335544064) === n,
        qt = e,
        e = n ? 9270 : 1024;
      qt !== null;
    ) {
      if (((t = qt), n && ((a = t.deletions), a !== null)))
        for (i = 0; i < a.length; i++) n && rs(a[i]);
      if (t.alternate === null && (t.flags & 2) !== 0) (n && J0(t), Qu(n));
      else {
        if (t.tag === 22) {
          if (((a = t.alternate), t.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && n && rs(a), Qu(n));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (n && J0(t), Qu(n));
            continue;
          }
        }
        ((a = t.child),
          (t.subtreeFlags & e) !== 0 && a !== null
            ? ((a.return = t), (qt = a))
            : (n && zg(t), Qu(n)));
      }
    }
    Ne = null;
  }
  function Qu(t) {
    for (; qt !== null;) {
      var e = qt,
        n = t,
        a = e.alternate,
        l = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && a !== null) {
            ((n = void 0), (l = a.memoizedProps), (a = a.memoizedState));
            var i = e.stateNode;
            try {
              var u = Wa(e.type, l);
              ((n = i.getSnapshotBeforeUpdate(u, a)),
                (i.__reactInternalSnapshotBeforeUpdate = n));
            } catch (o) {
              it(e, e.return, o);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (((a = e.stateNode.containerInfo), (n = a.nodeType), n === 9))
              Ms(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Ms(a);
                  break;
                default:
                  a.textContent = "";
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
        case 30:
          n &&
            a !== null &&
            ((n = jn(a.memoizedProps, a.stateNode)),
            (l = e.memoizedProps),
            (l = Xn(l.default, l.update)),
            l !== "none" && Pl(a, n, l, (a.memoizedState = []), !0));
          break;
        default:
          if ((l & 1024) !== 0) throw Error(O(163));
      }
      if (((a = e.sibling), a !== null)) {
        ((a.return = e.return), (qt = a));
        break;
      }
      qt = e.return;
    }
  }
  function Mg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (pn(t, n), a & 4 && su(5, n));
        break;
      case 1:
        if ((pn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (u) {
              it(n, n.return, u);
            }
          else {
            var l = Wa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              it(n, n.return, u);
            }
          }
        (a & 64 && yg(n), a & 512 && mn(n, n.return));
        break;
      case 3:
        if ((pn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Am(t, e);
          } catch (u) {
            it(n, n.return, u);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ng(n);
      case 26:
      case 5:
        (pn(t, n), e === null && a & 4 && is(n), a & 512 && mn(n, n.return));
        break;
      case 12:
        pn(t, n);
        break;
      case 31:
        (pn(t, n), a & 4 && kg(t, n));
        break;
      case 13:
        (pn(t, n),
          a & 4 && Dg(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = dy.bind(null, n)), Vy(t, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Bt), !a)) {
          var i = (e !== null && e.memoizedState !== null) || nt;
          ((e = Bt),
            (l = nt),
            (Bt = a),
            (nt = i) && !l
              ? ((a = 2),
                (n.subtreeFlags & 8772) !== 0 && (a |= 1),
                Fe(t, n, a))
              : pn(t, n),
            (Bt = e),
            (nt = l));
        }
        break;
      case 30:
        (pn(t, n), a & 512 && mn(n, n.return));
        break;
      case 7:
        a & 512 && mn(n, n.return);
      default:
        pn(t, n);
    }
  }
  function ds(t, e) {
    for (t = t.child; t !== null;) (Og(t, e), (t = t.sibling));
  }
  function Og(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var l = t.stateNode,
              i = t.memoizedProps.style,
              u = i != null && i.hasOwnProperty("display") ? i.display : null;
            l.style.display =
              u == null || typeof u == "boolean" ? "" : ("" + u).trim();
          }
        } catch (c) {
          it(t, t.return, c);
        }
        ps(t, e);
        break;
      case 6:
        try {
          ((t.stateNode.nodeValue = e ? "" : t.memoizedProps), (P = !0));
        } catch (c) {
          it(t, t.return, c);
        }
        break;
      case 18:
        try {
          var o = t.stateNode;
          e ? dp(o, !0) : dp(t.stateNode, !1);
        } catch (c) {
          it(t, t.return, c);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && ds(t, e);
        break;
      default:
        ds(t, e);
    }
  }
  function ps(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null;) {
        t: {
          var n = t,
            a = e;
          switch (n.tag) {
            case 4:
              Og(n, a);
              break t;
            case 22:
              n.memoizedState === null && ps(n, a);
              break t;
            default:
              ps(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function Ag(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Ag(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Ko(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var vt = null,
    re = !1;
  function We(t, e, n) {
    for (n = n.child; n !== null;) (Cg(t, e, n), (n = n.sibling));
  }
  function Cg(t, e, n) {
    if (Ee && typeof Ee.onCommitFiberUnmount == "function")
      try {
        Ee.onCommitFiberUnmount(au, n);
      } catch (i) {}
    switch (n.tag) {
      case 26:
        (nt || Xt(n, e),
          We(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode &&
              !nt &&
              ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        (nt || Xt(n, e), Hi(n));
        var a = vt,
          l = re;
        (Oa(n.type) && ((vt = n.stateNode), (re = !1)),
          We(t, e, n),
          bh(n.stateNode, n.type, n.memoizedProps),
          (vt = a),
          (re = l));
        break;
      case 5:
        (nt || Xt(n, e), Hi(n));
      case 6:
        if (
          (n.tag === 6 && Hi(n),
          (a = vt),
          (l = re),
          (vt = null),
          We(t, e, n),
          (vt = a),
          (re = l),
          vt !== null)
        )
          if (re)
            try {
              ((vt.nodeType === 9
                ? vt.body
                : vt.nodeName === "HTML"
                  ? vt.ownerDocument.body
                  : vt
              ).removeChild(n.stateNode),
                (P = !0));
            } catch (i) {
              it(n, e, i);
            }
          else
            try {
              (vt.removeChild(n.stateNode), (P = !0));
            } catch (i) {
              it(n, e, i);
            }
        break;
      case 18:
        vt !== null &&
          (re
            ? ((t = vt),
              fp(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              $l(t))
            : fp(vt, n.stateNode));
        break;
      case 4:
        ((a = vt),
          (l = re),
          (vt = n.stateNode.containerInfo),
          (re = !0),
          We(t, e, n),
          (vt = a),
          (re = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Ea(2, n, e), nt || Ea(4, n, e), We(t, e, n));
        break;
      case 1:
        (nt ||
          (Xt(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && xg(n, e, a)),
          We(t, e, n));
        break;
      case 21:
        We(t, e, n);
        break;
      case 22:
        ((nt = (a = nt) || n.memoizedState !== null), We(t, e, n), (nt = a));
        break;
      case 30:
        (Xt(n, e), We(t, e, n));
        break;
      case 7:
        (nt || Xt(n, e), We(t, e, n));
        break;
      default:
        We(t, e, n);
    }
  }
  function kg(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        $l(t);
      } catch (n) {
        it(e, e.return, n);
      }
    }
  }
  function Dg(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        $l(t);
      } catch (n) {
        it(e, e.return, n);
      }
  }
  function ey(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new W0()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new W0()),
          e
        );
      default:
        throw Error(O(435, t.tag));
    }
  }
  function Vu(t, e) {
    var n = ey(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = py.bind(null, t, a);
        a.then(l, l);
      }
    });
  }
  function le(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l],
          u = t,
          o = e,
          c = o;
        t: for (; c !== null;) {
          switch (c.tag) {
            case 27:
              if (Oa(c.type)) {
                ((vt = c.stateNode), (re = !1));
                break t;
              }
              break;
            case 5:
              ((vt = c.stateNode), (re = !1));
              break t;
            case 3:
            case 4:
              ((vt = c.stateNode.containerInfo), (re = !0));
              break t;
          }
          c = c.return;
        }
        if (vt === null) throw Error(O(160));
        (Cg(u, o, i),
          (vt = null),
          (re = !1),
          (u = i.alternate),
          u !== null && (u.return = null),
          (i.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null;) (_g(e, t, n), (e = e.sibling));
  }
  var Ie = null;
  function _g(t, e, n) {
    var a = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          l & 4 &&
          ((a = t.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var i = 0; i < a.length; i++) {
            var u = a[i];
            u.ref.impl = u.nextImpl;
          }
        (le(e, t, n),
          ie(t),
          l & 4 && (Ea(3, t, t.return), su(3, t), Ea(5, t, t.return)));
        break;
      case 1:
        (le(e, t, n),
          ie(t),
          l & 512 && (nt || a === null || Xt(a, a.return)),
          l & 64 &&
            Bt &&
            ((t = t.updateQueue),
            t !== null &&
              ((e = t.callbacks),
              e !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? e : n.concat(e))))));
        break;
      case 26:
        if (
          ((i = Ie),
          le(e, t, n),
          ie(t),
          l & 512 && (nt || a === null || Xt(a, a.return)),
          l & 4)
        )
          if (
            ((l = a !== null ? a.memoizedState : null),
            (n = t.memoizedState),
            a === null)
          )
            if (n === null)
              if (t.stateNode === null)
                if (Bt)
                  t.stateNode = uh(t.type, t.memoizedProps, e.containerInfo, t);
                else {
                  t: {
                    ((e = t.type),
                      (n = t.memoizedProps),
                      (l = i.ownerDocument || i));
                    e: switch (e) {
                      case "title":
                        ((a = l.getElementsByTagName("title")[0]),
                          (!a ||
                            a[uu] ||
                            a[Qt] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = l.createElement(e)),
                            l.head.insertBefore(
                              a,
                              l.querySelector("head > title"),
                            )),
                          Jt(a, e, n),
                          (a[Qt] = t),
                          Yt(a),
                          (e = a));
                        break t;
                      case "link":
                        if (
                          (i = xp("link", "href", l).get(e + (n.href || "")))
                        ) {
                          for (u = 0; u < i.length; u++)
                            if (
                              ((a = i[u]),
                              a.getAttribute("href") ===
                                (n.href == null || n.href === ""
                                  ? null
                                  : n.href) &&
                                a.getAttribute("rel") ===
                                  (n.rel == null ? null : n.rel) &&
                                a.getAttribute("title") ===
                                  (n.title == null ? null : n.title) &&
                                a.getAttribute("crossorigin") ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              i.splice(u, 1);
                              break e;
                            }
                        }
                        ((a = l.createElement(e)),
                          Jt(a, e, n),
                          l.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (i = xp("meta", "content", l).get(
                            e + (n.content || ""),
                          ))
                        ) {
                          for (u = 0; u < i.length; u++)
                            if (
                              ((a = i[u]),
                              a.getAttribute("content") ===
                                (n.content == null ? null : "" + n.content) &&
                                a.getAttribute("name") ===
                                  (n.name == null ? null : n.name) &&
                                a.getAttribute("property") ===
                                  (n.property == null ? null : n.property) &&
                                a.getAttribute("http-equiv") ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              i.splice(u, 1);
                              break e;
                            }
                        }
                        ((a = l.createElement(e)),
                          Jt(a, e, n),
                          l.head.appendChild(a));
                        break;
                      default:
                        throw Error(O(468, e));
                    }
                    ((a[Qt] = t), Yt(a), (e = a));
                  }
                  t.stateNode = e;
                }
              else Bt || Cs(i, t.type, t.stateNode);
            else t.stateNode = yp(i, n, t.memoizedProps);
          else
            l !== n
              ? (l === null
                  ? ((e = a.stateNode),
                    e === null || nt || e.parentNode.removeChild(e))
                  : l.count--,
                n === null
                  ? Bt || Cs(i, t.type, t.stateNode)
                  : yp(i, n, t.memoizedProps))
              : n === null &&
                t.stateNode !== null &&
                fr(t, t.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (le(e, t, n),
          ie(t),
          l & 512 && (nt || a === null || Xt(a, a.return)),
          a !== null && l & 4 && fr(t, t.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((i = fn),
          (fn = !1),
          le(e, t, n),
          (fn = i),
          ie(t),
          l & 512 && (nt || a === null || Xt(a, a.return)),
          t.flags & 32)
        ) {
          e = t.stateNode;
          try {
            (ql(e, ""), (P = !0));
          } catch (s) {
            it(t, t.return, s);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((e = t.memoizedProps), fr(t, e, a !== null ? a.memoizedProps : e)),
          l & 1024 && (pr = !0));
        break;
      case 6:
        if ((le(e, t, n), ie(t), l & 4)) {
          if (t.stateNode === null) throw Error(O(162));
          ((e = t.memoizedProps), (n = t.stateNode));
          try {
            ((n.nodeValue = e), (P = !0));
          } catch (s) {
            it(t, t.return, s);
          }
        }
        break;
      case 3:
        if (
          ((P = !1),
          (po = null),
          (i = Ie),
          (Ie = Ii(e.containerInfo)),
          le(e, t, n),
          (Ie = i),
          ie(t),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            $l(e.containerInfo);
          } catch (s) {
            it(t, t.return, s);
          }
        (pr && ((pr = !1), Rg(t)), (P = !1));
        break;
      case 4:
        ((l = fn),
          (fn = Bt),
          (a = n0()),
          (i = Ie),
          (Ie = Ii(t.stateNode.containerInfo)),
          le(e, t, n),
          ie(t),
          (Ie = i),
          P && Ti && (jo = !0),
          (P = a),
          (fn = l));
        break;
      case 12:
        (le(e, t, n), ie(t));
        break;
      case 31:
        (le(e, t, n),
          ie(t),
          l & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Vu(t, e))));
        break;
      case 13:
        (le(e, t, n),
          ie(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (uc = ze()),
          l & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Vu(t, e))));
        break;
      case 22:
        ((i = t.memoizedState !== null),
          (u = a !== null && a.memoizedState !== null));
        var o = Bt,
          c = nt,
          r = fn;
        ((Bt = o || i),
          (fn = r || i),
          (nt = c || u),
          le(e, t, n),
          (nt = c),
          (fn = r),
          (Bt = o),
          ie(t),
          l & 8192 &&
            ((e = t.stateNode),
            (e._visibility = i ? e._visibility & -2 : e._visibility | 1),
            !i ||
              a === null ||
              u ||
              Bt ||
              nt ||
              ((e = u || nt),
              (n = Bt),
              (a = nt),
              (Bt = i || Bt),
              (nt = e),
              na(t, 2),
              (Bt = n),
              (nt = a)),
            (!i && fn) || ds(t, i)),
          l & 4 &&
            ((e = t.updateQueue),
            e !== null &&
              ((n = e.retryQueue),
              n !== null && ((e.retryQueue = null), Vu(t, n)))));
        break;
      case 19:
        (le(e, t, n),
          ie(t),
          l & 4 &&
            ((e = t.updateQueue),
            e !== null && ((t.updateQueue = null), Vu(t, e))));
        break;
      case 30:
        (l & 512 && (nt || a === null || Xt(a, a.return)),
          (l = n0()),
          (i = Ti),
          (u = (n & 335544064) === n),
          (o = t.memoizedProps),
          (Ti = u && Xn(o.default, o.update) !== "none"),
          le(e, t, n),
          ie(t),
          u && a !== null && P && (t.flags |= 4),
          (Ti = i),
          (P = l));
        break;
      case 21:
        break;
      case 7:
        (l & 512 && (nt || a === null || Xt(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = t));
      default:
        (le(e, t, n), ie(t));
    }
  }
  function ie(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null;) {
          if (Sg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = t.return; l !== null;) {
          if (bf(l)) {
            var i = l.stateNode;
            a === null ? (a = [i]) : a.push(i);
          }
          if (hf(l)) break;
          l = l.return;
        }
        var u = a;
        if (n == null) throw Error(O(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              c = dr(t);
            Uo(t, c, o, u);
            break;
          case 5:
            var r = n.stateNode;
            n.flags & 32 && (ql(r, ""), (n.flags &= -33));
            var s = dr(t);
            Uo(t, s, r, u);
            break;
          case 3:
          case 4:
            var f = n.stateNode.containerInfo,
              g = dr(t);
            us(t, g, f, u);
            break;
          default:
            throw Error(O(161));
        }
      } catch (b) {
        it(t, t.return, b);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Rg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (Rg(e),
          e.tag === 5 &&
            e.flags & 1024 &&
            ((e = e.stateNode), (Jl = !0), e.reset(), (Jl = !1)),
          (t = t.sibling));
      }
  }
  function fl(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null;) (Ug(e, t), (e = e.sibling));
    else Tg(e, !1);
  }
  function Ug(t, e) {
    var n = t.alternate;
    if (n === null) os(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (((fs = dn = !1), $0(), fl(e, t), !dn && !jo)) {
            if (((t = gn), t !== null))
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var l = t[a + 1];
                (ch(n, t[a + 2]),
                  (n = n.ownerDocument.documentElement),
                  n !== null &&
                    n.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + l + ")",
                      },
                    ));
              }
            ((t = e.containerInfo),
              (t =
                t.nodeType === 9
                  ? t.documentElement
                  : t.ownerDocument.documentElement),
              t !== null &&
                t.style.viewTransitionName === "" &&
                ((t.style.viewTransitionName = "none"),
                t.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                t.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (fs = !0));
          }
          gn = null;
          break;
        case 5:
          fl(e, t);
          break;
        case 4:
          ((a = dn), (dn = !1), fl(e, t), dn && (jo = !0), (dn = a));
          break;
        case 22:
          t.memoizedState === null &&
            (n.memoizedState !== null ? os(t, !1) : fl(e, t));
          break;
        case 30:
          ((a = dn), (l = $0()), (dn = !1), fl(e, t), dn && (t.flags |= 4));
          var i = t.memoizedProps,
            u = t.stateNode;
          ((e = jn(i, u)), (u = jn(n.memoizedProps, u)));
          var o = Xn(i.default, i.update);
          (o === "none"
            ? (e = !1)
            : ((i = n.memoizedState),
              (n.memoizedState = null),
              (n = t.child),
              (fe = 0),
              (e = vf(t, n, e, u, o, i, !0)),
              fe !== (i === null ? 0 : i.length) && (t.flags |= 32)),
            (t.flags & 4) !== 0 && e
              ? (Ll(t, t.memoizedProps.onUpdate), (gn = l))
              : l !== null && (l.push.apply(l, gn), (gn = l)),
            (dn = (t.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          fl(e, t);
      }
  }
  function pn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) (Mg(t, e.alternate, e), (e = e.sibling));
  }
  function na(t, e) {
    for (t = t.child; t !== null;) {
      var n = t,
        a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Ea(4, n, n.return), na(n, a));
          break;
        case 1:
          Xt(n, n.return);
          var l = n.stateNode;
          (typeof l.componentWillUnmount == "function" && xg(n, n.return, l),
            na(n, a));
          break;
        case 27:
          (a & 2) !== 0 && bh(n.stateNode, n.type, n.memoizedProps);
        case 5:
          (Xt(n, n.return), (n.tag !== 5 && n.tag !== 27) || Hi(n), na(n, a));
          break;
        case 6:
          Hi(n);
          break;
        case 26:
          (Xt(n, n.return),
            (l = n.stateNode),
            n.memoizedState !== null ||
              l === null ||
              nt ||
              l.parentNode.removeChild(l),
            na(n, a));
          break;
        case 22:
          n.memoizedState === null && na(n, a);
          break;
        case 30:
          (Xt(n, n.return), na(n, a));
          break;
        case 7:
          Xt(n, n.return);
        default:
          na(n, a);
      }
      t = t.sibling;
    }
  }
  function Fe(t, e, n) {
    for (
      n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child;
      e !== null;
    ) {
      var a = e.alternate,
        l = t,
        i = e,
        u = i.flags,
        o = (n & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Fe(l, i, n), su(4, i));
          break;
        case 1:
          if (
            (Fe(l, i, n),
            (a = i),
            (l = a.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (s) {
              it(a, a.return, s);
            }
          if (((a = i), (l = a.updateQueue), l !== null)) {
            var c = a.stateNode;
            try {
              var r = l.shared.hiddenCallbacks;
              if (r !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < r.length; l++)
                  Om(r[l], c);
            } catch (s) {
              it(a, a.return, s);
            }
          }
          (o && u & 64 && yg(i), mn(i, i.return));
          break;
        case 27:
          (n & 2) !== 0 && Ng(i);
        case 5:
          ((i.tag !== 5 && i.tag !== 27) || K0(i),
            Fe(l, i, n),
            o && a === null && u & 4 && is(i),
            mn(i, i.return));
          break;
        case 6:
          K0(i);
          break;
        case 26:
          ((c = i.stateNode),
            i.memoizedState !== null ||
              c === null ||
              Bt ||
              Cs(Ii(c.ownerDocument), i.type, c),
            Fe(l, i, n),
            o && a === null && u & 4 && is(i),
            mn(i, i.return));
          break;
        case 12:
          Fe(l, i, n);
          break;
        case 31:
          (Fe(l, i, n), o && u & 4 && kg(l, i));
          break;
        case 13:
          (Fe(l, i, n), o && u & 4 && Dg(l, i));
          break;
        case 22:
          (i.memoizedState === null && Fe(l, i, n), mn(i, i.return));
          break;
        case 30:
          (Fe(l, i, n), mn(i, i.return));
          break;
        case 7:
          mn(i, i.return);
        default:
          Fe(l, i, n);
      }
      e = e.sibling;
    }
  }
  function yf(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && cu(n)));
  }
  function xf(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && cu(t)));
  }
  function qe(t, e, n, a) {
    var l = (n & 335544064) === n;
    if (e.subtreeFlags & (l ? 10262 : 10256))
      for (e = e.child; e !== null;) (Hg(t, e, n, a), (e = e.sibling));
    else l && Eg(e);
  }
  function Hg(t, e, n, a) {
    var l = (n & 335544064) === n;
    l &&
      e.alternate === null &&
      e.return !== null &&
      e.return.alternate !== null &&
      co(e);
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (qe(t, e, n, a), i & 2048 && su(9, e));
        break;
      case 1:
        qe(t, e, n, a);
        break;
      case 3:
        (qe(t, e, n, a),
          l &&
            fs &&
            ((t = t.containerInfo),
            (t =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t),
            t.style.viewTransitionName === "root" &&
              (t.style.viewTransitionName = ""),
            (t = t.ownerDocument.documentElement),
            t !== null &&
              t.style.viewTransitionName === "none" &&
              (t.style.viewTransitionName = "")),
          i & 2048 &&
            ((i = null),
            e.alternate !== null && (i = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== i && (e.refCount++, i != null && cu(i))));
        break;
      case 12:
        if (i & 2048) {
          (qe(t, e, n, a), (i = e.stateNode));
          try {
            var u = e.memoizedProps,
              o = u.id,
              c = u.onPostCommit;
            typeof c == "function" &&
              c(
                o,
                e.alternate === null ? "mount" : "update",
                i.passiveEffectDuration,
                -0,
              );
          } catch (r) {
            it(e, e.return, r);
          }
        } else qe(t, e, n, a);
        break;
      case 31:
        qe(t, e, n, a);
        break;
      case 13:
        qe(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (o = e.alternate),
          e.memoizedState !== null
            ? (l && o !== null && o.memoizedState === null && co(o),
              u._visibility & 2 ? qe(t, e, n, a) : ji(t, e))
            : (l && o !== null && o.memoizedState !== null && co(e),
              u._visibility & 2
                ? qe(t, e, n, a)
                : ((u._visibility |= 2),
                  pl(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1))),
          i & 2048 && yf(o, e));
        break;
      case 24:
        (qe(t, e, n, a), i & 2048 && xf(e.alternate, e));
        break;
      case 30:
        (l &&
          ((i = e.alternate), i !== null && (Nn(i.child, !0), Nn(e.child, !0))),
          qe(t, e, n, a));
        break;
      default:
        qe(t, e, n, a);
    }
  }
  function pl(t, e, n, a, l) {
    for (
      l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var i = t,
        u = e,
        o = n,
        c = a,
        r = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (pl(i, u, o, c, l), su(8, u));
          break;
        case 23:
          break;
        case 22:
          var s = u.stateNode;
          (u.memoizedState !== null
            ? s._visibility & 2
              ? pl(i, u, o, c, l)
              : ji(i, u)
            : ((s._visibility |= 2), pl(i, u, o, c, l)),
            l && r & 2048 && yf(u.alternate, u));
          break;
        case 24:
          (pl(i, u, o, c, l), l && r & 2048 && xf(u.alternate, u));
          break;
        default:
          pl(i, u, o, c, l);
      }
      e = e.sibling;
    }
  }
  function ji(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          a = e,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (ji(n, a), l & 2048 && yf(a.alternate, a));
            break;
          case 24:
            (ji(n, a), l & 2048 && xf(a.alternate, a));
            break;
          default:
            ji(n, a);
        }
        e = e.sibling;
      }
  }
  var Ha = 8192;
  function _a(t, e, n) {
    if (t.subtreeFlags & Ha)
      for (t = t.child; t !== null;) (jg(t, e, n), (t = t.sibling));
  }
  function jg(t, e, n) {
    switch (t.tag) {
      case 26:
        (_a(t, e, n),
          t.flags & Ha &&
            (t.memoizedState !== null
              ? i2(n, Ie, t.memoizedState, t.memoizedProps)
              : ((t = t.stateNode), (e & 335544128) === e && Np(n, t))));
        break;
      case 5:
        (_a(t, e, n),
          t.flags & Ha &&
            ((t = t.stateNode), (e & 335544128) === e && Np(n, t)));
        break;
      case 3:
      case 4:
        var a = Ie;
        ((Ie = Ii(t.stateNode.containerInfo)), _a(t, e, n), (Ie = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Ha), (Ha = 16777216), _a(t, e, n), (Ha = a))
            : _a(t, e, n));
        break;
      case 30:
        if (
          (t.flags & Ha) !== 0 &&
          ((a = t.memoizedProps.name), a != null && a !== "auto")
        ) {
          var l = t.stateNode;
          ((l.paired = null), Ne === null && (Ne = new Map()), Ne.set(a, l));
        }
        _a(t, e, n);
        break;
      default:
        _a(t, e, n);
    }
  }
  function Bg(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function yi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((qt = a), Yg(a, t));
        }
      Bg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (qg(t), (t = t.sibling));
  }
  function qg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (yi(t), t.flags & 2048 && Ea(9, t, t.return));
        break;
      case 3:
        yi(t);
        break;
      case 12:
        yi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ro(t))
          : yi(t);
        break;
      default:
        yi(t);
    }
  }
  function ro(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((qt = a), Yg(a, t));
        }
      Bg(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Ea(8, e, e.return), ro(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ro(e)));
          break;
        default:
          ro(e);
      }
      t = t.sibling;
    }
  }
  function Yg(t, e) {
    for (; qt !== null;) {
      var n = qt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ea(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cu(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (qt = a));
      else
        t: for (n = t; qt !== null;) {
          a = qt;
          var l = a.sibling,
            i = a.return;
          if ((Ag(a), a === n)) {
            qt = null;
            break t;
          }
          if (l !== null) {
            ((l.return = i), (qt = l));
            break t;
          }
          qt = i;
        }
    }
  }
  var ny = {
      getCacheForType: function (t) {
        var e = Vt(kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return Vt(kt).controller.signal;
      },
    },
    ay = typeof WeakMap == "function" ? WeakMap : Map,
    tt = 0,
    ct = null,
    $ = null,
    W = 0,
    at = 0,
    ye = null,
    ra = !1,
    ti = !1,
    Sf = !1,
    Gn = 0,
    Nt = 0,
    Ta = 0,
    Xa = 0,
    Bo = 0,
    we = 0,
    Gl = 0,
    Bi = null,
    se = null,
    ms = !1,
    uc = 0,
    Gg = 0,
    qo = 1 / 0,
    Yo = null,
    va = null,
    xt = 0,
    tn = null,
    Fa = null,
    Sn = 0,
    gs = 0,
    hs = null,
    Lg = null,
    Rl = null,
    Ul = null,
    Hl = null,
    qi = 0,
    so = null;
  function Me() {
    return (tt & 2) !== 0 && W !== 0 ? W & -W : H.T !== null ? wf() : Zp();
  }
  function Xg() {
    if (we === 0)
      if ((W & 536870912) === 0 || V) {
        var t = Du;
        ((Du <<= 1), (Du & 3932160) === 0 && (Du = 262144), (we = t));
      } else we = 536870912;
    return ((t = $t.current), t !== null && (t.flags |= 32), we);
  }
  function Ll(t, e) {
    if (e != null) {
      var n = t.stateNode,
        a = n.ref;
      (a === null && (a = n.ref = sh(jn(t.memoizedProps, n))),
        Ul === null && (Ul = []),
        Ul.push(e.bind(null, a)));
    }
  }
  function pe(t, e, n) {
    (((t === ct && (at === 2 || at === 9)) || t.cancelPendingCommit !== null) &&
      (Xl(t, 0), sa(t, W, we, !1)),
      iu(t, n),
      ((tt & 2) === 0 || t !== ct) &&
        (t === ct &&
          ((tt & 2) === 0 && (Xa |= n), Nt === 4 && sa(t, W, we, !1)),
        zn(t)));
  }
  function Qg(t, e, n) {
    if ((tt & 6) !== 0) throw Error(O(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || lu(t, e),
      l = a ? uy(t, e) : mr(t, e, !0),
      i = a;
    do {
      if (l === 0) {
        ti && !a && sa(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), i && !ly(n))) {
          ((l = mr(t, e, !1)), (i = !1));
          continue;
        }
        if (l === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var u = 0;
          else
            ((u = t.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
          if (u !== 0) {
            e = u;
            t: {
              var o = t;
              l = Bi;
              var c = o.current.memoizedState.isDehydrated;
              if (
                (c && (Xl(o, u).flags |= 256),
                (u = mr(o, u, !1)),
                u !== 2 && u !== 6)
              ) {
                if (Sf && !c) {
                  ((o.errorRecoveryDisabledLanes |= i), (Xa |= i), (l = 4));
                  break t;
                }
                ((i = se),
                  (se = l),
                  i !== null &&
                    (se === null ? (se = i) : se.push.apply(se, i)));
              }
              l = u;
            }
            if (((i = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (Xl(t, 0), sa(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (i = l), i)) {
            case 0:
            case 1:
              throw Error(O(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e) break;
            case 6:
              sa(a, e, we, !ra);
              break t;
            case 2:
              se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(O(329));
          }
          if ((e & 62914560) === e && ((l = uc + 300 - ze()), 10 < l)) {
            if ((sa(a, e, we, !ra), Zo(a, 0, !0) !== 0)) break t;
            ((Sn = e),
              (a.timeoutHandle = Ef(
                F0.bind(
                  null,
                  a,
                  n,
                  se,
                  Yo,
                  ms,
                  e,
                  we,
                  Xa,
                  Gl,
                  ra,
                  i,
                  "Throttled",
                  -0,
                  0,
                ),
                l,
              )));
            break t;
          }
          F0(a, n, se, Yo, ms, e, we, Xa, Gl, ra, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    zn(t);
  }
  function F0(t, e, n, a, l, i, u, o, c, r, s, f, g, b) {
    t.timeoutHandle = -1;
    var w = e.subtreeFlags,
      M = (i & 335544064) === i;
    if (
      ((f = null),
      (M || w & 8192 || (w & 16785408) === 16785408) &&
        ((f = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: bn,
        }),
        (Ne = null),
        jg(e, i, f),
        M &&
          ((w = f),
          (M = t.containerInfo),
          (M = (M.nodeType === 9 ? M : M.ownerDocument).__reactViewTransition),
          M != null &&
            (w.count++,
            (w.waitingForViewTransition = !0),
            (w = Pi.bind(w)),
            M.finished.then(w, w))),
        (w =
          (i & 62914560) === i
            ? uc - ze()
            : (i & 4194048) === i
              ? Gg - ze()
              : 0),
        (w = u2(f, w)),
        w !== null))
    ) {
      ((Sn = i),
        (t.cancelPendingCommit = w(
          P0.bind(null, t, e, i, n, a, l, u, o, c, r, s, f, null, g, b),
        )),
        sa(t, i, u, !r));
      return;
    }
    P0(t, e, i, n, a, l, u, o, c, r, s, f);
  }
  function ly(t) {
    for (var e = t; ;) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(i(), l)) return !1;
          } catch (u) {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function sa(t, e, n, a) {
    ((e = Gp(t, e)),
      (e &= ~Bo),
      (e &= ~Xa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var l = e; 0 < l;) {
      var i = 31 - Te(l),
        u = 1 << i;
      ((a[i] = -1), (l &= ~u));
    }
    n !== 0 && Xp(t, n, e);
  }
  function oc() {
    return (tt & 6) === 0 ? (fu(0, !1), !1) : !0;
  }
  function Nf() {
    if ($ !== null) {
      if (at === 0) var t = $.return;
      else ((t = $), (_n = nl = null), lf(t), (kl = null), (Zi = 0), (t = $));
      for (; t !== null;) (vg(t.alternate, t), (t = t.return));
      $ = null;
    }
  }
  function Xl(t, e) {
    var n = t.timeoutHandle;
    return (
      n !== -1 && ((t.timeoutHandle = -1), Ty(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Sn = 0),
      Nf(),
      (ct = t),
      ($ = n = Rn(t.current, null)),
      (W = e),
      (at = 0),
      (ye = null),
      (ra = !1),
      (ti = lu(t, e)),
      (Sf = !1),
      (Gl = we = Bo = Xa = Ta = Nt = 0),
      (se = Bi = null),
      (ms = !1),
      (Gn = Gp(t, e)),
      Fo(),
      n
    );
  }
  function Vg(t, e) {
    ((G = null),
      (H.H = Do),
      e === Il || e === tc
        ? ((e = z0()), (at = 3))
        : e === Ws
          ? ((e = z0()), (at = 4))
          : (at =
              e === pf
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ye = e),
      $ === null && ((Nt = 1), _o(t, Qe(e, t.current))));
  }
  function Zg() {
    var t = $t.current;
    return t === null
      ? !0
      : (W & 4194048) === W
        ? te === null
        : (W & 62914560) === W || (W & 536870912) !== 0
          ? t === te
          : !1;
  }
  function Kg() {
    var t = H.H;
    return ((H.H = Do), t === null ? Do : t);
  }
  function Jg() {
    var t = H.A;
    return ((H.A = ny), t);
  }
  function Go() {
    ((Nt = 4),
      ra || ((W & 4194048) !== W && $t.current !== null) || (ti = !0),
      ((Ta & 134217727) === 0 && (Xa & 134217727) === 0) ||
        ct === null ||
        sa(ct, W, we, !1));
  }
  function mr(t, e, n) {
    var a = tt;
    tt |= 2;
    var l = Kg(),
      i = Jg();
    ((ct !== t || W !== e) && ((Yo = null), Xl(t, e)), (e = !1));
    var u = Nt;
    t: do
      try {
        if (at !== 0 && $ !== null) {
          var o = $,
            c = ye;
          switch (at) {
            case 8:
              (Nf(), (u = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              $t.current === null && (e = !0);
              var r = at;
              if (((at = 0), (ye = null), Tl(t, o, c, r), n && ti)) {
                u = 0;
                break t;
              }
              break;
            default:
              ((r = at), (at = 0), (ye = null), Tl(t, o, c, r));
          }
        }
        (iy(), (u = Nt));
        break;
      } catch (s) {
        Vg(t, s);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (_n = nl = null),
      (tt = a),
      (H.H = l),
      (H.A = i),
      $ === null && ((ct = null), (W = 0), Fo()),
      u
    );
  }
  function iy() {
    for (; $ !== null;) $g($);
  }
  function uy(t, e) {
    var n = tt;
    tt |= 2;
    var a = Kg(),
      l = Jg();
    ct !== t || W !== e
      ? ((Yo = null), (qo = ze() + 500), Xl(t, e))
      : (ti = lu(t, e));
    t: do
      try {
        if (at !== 0 && $ !== null) {
          e = $;
          var i = ye;
          e: switch (at) {
            case 1:
              ((at = 0), (ye = null), Tl(t, e, i, 1));
              break;
            case 2:
            case 9:
              if (w0(i)) {
                ((at = 0), (ye = null), I0(e));
                break;
              }
              ((e = function () {
                ((at !== 2 && at !== 9) || ct !== t || (at = 7), zn(t));
              }),
                i.then(e, e));
              break t;
            case 3:
              at = 7;
              break t;
            case 4:
              at = 5;
              break t;
            case 7:
              w0(i)
                ? ((at = 0), (ye = null), I0(e))
                : ((at = 0), (ye = null), Tl(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch ($.tag) {
                case 26:
                  u = $.memoizedState;
                case 5:
                case 27:
                  var o = $;
                  if (u ? xh(u) : o.stateNode.complete) {
                    ((at = 0), (ye = null));
                    var c = o.sibling;
                    if (c !== null) $ = c;
                    else {
                      var r = o.return;
                      r !== null ? (($ = r), cc(r)) : ($ = null);
                    }
                    break e;
                  }
              }
              ((at = 0), (ye = null), Tl(t, e, i, 5));
              break;
            case 6:
              ((at = 0), (ye = null), Tl(t, e, i, 6));
              break;
            case 8:
              (Nf(), (Nt = 6));
              break t;
            default:
              throw Error(O(462));
          }
        }
        oy();
        break;
      } catch (s) {
        Vg(t, s);
      }
    while (!0);
    return (
      (_n = nl = null),
      (H.H = a),
      (H.A = l),
      (tt = n),
      $ !== null ? 0 : ((ct = null), (W = 0), Fo(), Nt)
    );
  }
  function oy() {
    for (; $ !== null && !zb();) $g($);
  }
  function $g(t) {
    var e = bg(t.alternate, t, Gn);
    ((t.memoizedProps = t.pendingProps), e === null ? cc(t) : ($ = e));
  }
  function I0(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Y0(n, e, e.pendingProps, e.type, void 0, W);
        break;
      case 11:
        e = Y0(n, e, e.pendingProps, e.type.render, e.ref, W);
        break;
      case 5:
        lf(e);
        var a = e;
        a === Gt &&
          (V
            ? (Eo(a), a.tag === 5 && a.stateNode != null && (pt = a.stateNode))
            : (Eo(a), (V = !0)));
      default:
        (vg(n, e), (e = $ = ym(e, Gn)), (e = bg(n, e, Gn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? cc(t) : ($ = e));
  }
  function Tl(t, e, n, a) {
    ((_n = nl = null), lf(e), (kl = null), (Zi = 0));
    var l = e.return;
    try {
      if (Jv(t, l, e, n, W)) {
        ((Nt = 1), _o(t, Qe(n, t.current)), ($ = null));
        return;
      }
    } catch (i) {
      if (l !== null) throw (($ = l), i);
      ((Nt = 1), _o(t, Qe(n, t.current)), ($ = null));
      return;
    }
    e.flags & 32768
      ? (V || a === 1
          ? (t = !0)
          : ti || (W & 536870912) !== 0
            ? (t = !1)
            : ((ra = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = $t.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Wg(e, t))
      : cc(e);
  }
  function cc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Wg(e, ra);
        return;
      }
      t = e.return;
      var n = Iv(e.alternate, e, Gn);
      if (n !== null) {
        $ = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        $ = e;
        return;
      }
      $ = e = t;
    } while (e !== null);
    Nt === 0 && (Nt = 5);
  }
  function Wg(t, e) {
    do {
      var n = Pv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), ($ = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        $ = t;
        return;
      }
      $ = t = n;
    } while (t !== null);
    ((Nt = 6), ($ = null));
  }
  function P0(t, e, n, a, l, i, u, o, c, r, s, f) {
    t.cancelPendingCommit = null;
    do rc();
    while (xt !== 0);
    if ((tt & 6) !== 0) throw Error(O(327));
    if (e !== null) {
      if (e === t.current) throw Error(O(177));
      (t === ct && (($ = ct = null), (W = 0)),
        (Fa = e),
        (tn = t),
        (Sn = n),
        (hs = l),
        (Lg = a),
        cy(t, e, n, u, o, c, f));
    }
  }
  function cy(t, e, n, a, l, i, u) {
    var o = e.lanes | e.childLanes;
    if (
      ((gs = o),
      (o |= Qs),
      Rb(t, n, o, a, l, i),
      (Ul = null),
      (n & 335544064) === n
        ? ((Hl = Hv(t)), (a = 10262))
        : ((Hl = null), (a = 10256)),
      (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0
        ? ((t.callbackNode = null),
          (t.callbackPriority = 0),
          my(xo, function () {
            return (xs(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
      (Ho = !1),
      (a = (e.flags & 13878) !== 0),
      (e.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = H.T), (H.T = null), (l = et.p), (et.p = 2), (i = tt), (tt |= 4));
      try {
        ty(t, e, n);
      } finally {
        ((tt = i), (et.p = l), (H.T = a));
      }
    }
    ((xt = 1),
      Ho
        ? (Rl = Dy(u, t.containerInfo, Hl, bs, vs, sy, ys, xs, ry, null, null))
        : (bs(), vs(), ys()));
  }
  function ry(t) {
    if (xt !== 0) {
      var e = tn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function sy() {
    xt === 3 && ((xt = 0), Ug(Fa, tn), (xt = 4));
  }
  function bs() {
    if (xt === 1) {
      xt = 0;
      var t = tn,
        e = Fa,
        n = Sn,
        a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        ((a = H.T), (H.T = null));
        var l = et.p;
        et.p = 2;
        var i = tt;
        tt |= 4;
        try {
          ((Ti = jo = !1), _g(e, t, n), (n = zs));
          var u = fm(t.containerInfo),
            o = n.focusedElem,
            c = n.selectionRange;
          if (
            u !== o &&
            o &&
            o.ownerDocument &&
            sm(o.ownerDocument.documentElement, o)
          ) {
            if (c !== null && Xs(o)) {
              var r = c.start,
                s = c.end;
              if ((s === void 0 && (s = r), "selectionStart" in o))
                ((o.selectionStart = r),
                  (o.selectionEnd = Math.min(s, o.value.length)));
              else {
                var f = o.ownerDocument || document,
                  g = (f && f.defaultView) || window;
                if (g.getSelection) {
                  var b = g.getSelection(),
                    w = o.textContent.length,
                    M = Math.min(c.start, w),
                    p = c.end === void 0 ? M : Math.min(c.end, w);
                  !b.extend && M > p && ((u = p), (p = M), (M = u));
                  var d = g0(o, M),
                    m = g0(o, p);
                  if (
                    d &&
                    m &&
                    (b.rangeCount !== 1 ||
                      b.anchorNode !== d.node ||
                      b.anchorOffset !== d.offset ||
                      b.focusNode !== m.node ||
                      b.focusOffset !== m.offset)
                  ) {
                    var h = f.createRange();
                    (h.setStart(d.node, d.offset),
                      b.removeAllRanges(),
                      M > p
                        ? (b.addRange(h), b.extend(m.node, m.offset))
                        : (h.setEnd(m.node, m.offset), b.addRange(h)));
                  }
                }
              }
            }
            for (f = [], b = o; (b = b.parentNode);)
              b.nodeType === 1 &&
                f.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < f.length;
              o++
            ) {
              var y = f[o];
              ((y.element.scrollLeft = y.left), (y.element.scrollTop = y.top));
            }
          }
          ((Jl = !!ws), (zs = ws = null));
        } finally {
          ((tt = i), (et.p = l), (H.T = a));
        }
      }
      ((t.current = e), (xt = 2));
    }
  }
  function vs() {
    if (xt === 2) {
      xt = 0;
      var t = tn,
        e = Fa,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = H.T), (H.T = null));
        var a = et.p;
        et.p = 2;
        var l = tt;
        tt |= 4;
        try {
          Mg(t, e.alternate, e);
        } finally {
          ((tt = l), (et.p = a), (H.T = n));
        }
      }
      xt = 3;
    }
  }
  function ys() {
    if (xt === 4 || xt === 3) {
      xt = 0;
      var t = Rl;
      ((Rl = null), Eb());
      var e = tn,
        n = Fa,
        a = Sn,
        l = Lg,
        i = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0
          ? (xt = 5)
          : ((xt = 0), (Fa = tn = null), Fg(e, e.pendingLanes)),
        (i = e.pendingLanes),
        i === 0 && (va = null),
        js(a),
        (n = n.stateNode),
        Ee && typeof Ee.onCommitFiberRoot == "function")
      )
        try {
          Ee.onCommitFiberRoot(au, n, void 0, (n.current.flags & 128) === 128);
        } catch (r) {}
      if (l !== null) {
        ((n = H.T), (i = et.p), (et.p = 2), (H.T = null));
        try {
          for (var u = e.onRecoverableError, o = 0; o < l.length; o++) {
            var c = l[o];
            u(c.value, { componentStack: c.stack });
          }
        } finally {
          ((H.T = n), (et.p = i));
        }
      }
      if (
        ((l = Ul),
        (u = Hl),
        (Hl = null),
        l !== null && ((Ul = null), u === null && (u = []), t !== null))
      )
        for (c = 0; c < l.length; c++)
          ((n = (0, l[c])(u)), n !== void 0 && t.finished.finally(n));
      ((Sn & 3) !== 0 && rc(),
        zn(e),
        (i = e.pendingLanes),
        (a & 261930) !== 0 && (i & 42) !== 0
          ? e === so
            ? qi++
            : ((qi = 0), (so = e))
          : ((qi = 0), (so = null)),
        fu(0, !1));
    }
  }
  function Fg(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), cu(e)));
  }
  function rc() {
    return (
      Rl !== null && (Rl.skipTransition(), (Rl = null)),
      bs(),
      vs(),
      ys(),
      xs()
    );
  }
  function xs() {
    if (xt !== 5) return !1;
    var t = tn,
      e = gs;
    gs = 0;
    var n = js(Sn),
      a = H.T,
      l = et.p;
    try {
      ((et.p = 32 > n ? 32 : n), (H.T = null), (n = hs), (hs = null));
      var i = tn,
        u = Sn;
      if (((xt = 0), (Fa = tn = null), (Sn = 0), (tt & 6) !== 0))
        throw Error(O(331));
      var o = tt;
      if (
        ((tt |= 4),
        qg(i.current),
        Hg(i, i.current, u, n),
        (tt = o),
        fu(0, !1),
        Ee && typeof Ee.onPostCommitFiberRoot == "function")
      )
        try {
          Ee.onPostCommitFiberRoot(au, i);
        } catch (c) {}
      return !0;
    } finally {
      ((et.p = l), (H.T = a), Fg(t, e));
    }
  }
  function tp(t, e, n) {
    ((e = Qe(n, e)),
      (e = Pr(t.stateNode, e, 2)),
      (t = ga(t, e, 2)),
      t !== null && (iu(t, 2), zn(t)));
  }
  function it(t, e, n) {
    if (t.tag === 3) tp(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          tp(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (va === null || !va.has(a)))
          ) {
            ((t = Qe(n, t)),
              (n = dg(2)),
              (a = ga(e, n, 2)),
              a !== null && (pg(n, a, e, t), iu(a, 2), zn(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function gr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ay();
      var l = new Set();
      a.set(e, l);
    } else ((l = a.get(e)), l === void 0 && ((l = new Set()), a.set(e, l)));
    l.has(n) ||
      ((Sf = !0), l.add(n), (t = fy.bind(null, t, e, n)), e.then(t, t));
  }
  function fy(t, e, n) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      ct === t &&
        (W & n) === n &&
        ((Nt === 4 || (Nt === 3 && (W & 62914560) === W && 300 > ze() - uc)) &&
        (tt & 2) === 0
          ? Xl(t, 0)
          : (Bo |= n),
        Gl === W && (Gl = 0)),
      zn(t));
  }
  function Ig(t, e) {
    (e === 0 && (e = Lp()), (t = el(t, e)), t !== null && (iu(t, e), zn(t)));
  }
  function dy(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Ig(t, n));
  }
  function py(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          l = t.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(O(314));
    }
    (a !== null && a.delete(e), Ig(t, n));
  }
  function my(t, e) {
    return Us(t, e);
  }
  var Ql = null,
    ml = null,
    Ss = !1,
    Lo = !1,
    hr = !1,
    fa = 0;
  function zn(t) {
    (t !== ml &&
      t.next === null &&
      (ml === null ? (Ql = ml = t) : (ml = ml.next = t)),
      (Lo = !0),
      Ss || ((Ss = !0), hy()));
  }
  function fu(t, e) {
    if (!hr && Lo) {
      hr = !0;
      do
        for (var n = !1, a = Ql; a !== null;) {
          if (!e)
            if (t !== 0) {
              var l = a.pendingLanes;
              if (l === 0) var i = 0;
              else {
                var u = a.suspendedLanes,
                  o = a.pingedLanes;
                ((i = (1 << (31 - Te(42 | t) + 1)) - 1),
                  (i &= l & ~(u & ~o)),
                  (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
              }
              i !== 0 && ((n = !0), ep(a, i));
            } else
              ((i = W),
                (i = Zo(
                  a,
                  a === ct ? i : 0,
                  a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
                )),
                (i & 3) === 0 || lu(a, i) || ((n = !0), ep(a, i)));
          a = a.next;
        }
      while (n);
      hr = !1;
    }
  }
  function gy() {
    Pg();
  }
  function Pg() {
    Lo = Ss = !1;
    var t = 0;
    fa !== 0 && Ey() && (t = fa);
    for (var e = ze(), n = null, a = Ql; a !== null;) {
      var l = a.next,
        i = th(a, e);
      (i === 0
        ? ((a.next = null),
          n === null ? (Ql = l) : (n.next = l),
          l === null && (ml = n))
        : ((n = a), (t !== 0 || (i & 3) !== 0) && (Lo = !0)),
        (a = l));
    }
    ((xt !== 0 && xt !== 5) || fu(t, !1), fa !== 0 && (fa = 0));
  }
  function th(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        l = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;
    ) {
      var u = 31 - Te(i),
        o = 1 << u,
        c = l[u];
      (c === -1
        ? ((o & n) === 0 || (o & a) !== 0) && (l[u] = _b(o, e))
        : c <= e && (t.expiredLanes |= o),
        (i &= ~o));
    }
    if (
      ((e = ct),
      (n = W),
      (n = Zo(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (at === 2 || at === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Jc(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || lu(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Jc(a), js(n))) {
        case 2:
        case 8:
          n = qp;
          break;
        case 32:
          n = xo;
          break;
        case 268435456:
          n = Yp;
          break;
        default:
          n = xo;
      }
      return (
        (a = eh.bind(null, t)),
        (n = Us(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && Jc(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function eh(t, e) {
    if (xt !== 0 && xt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (rc() && t.callbackNode !== n) return null;
    var a = W;
    return (
      (a = Zo(
        t,
        t === ct ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Qg(t, a, e),
          th(t, ze()),
          t.callbackNode != null && t.callbackNode === n
            ? eh.bind(null, t)
            : null)
    );
  }
  function ep(t, e) {
    if (rc()) return null;
    Qg(t, e, !0);
  }
  function hy() {
    My(function () {
      (tt & 6) !== 0 ? Us(Bp, gy) : Pg();
    });
  }
  function wf() {
    if (fa === 0) {
      var t = Ka;
      (t === 0 && ((t = ku), (ku <<= 1), (ku & 261888) === 0 && (ku = 256)),
        (fa = t));
    }
    return fa;
  }
  function np(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Iu(t);
  }
  function by(t, e, n, a, l) {
    if (e === "submit" && n && n.stateNode === l) {
      var i = np((l[ge] || null).action),
        u = a.submitter;
      u &&
        ((e = (e = u[ge] || null)
          ? np(e.formAction)
          : u.getAttribute("formAction")),
        e !== null && ((i = e), (u = null)));
      var o = new Jo("action", "action", null, a, l);
      t.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (fa !== 0) {
                  var c = new FormData(l, u);
                  Fr(
                    n,
                    { pending: !0, data: c, method: l.method, action: i },
                    null,
                    c,
                  );
                }
              } else
                typeof i == "function" &&
                  (o.preventDefault(),
                  (c = new FormData(l, u)),
                  Fr(
                    n,
                    { pending: !0, data: c, method: l.method, action: i },
                    i,
                    c,
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (Zu = 0; Zu < Yr.length; Zu++)
    ((Ku = Yr[Zu]),
      (ap = Ku.toLowerCase()),
      (lp = Ku[0].toUpperCase() + Ku.slice(1)),
      en(ap, "on" + lp));
  var Ku, ap, lp, Zu;
  en(pm, "onAnimationEnd");
  en(mm, "onAnimationIteration");
  en(gm, "onAnimationStart");
  en("dblclick", "onDoubleClick");
  en("focusin", "onFocus");
  en("focusout", "onBlur");
  en(Ov, "onTransitionRun");
  en(Av, "onTransitionStart");
  en(Cv, "onTransitionCancel");
  en(hm, "onTransitionEnd");
  Bl("onMouseEnter", ["mouseout", "mouseover"]);
  Bl("onMouseLeave", ["mouseout", "mouseover"]);
  Bl("onPointerEnter", ["pointerout", "pointerover"]);
  Bl("onPointerLeave", ["pointerout", "pointerover"]);
  Pa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " ",
    ),
  );
  Pa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " ",
    ),
  );
  Pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Pa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" "),
  );
  Pa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" "),
  );
  Pa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
  );
  var $i =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    vy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat($i),
    );
  function nh(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        l = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = a.length - 1; 0 <= u; u--) {
            var o = a[u],
              c = o.instance,
              r = o.currentTarget;
            if (((o = o.listener), c !== i && l.isPropagationStopped()))
              break t;
            ((i = o), (l.currentTarget = r));
            try {
              i(l);
            } catch (s) {
              No(s);
            }
            ((l.currentTarget = null), (i = c));
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((o = a[u]),
              (c = o.instance),
              (r = o.currentTarget),
              (o = o.listener),
              c !== i && l.isPropagationStopped())
            )
              break t;
            ((i = o), (l.currentTarget = r));
            try {
              i(l);
            } catch (s) {
              No(s);
            }
            ((l.currentTarget = null), (i = c));
          }
      }
    }
  }
  function J(t, e) {
    var n = e[Id];
    n === void 0 && (n = e[Id] = new Set());
    var a = t + "__bubble";
    n.has(a) || (ah(e, t, 2, !1), n.add(a));
  }
  function br(t, e, n) {
    var a = 0;
    (e && (a |= 4), ah(n, t, a, e));
  }
  var Ju = "_reactListening" + Math.random().toString(36).slice(2);
  function zf(t) {
    if (!t[Ju]) {
      ((t[Ju] = !0),
        Jp.forEach(function (n) {
          n !== "selectionchange" && (vy.has(n) || br(n, !1, t), br(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ju] || ((e[Ju] = !0), br("selectionchange", !1, e));
    }
  }
  function ah(t, e, n, a) {
    switch (Mh(e)) {
      case 2:
        var l = s2;
        break;
      case 8:
        l = f2;
        break;
      default:
        l = kf;
    }
    ((n = l.bind(null, e, n, t)),
      (l = void 0),
      !Hr ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: l })
          : t.addEventListener(e, n, !0)
        : l !== void 0
          ? t.addEventListener(e, n, { passive: l })
          : t.addEventListener(e, n, !1));
  }
  function vr(t, e, n, a, l) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var o = a.stateNode.containerInfo;
          if (o === l) break;
          if (u === 4)
            for (u = a.return; u !== null;) {
              var c = u.tag;
              if ((c === 3 || c === 4) && u.stateNode.containerInfo === l)
                return;
              u = u.return;
            }
          for (; o !== null;) {
            if (((u = ja(o)), u === null)) return;
            if (((c = u.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              a = i = u;
              continue t;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    nm(function () {
      var r = i,
        s = qs(n),
        f = [];
      t: {
        var g = bm.get(t);
        if (g !== void 0) {
          var b = Jo,
            w = t;
          switch (t) {
            case "keypress":
              if (to(n) === 0) break t;
            case "keydown":
            case "keyup":
              b = lv;
              break;
            case "focusin":
              ((w = "focus"), (b = tr));
              break;
            case "focusout":
              ((w = "blur"), (b = tr));
              break;
            case "beforeblur":
            case "afterblur":
              b = tr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = u0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = Zb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = rv;
              break;
            case pm:
            case mm:
            case gm:
              b = $b;
              break;
            case hm:
              b = fv;
              break;
            case "scroll":
            case "scrollend":
              b = Qb;
              break;
            case "wheel":
              b = pv;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Fb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = c0;
              break;
            case "submit":
              b = ov;
              break;
            case "toggle":
            case "beforetoggle":
              b = gv;
          }
          var M = (e & 4) !== 0,
            p = !M && (t === "scroll" || t === "scrollend"),
            d = M ? (g !== null ? g + "Capture" : null) : g;
          M = [];
          for (var m = r, h; m !== null;) {
            var y = m;
            if (
              ((h = y.stateNode),
              (y = y.tag),
              (y !== 5 && y !== 26 && y !== 27) ||
                h === null ||
                d === null ||
                ((y = Gi(m, d)), y != null && M.push(Wi(m, y, h))),
              p)
            )
              break;
            m = m.return;
          }
          0 < M.length &&
            ((g = new b(g, w, null, n, s)), f.push({ event: g, listeners: M }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((b = t === "mouseover" || t === "pointerover"),
            (g = t === "mouseout" || t === "pointerout"),
            b &&
              n !== Ur &&
              (w = n.relatedTarget || n.fromElement) &&
              (ja(w) || w[Wl]))
          )
            break t;
          (g || b) &&
            ((w =
              s.window === s
                ? s
                : (b = s.ownerDocument)
                  ? b.defaultView || b.parentWindow
                  : window),
            g
              ? ((b = n.relatedTarget || n.toElement),
                (g = r),
                (b = b ? ja(b) : null),
                b !== null &&
                  ((p = nu(b)),
                  (M = b.tag),
                  b !== p || (M !== 5 && M !== 27 && M !== 6)) &&
                  (b = null))
              : ((g = null), (b = r)),
            g !== b &&
              ((M = u0),
              (y = "onMouseLeave"),
              (d = "onMouseEnter"),
              (m = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((M = c0),
                (y = "onPointerLeave"),
                (d = "onPointerEnter"),
                (m = "pointer")),
              (p = g == null ? w : zi(g)),
              (h = b == null ? w : zi(b)),
              (w = new M(y, m + "leave", g, n, s)),
              (w.target = p),
              (w.relatedTarget = h),
              (y = null),
              ja(s) === r &&
                ((M = new M(d, m + "enter", b, n, s)),
                (M.target = h),
                (M.relatedTarget = p),
                (y = M)),
              (p = y),
              (M = g && b ? wr(g, b, yy) : null),
              g !== null && ip(f, w, g, M, !1),
              b !== null && p !== null && ip(f, p, b, M, !0)));
        }
        t: {
          if (
            ((g = r ? zi(r) : window),
            (b = g.nodeName && g.nodeName.toLowerCase()),
            b === "select" || (b === "input" && g.type === "file"))
          )
            var x = d0;
          else if (f0(g))
            if (cm) x = Ev;
            else {
              x = wv;
              var v = Nv;
            }
          else
            ((b = g.nodeName),
              !b ||
              b.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? r && Bs(r.elementType) && (x = d0)
                : (x = zv));
          if (x && (x = x(t, r))) {
            om(f, x, n, s);
            break t;
          }
          v && v(t, g, r);
        }
        switch (((v = r ? zi(r) : window), t)) {
          case "focusin":
            (f0(v) || v.contentEditable === "true") &&
              ((xl = v), (Br = r), (Ai = null));
            break;
          case "focusout":
            Ai = Br = xl = null;
            break;
          case "mousedown":
            qr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((qr = !1), h0(f, n, s));
            break;
          case "selectionchange":
            if (Mv) break;
          case "keydown":
          case "keyup":
            h0(f, n, s);
        }
        var S;
        if (Ls)
          t: {
            switch (t) {
              case "compositionstart":
                var E = "onCompositionStart";
                break t;
              case "compositionend":
                E = "onCompositionEnd";
                break t;
              case "compositionupdate":
                E = "onCompositionUpdate";
                break t;
            }
            E = void 0;
          }
        else
          yl
            ? im(t, n) && (E = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (E = "onCompositionStart");
        (E &&
          (lm &&
            n.locale !== "ko" &&
            (yl || E !== "onCompositionStart"
              ? E === "onCompositionEnd" && yl && (S = am())
              : ((oa = s),
                (Ys = "value" in oa ? oa.value : oa.textContent),
                (yl = !0))),
          (v = Xo(r, E)),
          0 < v.length &&
            ((E = new o0(E, t, null, n, s)),
            f.push({ event: E, listeners: v }),
            S ? (E.data = S) : ((S = um(n)), S !== null && (E.data = S)))),
          (S = bv ? vv(t, n) : yv(t, n)) &&
            ((E = Xo(r, "onBeforeInput")),
            0 < E.length &&
              ((v = new o0("onBeforeInput", "beforeinput", null, n, s)),
              f.push({ event: v, listeners: E }),
              (v.data = S))),
          by(f, t, r, n, s));
      }
      nh(f, e);
    });
  }
  function Wi(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Xo(t, e) {
    for (var n = e + "Capture", a = []; t !== null;) {
      var l = t,
        i = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          i === null ||
          ((l = Gi(t, n)),
          l != null && a.unshift(Wi(t, l, i)),
          (l = Gi(t, e)),
          l != null && a.push(Wi(t, l, i))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function yy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function ip(t, e, n, a, l) {
    for (var i = e._reactName, u = []; n !== null && n !== a;) {
      var o = n,
        c = o.alternate,
        r = o.stateNode;
      if (((o = o.tag), c !== null && c === a)) break;
      ((o !== 5 && o !== 26 && o !== 27) ||
        r === null ||
        ((c = r),
        l
          ? ((r = Gi(n, i)), r != null && u.unshift(Wi(n, r, c)))
          : l || ((r = Gi(n, i)), r != null && u.push(Wi(n, r, c)))),
        (n = n.return));
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var xy = /\r\n?/g,
    Sy = /\u0000|\uFFFD/g;
  function up(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        xy,
        `
`,
      )
      .replace(Sy, "");
  }
  function lh(t, e) {
    return ((e = up(e)), up(t) === e);
  }
  function lt(t, e, n, a, l, i) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || (e === "textarea" && a === "") || ql(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && ql(t, "" + a);
        else return;
        break;
      case "className":
        Ru(t, "class", a);
        break;
      case "tabIndex":
        Ru(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ru(t, n, a);
        break;
      case "style":
        em(t, a, i);
        return;
      case "data":
        if (e !== "object") {
          Ru(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((a = Iu(a)), t.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (n === "formAction"
              ? (e !== "input" && lt(t, e, "name", l.name, l, null),
                lt(t, e, "formEncType", l.formEncType, l, null),
                lt(t, e, "formMethod", l.formMethod, l, null),
                lt(t, e, "formTarget", l.formTarget, l, null))
              : (lt(t, e, "encType", l.encType, l, null),
                lt(t, e, "method", l.method, l, null),
                lt(t, e, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Iu(a)), t.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (t.onclick = bn);
        return;
      case "onScroll":
        a != null && J("scroll", t);
        return;
      case "onScrollEnd":
        a != null && J("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(O(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(O(60));
            (i != null ? i.__html : void 0) !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Iu(a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
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
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        (J("beforetoggle", t), J("toggle", t), Fu(t, "popover", a));
        break;
      case "xlinkActuate":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Fu(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")
        )
          ((n = Lb.get(n) || n), Fu(t, n, a));
        else return;
    }
    P = !0;
  }
  function Ns(t, e, n, a, l, i) {
    switch (n) {
      case "style":
        em(t, a, i);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(O(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(O(60));
            (i != null ? i.__html : void 0) !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") ql(t, a);
        else if (typeof a == "number" || typeof a == "bigint") ql(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && J("scroll", t);
        return;
      case "onScrollEnd":
        a != null && J("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = bn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!$p.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (i = n.slice(2, l ? n.length - 7 : void 0)),
              (e = t[ge] || null),
              (e = e != null ? e[n] : null),
              typeof e == "function" && t.removeEventListener(i, e, l),
              typeof a == "function")
            ) {
              (typeof e != "function" &&
                e !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(i, a, l));
              break t;
            }
            ((P = !0),
              n in t
                ? (t[n] = a)
                : a === !0
                  ? t.setAttribute(n, "")
                  : Fu(t, n, a));
          }
        return;
    }
    P = !0;
  }
  function Jt(t, e, n) {
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
        (J("error", t), J("load", t));
        var a = !1,
          l = !1,
          i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var u = n[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(O(137, e));
                default:
                  lt(t, e, i, u, n, null);
              }
          }
        (l && lt(t, e, "srcSet", n.srcSet, n, null),
          a && lt(t, e, "src", n.src, n, null));
        return;
      case "input":
        J("invalid", t);
        var o = (i = u = l = null),
          c = null,
          r = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var s = n[a];
            if (s != null)
              switch (a) {
                case "name":
                  l = s;
                  break;
                case "type":
                  u = s;
                  break;
                case "checked":
                  c = s;
                  break;
                case "defaultChecked":
                  r = s;
                  break;
                case "value":
                  i = s;
                  break;
                case "defaultValue":
                  o = s;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (s != null) throw Error(O(137, e));
                  break;
                default:
                  lt(t, e, a, s, n, null);
              }
          }
        Ip(t, i, o, c, r, u, l, !1);
        return;
      case "select":
        (J("invalid", t), (a = u = i = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((o = n[l]), o != null))
            switch (l) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                u = o;
                break;
              case "multiple":
                a = o;
              default:
                lt(t, e, l, o, n, null);
            }
        ((e = i),
          (n = u),
          (t.multiple = !!a),
          e != null ? Ol(t, !!a, e, !1) : n != null && Ol(t, !!a, n, !0));
        return;
      case "textarea":
        (J("invalid", t), (i = l = a = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((o = n[u]), o != null))
            switch (u) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                l = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(O(91));
                break;
              default:
                lt(t, e, u, o, n, null);
            }
        tm(t, a, l, i);
        return;
      case "option":
        for (c in n)
          n.hasOwnProperty(c) &&
            ((a = n[c]), a != null) &&
            (c === "selected"
              ? (t.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : lt(t, e, c, a, n, null));
        return;
      case "dialog":
        (J("beforetoggle", t), J("toggle", t), J("cancel", t), J("close", t));
        break;
      case "iframe":
      case "object":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < $i.length; a++) J($i[a], t);
        break;
      case "image":
        (J("error", t), J("load", t));
        break;
      case "details":
        J("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (J("error", t), J("load", t));
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
        for (r in n)
          if (n.hasOwnProperty(r) && ((a = n[r]), a != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(O(137, e));
              default:
                lt(t, e, r, a, n, null);
            }
        return;
      default:
        if (Bs(e)) {
          for (s in n)
            n.hasOwnProperty(s) &&
              ((a = n[s]), a !== void 0 && Ns(t, e, s, a, n, void 0));
          return;
        }
    }
    for (o in n)
      n.hasOwnProperty(o) && ((a = n[o]), a != null && lt(t, e, o, a, n, null));
  }
  var Ny = {};
  function wy(t, e, n, a) {
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
        var l = null,
          i = null,
          u = null,
          o = null,
          c = null,
          r = null,
          s = null;
        for (b in n) {
          var f = n[b];
          if (n.hasOwnProperty(b) && f != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = f;
              default:
                a.hasOwnProperty(b) || lt(t, e, b, null, a, f);
            }
        }
        for (var g in a) {
          var b = a[g];
          if (((f = n[g]), a.hasOwnProperty(g) && (b != null || f != null)))
            switch (g) {
              case "type":
                (b !== f && (P = !0), (i = b));
                break;
              case "name":
                (b !== f && (P = !0), (l = b));
                break;
              case "checked":
                (b !== f && (P = !0), (r = b));
                break;
              case "defaultChecked":
                (b !== f && (P = !0), (s = b));
                break;
              case "value":
                (b !== f && (P = !0), (u = b));
                break;
              case "defaultValue":
                (b !== f && (P = !0), (o = b));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(O(137, e));
                break;
              default:
                b !== f && lt(t, e, g, b, a, f);
            }
        }
        Rr(t, u, o, c, r, s, i, l);
        return;
      case "select":
        b = u = o = g = null;
        for (i in n)
          if (((c = n[i]), n.hasOwnProperty(i) && c != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                b = c;
              default:
                a.hasOwnProperty(i) || lt(t, e, i, null, a, c);
            }
        for (l in a)
          if (
            ((i = a[l]),
            (c = n[l]),
            a.hasOwnProperty(l) && (i != null || c != null))
          )
            switch (l) {
              case "value":
                (i !== c && (P = !0), (g = i));
                break;
              case "defaultValue":
                (i !== c && (P = !0), (o = i));
                break;
              case "multiple":
                (i !== c && (P = !0), (u = i));
              default:
                i !== c && lt(t, e, l, i, a, c);
            }
        ((e = o),
          (n = u),
          (a = b),
          g != null
            ? Ol(t, !!n, g, !1)
            : !!a != !!n &&
              (e != null ? Ol(t, !!n, e, !0) : Ol(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        b = g = null;
        for (o in n)
          if (
            ((l = n[o]),
            n.hasOwnProperty(o) && l != null && !a.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                lt(t, e, o, null, a, l);
            }
        for (u in a)
          if (
            ((l = a[u]),
            (i = n[u]),
            a.hasOwnProperty(u) && (l != null || i != null))
          )
            switch (u) {
              case "value":
                (l !== i && (P = !0), (g = l));
                break;
              case "defaultValue":
                (l !== i && (P = !0), (b = l));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(O(91));
                break;
              default:
                l !== i && lt(t, e, u, l, a, i);
            }
        Pp(t, g, b);
        return;
      case "option":
        for (var w in n)
          ((g = n[w]),
            n.hasOwnProperty(w) &&
              g != null &&
              !a.hasOwnProperty(w) &&
              (w === "selected" ? (t.selected = !1) : lt(t, e, w, null, a, g)));
        for (c in a)
          ((g = a[c]),
            (b = n[c]),
            a.hasOwnProperty(c) &&
              g !== b &&
              (g != null || b != null) &&
              (c === "selected"
                ? (g !== b && (P = !0),
                  (t.selected =
                    g && typeof g != "function" && typeof g != "symbol"))
                : lt(t, e, c, g, a, b)));
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
        for (var M in n)
          ((g = n[M]),
            n.hasOwnProperty(M) &&
              g != null &&
              !a.hasOwnProperty(M) &&
              lt(t, e, M, null, a, g));
        for (r in a)
          if (
            ((g = a[r]),
            (b = n[r]),
            a.hasOwnProperty(r) && g !== b && (g != null || b != null))
          )
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(O(137, e));
                break;
              default:
                lt(t, e, r, g, a, b);
            }
        return;
      default:
        if (Bs(e)) {
          for (var p in n)
            ((g = n[p]),
              n.hasOwnProperty(p) &&
                g !== void 0 &&
                !a.hasOwnProperty(p) &&
                Ns(t, e, p, void 0, a, g));
          for (s in a)
            ((g = a[s]),
              (b = n[s]),
              !a.hasOwnProperty(s) ||
                g === b ||
                (g === void 0 && b === void 0) ||
                Ns(t, e, s, g, a, b));
          return;
        }
    }
    for (var d in n)
      ((g = n[d]),
        n.hasOwnProperty(d) &&
          g != null &&
          !a.hasOwnProperty(d) &&
          lt(t, e, d, null, a, g));
    for (f in a)
      ((g = a[f]),
        (b = n[f]),
        !a.hasOwnProperty(f) ||
          g === b ||
          (g == null && b == null) ||
          lt(t, e, f, g, a, b));
  }
  function op(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function zy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          i = l.transferSize,
          u = l.initiatorType,
          o = l.duration;
        if (i && o && op(u)) {
          for (u = 0, o = l.responseEnd, a += 1; a < n.length; a++) {
            var c = n[a],
              r = c.startTime;
            if (r > o) break;
            var s = c.transferSize,
              f = c.initiatorType;
            s &&
              op(f) &&
              ((c = c.responseEnd), (u += s * (c < o ? 1 : (o - r) / (c - r))));
          }
          if ((--a, (e += (8 * (i + u)) / (l.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var ws = null,
    zs = null;
  function Fi(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function cp(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ih(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function uh(t, e, n, a) {
    return (
      (n = Fi(n).createElement(t)),
      (n[Qt] = a),
      (n[ge] = e),
      Jt(n, t, e),
      Yt(n),
      n
    );
  }
  function Es(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yr = null;
  function Ey() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === yr
        ? !1
        : ((yr = t), !0)
      : ((yr = null), !1);
  }
  var Ef = typeof setTimeout == "function" ? setTimeout : void 0,
    Ty = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rp = typeof Promise == "function" ? Promise : void 0,
    sp =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ef,
    My =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rp != "undefined"
          ? function (t) {
              return rp.resolve(null).then(t).catch(Oy);
            }
          : Ef;
  function Oy(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Oa(t) {
    return t === "head";
  }
  function fp(t, e) {
    var n = e,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((t.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (t.removeChild(l), $l(e));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") Sr(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), Sr(n));
          for (var i = n.firstChild; i;) {
            var u = i.nextSibling,
              o = i.nodeName;
            (i[uu] ||
              o === "SCRIPT" ||
              o === "STYLE" ||
              (o === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(i),
              (i = u));
          }
        } else n === "body" && Sr(t.ownerDocument.body);
      n = l;
    } while (n);
    $l(e);
  }
  function dp(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function oh(t, e, n) {
    if (
      ((e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e),
      (t.style.viewTransitionName = e),
      n != null && (t.style.viewTransitionClass = n),
      (n = getComputedStyle(t)),
      n.display === "inline")
    ) {
      if (((e = t.getClientRects()), e.length === 1)) var a = 1;
      else
        for (var l = (a = 0); l < e.length; l++) {
          var i = e[l];
          0 < i.width && 0 < i.height && a++;
        }
      a === 1 &&
        ((t = t.style),
        (t.display = e.length === 1 ? "inline-block" : "block"),
        (t.marginTop = "-" + n.paddingTop),
        (t.marginBottom = "-" + n.paddingBottom));
    }
  }
  function ch(t, e) {
    ((t = t.style), (e = e.style));
    var n =
      e != null
        ? e.hasOwnProperty("viewTransitionName")
          ? e.viewTransitionName
          : e.hasOwnProperty("view-transition-name")
            ? e["view-transition-name"]
            : null
        : null;
    ((t.viewTransitionName =
      n == null || typeof n == "boolean" ? "" : ("" + n).trim()),
      (n =
        e != null
          ? e.hasOwnProperty("viewTransitionClass")
            ? e.viewTransitionClass
            : e.hasOwnProperty("view-transition-class")
              ? e["view-transition-class"]
              : null
          : null),
      (t.viewTransitionClass =
        n == null || typeof n == "boolean" ? "" : ("" + n).trim()),
      t.display === "inline-block" &&
        (e == null
          ? (t.display = t.margin = "")
          : ((n = e.display),
            (t.display = n == null || typeof n == "boolean" ? "" : n),
            (n = e.margin),
            n != null
              ? (t.margin = n)
              : ((n = e.hasOwnProperty("marginTop")
                  ? e.marginTop
                  : e["margin-top"]),
                (t.marginTop = n == null || typeof n == "boolean" ? "" : n),
                (e = e.hasOwnProperty("marginBottom")
                  ? e.marginBottom
                  : e["margin-bottom"]),
                (t.marginBottom =
                  e == null || typeof e == "boolean" ? "" : e)))));
  }
  function rh(t, e, n) {
    return (
      (n = n.ownerDocument.defaultView),
      {
        rect: t,
        abs: e.position === "absolute" || e.position === "fixed",
        clip:
          e.clipPath !== "none" ||
          e.overflow !== "visible" ||
          e.filter !== "none" ||
          e.mask !== "none" ||
          e.mask !== "none" ||
          e.borderRadius !== "0px",
        view:
          0 <= t.bottom &&
          0 <= t.right &&
          t.top <= n.innerHeight &&
          t.left <= n.innerWidth,
      }
    );
  }
  function Ts(t) {
    var e = t.getBoundingClientRect(),
      n = getComputedStyle(t);
    return rh(e, n, t);
  }
  function Ay(t) {
    var e = t.getBoundingClientRect();
    e = new DOMRect(e.x + 2e4, e.y + 2e4, e.width, e.height);
    var n = getComputedStyle(t);
    return rh(e, n, t);
  }
  function Cy(t) {
    return t.documentElement.clientHeight;
  }
  function ky(t) {
    (this.addEventListener("load", t), this.addEventListener("error", t));
  }
  function Dy(t, e, n, a, l, i, u, o, c) {
    var r = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var s = r.startViewTransition({
        update: function () {
          var g = r.defaultView,
            b = g.navigation && g.navigation.transition,
            w = r.fonts.status;
          a();
          var M = [];
          if (
            (w === "loaded" &&
              (Cy(r), r.fonts.status === "loading" && M.push(r.fonts.ready)),
            (w = M.length),
            t !== null)
          )
            for (var p = t.suspenseyImages, d = 0, m = 0; m < p.length; m++) {
              var h = p[m];
              if (!h.complete) {
                var y = h.getBoundingClientRect();
                if (
                  0 < y.bottom &&
                  0 < y.right &&
                  y.top < g.innerHeight &&
                  y.left < g.innerWidth
                ) {
                  if (((d += Sh(h)), d > mo)) {
                    M.length = w;
                    break;
                  }
                  ((h = new Promise(ky.bind(h))), M.push(h));
                }
              }
            }
          if (0 < M.length)
            return (
              (g = Promise.race([
                Promise.all(M),
                new Promise(function (x) {
                  return setTimeout(x, 500);
                }),
              ]).then(l, l)),
              (b ? Promise.allSettled([b.finished, g]) : g).then(i, i)
            );
          if ((l(), b)) return b.finished.then(i, i);
          i();
        },
        types: n,
      });
      r.__reactViewTransition = s;
      var f = [];
      return (
        s.ready.then(
          function () {
            for (
              var g = r.documentElement.getAnimations({ subtree: !0 }), b = 0;
              b < g.length;
              b++
            ) {
              var w = g[b],
                M = w.effect,
                p = M.pseudoElement;
              if (p != null && p.startsWith("::view-transition")) {
                (f.push(w), (w = M.getKeyframes()));
                for (var d = (p = void 0), m = !0, h = 0; h < w.length; h++) {
                  var y = w[h],
                    x = y.width;
                  if (p === void 0) p = x;
                  else if (p !== x) {
                    m = !1;
                    break;
                  }
                  if (((x = y.height), d === void 0)) d = x;
                  else if (d !== x) {
                    m = !1;
                    break;
                  }
                  (delete y.width,
                    delete y.height,
                    y.transform === "none" && delete y.transform);
                }
                m &&
                  p !== void 0 &&
                  d !== void 0 &&
                  (M.setKeyframes(w),
                  (m = getComputedStyle(M.target, M.pseudoElement)),
                  m.width !== p || m.height !== d) &&
                  ((m = w[0]),
                  (m.width = p),
                  (m.height = d),
                  (m = w[w.length - 1]),
                  (m.width = p),
                  (m.height = d),
                  M.setKeyframes(w));
              }
            }
            u();
          },
          function (g) {
            r.__reactViewTransition === s && (r.__reactViewTransition = null);
            try {
              (typeof g == "object" &&
                g !== null &&
                g.name === "InvalidStateError" &&
                (g.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  g.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  g.message ===
                    "Skipping view transition because viewport size changed." ||
                  g.message ===
                    "Transition was aborted because of invalid state") &&
                (g = null),
                g !== null && c(g));
            } finally {
              (a(), l(), u());
            }
          },
        ),
        s.finished.finally(function () {
          for (var g = 0; g < f.length; g++) f[g].cancel();
          (r.__reactViewTransition === s && (r.__reactViewTransition = null),
            o());
        }),
        s
      );
    } catch (g) {
      return (a(), l(), u(), null);
    }
  }
  function Ba(t, e) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + t + "(" + e + ")"));
  }
  Ba.prototype.animate = function (t, e) {
    return (
      (e = typeof e == "number" ? { duration: e } : rt({}, e)),
      (e.pseudoElement = this._selector),
      this._scope.animate(t, e)
    );
  };
  Ba.prototype.getAnimations = function () {
    for (
      var t = this._scope,
        e = this._selector,
        n = t.getAnimations({ subtree: !0 }),
        a = [],
        l = 0;
      l < n.length;
      l++
    ) {
      var i = n[l].effect;
      i !== null && i.target === t && i.pseudoElement === e && a.push(n[l]);
    }
    return a;
  };
  Ba.prototype.getComputedStyle = function () {
    return getComputedStyle(this._scope, this._selector);
  };
  function sh(t) {
    return {
      name: t,
      group: new Ba("group", t),
      imagePair: new Ba("image-pair", t),
      old: new Ba("old", t),
      new: new Ba("new", t),
    };
  }
  function Ae(t) {
    ((this._fragmentFiber = t),
      (this._observers = this._eventListeners = null));
  }
  Ae.prototype.addEventListener = function (t, e, n) {
    var a = null,
      l = null;
    if (!(
      n != null &&
      typeof n != "boolean" &&
      ((a = n.signal || null), a !== null && a.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (fh(i, t, e, n) === -1) {
        var u = this,
          o = e;
        (n != null &&
          typeof n != "boolean" &&
          n.once === !0 &&
          (o = function (c) {
            (u.removeEventListener(t, e, n),
              typeof e == "function" ? e.call(this, c) : e.handleEvent(c));
          }),
          a !== null &&
            ((l = u.removeEventListener.bind(u, t, e, n)),
            a.addEventListener("abort", l, { once: !0 }),
            (l = a.removeEventListener.bind(a, "abort", l))),
          (a = Vl(n)),
          i.push({
            type: t,
            listener: e,
            optionsOrUseCapture: n,
            attachedListener: o,
            cleanup: l,
          }),
          me(this._fragmentFiber.child, !1, _y, t, o, a));
      }
      this._eventListeners = i;
    }
  };
  function _y(t, e, n, a) {
    return (Ut(t).addEventListener(e, n, a), !1);
  }
  Ae.prototype.removeEventListener = function (t, e, n) {
    var a = this._eventListeners;
    if (a !== null && ((e = fh(a, t, e, n)), e !== -1)) {
      var l = a[e];
      n = l.attachedListener;
      var i = l.cleanup;
      ((l = Vl(l.optionsOrUseCapture)),
        me(this._fragmentFiber.child, !1, Ry, t, n, l),
        a.splice(e, 1),
        i !== null && i());
    }
  };
  function Ry(t, e, n, a) {
    return (Ut(t).removeEventListener(e, n, a), !1);
  }
  function Vl(t) {
    return t != null &&
      typeof t != "boolean" &&
      (t.once === !0 || t.signal instanceof AbortSignal)
      ? { capture: t.capture, passive: t.passive }
      : t;
  }
  function pp(t) {
    return t == null
      ? "c=0"
      : typeof t == "boolean"
        ? "c=" + (t ? "1" : "0")
        : "c=" + (t.capture ? "1" : "0");
  }
  function fh(t, e, n, a) {
    if (t.length === 0) return -1;
    a = pp(a);
    for (var l = 0; l < t.length; l++) {
      var i = t[l];
      if (i.type === e && i.listener === n && pp(i.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  Ae.prototype.dispatchEvent = function (t) {
    var e = Ia(this._fragmentFiber);
    if (e === null) return !0;
    e = Ut(e);
    var n = this._eventListeners;
    if ((n !== null && 0 < n.length) || !t.bubbles) {
      var a =
        e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.addEventListener(
            i.type,
            i.attachedListener,
            Vl(i.optionsOrUseCapture),
          );
        }
      if ((e.appendChild(a), (t = a.dispatchEvent(t)), n))
        for (l = 0; l < n.length; l++)
          ((i = n[l]),
            a.removeEventListener(
              i.type,
              i.attachedListener,
              Vl(i.optionsOrUseCapture),
            ));
      return (e.removeChild(a), t);
    }
    return e.dispatchEvent(t);
  };
  Ae.prototype.focus = function (t) {
    me(this._fragmentFiber.child, !0, dh, t, void 0, void 0);
  };
  function dh(t, e) {
    return t.tag === 6 ? !1 : ((t = Ut(t)), Zy(t, e));
  }
  Ae.prototype.focusLast = function (t) {
    var e = [];
    me(this._fragmentFiber.child, !0, Tf, e, void 0, void 0);
    for (var n = e.length - 1; 0 <= n && !dh(e[n], t); n--);
  };
  function Tf(t, e) {
    return (e.push(t), !1);
  }
  Ae.prototype.blur = function () {
    var t = Ia(this._fragmentFiber);
    t !== null &&
      ((t = Ut(t)),
      (t = Fi(t).activeElement),
      t !== null && me(this._fragmentFiber.child, !1, Uy, t, void 0, void 0));
  };
  function Uy(t, e) {
    return t.tag === 6
      ? !1
      : ((t = Ut(t)), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ae.prototype.observeUsing = function (t) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(t),
      me(this._fragmentFiber.child, !1, Hy, t, void 0, void 0));
  };
  function Hy(t, e) {
    return (t.tag === 6 || ((t = Ut(t)), e.observe(t)), !1);
  }
  Ae.prototype.unobserveUsing = function (t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      (e.delete(t), me(this._fragmentFiber.child, !1, jy, t, void 0, void 0));
      for (var n = (e = 0); n < Pe.length; n++) {
        var a = Pe[n];
        a.fragmentInstance === this && a.observer === t
          ? t.unobserve(a.instance)
          : (Pe[e++] = a);
      }
      Pe.length = e;
    }
  };
  function jy(t, e) {
    return (t.tag === 6 || ((t = Ut(t)), e.unobserve(t)), !1);
  }
  var Pe = [],
    xr = !1;
  function By(t, e, n) {
    (Pe.push({ fragmentInstance: t, observer: e, instance: n }),
      xr ||
        ((xr = !0),
        Ky(function () {
          xr = !1;
          var a = Pe;
          Pe = [];
          for (var l = 0; l < a.length; l++) {
            var i = a[l];
            i.observer.unobserve(i.instance);
          }
        })));
  }
  Ae.prototype.getClientRects = function () {
    var t = [];
    return (me(this._fragmentFiber.child, !1, qy, t, void 0, void 0), t);
  };
  function qy(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      (n.selectNodeContents(t), e.push.apply(e, n.getClientRects()));
    } else ((t = Ut(t)), e.push.apply(e, t.getClientRects()));
    return !1;
  }
  Ae.prototype.getRootNode = function (t) {
    var e = Ia(this._fragmentFiber);
    return e === null ? this : Ut(e).getRootNode(t);
  };
  Ae.prototype.compareDocumentPosition = function (t) {
    var e = Ia(this._fragmentFiber);
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    me(this._fragmentFiber.child, !1, Tf, n, void 0, void 0);
    var a = Ut(e);
    if (n.length === 0) {
      if (((n = a), Zd(this._fragmentFiber))) {
        t: {
          for (e = this._fragmentFiber.return; e !== null;) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27) break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var l = (a = n.compareDocumentPosition(t));
      return (
        n === t
          ? (l = Node.DOCUMENT_POSITION_CONTAINS)
          : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
            ((n = Rp(e)[1]),
            n === null
              ? (l = Node.DOCUMENT_POSITION_PRECEDING)
              : ((t = Ut(n).compareDocumentPosition(t)),
                (l =
                  t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING
                    ? Node.DOCUMENT_POSITION_FOLLOWING
                    : Node.DOCUMENT_POSITION_PRECEDING))),
        (l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      );
    }
    ((e = Ut(n[0])), (l = Ut(n[n.length - 1])));
    var i = Zd(this._fragmentFiber) ? e.parentElement : a;
    if (i == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    ((a = i.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY),
      (i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY));
    var u = e.compareDocumentPosition(t),
      o = l.compareDocumentPosition(t),
      c =
        u & Node.DOCUMENT_POSITION_CONTAINED_BY ||
        o & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return (
      (o =
        a &&
        i &&
        u & Node.DOCUMENT_POSITION_FOLLOWING &&
        o & Node.DOCUMENT_POSITION_PRECEDING),
      (e =
        (a && e === t) || (i && l === t) || c || o
          ? Node.DOCUMENT_POSITION_CONTAINED_BY
          : (!a && e === t) || (!i && l === t)
            ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
            : u),
      e & Node.DOCUMENT_POSITION_DISCONNECTED ||
      e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
      Yy(e, this._fragmentFiber, n[0], n[n.length - 1], t)
        ? e
        : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    );
  };
  function Yy(t, e, n, a, l) {
    var i = ja(l);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((n = !!i))
        t: {
          for (; i !== null;) {
            if (i.tag === 7 && (i === e || i.alternate === e)) {
              n = !0;
              break t;
            }
            i = i.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (i === null)
        return (
          (i = l.ownerDocument),
          l === i || l === i.documentElement || l === i.body
        );
      t: {
        for (i = e, e = Ia(e); i !== null;) {
          if (!(
            (i.tag !== 5 && i.tag !== 3 && i.tag !== 27) ||
            (i !== e && i.alternate !== e)
          )) {
            i = !0;
            break t;
          }
          i = i.return;
        }
        i = !1;
      }
      return i;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING
      ? ((e = !!i) &&
          !(e = i === n) &&
          ((e = wr(n, i, Kd)),
          e === null
            ? (e = !1)
            : (me(e, !0, hb, i, n), (i = gl), (gl = null), (e = i !== null))),
        e)
      : t & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((e = !!i) &&
            !(e = i === a) &&
            ((e = wr(a, i, Kd)),
            e === null
              ? (e = !1)
              : (me(e, !0, bb, i, a),
                (i = gl),
                (Nr = gl = null),
                (e = i !== null))),
          e)
        : !1;
  }
  function mp(t, e) {
    var n = t.ownerDocument.createRange();
    (n.selectNodeContents(t),
      (t = n.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + t.left,
        e
          ? window.scrollY + t.top
          : window.scrollY + t.bottom - window.innerHeight,
      ));
  }
  Ae.prototype.scrollIntoView = function (t) {
    if (typeof t == "object") throw Error(O(566));
    var e = [];
    me(this._fragmentFiber.child, !1, Tf, e, void 0, void 0);
    var n = t !== !1;
    if (e.length === 0) {
      var a = Rp(this._fragmentFiber);
      if (
        ((a = n ? a[1] || a[0] || Ia(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((t = Ut(a)), mp(t, n));
        return;
      }
      if (((a = Ut(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((n = "host" in a ? a.host : null),
            n !== null && n.scrollIntoView(t));
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length);) {
      var l = e[a];
      (l.tag === 6 ? ((l = Ut(l)), mp(l, n)) : Ut(l).scrollIntoView(t),
        (a += n ? -1 : 1));
    }
  };
  function Gy(t, e) {
    return ((t = Ut(t)), ph(t, e), !1);
  }
  function ph(t, e) {
    (t.reactFragments == null && (t.reactFragments = new Set()),
      t.reactFragments.add(e));
  }
  function mh(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        t.addEventListener(
          l.type,
          l.attachedListener,
          Vl(l.optionsOrUseCapture),
        );
      }
    t.nodeType !== 3 &&
      ((n = e._observers),
      n !== null &&
        n.forEach(function (i) {
          for (var u = 0, o = 0; o < Pe.length; o++) {
            var c = Pe[o];
            (c.fragmentInstance !== e ||
              c.observer !== i ||
              c.instance !== t) &&
              (Pe[u++] = c);
          }
          ((Pe.length = u), i.observe(t));
        }),
      ph(t, e));
  }
  function Ly(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        t.removeEventListener(
          l.type,
          l.attachedListener,
          Vl(l.optionsOrUseCapture),
        );
      }
    t.nodeType !== 3 &&
      ((n = e._observers),
      n !== null &&
        n.forEach(function (i) {
          typeof i.rootMargin == "string" ? By(e, i, t) : i.unobserve(t);
        }),
      t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Ms(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Ms(n), Ko(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Xy(t, e, n, a) {
    for (; t.nodeType === 1;) {
      var l = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[uu])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== l.rel ||
                t.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (l.src == null ? null : l.src) ||
                  t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  t.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = Ze(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Qy(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function gh(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ze(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Os(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Mf(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Vy(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function Ze(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var As = null;
  function gp(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ze(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function hp(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Zy(t, e) {
    function n() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      (t.ownerDocument.addEventListener("focus", n, !0),
        (t.focus || HTMLElement.prototype.focus).call(t, e));
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function Ky(t) {
    sp(function () {
      sp(function (e) {
        return t(e);
      });
    });
  }
  function hh(t, e, n) {
    switch (((e = Fi(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(O(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(O(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(O(454));
        return t;
      default:
        throw Error(O(451));
    }
  }
  function bh(t, e, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && lt(t, e, a, null, Ny, l);
    }
    (n.dangerouslySetInnerHTML != null && (t.textContent = ""),
      t.onclick === bn && (t.onclick = null),
      Ko(t));
  }
  function Sr(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    Ko(t);
  }
  var Ke = new Map(),
    bp = new Set();
  function Ii(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Qn = et.d;
  et.d = { f: Jy, r: $y, D: Wy, C: Fy, L: Iy, m: Py, X: e2, S: t2, M: n2 };
  function Jy() {
    var t = Qn.f(),
      e = oc();
    return t || e;
  }
  function $y(t) {
    var e = Fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? eg(e) : Qn.r(t);
  }
  var ei = typeof document == "undefined" ? null : document;
  function vh(t, e, n) {
    var a = ei;
    if (a && typeof e == "string" && e) {
      var l = Xe(e);
      ((l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        bp.has(l) ||
          (bp.add(l),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(l) === null &&
            ((e = a.createElement("link")),
            Jt(e, "link", t),
            Yt(e),
            a.head.appendChild(e))));
    }
  }
  function Wy(t) {
    (Qn.D(t), vh("dns-prefetch", t, null));
  }
  function Fy(t, e) {
    (Qn.C(t, e), vh("preconnect", t, e));
  }
  function Iy(t, e, n) {
    Qn.L(t, e, n);
    var a = ei;
    if (a && t && e) {
      var l = 'link[rel="preload"][as="' + Xe(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + Xe(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + Xe(n.imageSizes) + '"]'))
        : (l += '[href="' + Xe(t) + '"]');
      var i = l;
      switch (e) {
        case "style":
          i = Zl(t);
          break;
        case "script":
          i = ni(t);
      }
      if (!(
        Ke.has(i) ||
        ((t = rt(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Ke.set(i, t),
        a.querySelector(l) !== null ||
          (e === "style" && a.querySelector(du(i))) ||
          (e === "script" && a.querySelector(pu(i))))
      )) {
        var u = a.createElement("link");
        (Jt(u, "link", t),
          e === "style" &&
            ((u[So] = !0),
            (u.onload = u.onerror =
              function () {
                Kp(u);
              })),
          Yt(u),
          a.head.appendChild(u));
      }
    }
  }
  function Py(t, e) {
    Qn.m(t, e);
    var n = ei;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        l =
          'link[rel="modulepreload"][as="' + Xe(a) + '"][href="' + Xe(t) + '"]',
        i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = ni(t);
      }
      if (
        !Ke.has(i) &&
        ((t = rt({ rel: "modulepreload", href: t }, e)),
        Ke.set(i, t),
        n.querySelector(l) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(pu(i))) return;
        }
        ((a = n.createElement("link")),
          Jt(a, "link", t),
          Yt(a),
          n.head.appendChild(a));
      }
    }
  }
  function t2(t, e, n) {
    Qn.S(t, e, n);
    var a = ei;
    if (a && t) {
      var l = Ml(a).hoistableStyles,
        i = Zl(t);
      e = e || "default";
      var u = l.get(i);
      if (!u) {
        var o = { loading: 0, preload: null };
        if ((u = a.querySelector(du(i)))) o.loading = 5;
        else {
          ((t = rt({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ke.get(i)) && Of(t, n));
          var c = (u = a.createElement("link"));
          (Yt(c),
            Jt(c, "link", t),
            (c._p = new Promise(function (r, s) {
              ((c.onload = r), (c.onerror = s));
            })),
            c.addEventListener("load", function () {
              o.loading |= 1;
            }),
            c.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            fo(u, e, a));
        }
        ((u = { type: "stylesheet", instance: u, count: 1, state: o }),
          l.set(i, u));
      }
    }
  }
  function e2(t, e) {
    Qn.X(t, e);
    var n = ei;
    if (n && t) {
      var a = Ml(n).hoistableScripts,
        l = ni(t),
        i = a.get(l);
      i ||
        ((i = n.querySelector(pu(l))),
        i ||
          ((t = rt({ src: t, async: !0 }, e)),
          (e = Ke.get(l)) && Af(t, e),
          (i = n.createElement("script")),
          Yt(i),
          Jt(i, "link", t),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(l, i));
    }
  }
  function n2(t, e) {
    Qn.M(t, e);
    var n = ei;
    if (n && t) {
      var a = Ml(n).hoistableScripts,
        l = ni(t),
        i = a.get(l);
      i ||
        ((i = n.querySelector(pu(l))),
        i ||
          ((t = rt({ src: t, async: !0, type: "module" }, e)),
          (e = Ke.get(l)) && Af(t, e),
          (i = n.createElement("script")),
          Yt(i),
          Jt(i, "link", t),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(l, i));
    }
  }
  function vp(t, e, n, a) {
    var l = (l = da.current) ? Ii(l) : null;
    if (!l) throw Error(O(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((n = Zl(n.href)),
            (e = Ml(l).hoistableStyles),
            (a = e.get(n)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(n, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Zl(n.href);
          var i = Ml(l).hoistableStyles,
            u = i.get(t);
          if (
            (u ||
              ((l = l.ownerDocument || l),
              (u = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, u),
              (i = l.querySelector(du(t)))
                ? i._p || ((u.instance = i), (u.state.loading = 5))
                : ((i = Ke.get(t)),
                  i ||
                    ((i = {
                      rel: "preload",
                      as: "style",
                      href: n.href,
                      crossOrigin: n.crossOrigin,
                      integrity: n.integrity,
                      media: n.media,
                      hrefLang: n.hrefLang,
                      referrerPolicy: n.referrerPolicy,
                    }),
                    Ke.set(t, i)),
                  a2(l, t, i, u.state))),
            e && a === null)
          )
            throw Error(O(528, ""));
          return u;
        }
        if (e && a !== null) throw Error(O(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((n = ni(n)),
              (e = Ml(l).hoistableScripts),
              (a = e.get(n)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(n, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(O(444, t));
    }
  }
  function Zl(t) {
    return 'href="' + Xe(t) + '"';
  }
  function du(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function yh(t) {
    return rt({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function a2(t, e, n, a) {
    if ((e = t.querySelector('link[rel="preload"][as="style"][' + e + "]"))) {
      if (e[So] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((e = t.createElement("link")),
        (e[So] = !0),
        (e.onload = e.onerror = Kp.bind(null, e)),
        Jt(e, "link", n),
        Yt(e),
        t.head.appendChild(e));
    ((a.preload = e),
      e.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      e.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function ni(t) {
    return '[src="' + Xe(t) + '"]';
  }
  function pu(t) {
    return "script[async]" + t;
  }
  function yp(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Xe(n.href) + '"]');
          if (a) return ((e.instance = a), Yt(a), a);
          var l = rt({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Yt(a),
            Jt(a, "style", l),
            fo(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          l = Zl(n.href);
          var i = t.querySelector(du(l));
          if (i) return ((e.state.loading |= 4), (e.instance = i), Yt(i), i);
          ((a = yh(n)),
            (l = Ke.get(l)) && Of(a, l),
            (i = (t.ownerDocument || t).createElement("link")),
            Yt(i));
          var u = i;
          return (
            (u._p = new Promise(function (o, c) {
              ((u.onload = o), (u.onerror = c));
            })),
            Jt(i, "link", a),
            (e.state.loading |= 4),
            fo(i, n.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = ni(n.src)),
            (l = t.querySelector(pu(i)))
              ? ((e.instance = l), Yt(l), l)
              : ((a = n),
                (l = Ke.get(i)) && ((a = rt({}, n)), Af(a, l)),
                (t = t.ownerDocument || t),
                (l = t.createElement("script")),
                Yt(l),
                Jt(l, "link", a),
                t.head.appendChild(l),
                (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(O(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), fo(a, n.precedence, t));
    return e.instance;
  }
  function fo(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = a.length ? a[a.length - 1] : null,
        i = l,
        u = 0;
      u < a.length;
      u++
    ) {
      var o = a[u];
      if (o.dataset.precedence === e) i = o;
      else if (i !== l) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Of(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Af(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var po = null;
  function xp(t, e, n) {
    if (po === null) {
      var a = new Map(),
        l = (po = new Map());
      l.set(n, a);
    } else ((l = po), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), l = 0;
      l < n.length;
      l++
    ) {
      var i = n[l];
      if (
        !(
          i[uu] ||
          i[Qt] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var o = a.get(u);
        o ? o.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function Cs(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function l2(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Sp(t, e) {
    return (
      t === "img" &&
      e.src != null &&
      e.src !== "" &&
      e.onLoad == null &&
      e.loading !== "lazy"
    );
  }
  function xh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Sh(t) {
    return (
      (t.width || 100) *
      (t.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function Np(t, e) {
    typeof e.decode == "function" &&
      (t.imgCount++,
      e.complete || ((t.imgBytes += Sh(e)), t.suspenseyImages.push(e)),
      (t = o2.bind(t)),
      e.decode().then(t, t));
  }
  function i2(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Zl(a.href),
          i = e.querySelector(du(l));
        if (i) {
          ((e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Pi.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = i),
            Yt(i));
          return;
        }
        ((i = e.ownerDocument || e),
          (a = yh(a)),
          (l = Ke.get(l)) && Of(a, l),
          (i = i.createElement("link")),
          Yt(i));
        var u = i;
        ((u._p = new Promise(function (o, c) {
          ((u.onload = o), (u.onerror = c));
        })),
          Jt(i, "link", a),
          (n.instance = i));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Pi.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var mo = 0;
  function u2(t, e) {
    return (
      t.stylesheets && t.count === 0 && go(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && go(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                ((t.unsuspend = null), i());
              }
            }, 6e4 + e);
            0 < t.imgBytes && mo === 0 && (mo = 62500 * zy());
            var l = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && go(t, t.stylesheets), t.unsuspend))
                ) {
                  var i = t.unsuspend;
                  ((t.unsuspend = null), i());
                }
              },
              (t.imgBytes > mo ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Nh(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) go(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        ((t.unsuspend = null), e());
      }
    }
  }
  function Pi() {
    (this.count--, Nh(this));
  }
  function o2() {
    (this.imgCount--, Nh(this));
  }
  var Qo = null;
  function go(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Qo = new Map()),
        e.forEach(c2, t),
        (Qo = null),
        Pi.call(t)));
  }
  function c2(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Qo.get(t);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Qo.set(t, n));
        for (
          var l = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < l.length;
          i++
        ) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
            (n.set(u.dataset.precedence, u), (a = u));
        }
        a && n.set(null, a);
      }
      ((l = e.instance),
        (u = l.getAttribute("data-precedence")),
        (i = n.get(u) || a),
        i === a && n.set(null, l),
        n.set(u, l),
        this.count++,
        (a = Pi.bind(this)),
        l.addEventListener("load", a),
        l.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(l, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Kl = {
    $$typeof: hn,
    Provider: null,
    Consumer: null,
    _currentValue: qa,
    _currentValue2: qa,
    _threadCount: 0,
  };
  function r2(t, e, n, a, l, i, u, o, c) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $c(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $c(0)),
      (this.hiddenUpdates = $c(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function wh(t, e, n, a, l, i, u, o, c, r, s, f) {
    return (
      (t = new r2(t, e, n, u, c, r, s, f, o)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = de(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Js()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: a, isDehydrated: n, cache: e }),
      Fs(i),
      t
    );
  }
  function zh(t) {
    return t ? ((t = wl), t) : wl;
  }
  function Eh(t, e, n, a, l, i) {
    ((l = zh(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = ma(e)),
      (a.payload = { element: n }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (n = ga(t, a, e)),
      n !== null && (pe(n, t, e), ki(n, t, e)));
  }
  function wp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Cf(t, e) {
    (wp(t, e), (t = t.alternate) && wp(t, e));
  }
  function Th(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = el(t, 67108864);
      (e !== null && pe(e, t, 67108864), Cf(t, 67108864));
    }
  }
  function zp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Me();
      e = Hs(e);
      var n = el(t, e);
      (n !== null && pe(n, t, e), Cf(t, e));
    }
  }
  var Jl = !0;
  function s2(t, e, n, a) {
    var l = H.T;
    H.T = null;
    var i = et.p;
    try {
      ((et.p = 2), kf(t, e, n, a));
    } finally {
      ((et.p = i), (H.T = l));
    }
  }
  function f2(t, e, n, a) {
    var l = H.T;
    H.T = null;
    var i = et.p;
    try {
      ((et.p = 8), kf(t, e, n, a));
    } finally {
      ((et.p = i), (H.T = l));
    }
  }
  function kf(t, e, n, a) {
    if (Jl) {
      var l = ks(a);
      if (l === null) (vr(t, e, a, Vo, n), Ep(t, a));
      else if (p2(l, t, e, n, a)) a.stopPropagation();
      else if ((Ep(t, a), e & 4 && -1 < d2.indexOf(t))) {
        for (; l !== null;) {
          var i = Fl(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = Ra(i.pendingLanes);
                  if (u !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; u;) {
                      var c = 1 << (31 - Te(u));
                      ((o.entanglements[1] |= c), (u &= ~c));
                    }
                    (zn(i), (tt & 6) === 0 && ((qo = ze() + 500), fu(0, !1)));
                  }
                }
                break;
              case 31:
              case 13:
                ((o = el(i, 2)), o !== null && pe(o, i, 2), oc(), Cf(i, 2));
            }
          if (((i = ks(a)), i === null && vr(t, e, a, Vo, n), i === l)) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else vr(t, e, a, null, n);
    }
  }
  function ks(t) {
    return ((t = qs(t)), Df(t));
  }
  var Vo = null;
  function Df(t) {
    if (((Vo = null), (t = ja(t)), t !== null)) {
      var e = nu(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = kp(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = Dp(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Vo = t), null);
  }
  function Mh(t) {
    switch (t) {
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
      case "fullscreenerror":
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Tb()) {
          case Bp:
            return 2;
          case qp:
            return 8;
          case xo:
          case Mb:
            return 32;
          case Yp:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ds = !1,
    ya = null,
    xa = null,
    Sa = null,
    tu = new Map(),
    eu = new Map(),
    ia = [],
    d2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Ep(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ya = null;
        break;
      case "dragenter":
      case "dragleave":
        xa = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        tu.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        eu.delete(e.pointerId);
    }
  }
  function xi(t, e, n, a, l, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [l],
        }),
        e !== null && ((e = Fl(e)), e !== null && Th(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t);
  }
  function p2(t, e, n, a, l) {
    switch (e) {
      case "focusin":
        return ((ya = xi(ya, t, e, n, a, l)), !0);
      case "dragenter":
        return ((xa = xi(xa, t, e, n, a, l)), !0);
      case "mouseover":
        return ((Sa = xi(Sa, t, e, n, a, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (tu.set(i, xi(tu.get(i) || null, t, e, n, a, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          eu.set(i, xi(eu.get(i) || null, t, e, n, a, l)),
          !0
        );
    }
    return !1;
  }
  function Oh(t) {
    var e = ja(t.target);
    if (e !== null) {
      var n = nu(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = kp(n)), e !== null)) {
            ((t.blockedOn = e),
              Fd(t.priority, function () {
                zp(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = Dp(n)), e !== null)) {
            ((t.blockedOn = e),
              Fd(t.priority, function () {
                zp(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ho(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = ks(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Ur = a), n.target.dispatchEvent(a), (Ur = null));
      } else return ((e = Fl(n)), e !== null && Th(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Tp(t, e, n) {
    ho(t) && n.delete(e);
  }
  function m2() {
    ((Ds = !1),
      ya !== null && ho(ya) && (ya = null),
      xa !== null && ho(xa) && (xa = null),
      Sa !== null && ho(Sa) && (Sa = null),
      tu.forEach(Tp),
      eu.forEach(Tp));
  }
  function $u(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Ds ||
        ((Ds = !0),
        Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, m2)));
  }
  var Wu = null;
  function Mp(t) {
    Wu !== t &&
      ((Wu = t),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, function () {
        Wu === t && (Wu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            l = t[e + 2];
          if (typeof a != "function") {
            if (Df(a || n) === null) continue;
            break;
          }
          var i = Fl(n);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Fr(i, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function $l(t) {
    function e(c) {
      return $u(c, t);
    }
    (ya !== null && $u(ya, t),
      xa !== null && $u(xa, t),
      Sa !== null && $u(Sa, t),
      tu.forEach(e),
      eu.forEach(e));
    for (var n = 0; n < ia.length; n++) {
      var a = ia[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ia.length && ((n = ia[0]), n.blockedOn === null);)
      (Oh(n), n.blockedOn === null && ia.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          i = n[a + 1],
          u = l[ge] || null;
        if (typeof i == "function") u || Mp(n);
        else if (u) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (((l = i), (u = i[ge] || null))) o = u.formAction;
            else if (Df(l) !== null) continue;
          } else o = u.action;
          (typeof o == "function" ? (n[a + 1] = o) : (n.splice(a, 3), (a -= 3)),
            Mp(n));
        }
      }
  }
  function Ah() {
    function t(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (u) {
              return (l = u);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (l !== null && (l(), (l = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function _f(t) {
    this._internalRoot = t;
  }
  sc.prototype.render = _f.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(O(409));
    var n = e.current,
      a = Me();
    Eh(n, a, t, e, null, null);
  };
  sc.prototype.unmount = _f.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      (Eh(t.current, 2, null, t, null, null), oc(), (e[Wl] = null));
    }
  };
  function sc(t) {
    this._internalRoot = t;
  }
  sc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Zp();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ia.length && e !== 0 && e < ia[n].priority; n++);
      (ia.splice(n, 0, t), n === 0 && Oh(t));
    }
  };
  var Op = Ap.version;
  if (Op !== "19.3.0") throw Error(O(527, Op, "19.3.0"));
  et.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(O(188))
        : ((t = Object.keys(t).join(",")), Error(O(268, t)));
    return (
      (t = gb(e)),
      (t = t !== null ? _p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var g2 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.3.0",
  };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
    ((Si = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Si.isDisabled && Si.supportsFiber)
  )
    try {
      ((au = Si.inject(g2)), (Ee = Si));
    } catch (t) {}
  var Si;
  fc.createRoot = function (t, e) {
    if (!Cp(t)) throw Error(O(299));
    var n = !1,
      a = "",
      l = rg,
      i = sg,
      u = fg;
    return (
      e != null &&
        (e.unstable_strictMode === !0 && (n = !0),
        e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
        e.onCaughtError !== void 0 && (i = e.onCaughtError),
        e.onRecoverableError !== void 0 && (u = e.onRecoverableError)),
      (e = wh(t, 1, !1, null, null, n, a, null, l, i, u, Ah)),
      (t[Wl] = e.current),
      zf(t),
      new _f(e)
    );
  };
  fc.hydrateRoot = function (t, e, n) {
    if (!Cp(t)) throw Error(O(299));
    var a = !1,
      l = "",
      i = rg,
      u = sg,
      o = fg,
      c = null;
    return (
      n != null &&
        (n.unstable_strictMode === !0 && (a = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (i = n.onUncaughtError),
        n.onCaughtError !== void 0 && (u = n.onCaughtError),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError),
        n.formState !== void 0 && (c = n.formState)),
      (e = wh(t, 1, !0, e, n != null ? n : null, a, l, c, i, u, o, Ah)),
      (e.context = zh(null)),
      (n = e.current),
      (a = Me()),
      (a = Hs(a)),
      (l = ma(a)),
      (l.callback = null),
      ga(n, l, a),
      (n = a),
      (e.current.lanes = n),
      iu(e, n),
      zn(e),
      (t[Wl] = e.current),
      zf(t),
      new sc(e)
    );
  };
  fc.version = "19.3.0";
});
var Rf = cn((Ox, Dh) => {
  "use strict";
  function kh() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kh);
      } catch (t) {
        console.error(t);
      }
  }
  (kh(), (Dh.exports = Ch()));
});
var Kh = cn((vc) => {
  "use strict";
  var S2 = Symbol.for("react.transitional.element"),
    N2 = Symbol.for("react.fragment");
  function Zh(t, e, n) {
    var a = null;
    if (
      (n !== void 0 && (a = "" + n),
      e.key !== void 0 && (a = "" + e.key),
      "key" in e)
    ) {
      n = {};
      for (var l in e) l !== "key" && (n[l] = e[l]);
    } else n = e;
    return (
      (e = n.ref),
      { $$typeof: S2, type: t, key: a, ref: e !== void 0 ? e : null, props: n }
    );
  }
  vc.Fragment = N2;
  vc.jsx = Zh;
  vc.jsxs = Zh;
});
var ce = cn((Lx, Jh) => {
  "use strict";
  Jh.exports = Kh();
});
var vx = {};
Ac(vx, { default: () => Mc });
module.exports = V1(vx);
var q1 = require("obsidian");
var N1 = require("obsidian");
var D5 = yt(rn(), 1),
  x1 = yt(Rf(), 1);
var st = yt(rn(), 1),
  d1 = yt(Rf(), 1);
var Hf = {};
Ac(Hf, {
  concepts: () => Uh,
  notes: () => pc,
  postContent: () => Rh,
  posts: () => dc,
  seedDrafts: () => gc,
  seedIdeas: () => mc,
  snapshot: () => _h,
});
var Uf = {};
Ac(Uf, {
  concepts: () => Uh,
  notes: () => pc,
  postContent: () => Rh,
  posts: () => dc,
  seedDrafts: () => gc,
  seedIdeas: () => mc,
  snapshot: () => _h,
});
var _h = {
    account: "个人知识库 · 虚构演示",
    followers: 2400,
    capturedAt: "2026-06-30",
    publishedFrom: "2026-06-09",
    publishedTo: "2026-06-28",
    source: "完全合成的演示资源与笔记",
  },
  dc = [
    {
      id: "w20",
      title: "窗边的四季观察",
      date: "2026-06-28 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w19",
      title: "一张桌子的收纳实验",
      date: "2026-06-27 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w18",
      title: "雨天散步的颜色记录",
      date: "2026-06-26 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w17",
      title: "社区花园的周末计划",
      date: "2026-06-25 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w16",
      title: "为读书角设计一盏灯",
      date: "2026-06-24 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w15",
      title: "旧物改造的材料清单",
      date: "2026-06-23 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w14",
      title: "厨房动线的小改动",
      date: "2026-06-22 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w13",
      title: "阳台上的三盆香草",
      date: "2026-06-21 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w12",
      title: "一次失败的面包记录",
      date: "2026-06-20 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w11",
      title: "通勤路上听的书",
      date: "2026-06-19 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w10",
      title: "手冲咖啡的水温笔记",
      date: "2026-06-18 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w09",
      title: "换季衣物的折叠法",
      date: "2026-06-17 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w08",
      title: "夜里的城市声音",
      date: "2026-06-16 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w07",
      title: "纸与布的质感对照",
      date: "2026-06-15 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w06",
      title: "周末市集的手作摊",
      date: "2026-06-14 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w05",
      title: "一盏灯的拆解记录",
      date: "2026-06-13 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w04",
      title: "关于睡眠的三篇文章",
      date: "2026-06-12 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w03",
      title: "笔记工具的选择思路",
      date: "2026-06-11 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w02",
      title: "整理旧照片的顺序",
      date: "2026-06-10 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
    {
      id: "w01",
      title: "一本讲整理的书",
      date: "2026-06-09 12:30",
      views: 0,
      likes: 0,
      comments: 0,
      saves: 0,
      follows: 0,
      shares: 0,
      impressions: 0,
      ctr: 0,
      duration: null,
    },
  ],
  Rh = [
    {
      title: "窗边的四季观察",
      body: `https://example.com/four-seasons-by-the-window

虚构演示资源。观察窗边光线在四季的变化，整理成一份长期记录。

关键点是坚持同一视角、同一时间，才能看出差别。`,
      tags: ["分类:参考", "生活实验", "观察记录", "待读"],
    },
    {
      title: "一张桌子的收纳实验",
      body: `https://example.com/desk-storage-experiment

虚构演示资源。把桌面分成常用与备用两区，记录一周后的回乱情况。

结论是抽屉比收纳盒更能维持整洁。`,
      tags: ["分类:工具", "生活实验", "观察记录", "待读"],
    },
    {
      title: "雨天散步的颜色记录",
      body: `https://example.com/rainy-walk-colors

虚构演示资源。雨天里饱和度会升高，记录下几组配色。

可用作四季色彩卡的素材。`,
      tags: ["分类:灵感", "创意练习", "观察记录", "待读"],
    },
    {
      title: "社区花园的周末计划",
      body: `https://example.com/community-garden-weekend

虚构演示资源。社区花园的排班与种植清单。

想照着做一个小型版本。`,
      tags: ["分类:待读", "生活实验", "观察记录", "待读"],
    },
    {
      title: "为读书角设计一盏灯",
      body: `https://example.com/reading-corner-lamp

虚构演示资源。阅读角灯具的色温与照度选择。

重点是避免眩光。`,
      tags: ["分类:参考", "创意练习", "观察记录", "待读"],
    },
    {
      title: "旧物改造的材料清单",
      body: `https://example.com/upcycling-material-list

虚构演示资源。旧物改造常用的材料与工具清单。

按材质分类，方便查找。`,
      tags: ["分类:工具", "材料整理", "观察记录", "待读"],
    },
    {
      title: "厨房动线的小改动",
      body: `https://example.com/kitchen-workflow-tweak

虚构演示资源。厨房动线的三个小改动与效果。

改动都不花钱，值得试。`,
      tags: ["分类:待读", "生活实验", "观察记录", "待读"],
    },
    {
      title: "阳台上的三盆香草",
      body: `https://example.com/balcony-three-herbs

虚构演示资源。阳台种香草的日照与浇水记录。

薄荷最好养，罗勒最难。`,
      tags: ["分类:灵感", "生活实验", "观察记录", "待读"],
    },
    {
      title: "一次失败的面包记录",
      body: `https://example.com/failed-bread-notes

虚构演示资源。一次失败的面包与原因分析。

发酵温度是主因。`,
      tags: ["分类:参考", "材料整理", "观察记录", "已读"],
    },
    {
      title: "通勤路上听的书",
      body: `https://example.com/commute-audiobooks

虚构演示资源。通勤路上听完的几本书与笔记。

有声书适合重读熟悉的书。`,
      tags: ["分类:待读", "创意练习", "观察记录", "已读"],
    },
    {
      title: "手冲咖啡的水温笔记",
      body: `https://example.com/pour-over-water-temp

虚构演示资源。不同水温对手冲风味的影响。

记录了一张对照表。`,
      tags: ["分类:工具", "生活实验", "观察记录", "已读"],
    },
    {
      title: "换季衣物的折叠法",
      body: `https://example.com/seasonal-folding-method

虚构演示资源。换季衣物的折叠与收纳顺序。

竖放比叠放省空间。`,
      tags: ["分类:灵感", "材料整理", "观察记录", "已读"],
    },
    {
      title: "夜里的城市声音",
      body: `https://example.com/city-sounds-at-night

虚构演示资源。夜里城市声音的采集与分类。

可用作白噪音素材。`,
      tags: ["分类:参考", "创意练习", "观察记录", "已读"],
    },
    {
      title: "纸与布的质感对照",
      body: `https://example.com/paper-vs-fabric-texture

虚构演示资源。纸与布在光下的质感差异。

拍了一组对照照片。`,
      tags: ["分类:待读", "材料整理", "观察记录", "已读"],
    },
    {
      title: "周末市集的手作摊",
      body: `https://example.com/weekend-market-craft-stall

虚构演示资源。周末市集手作摊的陈列经验。

灯光很重要。`,
      tags: ["分类:灵感", "生活实验", "观察记录", "已读"],
    },
    {
      title: "一盏灯的拆解记录",
      body: `https://example.com/lamp-teardown-notes

虚构演示资源。一盏灯的拆解与内部结构记录。

可以照着改造成阅读灯。`,
      tags: ["分类:工具", "材料整理", "观察记录", "已读"],
    },
    {
      title: "关于睡眠的三篇文章",
      body: `https://example.com/three-articles-on-sleep

虚构演示资源。三篇关于睡眠的文章与要点摘录。

结论基本一致：固定起床时间。`,
      tags: ["分类:参考", "创意练习", "观察记录", "已读"],
    },
    {
      title: "笔记工具的选择思路",
      body: `https://example.com/note-tool-selection

虚构演示资源。选择笔记工具的几个判断维度。

先想清楚要记什么，再选工具。`,
      tags: ["分类:待读", "生活实验", "观察记录", "已读"],
    },
    {
      title: "整理旧照片的顺序",
      body: `https://example.com/old-photo-sorting-order

虚构演示资源。整理旧照片的顺序与命名规则。

按年份 + 事件命名最省事。`,
      tags: ["分类:灵感", "材料整理", "观察记录", "已读"],
    },
    {
      title: "一本讲整理的书",
      body: `https://example.com/a-book-about-organizing

虚构演示资源。一本讲整理的书与读书笔记。

核心是「先丢弃，再收纳」。`,
      tags: ["分类:参考", "创意练习", "观察记录", "已读"],
    },
  ],
  pc = [
    {
      id: "n1",
      title: "观察记录方法",
      path: "05-知识库 methods/流程/观察记录方法.md",
      body: `# 观察记录方法

虚构演示笔记。先观察并记录问题，再整理材料，使用模板安排实验，最后复盘。

参考 [[材料整理清单]] 和 [[窗边的四季观察]]。待补充 [[颜色研究清单]]。`,
    },
    {
      id: "n2",
      title: "材料整理清单",
      path: "05-知识库 methods/模板/材料整理清单.md",
      body: `# 材料整理清单

虚构演示笔记。先观察并记录问题，再整理材料，使用模板安排实验，最后复盘。

参考 [[实验计划模板]] 和 [[一张桌子的收纳实验]]。待补充 [[颜色研究清单]]。`,
    },
    {
      id: "n3",
      title: "实验计划模板",
      path: "05-知识库 methods/流程/实验计划模板.md",
      body: `# 实验计划模板

虚构演示笔记。先观察并记录问题，再整理材料，使用模板安排实验，最后复盘。

参考 [[展示页面模板]] 和 [[雨天散步的颜色记录]]。待补充 [[颜色研究清单]]。`,
    },
    {
      id: "n4",
      title: "展示页面模板",
      path: "05-知识库 methods/模板/展示页面模板.md",
      body: `# 展示页面模板

虚构演示笔记。先观察并记录问题，再整理材料，使用模板安排实验，最后复盘。

参考 [[每周回顾流程]] 和 [[社区花园的周末计划]]。待补充 [[颜色研究清单]]。`,
    },
    {
      id: "n5",
      title: "每周回顾流程",
      path: "05-知识库 methods/流程/每周回顾流程.md",
      body: `# 每周回顾流程

虚构演示笔记。先观察并记录问题，再整理材料，使用模板安排实验，最后复盘。

参考 [[灵感归档规则]] 和 [[为读书角设计一盏灯]]。待补充 [[颜色研究清单]]。`,
    },
    {
      id: "n6",
      title: "灵感归档规则",
      path: "05-知识库 methods/模板/灵感归档规则.md",
      body: `# 灵感归档规则

虚构演示笔记。先观察并记录问题，再整理材料，使用模板安排实验，最后复盘。

参考 [[观察记录方法]] 和 [[旧物改造的材料清单]]。待补充 [[颜色研究清单]]。`,
    },
  ],
  mc = [
    {
      id: 1,
      title: "搭建窗边阅读角",
      platform: "随手记",
      priority: "高",
      status: "待整理",
      note: "虚构演示灵感：观察、记录、整理与复盘。",
    },
    {
      id: 2,
      title: "制作四季色彩卡",
      platform: "随手记",
      priority: "中",
      status: "进行中",
      note: "虚构演示灵感：观察、记录、整理与复盘。",
    },
    {
      id: 3,
      title: "整理手作工具墙",
      platform: "随手记",
      priority: "高",
      status: "待整理",
      note: "虚构演示灵感：观察、记录、整理与复盘。",
    },
    {
      id: 4,
      title: "记录一周的光影",
      platform: "随手记",
      priority: "中",
      status: "已归档",
      note: "虚构演示灵感：观察、记录、整理与复盘。",
    },
  ],
  gc = [
    {
      id: "draft-1",
      title: "记录一周的光影",
      source: 4,
      body: "【虚构演示记忆库条目】按照 [[观察记录方法]] 收集不同时间的光影，再用 [[展示页面模板]] 组织内容。",
    },
    {
      id: "draft-2",
      title: "我的材料实验册",
      source: null,
      body: "【虚构演示记忆库条目】用 [[材料整理清单]] 记录纸张与布料，参考 [[每周回顾流程]] 复盘。",
    },
  ],
  Uh = [
    ["观察", ["观察"]],
    ["记录", ["记录"]],
    ["整理", ["整理"]],
    ["模板", ["模板"]],
    ["实验", ["实验"]],
    ["复盘", ["复盘"]],
    ["材料", ["材料"]],
    ["创意", ["创意"]],
  ];
var mu = null,
  jf = new Set(),
  gu = (t) => {
    mu = t;
    for (let e of [...jf]) e(mu);
  },
  Aa = () => mu,
  ai = (t) => (jf.add(t), () => jf.delete(t));
function Hh() {
  if (!mu)
    throw new Error(
      "还没有注入数据：请先调用 setData(...)（网页版在 src/neural/main.jsx 启动时注入 src/data）",
    );
  return mu;
}
var hu = () => {
    var t, e;
    return (e = (t = Aa()) == null ? void 0 : t.posts) != null ? e : [];
  },
  Bf = () => {
    var t, e;
    return (e = (t = Aa()) == null ? void 0 : t.postContent) != null ? e : [];
  },
  qf = () => {
    let t = hu();
    if (!t.length) return [];
    let e = t
      .map((n) => n.date)
      .sort()
      .pop();
    return t.filter((n) => n.date.slice(0, 7) === e.slice(0, 7));
  },
  nn = [],
  h2 = [],
  b2 = [],
  jh = () => {
    ((nn = hu()), (h2 = Bf()), (b2 = qf()));
  };
jh();
ai(jh);
var Wt = {
    brand: {
      name: "NEURAL",
      sub: "STUDIO",
      tagline: "创作神经网络",
      taglineEn: "Creative neural studio",
    },
    workspace: "我的创作空间",
    avatar: "avatar.svg",
    footer: {
      zh: "每一篇笔记，都是网络里的一个节点。",
      en: "Every note is a node in the network.",
    },
    storagePrefix: "neural-dashboard",
  },
  v2 = (t) => "" + t,
  Bh = v2,
  Ca = (t) => Bh(t),
  qh = (t) => {
    typeof t == "function" && (Bh = t);
  };
var L = {
  kinds: {
    core: "#ecd9a6",
    folder: "#d9b6c1",
    post: "#c0b8ef",
    note: "#a9dccb",
    idea: "#e8c48c",
    draft: "#a9d3e4",
    concept: "#e4e6e8",
    tag: "#98a6a1",
    ghost: "#70746f",
  },
  modules: {
    works: { color: "#c3bcf2", filter: "hue-rotate(215deg) saturate(1.1)" },
    concepts: {
      color: "#e2e5e8",
      filter: "hue-rotate(185deg) saturate(.3) brightness(1.15)",
    },
    methods: { color: "#ace0cf", filter: "hue-rotate(118deg) saturate(1)" },
    ideas: { color: "#ecc98f", filter: "saturate(1)" },
    drafts: { color: "#acd6e8", filter: "hue-rotate(158deg) saturate(1.05)" },
  },
  get media() {
    return {
      orb: Ca("media/orb.mp4"),
      orbPoster: Ca("media/orb.jpg"),
      jelly: Ca("media/jellyfish.mp4"),
      jellyPoster: Ca("media/jellyfish.jpg"),
    };
  },
  pulse: { out: ["#fffaf0", "#ecd39e"], in: ["#ffffff", "#e3b3c4"] },
  ring: ["#ecd9a6", "#c9cac5"],
  logo: ["#7d7f7c", "#d8d9d6", "#ecd9a6", "#a9aba7"],
  mini: {
    glow0: "#ffffff",
    core: "#c9d6e0",
    dot: "#f2f4f5",
    mutual: "#ecd39e",
    pulseOut: "#ffffff",
    pulseIn: "#e3b3c4",
  },
  dust: ["236,236,232", "230,207,152", "200,205,210", "255,255,255"],
  canvas: {
    additive: !0,
    mutual: "236,206,146",
    mutualIn: "232,176,196",
    wiki: "172,224,206",
    link: "205,208,204",
    pulseOne: "190,230,215",
    label: "#e6e7e3",
    spark: ["200,205,210", "225,228,232", "255,236,200"],
    glow: "66",
    light: "#ffffff",
  },
};
var gt = {
    core: { label: "创作空间", en: "Core", color: L.kinds.core },
    folder: { label: "目录", en: "Folder", color: L.kinds.folder },
    post: { label: "资源", en: "Resource", color: L.kinds.post },
    note: { label: "方法笔记", en: "Method note", color: L.kinds.note },
    idea: { label: "灵感", en: "Spark", color: L.kinds.idea },
    draft: { label: "记忆库", en: "Memories", color: L.kinds.draft },
    concept: { label: "概念", en: "Concept", color: L.kinds.concept },
    tag: { label: "话题", en: "Topic", color: L.kinds.tag },
    ghost: { label: "未创建", en: "Unresolved", color: L.kinds.ghost },
  },
  hc = {
    contain: "目录归属",
    wiki: "[[双链]]",
    source: "灵感来源",
    tag: "话题标签",
    mention: "正文提及",
    resonance: "双向共振",
  },
  Yf = {
    contain: "Contains",
    wiki: "Wikilink",
    source: "Source",
    tag: "Topic",
    mention: "Mention",
    resonance: "Resonance",
  },
  Ce = new Set(["post", "note", "idea", "draft"]),
  Lh = [
    { id: "f:works", title: "项目库", path: "02-项目库", angle: 180 },
    { id: "f:drafts", title: "记忆库", path: "03-记忆库", angle: 145 },
    { id: "f:ideas", title: "索引库", path: "04-索引库", angle: 35 },
    { id: "f:methods", title: "知识库", path: "05-知识库 wiki", angle: 0 },
  ],
  _t = [
    {
      id: "works",
      title: "项目库",
      en: "Projects",
      kind: "post",
      folder: "f:works",
      angle: 180,
      icon: "works",
      page: "library",
    },
    {
      id: "concepts",
      title: "概念网络",
      en: "Concepts",
      kind: "concept",
      angle: -90,
      icon: "concept",
    },
    {
      id: "methods",
      title: "知识库",
      en: "Wiki",
      kind: "note",
      folder: "f:methods",
      angle: 0,
      icon: "methods",
    },
    {
      id: "ideas",
      title: "索引库",
      en: "Index",
      kind: "idea",
      folder: "f:ideas",
      angle: 35,
      icon: "idea",
      page: "ideas",
    },
    {
      id: "drafts",
      title: "记忆库",
      en: "Memories",
      kind: "draft",
      folder: "f:drafts",
      angle: 145,
      icon: "draft",
      page: "drafts",
    },
  ],
  Xh = (t) => _t.find((e) => e.kind === (t == null ? void 0 : t.kind)) || null,
  Yh = (t) =>
    String(t || "")
      .replace(/^\d+[A-Z]?-☑️/, "")
      .replace(/^\d+-/, "")
      .replace(/_/g, " · "),
  y2 = (t, e, n) =>
    n.find((a) => {
      var l;
      return (
        a.title === ((l = e.find((i) => i.id === t)) == null ? void 0 : l.title)
      );
    });
function Qh({ ideas: t = [], drafts: e = [] } = {}) {
  let { posts: n, notes: a, concepts: l } = Hh(),
    i = Bf(),
    u = new Map(),
    o = (p) => (
      u.has(p.id) || u.set(p.id, { tags: [], text: "", ...p }),
      u.get(p.id)
    ),
    c = new Map(),
    r = (p, d, m, h = 1) => {
      if (!u.has(p) || !u.has(d) || p === d) return;
      let [y, x] = p < d ? [p, d] : [d, p],
        v = y + "|" + x + "|" + m,
        S = c.get(v) || { a: y, b: x, kind: m, ab: 0, ba: 0, w: 0 };
      (p === y ? (S.ab += 1) : (S.ba += 1),
        (S.w = Math.max(S.w, h)),
        c.set(v, S));
    };
  o({ id: "core", kind: "core", title: Wt.workspace, path: "/", text: "" });
  for (let p of Lh) (o({ ...p, kind: "folder" }), r("core", p.id, "contain"));
  for (let p of n) {
    let d = y2(p.id, n, i);
    (o({
      id: "post:" + p.id,
      kind: "post",
      title: p.title,
      short: p.title.replace(/^Obsidian[：:]/, ""),
      path: "02-项目库/" + p.title,
      folder: "f:works",
      text:
        p.title +
        `
` +
        ((d == null ? void 0 : d.body) || ""),
      body: (d == null ? void 0 : d.body) || "",
      date: p.date,
      post: p,
      media: d == null ? void 0 : d.media,
      cover: d == null ? void 0 : d.cover,
      tags: (d == null ? void 0 : d.tags) || [],
    }),
      r("f:works", "post:" + p.id, "contain"));
  }
  for (let p of a) {
    let d = p.path.split("/"),
      m = d[1],
      h = "f:" + m;
    (o({
      id: h,
      kind: "folder",
      title: m.replace(/^\d+-/, "").replace(/\s+[a-z-]+$/i, ""),
      path: d.slice(0, 2).join("/"),
      level: 2,
    }),
      r("f:methods", h, "contain"));
    let y = "note:" + p.id;
    (o({
      id: y,
      kind: "note",
      title: p.title,
      short: Yh(p.title),
      path: p.path,
      folder: h,
      text:
        p.title +
        `
` +
        p.body,
      body: p.body,
    }),
      r(h, y, "contain"));
  }
  for (let p of t)
    (o({
      id: "idea:" + p.id,
      kind: "idea",
      title: p.title || "未命名灵感",
      short: p.title,
      path: "04-索引库/" + p.title,
      folder: "f:ideas",
      text:
        p.title +
        `
` +
        (p.note || ""),
      idea: p,
    }),
      r("f:ideas", "idea:" + p.id, "contain"));
  for (let p of e)
    (o({
      id: "draft:" + p.id,
      kind: "draft",
      title: p.title || "未命名条目",
      short: p.title,
      path: "03-记忆库/" + p.title,
      folder: "f:drafts",
      text:
        p.title +
        `
` +
        (p.body || ""),
      body: p.body || "",
      draft: p,
    }),
      r("f:drafts", "draft:" + p.id, "contain"));
  for (let p of e) {
    if (p.source == null) continue;
    let d = t.find((m) => m.id === p.source);
    d &&
      (r("draft:" + p.id, "idea:" + d.id, "source"),
      d.status === "进行中" && r("idea:" + d.id, "draft:" + p.id, "source"));
  }
  let s = new Map();
  for (let p of u.values())
    Ce.has(p.kind) &&
      (s.set(String(p.title).toLowerCase(), p.id),
      p.path &&
        s.set(
          p.path.split("/").pop().replace(/\.md$/, "").toLowerCase(),
          p.id,
        ));
  for (let p of [...u.values()])
    if (!(p.kind !== "note" && p.kind !== "draft"))
      for (let d of (p.body || "").matchAll(/\[\[([^\]]+)\]\]/g)) {
        let [m, h] = d[1].split("|");
        if (m.includes("{{")) continue;
        let y = m.split("#")[0].split("/").pop().trim();
        if (!y) continue;
        let x = s.get(y.toLowerCase());
        (x ||
          ((x = "ghost:" + y.toLowerCase()),
          o({
            id: x,
            kind: "ghost",
            title: (h == null ? void 0 : h.trim()) || y,
            short: (h == null ? void 0 : h.trim()) || Yh(y),
            path: m.trim() + ".md",
            text: "",
          })),
          r(p.id, x, "wiki"));
      }
  for (let p of [...u.values()])
    for (let d of p.tags || []) {
      let m = "tag:" + d.toLowerCase();
      (o({ id: m, kind: "tag", title: "#" + d, short: "#" + d, text: "" }),
        r(p.id, m, "tag"));
    }
  let f = [...u.values()].filter((p) => Ce.has(p.kind)),
    g = new Map();
  for (let [p, d] of l) {
    let m = f.filter((y) => d.some((x) => y.text.toLowerCase().includes(x)));
    if (m.length < 2) continue;
    let h = "concept:" + p;
    o({ id: h, kind: "concept", title: p, short: p, text: "", terms: d });
    for (let y of m)
      (r(y.id, h, "mention"), g.set(y.id, [...(g.get(y.id) || []), p]));
  }
  for (let p = 0; p < f.length; p++)
    for (let d = p + 1; d < f.length; d++) {
      let m = g.get(f[p].id) || [],
        h = g.get(f[d].id) || [],
        y = m.filter((x) => h.includes(x));
      y.length >= 2 &&
        (r(f[p].id, f[d].id, "resonance", y.length),
        r(f[d].id, f[p].id, "resonance", y.length));
    }
  let b = [...u.values()],
    w = [...c.values()].map((p) => ({
      ...p,
      both: p.ab > 0 && p.ba > 0,
      s: p.ab ? p.a : p.b,
      t: p.ab ? p.b : p.a,
    }));
  for (let p of b) ((p.out = 0), (p.in = 0), (p.deg = 0), (p.mutual = 0));
  let M = new Map(b.map((p) => [p.id, p]));
  for (let p of w) {
    let d = M.get(p.a),
      m = M.get(p.b);
    p.kind !== "contain" &&
      (d.deg++,
      m.deg++,
      p.both
        ? (d.mutual++, m.mutual++, d.out++, m.out++, d.in++, m.in++)
        : (M.get(p.s).out++, M.get(p.t).in++));
  }
  for (let p of b) p.shared = g.get(p.id) || [];
  return { nodes: b, links: w, index: M };
}
function li(t, e) {
  let n = new Map(),
    a = (i) => (i.dir === "mutual" ? 100 : 0) + i.link.w;
  for (let i of t.links) {
    if ((i.a !== e && i.b !== e) || i.kind === "contain") continue;
    let u = i.a === e ? i.b : i.a,
      o = {
        id: u,
        link: i,
        dir: i.both ? "mutual" : i.s === e ? "out" : "back",
      },
      c = n.get(u);
    (!c || a(o) > a(c)) && n.set(u, o);
  }
  let l = { out: [], back: [], mutual: [] };
  for (let i of n.values()) l[i.dir].push({ id: i.id, link: i.link });
  return l;
}
function Vn(t, e) {
  var i;
  let n = new Set([
      e,
      ...t.links
        .filter((u) => u.a === e || u.b === e)
        .map((u) => (u.a === e ? u.b : u.a)),
    ]),
    a = t.links
      .filter(
        (u) =>
          (u.a === e || u.b === e) &&
          (u.kind === "mention" || u.kind === "tag"),
      )
      .map((u) => (u.a === e ? u.b : u.a)),
    l = new Map();
  for (let u of a)
    for (let o of t.links) {
      if (o.a !== u && o.b !== u) continue;
      let c = o.a === u ? o.b : o.a;
      n.has(c) ||
        !Ce.has((i = t.index.get(c)) == null ? void 0 : i.kind) ||
        l.set(c, [...(l.get(c) || []), t.index.get(u).title]);
    }
  return [...l]
    .sort((u, o) => o[1].length - u[1].length)
    .map(([u, o]) => ({ id: u, via: o }));
}
function bu(t) {
  let e = t.nodes.filter((a) => Ce.has(a.kind)),
    n = t.links.filter((a) => a.kind !== "contain");
  return {
    content: e.length,
    links: n.length,
    mutual: n.filter((a) => a.both).length,
    wiki: t.links.filter((a) => a.kind === "wiki").length,
    ghosts: t.nodes.filter((a) => a.kind === "ghost").length,
    lonely: e.filter((a) => !n.some((l) => l.a === a.id || l.b === a.id))
      .length,
    backlinked: e.filter((a) => a.in > 0).length,
  };
}
function x2(t) {
  let e = 0;
  for (let n of t) e = (e * 31 + n.charCodeAt(0)) >>> 0;
  return () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296;
}
var Gh = (t) => (t * Math.PI) / 180;
function Vh(t) {
  let e = t.nodes,
    n = t.index,
    a = (u) => {
      let o = n.get(u);
      if (o.kind === "concept") return [0, -1];
      let c = Lh.find((r) => {
        var s;
        return (
          r.id ===
            (((s = o.folder) != null && s.startsWith("f:0")) || o.level === 2
              ? "f:methods"
              : o.folder) || r.id === u
        );
      });
      return c ? [Math.cos(Gh(c.angle)), Math.sin(Gh(c.angle))] : null;
    };
  for (let u of e) {
    let o = x2(u.id),
      c = a(u.id),
      r =
        u.kind === "core"
          ? 0
          : u.kind === "folder"
            ? u.level
              ? 300
              : 210
            : Ce.has(u.kind)
              ? 330
              : 420,
      f =
        (c ? Math.atan2(c[1], c[0]) : o() * Math.PI * 2) +
        (o() - 0.5) * (c ? 1.1 : 6.28);
    ((u.x = Math.cos(f) * r * (0.8 + o() * 0.4)),
      (u.y = Math.sin(f) * r * (0.8 + o() * 0.4)),
      (u.vx = 0),
      (u.vy = 0));
  }
  let l = {
      contain: 120,
      wiki: 95,
      source: 90,
      tag: 52,
      mention: 135,
      resonance: 170,
    },
    i = {
      contain: 0.05,
      wiki: 0.06,
      source: 0.08,
      tag: 0.09,
      mention: 0.018,
      resonance: 0.006,
    };
  for (let u = 0; u < 520; u++) {
    let o = 1 - u / 520;
    for (let c = 0; c < e.length; c++)
      for (let r = c + 1; r < e.length; r++) {
        let s = e[c],
          f = e[r],
          g = f.x - s.x,
          b = f.y - s.y,
          w = g * g + b * b || 0.01,
          p =
            (((s.kind === "tag" || f.kind === "tag" ? 900 : 2600) *
              (s.kind === "folder" && f.kind === "folder" ? 3 : 1)) /
              w) *
            o,
          d = Math.sqrt(w);
        ((g /= d),
          (b /= d),
          (s.vx -= g * p),
          (s.vy -= b * p),
          (f.vx += g * p),
          (f.vy += b * p));
      }
    for (let c of t.links) {
      let r = n.get(c.a),
        s = n.get(c.b),
        f = s.x - r.x,
        g = s.y - r.y,
        b = Math.hypot(f, g) || 0.01,
        w = (b - l[c.kind]) * i[c.kind] * o;
      ((r.vx += (f / b) * w),
        (r.vy += (g / b) * w),
        (s.vx -= (f / b) * w),
        (s.vy -= (g / b) * w));
    }
    for (let c of e) {
      let r = a(c.id);
      if (c.kind === "folder" && r) {
        let s = c.level ? 300 : 230;
        ((c.vx += (r[0] * s - c.x) * 0.04), (c.vy += (r[1] * s - c.y) * 0.04));
      } else
        r && Ce.has(c.kind)
          ? ((c.vx += (r[0] * 380 - c.x) * 0.006),
            (c.vy += (r[1] * 380 - c.y) * 0.006))
          : r &&
            ((c.vx += (r[0] * 300 - c.x) * 0.004),
            (c.vy += (r[1] * 300 - c.y) * 0.004));
      if (((c.vx -= c.x * 0.002), (c.vy -= c.y * 0.002), c.kind === "core")) {
        ((c.x = 0), (c.y = 0), (c.vx = 0), (c.vy = 0));
        continue;
      }
      ((c.x += c.vx), (c.y += c.vy), (c.vx *= 0.55), (c.vy *= 0.55));
    }
  }
  return Object.fromEntries(e.map((u) => [u.id, [u.x, u.y * 0.82]]));
}
function bc(t, e, n) {
  var c;
  let a = e.trim(),
    l = t.nodes.filter((r) => Ce.has(r.kind)),
    i = t.links.filter((r) => r.kind !== "contain"),
    u = (r) => {
      var s, f;
      return (
        ((s = t.index.get(r)) == null ? void 0 : s.short) ||
        ((f = t.index.get(r)) == null ? void 0 : f.title)
      );
    },
    o = [];
  if (/孤|没有连接|没链接|零散|断开/.test(a)) {
    let r = l.filter((f) => !i.some((g) => g.a === f.id || g.b === f.id)),
      s = l.filter((f) => f.in === 0 && !r.includes(f));
    (o.push({
      tone: "warn",
      title: "孤立内容",
      en: "Isolated",
      text: r.length
        ? `${r.length} 条内容除了目录外没有任何连接。`
        : "没有完全孤立的内容。",
      items: r.map((f) => f.id),
    }),
      o.push({
        tone: "info",
        title: "没有反链的内容",
        en: "No backlinks",
        text: `${s.length} 条内容只向外链接，还没有被其他内容引用。`,
        items: s.slice(0, 8).map((f) => f.id),
      }));
  } else if (/双向|互链|共振|互相/.test(a)) {
    let r = i.filter((s) => s.both).sort((s, f) => f.w - s.w);
    o.push({
      tone: "gold",
      title: "双向连接",
      en: "Bidirectional",
      text: `共 ${r.length} 组：正文共同提及 ≥2 个概念，或灵感与记忆库条目互相记录。`,
      pairs: r
        .slice(0, 8)
        .map((s) => [
          s.a,
          s.b,
          s.kind === "resonance" ? `共同提及 ${s.w} 个概念` : hc[s.kind],
        ]),
    });
  } else if (/未创建|空链|断链|缺/.test(a)) {
    let r = t.nodes.filter((s) => s.kind === "ghost");
    o.push({
      tone: "warn",
      title: "未创建的笔记",
      en: "Unresolved links",
      text: `${r.length} 个 [[双链]] 指向尚未在看板资料中出现的笔记，多来自生成模板。`,
      items: r.map((s) => s.id),
    });
  } else if (/核心|枢纽|中心|最重要|反链最多|被引用/.test(a)) {
    let r = [...l]
      .sort((f, g) => g.in + g.mutual - (f.in + f.mutual) || g.deg - f.deg)
      .slice(0, 6);
    o.push({
      tone: "gold",
      title: "连接最密的内容",
      en: "Most connected",
      text: "按反链与双向连接数排序。",
      items: r.map((f) => f.id),
      meta: r.map((f) => `${f.deg} 条连接`),
    });
    let s = t.nodes
      .filter((f) => f.kind === "concept")
      .sort((f, g) => g.deg - f.deg)
      .slice(0, 5);
    o.push({
      tone: "info",
      title: "最常被提及的概念",
      en: "Top concepts",
      text: s.map((f) => `${f.title}（${f.deg}）`).join("、"),
      items: s.map((f) => f.id),
    });
  } else if (/下一篇|写什么|灵感|延伸/.test(a))
    for (let r of l.filter((s) => s.kind === "idea")) {
      let s = Vn(t, r.id).filter((f) => t.index.get(f.id).kind === "post");
      o.push({
        tone: "info",
        title: r.short,
        en: "Next step",
        text: s.length
          ? `可以延伸 ${s.length} 条资源，共享：${[...new Set(s.flatMap((f) => f.via))].slice(0, 4).join("、")}`
          : "暂未与项目条目共享概念，可补充正文后再看。",
        items: [r.id, ...s.slice(0, 3).map((f) => f.id)],
      });
    }
  else if (/表现|最近|最好|数据|收藏/.test(a)) {
    let r = l
      .filter((s) => s.kind === "post")
      .slice()
      .sort((s, f) => (f.post.date || "").localeCompare(s.post.date || ""));
    o.push({
      tone: "gold",
      title: "最近的收藏",
      en: "Recently saved",
      text: `最新添加：${r[0].short}（${((c = r[0].post.date) == null ? void 0 : c.slice(0, 10)) || "—"}）。下面按添加时间排序。`,
      items: r.map((s) => s.id),
      meta: r.map((s) => {
        var f;
        return `${((f = s.post.date) == null ? void 0 : f.slice(0, 10)) || "—"} 加入`;
      }),
    });
  } else {
    let r = a
        .replace(/[？?。，,！!]/g, " ")
        .split(/\s+/)
        .filter((f) => f.length >= 1),
      s = t.nodes
        .filter((f) => f.kind !== "core")
        .map((f) => {
          let g = (
              f.title +
              " " +
              (f.text || "") +
              " " +
              (f.path || "")
            ).toLowerCase(),
            b = r.reduce(
              (w, M) =>
                w +
                (f.title.toLowerCase().includes(M.toLowerCase())
                  ? 3
                  : g.includes(M.toLowerCase())
                    ? 1
                    : 0),
              0,
            );
          return { n: f, score: b };
        })
        .filter((f) => f.score > 0)
        .sort((f, g) => g.score - f.score)
        .slice(0, 8);
    o.push(
      s.length
        ? {
            tone: "info",
            title: `与「${a}」相关`,
            en: "Search",
            text: `在标题、正文和路径中找到 ${s.length} 处匹配。点击可聚焦。`,
            items: s.map((f) => f.n.id),
          }
        : {
            tone: "warn",
            title: "没有找到匹配",
            en: "No match",
            text: "试试：孤立内容、双向连接、未创建的笔记、核心内容、下一篇写什么。",
            items: [],
          },
    );
  }
  return (
    n &&
      o.forEach((r) => {
        r.items && r.items.sort((s, f) => (f === n) - (s === n));
      }),
    o.map((r) => ({ ...r, names: (r.items || []).map(u) }))
  );
}
var Z = yt(rn(), 1);
var Xx = yt(rn(), 1),
  Gf = yt(ce(), 1),
  $h = {
    works: "M4 5h16v14H4ZM4 9h16M9 13l2 2 4-4",
    concept:
      "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    methods: "M5 4h10l4 4v12H5ZM15 4v4h4M8 12h8M8 16h5",
    idea: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z",
    draft: "m14 4 6 6M4 20l4-1L20 7a2 2 0 0 0-4-4L4 15ZM12 20h9",
    home: "M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z",
    back: "M15 18 9 12l6-6",
    chevron: "m9 5 7 7-7 7",
    arrow: "M4 12h16m-6-6 6 6-6 6",
    outlink: "M7 17 17 7M9 7h8v8",
    close: "m6 6 12 12M6 18 18 6",
    plus: "M12 5v14M5 12h14",
    send: "M5 12h13M13 6l6 6-6 6",
    search: "M21 21l-5-5M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    info: "M12 11v6M12 7h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z",
    replay: "M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5",
    pause: "M8 5v14M16 5v14",
    play: "m8 5 11 7-11 7Z",
    spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z",
    link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    agent:
      "M12 3a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V7a4 4 0 0 1 4-4ZM10 10h.01M14 10h.01",
    trash: "M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3",
    check: "m5 12 4 4L19 6",
    eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    save: "M5 3h14v19l-7-4-7 4Z",
    user: "M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",
    pulse: "M3 12h4l2-6 4 12 2-6h6",
    grid: "M4 4h7v7H4ZM13 4h7v7h-7ZM4 13h7v7H4ZM13 13h7v7h-7Z",
    file: "M6 3h8l4 4v14H6ZM14 3v5h4",
  };
function X({ name: t, size: e = 18, ...n }) {
  return (0, Gf.jsx)("svg", {
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    ...n,
    children: (0, Gf.jsx)("path", { d: $h[t] || $h.file }),
  });
}
var yc = yt(rn(), 1);
var Fh = yt(ce(), 1),
  ke = L.canvas,
  Lf = ke.additive ? "lighter" : "source-over";
function Wh({ graph: t, layout: e, live: n, reduced: a }) {
  let l = (0, yc.useRef)(null);
  return (
    (0, yc.useEffect)(() => {
      let i = l.current,
        u = i.getContext("2d"),
        o,
        c = 0,
        r = 0,
        s = 1,
        f = () => {
          ((s = Math.min(window.devicePixelRatio || 1, 2)),
            (c = i.clientWidth),
            (r = i.clientHeight),
            (i.width = c * s),
            (i.height = r * s));
        };
      f();
      let g = new ResizeObserver(f);
      g.observe(i);
      let b = new Map([["core", 0]]),
        w = ["core"];
      for (; w.length;) {
        let v = w.shift();
        for (let S of t.links) {
          let E = S.a === v ? S.b : S.b === v ? S.a : null;
          E && !b.has(E) && (b.set(E, b.get(v) + 1), w.push(E));
        }
      }
      let M = t.nodes
          .filter((v) => v.kind !== "core")
          .map((v, S) => {
            var E;
            return {
              n: v,
              p: e[v.id],
              d: (E = b.get(v.id)) != null ? E : 4,
              seed: ((S * 9301 + 49297) % 233280) / 233280,
              r:
                v.kind === "folder"
                  ? 3.2
                  : v.kind === "tag"
                    ? 1.6
                    : v.kind === "concept"
                      ? 2.4
                      : v.kind === "ghost"
                        ? 2
                        : 2.2 + Math.min(v.deg, 14) * 0.22,
            };
          }),
        p = new Map(M.map((v) => [v.n.id, v])),
        d = t.links
          .filter((v) => p.has(v.a) && p.has(v.b))
          .map((v, S) => ({
            l: v,
            A: p.get(v.a),
            B: p.get(v.b),
            seed: ((S * 7919) % 997) / 997,
          })),
        m = Array.from({ length: 90 }, (v, S) => ({
          a: (S / 90) * Math.PI * 2 + Math.sin(S * 12.9) * 0.3,
          v: 0.35 + ((S * 37) % 100) / 100,
          s: 1 + ((S * 13) % 7) / 3,
        })),
        h = (v) => {
          let S = n.current,
            E = Math.max(0, (v - S.t0) / 1e3);
          (u.setTransform(s, 0, 0, s, 0, 0), u.clearRect(0, 0, c, r));
          let _ = S.orb.x,
            D = S.orb.y,
            R =
              (S.orb.s / 440) *
              Math.min((c * 0.37) / 380, (r * 0.36) / 300) *
              (S.stage === "hub" ? 1 : 0.55),
            F = S.hover,
            Q = F
              ? new Set(t.nodes.filter((C) => C.kind === F).map((C) => C.id))
              : null;
          if (Q)
            for (let C of t.links)
              Q.has(C.a) && C.kind !== "contain" && Q.add(C.b);
          let ee = a ? 1 : Math.min(1, Math.max(0, (E - 0.35) / 2.2)),
            Ft = (C) =>
              a
                ? 1
                : Math.min(
                    1,
                    Math.max(0, (E - 0.4 - C.d * 0.32 - C.seed * 0.35) / 0.9),
                  ),
            Ue = (C) => {
              let q = Ft(C),
                K = 1 - Math.pow(1 - q, 3),
                ht = a || S.paused ? 0 : Math.sin(E * 0.5 + C.seed * 6.28) * 3;
              return [
                _ + C.p[0] * R * K + ht,
                D +
                  C.p[1] * R * K +
                  Math.cos(E * 0.4 + C.seed * 9) * (a || S.paused ? 0 : 2.5),
                q,
              ];
            };
          for (let C of M) C.s = Ue(C);
          if (!a && E < 2.2) {
            let C = E / 2.2;
            u.globalCompositeOperation = Lf;
            for (let q of m) {
              let K =
                  (40 + q.v * 420) *
                  (1 - Math.pow(1 - C, 2.4)) *
                  (S.orb.s / 440),
                ht = Math.max(0, 1 - C) * 0.9,
                zt = _ + Math.cos(q.a) * K,
                k = D + Math.sin(q.a) * K,
                B = u.createLinearGradient(
                  _ + Math.cos(q.a) * K * 0.6,
                  D + Math.sin(q.a) * K * 0.6,
                  zt,
                  k,
                );
              (B.addColorStop(0, `rgba(${ke.spark[0]},0)`),
                B.addColorStop(1, `rgba(${ke.spark[1]},${ht})`),
                (u.strokeStyle = B),
                (u.lineWidth = q.s),
                u.beginPath(),
                u.moveTo(
                  _ + Math.cos(q.a) * K * 0.6,
                  D + Math.sin(q.a) * K * 0.6,
                ),
                u.lineTo(zt, k),
                u.stroke(),
                (u.fillStyle = `rgba(${ke.spark[2]},${ht})`),
                u.beginPath(),
                u.arc(zt, k, q.s * 0.9, 0, 7),
                u.fill());
            }
            u.globalCompositeOperation = "source-over";
          }
          for (let C of d) {
            let [q, K, ht] = C.A.s,
              [zt, k, B] = C.B.s,
              U = Math.min(ht, B) * ee;
            if (U <= 0.02) continue;
            let Y = !Q || (Q.has(C.l.a) && Q.has(C.l.b)),
              I =
                (C.l.both
                  ? 0.32
                  : C.l.kind === "wiki"
                    ? 0.3
                    : C.l.kind === "contain"
                      ? 0.16
                      : 0.11) *
                U *
                (Y ? 1 : 0.25) *
                (Q && Y ? 2.2 : 1);
            if (
              ((u.strokeStyle = C.l.both
                ? `rgba(${ke.mutual},${I})`
                : C.l.kind === "wiki"
                  ? `rgba(${ke.wiki},${I})`
                  : `rgba(${ke.link},${I})`),
              (u.lineWidth = C.l.both ? 0.6 + Math.min(C.l.w, 6) * 0.22 : 0.7),
              u.beginPath(),
              u.moveTo(q, K),
              C.l.both)
            ) {
              let Et = (q + zt) / 2 + (k - K) * 0.12,
                ot = (K + k) / 2 - (zt - q) * 0.12;
              u.quadraticCurveTo(Et, ot, zt, k);
            } else u.lineTo(zt, k);
            u.stroke();
          }
          if (!a && !S.paused && ee > 0.6) {
            u.globalCompositeOperation = Lf;
            for (let C of d) {
              if (C.l.kind === "contain" || C.l.kind === "tag") continue;
              let q = !Q || (Q.has(C.l.a) && Q.has(C.l.b)),
                K = C.l.both ? 0.16 : 0.12,
                ht = C.l.both ? [0, 1] : [0];
              for (let zt of ht) {
                let k = (E * K + C.seed + zt * 0.5) % 1,
                  B = zt === 0 ? C.l.s === C.l.a : C.l.s !== C.l.a,
                  [U, Y] = B ? C.A.s : C.B.s,
                  [I, Et] = B ? C.B.s : C.A.s,
                  ot = U + (I - U) * k,
                  Ot = Y + (Et - Y) * k;
                if (C.l.both) {
                  let $e =
                      (C.A.s[0] + C.B.s[0]) / 2 + (C.B.s[1] - C.A.s[1]) * 0.12,
                    he =
                      (C.A.s[1] + C.B.s[1]) / 2 - (C.B.s[0] - C.A.s[0]) * 0.12,
                    Tt = B ? k : 1 - k;
                  ((ot =
                    (1 - Tt) ** 2 * C.A.s[0] +
                    2 * (1 - Tt) * Tt * $e +
                    Tt * Tt * C.B.s[0]),
                    (Ot =
                      (1 - Tt) ** 2 * C.A.s[1] +
                      2 * (1 - Tt) * Tt * he +
                      Tt * Tt * C.B.s[1]));
                }
                let Lt = Math.sin(k * Math.PI) * (q ? 0.95 : 0.2),
                  At = u.createRadialGradient(ot, Ot, 0, ot, Ot, 6),
                  Je = C.l.both ? (zt ? ke.mutualIn : ke.mutual) : ke.pulseOne;
                (At.addColorStop(0, `rgba(${Je},${Lt})`),
                  At.addColorStop(1, `rgba(${Je},0)`),
                  (u.fillStyle = At),
                  u.beginPath(),
                  u.arc(ot, Ot, 6, 0, 7),
                  u.fill());
              }
            }
            u.globalCompositeOperation = "source-over";
          }
          for (let C of M) {
            let [q, K, ht] = C.s;
            if (ht <= 0) continue;
            let zt = !Q || Q.has(C.n.id),
              k = gt[C.n.kind].color,
              B = ht * (zt ? 1 : 0.22),
              U = C.r * (Q && zt ? 1.35 : 1);
            ((u.globalAlpha = B), (u.globalCompositeOperation = Lf));
            let Y = u.createRadialGradient(q, K, 0, q, K, U * 5);
            if (
              (Y.addColorStop(0, k + ke.glow),
              Y.addColorStop(1, k + "00"),
              (u.fillStyle = Y),
              u.beginPath(),
              u.arc(q, K, U * 5, 0, 7),
              u.fill(),
              (u.globalCompositeOperation = "source-over"),
              C.n.kind === "ghost")
            )
              (u.setLineDash([2, 2]),
                (u.strokeStyle = k),
                (u.lineWidth = 1),
                u.beginPath(),
                u.arc(q, K, U + 1, 0, 7),
                u.stroke(),
                u.setLineDash([]));
            else {
              let I = u.createRadialGradient(
                q - U * 0.35,
                K - U * 0.35,
                0,
                q,
                K,
                U,
              );
              (I.addColorStop(0, ke.light),
                I.addColorStop(0.45, k),
                I.addColorStop(1, k + "aa"),
                (u.fillStyle = I),
                u.beginPath(),
                u.arc(q, K, U, 0, 7),
                u.fill());
            }
            (S.stage === "hub" &&
              ht > 0.9 &&
              (Q ? zt && C.n.kind !== "tag" : C.n.kind === "concept") &&
              ((u.globalAlpha = B * (Q ? 0.9 : 0.42)),
              (u.fillStyle = ke.label),
              (u.font = `${Q ? 11 : 10}px -apple-system, "PingFang SC", sans-serif`),
              u.fillText(
                (C.n.short || C.n.title).slice(0, 14),
                q + U + 5,
                K + 3.5,
              )),
              (u.globalAlpha = 1));
          }
        },
        y = !1,
        x = (v) => {
          o = requestAnimationFrame(x);
          try {
            h(v);
          } catch (S) {
            y || ((y = !0), console.error(S));
          }
        };
      return (
        (o = requestAnimationFrame(x)),
        () => {
          (cancelAnimationFrame(o), g.disconnect());
        }
      );
    }, [t, e, n, a]),
    (0, Fh.jsx)("canvas", {
      ref: l,
      className: "network-canvas",
      "aria-hidden": "true",
    })
  );
}
var En = yt(rn(), 1);
var A = yt(ce(), 1),
  w2 = (t, e = 0) =>
    t == null || Number.isNaN(t)
      ? "—"
      : Number(t).toLocaleString("zh-CN", {
          minimumFractionDigits: e,
          maximumFractionDigits: e,
        }),
  Ih = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function ii({ value: t, decimals: e = 0, suffix: n = "" }) {
  let [a, l] = (0, En.useState)(Ih() ? t : 0);
  return (
    (0, En.useEffect)(() => {
      if (t == null || Ih()) {
        l(t);
        return;
      }
      let i,
        u = performance.now(),
        o = (c) => {
          let r = Math.min(1, (c - u) / 1e3);
          (l(t * (1 - Math.pow(1 - r, 3))),
            r < 1 && (i = requestAnimationFrame(o)));
        };
      return ((i = requestAnimationFrame(o)), () => cancelAnimationFrame(i));
    }, [t]),
    (0, A.jsxs)(A.Fragment, { children: [w2(a, e), t != null && n] })
  );
}
function z2({ bars: t }) {
  let e = Math.max(...t.map((n) => n.v || 0), 1e-6);
  return (0, A.jsx)("div", {
    className: "bars",
    "aria-hidden": "true",
    children: t.map((n, a) =>
      (0, A.jsx)(
        "i",
        {
          className: n.on ? "on" : "",
          title: n.label,
          style: {
            "--h": Math.max(0.06, (n.v || 0) / e),
            animationDelay: 120 + a * 28 + "ms",
          },
        },
        a,
      ),
    ),
  });
}
function E2({
  label: t,
  en: e,
  value: n,
  decimals: a = 1,
  suffix: l = "%",
  level: i,
  delta: u,
  deltaEn: o,
  bars: c,
}) {
  return (0, A.jsxs)("section", {
    className: "an-metric",
    children: [
      (0, A.jsxs)("header", {
        children: [
          (0, A.jsxs)("span", {
            children: [t, " ", (0, A.jsx)("em", { children: e })],
          }),
          i &&
            (0, A.jsxs)("b", {
              className: `lvl lvl-${i[2]}`,
              children: [i[0], " ", (0, A.jsx)("em", { children: i[1] })],
            }),
        ],
      }),
      (0, A.jsxs)("div", {
        className: "an-metric-body",
        children: [
          (0, A.jsx)("strong", {
            children: (0, A.jsx)(ii, { value: n, decimals: a, suffix: l }),
          }),
          u &&
            (0, A.jsxs)("small", {
              className: u.startsWith("-") ? "down" : "up",
              children: [u, (0, A.jsx)("em", { children: o })],
            }),
          (0, A.jsx)(z2, { bars: c }),
        ],
      }),
    ],
  });
}
function T2({ tiles: t }) {
  return (0, A.jsx)("div", {
    className: "an-tiles",
    children: t.map(([e, n, a, l, i], u) =>
      (0, A.jsxs)(
        "div",
        {
          className: "an-tile",
          style: { animationDelay: 200 + u * 70 + "ms" },
          children: [
            (0, A.jsx)("span", {
              className: "t-icon",
              children: (0, A.jsx)(X, { name: e, size: 16 }),
            }),
            (0, A.jsx)("strong", {
              children:
                typeof n == "number"
                  ? (0, A.jsx)(ii, { value: n, decimals: i || 0 })
                  : n,
            }),
            (0, A.jsxs)("p", {
              children: [a, (0, A.jsx)("em", { children: l })],
            }),
          ],
        },
        a,
      ),
    ),
  });
}
function Ph({ graph: t, id: e, onGo: n, sub: a }) {
  let l = t.index.get(e);
  if (!l) return null;
  let i = Ce.has(l.kind) || l.kind === "concept",
    u = (0, A.jsxs)(A.Fragment, {
      children: [l.short || l.title, a && (0, A.jsx)("small", { children: a })],
    });
  return i
    ? (0, A.jsx)("button", {
        className: "chip",
        style: { "--kc": gt[l.kind].color },
        onClick: () => n(e),
        children: u,
      })
    : (0, A.jsx)("span", {
        className: `chip static ${l.kind === "ghost" ? "ghost" : ""}`,
        style: { "--kc": gt[l.kind].color },
        children: u,
      });
}
function M2({ graph: t, node: e, onGo: n }) {
  let a = (0, En.useMemo)(() => li(t, e.id), [t, e.id]),
    l = (0, En.useMemo)(() => Vn(t, e.id).slice(0, 6), [t, e.id]),
    i = [
      [
        "双向",
        "Mutual",
        "⇄",
        a.mutual.sort((u, o) => o.link.w - u.link.w),
        (u) =>
          u.link.kind === "resonance" ? `${u.link.w} 概念` : hc[u.link.kind],
      ],
      ["出链", "Outgoing", "→", a.out, (u) => Yf[u.link.kind]],
      ["反链", "Backlinks", "←", a.back, (u) => Yf[u.link.kind]],
      [
        "二度关联",
        "Latent",
        "⋯",
        l,
        (u) => "via " + u.via.slice(0, 2).join("、"),
      ],
    ].filter((u) => u[3].length);
  return (0, A.jsxs)("section", {
    className: "an-section",
    children: [
      (0, A.jsxs)("h3", {
        children: [
          "双向链接 ",
          (0, A.jsx)("em", { children: "Bidirectional links" }),
        ],
      }),
      i.map(([u, o, c, r, s]) =>
        (0, A.jsxs)(
          "div",
          {
            className: "link-group",
            children: [
              (0, A.jsxs)("p", {
                children: [
                  (0, A.jsx)("i", { children: c }),
                  u,
                  " ",
                  (0, A.jsx)("em", { children: o }),
                  (0, A.jsx)("b", { children: r.length }),
                ],
              }),
              (0, A.jsxs)("div", {
                className: "chip-row",
                children: [
                  r
                    .slice(0, 14)
                    .map((f) =>
                      (0, A.jsx)(
                        Ph,
                        { graph: t, id: f.id, onGo: n, sub: s(f) },
                        f.id,
                      ),
                    ),
                  r.length > 14 &&
                    (0, A.jsxs)("span", {
                      className: "chip static more",
                      children: ["+", r.length - 14],
                    }),
                ],
              }),
            ],
          },
          u,
        ),
      ),
    ],
  });
}
function O2({ items: t }) {
  return t.length
    ? (0, A.jsxs)("section", {
        className: "an-section",
        children: [
          (0, A.jsxs)("h3", {
            children: [
              (0, A.jsx)(X, { name: "spark", size: 14 }),
              "图谱分析 ",
              (0, A.jsx)("em", { children: "Graph insights" }),
            ],
          }),
          t.map(([e, n, a, l], i) =>
            (0, A.jsxs)(
              "article",
              {
                className: `insight tone-${l || "info"}`,
                style: { animationDelay: 380 + i * 90 + "ms" },
                children: [
                  (0, A.jsxs)("h4", {
                    children: [e, " ", (0, A.jsx)("em", { children: n })],
                  }),
                  (0, A.jsx)("p", { children: a }),
                ],
              },
              i,
            ),
          ),
        ],
      })
    : null;
}
function A2({ graph: t, node: e, onGo: n }) {
  let [a, l] = (0, En.useState)(""),
    [i, u] = (0, En.useState)(null);
  return (0, A.jsxs)("div", {
    className: "an-ask",
    children: [
      i &&
        (0, A.jsx)("div", {
          className: "an-ask-res",
          children: i.map((o, c) => {
            var r;
            return (0, A.jsxs)(
              "div",
              {
                className: `ask-card mini tone-${o.tone}`,
                children: [
                  (0, A.jsxs)("h4", {
                    children: [
                      o.title,
                      " ",
                      (0, A.jsx)("em", { children: o.en }),
                    ],
                  }),
                  (0, A.jsx)("p", { children: o.text }),
                  ((r = o.items) == null ? void 0 : r.length) > 0 &&
                    (0, A.jsx)("div", {
                      className: "chip-row",
                      children: o.items
                        .slice(0, 6)
                        .map((s) =>
                          (0, A.jsx)(Ph, { graph: t, id: s, onGo: n }, s),
                        ),
                    }),
                ],
              },
              c,
            );
          }),
        }),
      (0, A.jsxs)("form", {
        onSubmit: (o) => {
          (o.preventDefault(), a.trim() && u(bc(t, a, e.id)));
        },
        children: [
          (0, A.jsx)("input", {
            value: a,
            onChange: (o) => l(o.target.value),
            placeholder: "追问这条内容… Ask about this note",
            "aria-label": "追问这条内容",
          }),
          (0, A.jsx)("button", {
            "aria-label": "提交",
            children: (0, A.jsx)(X, { name: "send", size: 15 }),
          }),
        ],
      }),
      (0, A.jsxs)("div", {
        className: "an-ask-foot",
        children: [
          (0, A.jsxs)("span", {
            children: [
              (0, A.jsx)(X, { name: "agent", size: 13 }),
              "我的图谱 ",
              (0, A.jsx)("em", { children: "My graph" }),
            ],
          }),
          (0, A.jsxs)("span", {
            children: [
              (0, A.jsx)(X, { name: "spark", size: 13 }),
              "本地分析 ",
              (0, A.jsx)("em", { children: "Local analysis" }),
            ],
          }),
        ],
      }),
    ],
  });
}
var C2 = (t, e) => (t.shared || []).filter((n) => (e.shared || []).includes(n));
function k2(t, e) {
  var M;
  let n = t.nodes.filter((p) => Ce.has(p.kind)),
    a = li(t, e.id),
    l = { out: e.out - e.mutual, back: e.in - e.mutual, both: e.mutual },
    i = [...a.mutual].sort((p, d) => d.link.w - p.link.w)[0],
    u = i && t.index.get(i.id),
    o = u
      ? [
          [
            "双向共振最强",
            "Strongest resonance",
            `与「${u.short || u.title}」互相呼应，共同提及：${C2(e, u).join("、") || hc[i.link.kind]}。`,
            "gold",
          ],
        ]
      : [],
    c = () => {
      let p = (100 * n.filter((h) => h.deg <= e.deg).length) / n.length,
        d = n.reduce((h, y) => h + y.deg, 0) / n.length,
        m = e.deg - d;
      return {
        label: "连接度",
        en: "Connectivity",
        value: p,
        decimals: 0,
        level:
          p >= 80
            ? ["枢纽", "Hub", "high"]
            : p >= 50
              ? ["活跃", "Active", "mid"]
              : ["边缘", "Edge", "low"],
        delta: `${m >= 0 ? "+" : ""}${m.toFixed(1)} 条`,
        deltaEn: m >= 0 ? "above average" : "below average",
        bars: [...n]
          .sort((h, y) => h.deg - y.deg)
          .map((h) => ({ v: h.deg, on: h.id === e.id, label: h.short })),
      };
    };
  if (e.kind === "post") {
    let p = n
        .filter((S) => S.kind === "post")
        .sort((S, E) => String(S.date).localeCompare(String(E.date))),
      d = e.post,
      m = (S) =>
        (S.tags || []).filter(
          (E) => !E.startsWith("分类:") && E !== "待读" && E !== "已读",
        ).length,
      h =
        ((M = (e.tags || []).find((S) => S.startsWith("分类:"))) == null
          ? void 0
          : M.slice(3)) || "—",
      y = (e.tags || []).find((S) => S === "待读" || S === "已读") || "—",
      x = Vn(t, e.id).filter((S) => t.index.get(S.id).kind === "idea"),
      v = Vn(t, e.id).filter((S) => t.index.get(S.id).kind === "note");
    return {
      badge: ["已收藏", "Saved"],
      status: `添加于 Saved ${d.date} · ${m(e)} 个话题 topics`,
      action: [
        "打开资源",
        "Open resource",
        { type: "page", page: "library", id: d.id },
      ],
      metric: c(),
      tiles: [
        ["file", h, "分类", "Category"],
        ["check", y, "状态", "Status"],
        ["link", l.both, "双向共振", "Mutual"],
        ["concept", e.shared.length, "关联概念", "Concepts"],
      ],
      all: [
        ["正文长度", "Chars", (e.body || "").length],
        ["添加日期", "Added", String(d.date).slice(0, 10)],
        ["关联概念", "Concepts", e.shared.length],
        ["话题", "Topics", m(e)],
      ],
      insights: [
        ...(x.length || v.length
          ? [
              [
                "关联灵感 / 关联笔记",
                "Linked",
                [
                  x.length ? `灵感 ${x.length} 条` : "",
                  v.length ? `笔记 ${v.length} 篇` : "",
                ]
                  .filter(Boolean)
                  .join(" · ") +
                  `：${[...x, ...v]
                    .slice(0, 2)
                    .map((S) => `「${t.index.get(S.id).short}」`)
                    .join("、")}`,
                "gold",
              ],
            ]
          : []),
        ...o,
        ...(x.length
          ? [
              [
                "可延伸灵感",
                "Next sparks",
                x
                  .slice(0, 2)
                  .map(
                    (S) =>
                      `「${t.index.get(S.id).short}」（共享：${S.via.join("、")}）`,
                  )
                  .join("；"),
                "info",
              ],
            ]
          : []),
        [
          "数据时点",
          "Snapshot",
          "项目条目只记录标题、链接、分类与状态，缺失项保留为「—」。",
          "muted",
        ],
      ],
    };
  }
  if (e.kind === "note") {
    let p = a.out.filter((d) => t.index.get(d.id).kind === "ghost");
    return {
      badge: ["方法笔记", "Method note"],
      status: e.path,
      action: ["阅读全文", "Read note", { type: "read", id: e.id }],
      metric: c(),
      tiles: [
        ["outlink", l.out, "出链", "Outgoing"],
        ["back", l.back, "反链", "Backlinks"],
        ["link", l.both, "双向共振", "Mutual"],
        ["file", (e.body || "").length, "字数", "Chars"],
      ],
      insights: [
        ...o,
        ...(p.length
          ? [
              [
                "未创建的双链",
                "Unresolved links",
                `${p.length} 个 [[双链]] 指向尚未出现的笔记：${p
                  .slice(0, 3)
                  .map((d) => t.index.get(d.id).short)
                  .join("、")}${p.length > 3 ? " 等" : ""}。`,
                "warn",
              ],
            ]
          : []),
        [
          "提及概念",
          "Concepts",
          e.shared.length ? e.shared.join("、") : "正文没有命中概念词。",
          "info",
        ],
      ],
    };
  }
  if (e.kind === "idea") {
    let p = n.filter((v) => v.kind === "idea"),
      d = (v) => (100 * Vn(t, v.id).length) / Math.max(1, n.length - 1),
      m = Vn(t, e.id),
      h = m.filter((v) => t.index.get(v.id).kind === "post"),
      y =
        m.filter((v) => t.index.get(v.id).kind === "note").length +
        a.mutual.filter((v) => t.index.get(v.id).kind === "note").length,
      x = [...a.out, ...a.back, ...a.mutual].some(
        (v) => t.index.get(v.id).kind === "draft",
      );
    return {
      badge: [`优先级 ${e.idea.priority}`, "Priority"],
      status: `${e.idea.status} · ${e.idea.platform}`,
      action: x
        ? [
            "打开记忆库条目",
            "Open memory item",
            { type: "ideaToDraft", idea: e.idea },
          ]
        : ["加入记忆库", "To memories", { type: "ideaToDraft", idea: e.idea }],
      action2: ["编辑灵感", "Edit", { type: "editIdea", idea: e.idea }],
      metric: {
        label: "延伸潜力",
        en: "Reach",
        value: d(e),
        decimals: 0,
        level:
          h.length >= 2
            ? ["强", "Strong", "high"]
            : h.length
              ? ["中", "Fair", "mid"]
              : ["弱", "Weak", "low"],
        delta: `${h.length} 条资源`,
        deltaEn: "related resources",
        bars: p.map((v) => ({ v: d(v), on: v === e, label: v.short })),
      },
      tiles: [
        ["concept", e.shared.length, "提及概念", "Concepts"],
        ["works", h.length, "关联项目", "Projects"],
        ["methods", y, "关联笔记", "Notes"],
        ["draft", x ? 1 : 0, "记忆库", "Memories"],
      ],
      insights: [
        ["灵感备注", "Brief", e.idea.note || "还没有备注。", "info"],
        ...(h.length
          ? [
              [
                "可以延伸的资源",
                "Builds on",
                h
                  .slice(0, 3)
                  .map((v) => `「${t.index.get(v.id).short}」`)
                  .join("、") +
                  ` · 共享：${[...new Set(h.flatMap((v) => v.via))].join("、")}`,
                "gold",
              ],
            ]
          : []),
        ...o,
      ],
    };
  }
  if (e.kind === "draft") {
    let p = [...a.out, ...a.mutual].find(
      (d) => t.index.get(d.id).kind === "idea",
    );
    return {
      badge: ["待处理", "To process"],
      status: p
        ? `来自灵感「${t.index.get(p.id).short}」`
        : "独立条目 · Standalone",
      action: [
        "去处理",
        "Process",
        { type: "page", page: "drafts", id: e.draft.id },
      ],
      metric: c(),
      tiles: [
        ["file", (e.body || "").length, "字数", "Chars"],
        ["idea", p ? 1 : 0, "来源灵感", "Source"],
        ["concept", e.shared.length, "提及概念", "Concepts"],
        [
          "link",
          t.links.filter((d) => d.kind === "wiki" && d.s === e.id).length,
          "双链",
          "Wikilinks",
        ],
      ],
      insights: [
        ...o,
        [
          "提及概念",
          "Concepts",
          e.shared.length
            ? e.shared.join("、")
            : "正文还没有命中概念词，可以在记忆库里用 [[ ]] 链接笔记。",
          "info",
        ],
      ],
    };
  }
  let r = t.nodes.filter((p) => p.kind === "concept"),
    s = a.back.map((p) => t.index.get(p.id)),
    f = (p) => s.filter((d) => d.kind === p).length,
    g = new Set(s.map((p) => p.id)),
    b = t.links.filter(
      (p) => p.kind === "resonance" && g.has(p.a) && g.has(p.b),
    ).length,
    w = r
      .filter((p) => p !== e)
      .map((p) => [
        p,
        t.links.filter(
          (d) => d.kind === "mention" && d.t === p.id && g.has(d.s),
        ).length,
      ])
      .sort((p, d) => d[1] - p[1])
      .slice(0, 3);
  return {
    badge: ["概念", "Concept"],
    status: `被 ${s.length} 条内容提及 · mentioned by ${s.length}`,
    metric: {
      label: "覆盖率",
      en: "Coverage",
      value: (100 * s.length) / n.length,
      decimals: 0,
      level:
        s.length >= 5
          ? ["核心", "Core", "high"]
          : s.length >= 3
            ? ["常用", "Common", "mid"]
            : ["少见", "Rare", "low"],
      delta: `${s.length}/${n.length}`,
      deltaEn: "notes",
      bars: [...r]
        .sort((p, d) => p.in - d.in)
        .map((p) => ({ v: p.in, on: p === e, label: p.title })),
    },
    tiles: [
      ["works", f("post"), "资源", "Projects"],
      ["methods", f("note"), "方法笔记", "Notes"],
      ["idea", f("idea"), "灵感", "Index"],
      ["draft", f("draft"), "记忆库", "Memories"],
    ],
    insights: [
      [
        "内部共振",
        "Inner resonance",
        `提及「${e.title}」的内容之间形成 ${b} 组双向共振。`,
        b ? "gold" : "info",
      ],
      [
        "常一起出现",
        "Co-occurs with",
        w
          .filter((p) => p[1])
          .map(([p, d]) => `${p.title}（${d}）`)
          .join("、") || "暂无",
        "info",
      ],
    ],
  };
}
function xc({
  graph: t,
  node: e,
  module: n,
  onGo: a,
  onAction: l,
  onClose: i,
}) {
  var c;
  let u = (0, En.useMemo)(() => k2(t, e), [t, e]),
    o = gt[e.kind].color;
  return (0, A.jsxs)("div", {
    className: "analysis glass",
    style: { "--kc": o },
    role: "region",
    "aria-label": `${e.title} 的分析`,
    children: [
      (0, A.jsxs)("p", {
        className: "an-float",
        children: [
          "分析概览 ",
          (0, A.jsx)("em", { children: "Analysis overview" }),
          " · ",
          n == null ? void 0 : n.title,
          " ",
          n == null ? void 0 : n.en,
        ],
      }),
      (0, A.jsxs)("div", {
        className: "an-scroll",
        children: [
          (0, A.jsxs)("header", {
            className: "an-head",
            children: [
              (0, A.jsxs)("span", {
                className: "an-cat",
                children: [
                  (0, A.jsx)("span", {
                    className: "an-cat-icon",
                    children: (0, A.jsx)(X, {
                      name: (n == null ? void 0 : n.icon) || "file",
                      size: 15,
                    }),
                  }),
                  n == null ? void 0 : n.title,
                  (0, A.jsx)("em", { children: n == null ? void 0 : n.en }),
                ],
              }),
              (0, A.jsx)("button", {
                className: "icon-btn",
                onClick: i,
                "aria-label": "关闭分析",
                children: (0, A.jsx)(X, { name: "close", size: 15 }),
              }),
            ],
          }),
          (0, A.jsxs)("div", {
            className: "an-title-row",
            children: [
              (0, A.jsxs)("div", {
                children: [
                  (0, A.jsx)("h2", { children: e.short || e.title }),
                  e.short &&
                    e.short !== e.title &&
                    (0, A.jsx)("p", {
                      className: "an-full",
                      children: e.title,
                    }),
                ],
              }),
              e.cover &&
                (0, A.jsx)("img", {
                  className: "an-cover",
                  src: e.cover,
                  alt: "",
                  width: 58,
                  height: 76,
                }),
            ],
          }),
          (0, A.jsxs)("div", {
            className: "an-status",
            children: [
              (0, A.jsxs)("span", {
                className: "badge",
                children: [
                  u.badge[0],
                  " ",
                  (0, A.jsx)("em", { children: u.badge[1] }),
                ],
              }),
              (0, A.jsx)("p", { children: u.status }),
              (0, A.jsxs)("div", {
                className: "an-actions",
                children: [
                  u.action2 &&
                    (0, A.jsxs)("button", {
                      className: "an-explore ghost",
                      onClick: () => l(u.action2[2]),
                      children: [
                        u.action2[0],
                        " ",
                        (0, A.jsx)("em", { children: u.action2[1] }),
                      ],
                    }),
                  u.action &&
                    (0, A.jsxs)("button", {
                      className: "an-explore",
                      onClick: () => l(u.action[2]),
                      children: [
                        u.action[0],
                        " ",
                        (0, A.jsx)("em", { children: u.action[1] }),
                        (0, A.jsx)(X, { name: "chevron", size: 13 }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          (0, A.jsx)(E2, { ...u.metric }),
          (0, A.jsx)(T2, { tiles: u.tiles }),
          u.all &&
            (0, A.jsxs)("section", {
              className: "an-section",
              children: [
                (0, A.jsxs)("h3", {
                  children: [
                    "全部指标 ",
                    (0, A.jsx)("em", { children: "All metrics" }),
                  ],
                }),
                (0, A.jsx)("div", {
                  className: "an-all",
                  children: u.all.map(([r, s, f]) =>
                    (0, A.jsxs)(
                      "div",
                      {
                        children: [
                          (0, A.jsxs)("span", {
                            children: [r, (0, A.jsx)("em", { children: s })],
                          }),
                          (0, A.jsx)("b", { children: f }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          (0, A.jsx)(O2, { items: u.insights }),
          ((c = e.tags) == null ? void 0 : c.length) > 0 &&
            (0, A.jsxs)("section", {
              className: "an-section",
              children: [
                (0, A.jsxs)("h3", {
                  children: [
                    "话题标签 ",
                    (0, A.jsx)("em", { children: "Topics" }),
                  ],
                }),
                (0, A.jsx)("div", {
                  className: "chip-row",
                  children: e.tags.map((r) =>
                    (0, A.jsxs)(
                      "span",
                      {
                        className: "chip static",
                        style: { "--kc": gt.tag.color },
                        children: ["#", r],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          (0, A.jsx)(M2, { graph: t, node: e, onGo: a }),
        ],
      }),
      (0, A.jsx)(A2, { graph: t, node: e, onGo: a }),
    ],
  });
}
var T = yt(ce(), 1),
  D2 = { works: 1, concepts: -1, methods: -1, ideas: -1, drafts: 1 },
  vu = Object.fromEntries(
    Object.entries(L.modules).map(([t, e]) => [t, { ...e, flip: D2[t] }]),
  ),
  _2 = (t) => ({
    out: t.out - t.mutual,
    back: t.in - t.mutual,
    both: t.mutual,
  }),
  Qf = (t) => (t == null ? "—" : Number(t).toLocaleString("zh-CN"));
function e1(t, e) {
  let n = _t.find((l) => l.id === e);
  if (!n) return [];
  let a = t.nodes.filter((l) => l.kind === n.kind);
  return (
    n.kind === "post" &&
      a.sort((l, i) => String(i.date).localeCompare(String(l.date))),
    n.kind === "concept" && a.sort((l, i) => i.in - l.in),
    a
  );
}
function R2(t, e) {
  let n = e1(t, e.id),
    a = {
      works: () => [n.length, "个项目", "projects"],
      concepts: () => [Qf(n.reduce((l, i) => l + i.in, 0)), "提及", "mentions"],
      methods: () => [n.length, "篇笔记", "notes"],
      ideas: () => [n.length, "页", "pages"],
      drafts: () => [n.length, "条记忆", "memories"],
    }[e.id]();
  return { count: n.length, sub: a };
}
function U2(t) {
  var l, i, u;
  let e = _2(t),
    n =
      ((i =
        (l = t.tags) == null ? void 0 : l.find((o) => o.startsWith("分类:"))) ==
      null
        ? void 0
        : i.slice(3)) || "—",
    a =
      ((u = t.tags) == null
        ? void 0
        : u.find((o) => o === "待读" || o === "已读")) || "—";
  switch (t.kind) {
    case "post":
      return [
        ["分类", "Category", n],
        ["状态", "Status", a],
        ["↔", "", e.both],
      ];
    case "note":
      return [
        ["出链", "Out", e.out],
        ["反链", "In", e.back],
        ["↔", "", e.both],
      ];
    case "idea":
      return [
        [t.idea.priority, "Priority", ""],
        [t.idea.status, "", ""],
        ["↔", "", e.both],
      ];
    case "draft":
      return [
        ["字", "Chars", Qf((t.body || "").length)],
        ["↔", "", e.both],
      ];
    case "concept":
      return [
        ["提及", "Mentions", t.in],
        ["↔", "", e.both],
      ];
    default:
      return [];
  }
}
var _e = (t, e, n) => Math.max(e, Math.min(n, t));
function n1(t, e) {
  let { w: n, h: a } = t.size,
    l = t.stage,
    i = n < 760,
    u = t.reduced ? 0 : 1,
    o = { orb: {}, jelly: {}, fan: null };
  if (l === "hub") {
    let c = i ? _e(n * 0.56, 180, 280) : _e(Math.min(n, a) * 0.5, 250, 440),
      r = i ? a * 0.47 : a * 0.53;
    o.orb = { x: n / 2, y: r, s: c };
    let s = i ? n * 0.36 : Math.min(n * 0.36, 540),
      f = i ? a * 0.21 : Math.min(a * 0.32, 262);
    _t.forEach((g, b) => {
      let w =
          ((g.angle + u * 7 * Math.sin(e * 0.17 + b * 1.7)) * Math.PI) / 180,
        M = 1 + u * 0.04 * Math.sin(e * 0.23 + b);
      o.jelly[g.id] = {
        x: n / 2 + Math.cos(w) * s * M,
        y: r + Math.sin(w) * f * M + u * 9 * Math.sin(e * 0.9 + b * 2.1),
        s: i ? 92 : _e(n * 0.12, 120, 184),
        o: 1,
        tilt: u * 6 * Math.sin(e * 0.6 + b),
      };
    });
  } else if (i) {
    ((o.orb = { x: 40, y: 156, s: 86 }),
      _t.forEach((s, f) => {
        let g = s.id === t.mod,
          b = t1(t.mod, s.id);
        o.jelly[s.id] = {
          x: 104 + (b * (n - 136)) / 4,
          y: 152 + u * 4 * Math.sin(e * 0.9 + f * 2),
          s: g ? 76 : 54,
          o: g ? 1 : 0.55,
          tilt: u * 3 * Math.sin(e * 0.6 + f),
        };
      }));
    let c = t.items.length,
      r = _e((a - 330) / Math.max(c - 1, 1), 22, 54);
    o.fan = { x: 34, y0: 286, gap: r };
  } else {
    let c = Math.max(124, n * 0.09),
      r = a * 0.53;
    o.orb = { x: c, y: r, s: 178 };
    let s = c + 158,
      f = Math.min(122, (a - 150) / 5);
    _t.forEach((p, d) => {
      let m = p.id === t.mod,
        h = t1(t.mod, p.id);
      o.jelly[p.id] = {
        x: s + (m ? 16 : 0),
        y: r + (h - 2) * f + u * 5 * Math.sin(e * 0.9 + d * 2),
        s: m ? 128 : 92,
        o: m ? 1 : 0.6,
        tilt: u * 3 * Math.sin(e * 0.6 + d),
      };
    });
    let g = n - _e(n * 0.33, 380, 470) - 44,
      b = t.items.length,
      w = Math.min(a - 130, Math.max(0, b - 1) * 54),
      M = s + 16 + 128 * 0.5 + 10 + 168;
    o.fan = {
      x: Math.min(Math.max(g - 270 - 90, M + 60), g - 280),
      y0: r - w / 2,
      gap: b > 1 ? w / (b - 1) : 0,
    };
  }
  return o;
}
function t1(t, e) {
  let n = _t.filter((i) => i.id !== t).map((i) => i.id),
    l = [n[0], n[1], t, n[2], n[3]].indexOf(e);
  return l < 0 ? _t.findIndex((i) => i.id === e) : l;
}
function De(t, e, n, a = 62) {
  let l = 2 * Math.sqrt(a);
  return ((t.v += (-a * (t.x - e) - l * t.v) * n), (t.x += t.v * n), t.x);
}
var wt = (t) => ({ x: t, v: 0 }),
  H2 = Array.from({ length: 110 }, (t, e) => ({
    a: e * 2.39996,
    v: 0.035 + (((e * 37) % 100) / 100) * 0.06,
    o: (e * 0.618034) % 1,
    w: (e % 2 ? 1 : -1) * (0.15 + (e % 7) * 0.05),
    s: 0.7 + (e % 5) * 0.32,
    b: 0.45 + (e % 3) * 0.25,
    c: L.dust[e % L.dust.length],
  })),
  Xf = new Map(),
  j2 = (t) => {
    if (!Xf.has(t)) {
      let e = new Image();
      ((e.src = t), Xf.set(t, e));
    }
    return Xf.get(t);
  };
function B2(t) {
  let { video: e, canvas: n } = t;
  if (!e || !n) return;
  let a = n.clientWidth,
    l = n.clientHeight;
  if (!a || !l) return;
  let i = Math.min(window.devicePixelRatio || 1, 2),
    u = Math.round(a * i),
    o = Math.round(l * i),
    c = n.width !== u || n.height !== o;
  c && ((n.width = u), (n.height = o));
  let r = e.readyState >= 2 && e.videoWidth,
    s = r ? e : j2(e.poster),
    f = r ? e.videoWidth : s.naturalWidth,
    g = r ? e.videoHeight : s.naturalHeight;
  if (!f || !g) return;
  let b = r ? e.currentTime : -1;
  if (!c && b === t.stamp && r === t.ready) return;
  ((t.stamp = b), (t.ready = r));
  let w = Math.max(u / f, o / g),
    M = u / w,
    p = o / w,
    d = n.getContext("2d");
  (d.clearRect(0, 0, u, o),
    d.drawImage(s, (f - M) / 2, (g - p) / 2, M, p, 0, 0, u, o));
}
var Sc = (t, e, n, a, l) => {
  let i = 1 - l;
  return i * i * i * t + 3 * i * i * l * e + 3 * i * l * l * n + l * l * l * a;
};
function q2({ graph: t, items: e, onModule: n, onItem: a, live: l, sel: i }) {
  let u = (0, Z.useRef)(null),
    o = (0, Z.useRef)(null),
    c = (0, Z.useRef)({}),
    r = (0, Z.useRef)({}),
    s = (0, Z.useRef)({}),
    f = (0, Z.useRef)({}),
    g = (0, Z.useRef)({}),
    b = (0, Z.useRef)([]),
    w = (0, Z.useRef)([]),
    M = (0, Z.useRef)([]),
    p = (0, Z.useRef)({}),
    d = (y, x) => (v) => {
      var S;
      ((S = p.current)[y] || (S[y] = {}))[x] = v;
    },
    m = (0, Z.useMemo)(
      () => Object.fromEntries(_t.map((y) => [y.id, R2(t, y)])),
      [t],
    );
  ((0, Z.useLayoutEffect)(() => {
    ((l.current.itemState = e.map(() => null)),
      (l.current.fanStart = performance.now()));
  }, [e, l]),
    (0, Z.useEffect)(() => {
      let y,
        x = performance.now(),
        v = l.current.springs,
        S = (D) => {
          let R = l.current,
            F = Math.max(0, Math.min(1 / 30, (D - x) / 1e3));
          ((x = Math.max(x, D)), R.paused || (R.time += F));
          let Q = R.time,
            ee = (D - R.t0) / 1e3,
            Ft = n1(R, Q),
            Ue = R.stage === "hub" && !R.reduced,
            C = Ue && ee < 0.15 ? Ft.orb.s * 0.35 : Ft.orb.s,
            q = De(v.orb.x, Ft.orb.x, F),
            K = De(v.orb.y, Ft.orb.y, F),
            ht = De(v.orb.s, C, F, 40),
            zt = De(v.orb.o, Ue && ee < 0.1 ? 0 : 1, F, 30);
          ((R.orb = { x: q, y: K, s: ht }),
            o.current &&
              ((o.current.style.transform = `translate3d(${q - ht / 2}px,${K - ht / 2}px,0) scale(${ht / 460})`),
              (o.current.style.opacity = _e(zt, 0, 1))));
          let k = u.current;
          if (k) {
            let U = _e(De(v.dust, R.stage === "hub" ? 0.3 : 1, F, 18), 0, 1),
              Y = k.getContext("2d");
            if ((Y.clearRect(0, 0, 1012, 1012), !R.reduced && U > 0.02)) {
              let I = Math.max(ht / 460, 0.2);
              Y.globalCompositeOperation = "lighter";
              for (let Et of H2) {
                let ot = (((Q * Et.v + Et.o) % 1) + 1) % 1,
                  Ot = 150 + ot * 340,
                  Lt = Et.a + ot * Et.w,
                  At = 506 + Math.cos(Lt) * Ot,
                  Je = 506 + Math.sin(Lt) * Ot * 0.96,
                  $e =
                    U *
                    Math.pow(Math.max(0, Math.sin(ot * Math.PI)), 1.3) *
                    Et.b,
                  he = (Et.s / I) * 2.2,
                  Tt = Y.createRadialGradient(At, Je, 0, At, Je, he);
                (Tt.addColorStop(0, `rgba(${Et.c},${$e})`),
                  Tt.addColorStop(1, `rgba(${Et.c},0)`),
                  (Y.fillStyle = Tt),
                  Y.beginPath(),
                  Y.arc(At, Je, he, 0, 7),
                  Y.fill());
              }
            }
          }
          _t.forEach((U, Y) => {
            let I = v.jelly[U.id],
              Et = Ft.jelly[U.id],
              ot = Ue && ee < 1 + Y * 0.17,
              Ot = De(I.x, ot ? q : Et.x, F),
              Lt = De(I.y, ot ? K : Et.y, F),
              At = De(I.s, ot ? 24 : Et.s, F),
              Je = De(I.o, ot ? 0 : Et.o, F, 40),
              $e = De(I.lo, Ue && ee < 2 + Y * 0.1 ? 0 : Et.o, F, 40);
            I.cur = { x: Ot, y: Lt, s: At };
            let he = c.current[U.id],
              Tt = r.current[U.id],
              Mn = s.current[U.id];
            if (
              (he &&
                ((he.style.transform = `translate3d(${Ot - At / 2}px,${Lt - At * 0.375}px,0) scale(${At / 200})`),
                (he.style.opacity = _e(Je, 0, 1))),
              Tt &&
                (Tt.style.transform = `rotate(${Et.tilt}deg) scaleX(${vu[U.id].flip})`),
              Mn)
            ) {
              let ne = Mn.offsetWidth,
                be = Mn.offsetHeight,
                ve = R.stage === "hub",
                He = R.size.w < 760,
                ln = ve || He ? Ot - ne / 2 : Ot + At * 0.5 + 10,
                un = ve || He ? Lt + At * 0.36 : Lt - be / 2;
              ((Mn.style.transform = `translate3d(${ln}px,${un}px,0)`),
                (Mn.style.opacity = _e(
                  He && !ve && U.id !== R.mod ? 0 : $e,
                  0,
                  1,
                )),
                (I.label = { x: ln, y: un, w: ne, h: be }));
            }
            let an = f.current[U.id];
            if (an) {
              let ne, be, ve, He, ln, un, Wn, On;
              if (R.stage === "hub") {
                let je = Ot - q,
                  ka = Lt - K,
                  fi = Math.hypot(je, ka) || 1,
                  on = je / fi,
                  Nu = ka / fi;
                ((ne = q + on * ht * 0.2),
                  (be = K + Nu * ht * 0.2),
                  (ve = Ot - on * At * 0.22),
                  (He = Lt - Nu * At * 0.1));
                let wu = 26 * Math.sin(Q * 0.5 + Y);
                ((ln = ne + je * 0.35 - Nu * wu),
                  (un = be + ka * 0.35 + on * wu),
                  (Wn = ne + je * 0.7 + Nu * wu),
                  (On = be + ka * 0.7 - on * wu));
              } else {
                ((ne = q + ht * 0.3),
                  (be = K),
                  (ve = Ot - At * 0.34),
                  (He = Lt));
                let je = ve - ne;
                ((ln = ne + je * 0.55),
                  (un = be),
                  (Wn = ve - je * 0.55),
                  (On = He));
              }
              let ll = `M${ne},${be} C${ln},${un} ${Wn},${On} ${ve},${He}`,
                Fn = U.id === R.mod || U.kind === R.hover;
              (an.glow.setAttribute("d", ll), an.core.setAttribute("d", ll));
              let Oc = _e(Je, 0, 1) * (R.stage === "hub" || Fn ? 1 : 0.45);
              ((an.glow.style.opacity = Oc * (Fn ? 0.9 : 0.45)),
                (an.core.style.opacity = Oc),
                (g.current[U.id] || []).forEach((je, ka) => {
                  if (!je) return;
                  let fi = ka === 2,
                    on = (Q * (fi ? 0.23 : 0.31) + ka * 0.5 + Y * 0.17) % 1;
                  (fi && (on = 1 - on),
                    je.setAttribute("cx", Sc(ne, ln, Wn, ve, on)),
                    je.setAttribute("cy", Sc(be, un, On, He, on)),
                    (je.style.opacity =
                      R.reduced || R.paused ? 0 : Oc * Math.sin(on * Math.PI)));
                }));
            }
          });
          let B = R.mod && v.jelly[R.mod];
          if (Ft.fan && B != null && B.label) {
            let U = R.size.w < 760,
              Y = U ? B.label.x + B.label.w / 2 : B.label.x + B.label.w + 6,
              I = U ? B.label.y + B.label.h + 4 : B.cur.y;
            e.forEach((Et, ot) => {
              R.itemState[ot] ||
                (R.itemState[ot] = { x: wt(Y), y: wt(I), o: wt(0) });
              let Ot = R.itemState[ot],
                Lt =
                  R.reduced ||
                  D - R.fanStart >
                    160 + ot * Math.min(90, 1800 / Math.max(e.length, 1)),
                At = Ft.fan.x,
                Je =
                  Ft.fan.y0 +
                  ot * Ft.fan.gap +
                  (R.reduced ? 0 : Math.sin(Q * 0.8 + ot * 0.9) * 2),
                $e = De(Ot.x, Lt ? At : Y, F, 70),
                he = De(Ot.y, Lt ? Je : I, F, 70),
                Tt = De(Ot.o, Lt ? 1 : 0, F, 50),
                Mn = b.current[ot];
              Mn &&
                ((Mn.style.transform = `translate3d(${$e}px,${he - 15}px,0)`),
                (Mn.style.opacity = _e(Tt, 0, 1)));
              let an = w.current[ot];
              if (an) {
                let ne = $e - Y,
                  be = R.reduced ? 0 : Math.sin(Q * 1.1 + ot * 0.7) * 7,
                  ve = Y + ne * 0.5,
                  He = I + be,
                  ln = $e - ne * 0.45,
                  un = he - be * 0.5;
                an.setAttribute(
                  "d",
                  `M${Y},${I} C${ve},${He} ${ln},${un} ${$e},${he}`,
                );
                let Wn = i === Et.id;
                ((an.style.opacity =
                  _e(Tt, 0, 1) * (i ? (Wn ? 1 : 0.35) : 0.8)),
                  (an.style.strokeWidth = Wn ? 1.8 : 1),
                  (M.current[ot] || []).forEach((On, ll) => {
                    if (!On) return;
                    let Fn =
                      (Q * (ll ? 0.27 : 0.36) + ot * 0.13 + ll * 0.5) % 1;
                    (ll && (Fn = 1 - Fn),
                      On.setAttribute("cx", Sc(Y, ve, ln, $e, Fn)),
                      On.setAttribute("cy", Sc(I, He, un, he, Fn)),
                      (On.style.opacity =
                        R.reduced || R.paused
                          ? 0
                          : _e(Tt, 0, 1) *
                            Math.sin(Fn * Math.PI) *
                            (i && !Wn ? 0.3 : 1)));
                  }));
              }
            });
          }
          for (let U of Object.values(p.current)) B2(U);
        },
        E = !1,
        _ = (D) => {
          y = requestAnimationFrame(_);
          try {
            S(D);
          } catch (R) {
            E || ((E = !0), console.error(R));
          }
        };
      return ((y = requestAnimationFrame(_)), () => cancelAnimationFrame(y));
    }, [e, l, i]),
    (0, Z.useEffect)(() => {
      let y = () =>
        document.querySelectorAll(".scene video").forEach((x) => {
          l.current.paused || l.current.reduced || document.hidden
            ? x.pause()
            : x.play().catch(() => {});
        });
      return (
        (l.current.syncVideo = y),
        y(),
        document.addEventListener("visibilitychange", y),
        () => document.removeEventListener("visibilitychange", y)
      );
    }, [l]));
  let h = l.current.stage === "hub";
  return (0, T.jsxs)("div", {
    className: `scene stage-${l.current.stage}`,
    children: [
      (0, T.jsxs)("div", {
        className: "orb",
        ref: o,
        "aria-hidden": "true",
        children: [
          (0, T.jsx)("div", { className: "orb-halo" }),
          (0, T.jsx)("video", {
            className: "vsrc",
            ref: d("orb", "video"),
            src: L.media.orb,
            poster: L.media.orbPoster,
            muted: !0,
            loop: !0,
            playsInline: !0,
            autoPlay: !0,
            preload: "auto",
          }),
          (0, T.jsx)("canvas", { className: "vid", ref: d("orb", "canvas") }),
          (0, T.jsx)("canvas", {
            className: "orb-dust",
            ref: u,
            width: "1012",
            height: "1012",
          }),
        ],
      }),
      (0, T.jsxs)("svg", {
        className: "threads",
        "aria-hidden": "true",
        children: [
          (0, T.jsxs)("defs", {
            children: [
              (0, T.jsx)("filter", {
                id: "thread-blur",
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
                children: (0, T.jsx)("feGaussianBlur", { stdDeviation: "3.2" }),
              }),
              (0, T.jsxs)("radialGradient", {
                id: "pulse-out",
                children: [
                  (0, T.jsx)("stop", {
                    offset: "0",
                    stopColor: L.pulse.out[0],
                  }),
                  (0, T.jsx)("stop", {
                    offset: ".4",
                    stopColor: L.pulse.out[1],
                  }),
                  (0, T.jsx)("stop", {
                    offset: "1",
                    stopColor: L.pulse.out[1],
                    stopOpacity: "0",
                  }),
                ],
              }),
              (0, T.jsxs)("radialGradient", {
                id: "pulse-in",
                children: [
                  (0, T.jsx)("stop", { offset: "0", stopColor: L.pulse.in[0] }),
                  (0, T.jsx)("stop", {
                    offset: ".4",
                    stopColor: L.pulse.in[1],
                  }),
                  (0, T.jsx)("stop", {
                    offset: "1",
                    stopColor: L.pulse.in[1],
                    stopOpacity: "0",
                  }),
                ],
              }),
            ],
          }),
          _t.map((y) =>
            (0, T.jsxs)(
              "g",
              {
                style: { color: vu[y.id].color },
                children: [
                  (0, T.jsx)("path", {
                    ref: (x) => {
                      f.current[y.id] = { ...f.current[y.id], glow: x };
                    },
                    className: "thread-glow",
                    filter: "url(#thread-blur)",
                  }),
                  (0, T.jsx)("path", {
                    ref: (x) => {
                      f.current[y.id] = { ...f.current[y.id], core: x };
                    },
                    className: "thread-core",
                  }),
                  [0, 1, 2].map((x) =>
                    (0, T.jsx)(
                      "circle",
                      {
                        r: x === 2 ? 4.5 : 5.5,
                        fill: `url(#${x === 2 ? "pulse-in" : "pulse-out"})`,
                        ref: (v) => {
                          var S, E;
                          ((S = g.current)[(E = y.id)] || (S[E] = []))[x] = v;
                        },
                      },
                      x,
                    ),
                  ),
                ],
              },
              y.id,
            ),
          ),
          e.map((y, x) =>
            (0, T.jsxs)(
              "g",
              {
                style: { color: gt[y.kind].color },
                children: [
                  (0, T.jsx)("path", {
                    className: "fan-thread",
                    ref: (v) => {
                      w.current[x] = v;
                    },
                  }),
                  [0, 1].map((v) =>
                    (0, T.jsx)(
                      "circle",
                      {
                        r: v ? 3.5 : 4.5,
                        fill: `url(#${v ? "pulse-in" : "pulse-out"})`,
                        ref: (S) => {
                          var E;
                          ((E = M.current)[x] || (E[x] = []))[v] = S;
                        },
                      },
                      v,
                    ),
                  ),
                ],
              },
              y.id,
            ),
          ),
        ],
      }),
      _t.map((y) => {
        let x = m[y.id],
          v = l.current.mod === y.id;
        return (0, T.jsxs)(
          Z.default.Fragment,
          {
            children: [
              (0, T.jsx)("button", {
                className: `jelly ${v ? "active" : ""}`,
                ref: (S) => {
                  c.current[y.id] = S;
                },
                onClick: () => n(y.id),
                onPointerEnter: () => {
                  l.current.hover = y.kind;
                },
                onPointerLeave: () => {
                  l.current.hover = null;
                },
                "aria-label": `${y.title} ${y.en}，${x.count} 条`,
                children: (0, T.jsxs)("div", {
                  className: "jelly-inner",
                  ref: (S) => {
                    r.current[y.id] = S;
                  },
                  style: { filter: vu[y.id].filter },
                  children: [
                    (0, T.jsx)("video", {
                      className: "vsrc",
                      ref: d(y.id, "video"),
                      src: L.media.jelly,
                      poster: L.media.jellyPoster,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                      autoPlay: !0,
                      preload: "auto",
                      onLoadedMetadata: (S) => {
                        S.currentTarget.currentTime =
                          (_t.indexOf(y) * 1.37) % 6;
                      },
                    }),
                    (0, T.jsx)("canvas", {
                      className: "vid",
                      ref: d(y.id, "canvas"),
                    }),
                  ],
                }),
              }),
              (0, T.jsxs)("button", {
                className: `jelly-label ${v ? "active" : ""} ${h ? "below" : "side"}`,
                ref: (S) => {
                  s.current[y.id] = S;
                },
                onClick: () => n(y.id),
                tabIndex: -1,
                onPointerEnter: () => {
                  l.current.hover = y.kind;
                },
                onPointerLeave: () => {
                  l.current.hover = null;
                },
                style: { "--mod": vu[y.id].color },
                children: [
                  (0, T.jsx)("span", {
                    className: "jl-icon",
                    children: (0, T.jsx)(X, { name: y.icon, size: 14 }),
                  }),
                  (0, T.jsx)("span", {
                    className: "jl-count",
                    children: x.count,
                  }),
                  (0, T.jsxs)("span", {
                    className: "jl-name",
                    children: [y.title, (0, T.jsx)("em", { children: y.en })],
                  }),
                  (0, T.jsxs)("span", {
                    className: "jl-sub",
                    children: [
                      x.sub[0],
                      " ",
                      x.sub[1],
                      " ",
                      (0, T.jsx)("em", { children: x.sub[2] }),
                    ],
                  }),
                ],
              }),
            ],
          },
          y.id,
        );
      }),
      e.map((y, x) => {
        let v = U2(y);
        return (0, T.jsxs)(
          "button",
          {
            className: `fan-item ${i === y.id ? "active" : ""} kind-${y.kind}`,
            ref: (S) => {
              b.current[x] = S;
            },
            onClick: () => a(y.id),
            style: { "--kc": gt[y.kind].color },
            "aria-label": `打开 ${y.title} 的分析`,
            children: [
              (0, T.jsx)("span", { className: "fi-dot" }),
              (0, T.jsxs)("span", {
                className: "fi-body",
                children: [
                  (0, T.jsx)("span", {
                    className: "fi-title",
                    children: y.short || y.title,
                  }),
                  (0, T.jsx)("span", {
                    className: "fi-meta",
                    children: v.map(([S, E, _], D) =>
                      (0, T.jsxs)(
                        "span",
                        {
                          className: S === "↔" ? "mutual" : "",
                          children: [
                            S,
                            E && (0, T.jsx)("em", { children: E }),
                            " ",
                            _ !== "" && (0, T.jsx)("b", { children: _ }),
                          ],
                        },
                        D,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          },
          y.id,
        );
      }),
    ],
  });
}
function Y2({ graph: t, onGo: e }) {
  let n = (0, Z.useMemo)(() => bu(t), [t]),
    [a, l] = (0, Z.useState)(""),
    [i, u] = (0, Z.useState)(null),
    o = (0, Z.useRef)(null),
    c = (f) => {
      f.trim() && u({ q: f, list: bc(t, f) });
    },
    r = (f) => {
      if (
        (clearInterval(o.current),
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      ) {
        (l(f), c(f));
        return;
      }
      let g = 0;
      (l(""),
        (o.current = setInterval(() => {
          (g++,
            l(f.slice(0, g)),
            g >= f.length &&
              (clearInterval(o.current), setTimeout(() => c(f), 220)));
        }, 45)));
    };
  (0, Z.useEffect)(() => () => clearInterval(o.current), []);
  let s = [
    ["内容节点", "Notes", n.content],
    ["连接", "Links", n.links],
    ["双向共振", "Mutual", n.mutual],
    ["未创建", "Unresolved", n.ghosts],
  ];
  return (0, T.jsxs)("div", {
    className: "dock",
    children: [
      i &&
        (0, T.jsxs)("section", {
          className: "ask-results glass",
          "aria-live": "polite",
          children: [
            (0, T.jsxs)("header", {
              children: [
                (0, T.jsxs)("span", {
                  children: [
                    (0, T.jsx)(X, { name: "spark", size: 14 }),
                    "图谱分析 ",
                    (0, T.jsx)("em", { children: "Graph analysis" }),
                  ],
                }),
                (0, T.jsx)("small", {
                  children: "本地规则检索 · Local rules, no AI",
                }),
                (0, T.jsx)("button", {
                  className: "icon-btn",
                  "aria-label": "关闭分析",
                  onClick: () => u(null),
                  children: (0, T.jsx)(X, { name: "close", size: 14 }),
                }),
              ],
            }),
            (0, T.jsx)("div", {
              className: "ask-cards",
              children: i.list.map((f, g) => {
                var b;
                return (0, T.jsxs)(
                  "article",
                  {
                    className: `ask-card tone-${f.tone}`,
                    style: { animationDelay: g * 90 + "ms" },
                    children: [
                      (0, T.jsxs)("h4", {
                        children: [
                          f.title,
                          " ",
                          (0, T.jsx)("em", { children: f.en }),
                        ],
                      }),
                      (0, T.jsx)("p", { children: f.text }),
                      ((b = f.items) == null ? void 0 : b.length) > 0 &&
                        (0, T.jsx)("div", {
                          className: "chip-row",
                          children: f.items.slice(0, 8).map((w, M) => {
                            var p, d, m;
                            return (0, T.jsxs)(
                              "button",
                              {
                                className: "chip",
                                style: {
                                  "--kc":
                                    (d =
                                      gt[
                                        (p = t.index.get(w)) == null
                                          ? void 0
                                          : p.kind
                                      ]) == null
                                      ? void 0
                                      : d.color,
                                },
                                onClick: () => e(w),
                                children: [
                                  f.names[M],
                                  ((m = f.meta) == null ? void 0 : m[M]) &&
                                    (0, T.jsx)("small", {
                                      children: f.meta[M],
                                    }),
                                ],
                              },
                              w,
                            );
                          }),
                        }),
                      f.pairs &&
                        (0, T.jsx)("div", {
                          className: "pair-list",
                          children: f.pairs.map(([w, M, p], d) => {
                            var m, h;
                            return (0, T.jsxs)(
                              "button",
                              {
                                onClick: () => e(w),
                                children: [
                                  (0, T.jsx)("span", {
                                    children:
                                      (m = t.index.get(w)) == null
                                        ? void 0
                                        : m.short,
                                  }),
                                  (0, T.jsx)("i", { children: "⇄" }),
                                  (0, T.jsx)("span", {
                                    children:
                                      (h = t.index.get(M)) == null
                                        ? void 0
                                        : h.short,
                                  }),
                                  (0, T.jsx)("small", { children: p }),
                                ],
                              },
                              d,
                            );
                          }),
                        }),
                    ],
                  },
                  g,
                );
              }),
            }),
          ],
        }),
      (0, T.jsxs)("div", {
        className: "dock-panel glass",
        children: [
          (0, T.jsx)("div", {
            className: "dock-kpis",
            children: s.map(([f, g, b]) =>
              (0, T.jsxs)(
                "div",
                {
                  children: [
                    (0, T.jsxs)("span", {
                      children: [f, " ", (0, T.jsx)("em", { children: g })],
                    }),
                    (0, T.jsx)("strong", { children: b }),
                  ],
                },
                f,
              ),
            ),
          }),
          (0, T.jsxs)("form", {
            className: "ask",
            onSubmit: (f) => {
              (f.preventDefault(), c(a));
            },
            children: [
              (0, T.jsx)("input", {
                value: a,
                onChange: (f) => l(f.target.value),
                placeholder: "问问你的创作图谱… Ask your graph",
                "aria-label": "向图谱提问",
              }),
              (0, T.jsx)("button", {
                className: "send",
                "aria-label": "提交问题",
                children: (0, T.jsx)(X, { name: "send", size: 16 }),
              }),
            ],
          }),
          (0, T.jsxs)("div", {
            className: "dock-chips",
            children: [
              (0, T.jsxs)("span", {
                className: "me",
                children: [
                  (0, T.jsx)(X, { name: "agent", size: 13 }),
                  "我的图谱 ",
                  (0, T.jsx)("em", { children: "My graph" }),
                ],
              }),
              [
                "双向连接有哪些？",
                "最核心的内容",
                "下一篇写什么",
                "未创建的笔记",
              ].map((f) =>
                (0, T.jsx)("button", { onClick: () => r(f), children: f }, f),
              ),
            ],
          }),
        ],
      }),
    ],
  });
}
function a1({
  graph: t,
  layout: e,
  focus: n,
  setFocus: a,
  onAction: l,
  onAbout: i,
  reduced: u,
}) {
  let o = (0, Z.useRef)(null),
    [c, r] = (0, Z.useState)({ w: 1280, h: 760 }),
    [s, f] = (0, Z.useState)(!1),
    { mod: g, sel: b } = n,
    w = b ? "note" : g ? "module" : "hub",
    M = (0, Z.useMemo)(() => e1(t, g), [t, g]),
    p = (0, Z.useRef)(null);
  if (!p.current) {
    let v = performance.now();
    p.current = {
      t0: v,
      time: 0,
      stage: w,
      mod: g,
      items: M,
      size: c,
      reduced: u,
      paused: !1,
      hover: null,
      itemState: [],
      fanStart: v,
      orb: { x: 640, y: 380, s: 400 },
      springs: {
        dust: wt(0.3),
        orb: { x: wt(c.w / 2), y: wt(c.h / 2), s: wt(120), o: wt(0) },
        jelly: Object.fromEntries(
          _t.map((E) => [
            E.id,
            { x: wt(c.w / 2), y: wt(c.h / 2), s: wt(20), o: wt(0), lo: wt(0) },
          ]),
        ),
      },
    };
    let S = !1;
    try {
      S = !!sessionStorage.getItem("neural-intro-seen");
    } catch (E) {}
    ((p.current.introSeen = u || S),
      p.current.introSeen && (p.current.t0 = v - 6e3));
  }
  (Object.assign(p.current, {
    stage: w,
    mod: g,
    items: M,
    size: c,
    reduced: u,
    paused: s,
  }),
    (0, Z.useLayoutEffect)(() => {
      let v = o.current,
        S = () => {
          let _ = v.clientWidth,
            D = v.clientHeight,
            R = p.current,
            F = R.springs;
          if (R.stage === "hub" && performance.now() - R.t0 < 300) {
            let Q = n1({ ...R, size: { w: _, h: D } }, 0).orb;
            Object.assign(F.orb, { x: wt(Q.x), y: wt(Q.y) });
            for (let ee of _t)
              Object.assign(F.jelly[ee.id], { x: wt(Q.x), y: wt(Q.y) });
            R.orb = { ...R.orb, x: Q.x, y: Q.y };
          }
          r({ w: _, h: D });
        };
      S();
      let E = new ResizeObserver(S);
      return (E.observe(v), () => E.disconnect());
    }, []),
    (0, Z.useEffect)(() => {
      try {
        sessionStorage.setItem("neural-intro-seen", "1");
      } catch (v) {}
    }, []),
    (0, Z.useEffect)(() => {
      var v, S;
      (S = (v = p.current).syncVideo) == null || S.call(v);
    }, [s]),
    (0, Z.useEffect)(() => {
      let v = (S) => {
        S.key !== "Escape" ||
          S.isComposing ||
          document.querySelector(".veil") ||
          (b ? a({ mod: g, sel: null }) : g && a({ mod: null, sel: null }));
      };
      return (
        window.addEventListener("keydown", v),
        () => window.removeEventListener("keydown", v)
      );
    }, [g, b, a]));
  let d = (0, Z.useCallback)(
      (v) => {
        let S = t.index.get(v),
          E = Xh(S);
        E && a({ mod: E.id, sel: v });
      },
      [t, a],
    ),
    m = () => {
      let v = p.current,
        S = performance.now();
      ((v.t0 = S), (v.time = 0));
      let E = v.springs;
      ((E.orb.s.x = 120), (E.orb.o.x = 0));
      for (let _ of _t)
        Object.assign(E.jelly[_.id], {
          x: wt(v.orb.x),
          y: wt(v.orb.y),
          s: wt(20),
          o: wt(0),
          lo: wt(0),
        });
      a({ mod: null, sel: null });
    },
    h = b ? t.index.get(b) : null,
    y = _t.find((v) => v.id === g),
    x = bu(t);
  return (0, T.jsxs)("section", {
    ref: o,
    className: `home-stage stage-${w} ${p.current.introSeen ? "intro-done" : ""}`,
    "aria-label": "创作神经图谱",
    children: [
      (0, T.jsx)("div", { className: "stage-bg" }),
      (0, T.jsx)(Wh, { graph: t, layout: e, live: p, reduced: u }),
      (0, T.jsx)(q2, {
        graph: t,
        items: w === "hub" ? [] : M,
        sel: b,
        live: p,
        onModule: (v) => a({ mod: v === g && w !== "hub" ? g : v, sel: null }),
        onItem: (v) => a({ mod: g, sel: v }),
      }),
      (0, T.jsxs)("div", {
        className: "hub-copy",
        "aria-hidden": w !== "hub",
        children: [
          (0, T.jsxs)("p", {
            className: "eyebrow",
            children: [
              Wt.brand.name,
              " · ",
              Wt.brand.sub,
              " ",
              (0, T.jsx)("span", { children: Wt.brand.tagline }),
            ],
          }),
          (0, T.jsxs)("h1", {
            children: ["让每一条链接，", (0, T.jsx)("br", {}), "双向生长。"],
          }),
          (0, T.jsx)("p", {
            className: "hub-en",
            children: "Every link grows both ways.",
          }),
          (0, T.jsxs)("p", {
            className: "hub-meta",
            children: [
              _t.length,
              " 个模块 ",
              (0, T.jsx)("em", { children: "modules" }),
              " · ",
              x.content,
              " 条内容 ",
              (0, T.jsx)("em", { children: "notes" }),
              " · ",
              x.links,
              " 条连接 ",
              (0, T.jsx)("em", { children: "links" }),
            ],
          }),
          (0, T.jsxs)("p", {
            className: "hub-hint",
            children: [
              "点击水母，展开模块 · ",
              (0, T.jsx)("em", { children: "Tap a jellyfish to expand" }),
            ],
          }),
        ],
      }),
      w !== "hub" &&
        (0, T.jsxs)("nav", {
          className: "crumbs",
          "aria-label": "图谱路径",
          children: [
            (0, T.jsx)("button", {
              className: "crumb-back",
              onClick: () =>
                a(b ? { mod: g, sel: null } : { mod: null, sel: null }),
              "aria-label": "返回上一层",
              children: (0, T.jsx)(X, { name: "back", size: 16 }),
            }),
            (0, T.jsxs)("button", {
              onClick: () => a({ mod: null, sel: null }),
              children: ["创作空间 ", (0, T.jsx)("em", { children: "Core" })],
            }),
            (0, T.jsx)("span", { children: "/" }),
            (0, T.jsxs)("button", {
              onClick: () => a({ mod: g, sel: null }),
              style: { color: vu[g].color },
              children: [y.title, " ", (0, T.jsx)("em", { children: y.en })],
            }),
            h &&
              (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)("span", { children: "/" }),
                  (0, T.jsx)("b", { children: h.short || h.title }),
                ],
              }),
          ],
        }),
      (0, T.jsxs)("div", {
        className: "stage-tools glass",
        role: "toolbar",
        "aria-label": "动画控制",
        children: [
          (0, T.jsxs)("button", {
            onClick: m,
            title: "重播开场 Replay",
            children: [
              (0, T.jsx)(X, { name: "replay", size: 15 }),
              (0, T.jsxs)("span", {
                children: ["重播 ", (0, T.jsx)("em", { children: "Replay" })],
              }),
            ],
          }),
          (0, T.jsxs)("button", {
            onClick: () => f(!s),
            title: s ? "继续 Resume" : "暂停 Pause",
            "aria-pressed": s,
            children: [
              (0, T.jsx)(X, { name: s ? "play" : "pause", size: 15 }),
              (0, T.jsxs)("span", {
                children: [
                  s ? "继续" : "暂停",
                  " ",
                  (0, T.jsx)("em", { children: s ? "Resume" : "Pause" }),
                ],
              }),
            ],
          }),
          (0, T.jsxs)("button", {
            onClick: i,
            title: "关于图谱 About",
            children: [
              (0, T.jsx)(X, { name: "info", size: 15 }),
              (0, T.jsxs)("span", {
                children: [
                  "数据来源 ",
                  (0, T.jsx)("em", { children: "Sources" }),
                ],
              }),
            ],
          }),
        ],
      }),
      w === "hub" &&
        (0, T.jsxs)("div", {
          className: "legend glass",
          "aria-label": "图例",
          children: [
            (0, T.jsxs)("h3", {
              children: ["图例 ", (0, T.jsx)("em", { children: "Legend" })],
            }),
            ["post", "note", "idea", "draft", "concept", "tag", "ghost"].map(
              (v) =>
                (0, T.jsxs)(
                  "div",
                  {
                    children: [
                      (0, T.jsx)("i", {
                        style: { "--kc": gt[v].color },
                        className: v === "ghost" ? "ghost" : "",
                      }),
                      gt[v].label,
                      " ",
                      (0, T.jsx)("em", { children: gt[v].en }),
                      (0, T.jsx)("b", {
                        children: t.nodes.filter((S) => S.kind === v).length,
                      }),
                    ],
                  },
                  v,
                ),
            ),
            (0, T.jsxs)("div", {
              className: "legend-lines",
              children: [
                (0, T.jsxs)("span", {
                  children: [
                    (0, T.jsx)("i", { className: "ln mutual" }),
                    "双向 ",
                    (0, T.jsx)("em", { children: "Mutual" }),
                  ],
                }),
                (0, T.jsxs)("span", {
                  children: [
                    (0, T.jsx)("i", { className: "ln one" }),
                    "单向 ",
                    (0, T.jsx)("em", { children: "One-way" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      w === "hub" && (0, T.jsx)(Y2, { graph: t, onGo: d }),
      w === "module" &&
        (0, T.jsxs)("p", {
          className: "module-hint",
          children: [
            "选择一篇笔记查看全部分析 · ",
            (0, T.jsx)("em", {
              children: "Select a note to see its full analysis",
            }),
          ],
        }),
      h &&
        (0, T.jsx)(
          "aside",
          {
            className: "analysis-wrap",
            children: (0, T.jsx)(xc, {
              graph: t,
              node: h,
              module: y,
              onGo: d,
              onAction: l,
              onClose: () => a({ mod: g, sel: null }),
            }),
          },
          b,
        ),
    ],
  });
}
var Zn = yt(rn(), 1);
var z = yt(ce(), 1),
  Vf = {},
  u1 = () => {
    var t, e;
    Vf = (e = (t = Aa()) == null ? void 0 : t.snapshot) != null ? e : Vf;
  };
u1();
ai(u1);
function Kf({ zh: t, en: e, sub: n, subEn: a, children: l }) {
  return (0, z.jsxs)("header", {
    className: "page-head",
    children: [
      (0, z.jsxs)("div", {
        children: [
          (0, z.jsxs)("p", {
            className: "eyebrow",
            children: [
              e.toUpperCase(),
              " ",
              (0, z.jsx)("span", { children: t }),
            ],
          }),
          (0, z.jsx)("h1", { children: n }),
          (0, z.jsx)("p", { className: "page-sub", children: a }),
        ],
      }),
      l && (0, z.jsx)("div", { className: "page-head-actions", children: l }),
    ],
  });
}
var Zf = "分类:",
  l1 = (t) => {
    var e, n;
    return (
      ((n =
        (e = t == null ? void 0 : t.tags) == null
          ? void 0
          : e.find((a) => a.startsWith(Zf))) == null
        ? void 0
        : n.slice(Zf.length)) || ""
    );
  },
  G2 = (t) => {
    var e;
    return (
      ((e = t == null ? void 0 : t.tags) == null
        ? void 0
        : e.find((n) => n === "待读" || n === "已读")) || ""
    );
  },
  L2 = (t) =>
    ((t == null ? void 0 : t.tags) || []).filter(
      (e) => !e.startsWith(Zf) && e !== "待读" && e !== "已读",
    ).length,
  X2 = (t) => /^\s*https?:\/\//m.test((t == null ? void 0 : t.body) || "");
function o1({ graph: t, selected: e, setSelected: n, onGo: a, onAction: l }) {
  var m;
  let [i, u] = (0, Zn.useState)(""),
    [o, c] = (0, Zn.useState)("date"),
    r = (h, y) => {
      var x, v;
      return (v =
        (x = t.index.get("post:" + h.id)) == null ? void 0 : x.tags) == null
        ? void 0
        : v.includes(y);
    },
    s = nn
      .filter((h) => h.title.toLowerCase().includes(i.toLowerCase()))
      .sort((h, y) =>
        o === "date"
          ? y.date.localeCompare(h.date)
          : o === "status"
            ? r(h, "待读") === r(y, "待读")
              ? y.date.localeCompare(h.date)
              : r(h, "待读")
                ? -1
                : 1
            : h.title.localeCompare(y.title, "zh-Hans-CN"),
      ),
    f = [...nn].sort((h, y) => h.date.localeCompare(y.date)),
    g =
      t.index.get("post:" + e) ||
      t.index.get("post:" + ((m = s[0]) == null ? void 0 : m.id)),
    b = nn.length
      ? [...nn]
          .map((h) => h.date)
          .sort()
          .pop()
          .slice(0, 7)
      : "",
    w = nn.filter((h) => h.date.slice(0, 7) === b).length,
    M = new Set(nn.map((h) => l1(t.index.get("post:" + h.id))).filter(Boolean)),
    p = nn.filter((h) => r(h, "待读")).length,
    d = [
      ["项目总数", "Projects", nn.length],
      ["分类数", "Categories", M.size],
      ["本月新增", "Added", w],
      ["待读", "To read", p],
    ];
  return (0, z.jsxs)("div", {
    className: "page page-library",
    children: [
      (0, z.jsx)(Kf, {
        zh: "项目库",
        en: "Projects",
        sub: "收录的项目卡，都在这里。",
        subEn:
          "Project cards you collected, with status and connections.",
      }),
      (0, z.jsx)("section", {
        className: "kpi-band glass",
        children: d.map(([h, y, x]) =>
          (0, z.jsxs)(
            "div",
            {
              children: [
                (0, z.jsxs)("span", {
                  children: [h, " ", (0, z.jsx)("em", { children: y })],
                }),
                (0, z.jsx)("strong", {
                  children: (0, z.jsx)(ii, { value: x }),
                }),
              ],
            },
            h,
          ),
        ),
      }),
      (0, z.jsxs)("div", {
        className: "library-layout",
        children: [
          (0, z.jsxs)("section", {
            className: "works-col",
            children: [
              (0, z.jsxs)("div", {
                className: "toolbar-row",
                children: [
                  (0, z.jsxs)("label", {
                    className: "search",
                    children: [
                      (0, z.jsx)(X, { name: "search", size: 15 }),
                      (0, z.jsx)("input", {
                        value: i,
                        onChange: (h) => u(h.target.value),
                        placeholder: "搜索项目… Search projects",
                        "aria-label": "搜索资源",
                      }),
                    ],
                  }),
                  (0, z.jsx)("div", {
                    className: "seg",
                    role: "group",
                    "aria-label": "排序",
                    children: [
                      ["date", "最新", "Latest"],
                      ["status", "待读优先", "To read"],
                      ["title", "名称", "Title"],
                    ].map(([h, y, x]) =>
                      (0, z.jsxs)(
                        "button",
                        {
                          className: o === h ? "active" : "",
                          onClick: () => c(h),
                          children: [y, (0, z.jsx)("em", { children: x })],
                        },
                        h,
                      ),
                    ),
                  }),
                ],
              }),
              (0, z.jsx)("div", {
                className: "works-grid",
                children: s.map((h, y) => {
                  let x = t.index.get("post:" + h.id),
                    v = (g == null ? void 0 : g.id) === x.id,
                    S = l1(x),
                    E = G2(x);
                  return (0, z.jsxs)(
                    "button",
                    {
                      className: `work-card ${v ? "active" : ""}`,
                      onClick: () => n(h.id),
                      style: { animationDelay: y * 60 + "ms" },
                      children: [
                        (0, z.jsxs)("span", {
                          className: "wc-cover",
                          children: [
                            x.cover
                              ? (0, z.jsx)("img", {
                                  src: x.cover,
                                  alt: "",
                                  width: 4,
                                  height: 3,
                                  loading: "lazy",
                                })
                              : (0, z.jsxs)("span", {
                                  className: "wc-fallback",
                                  style: { "--h": (f.indexOf(h) * 47) % 360 },
                                  children: [
                                    (0, z.jsx)("b", { children: h.title }),
                                    (0, z.jsx)("small", {
                                      children: X2(x)
                                        ? "链接 · Link"
                                        : "笔记 · Note",
                                    }),
                                  ],
                                }),
                            (0, z.jsxs)("span", {
                              className: "wc-index",
                              children: [
                                "#",
                                String(f.indexOf(h) + 1).padStart(2, "0"),
                              ],
                            }),
                          ],
                        }),
                        (0, z.jsxs)("span", {
                          className: "wc-body",
                          children: [
                            (0, z.jsxs)("span", {
                              className: "wc-date",
                              children: [
                                h.date.slice(0, 10),
                                " · ",
                                L2(x),
                                " topics",
                              ],
                            }),
                            (0, z.jsx)("span", {
                              className: "wc-title",
                              children: h.title,
                            }),
                            (0, z.jsxs)("span", {
                              className: "wc-stats",
                              children: [
                                (0, z.jsxs)("span", {
                                  children: [
                                    "分类",
                                    (0, z.jsx)("em", { children: "Category" }),
                                    (0, z.jsx)("b", { children: S || "—" }),
                                  ],
                                }),
                                (0, z.jsxs)("span", {
                                  children: [
                                    "状态",
                                    (0, z.jsx)("em", { children: "Status" }),
                                    (0, z.jsx)("b", { children: E || "—" }),
                                  ],
                                }),
                                (0, z.jsxs)("span", {
                                  children: [
                                    "⇄",
                                    (0, z.jsx)("em", { children: "Mutual" }),
                                    (0, z.jsx)("b", { children: x.mutual }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    h.id,
                  );
                }),
              }),
              !s.length &&
                (0, z.jsxs)("div", {
                  className: "empty",
                  children: [
                    (0, z.jsx)(X, { name: "search", size: 30 }),
                    (0, z.jsxs)("p", {
                      children: [
                        "没有找到这条资源 ",
                        (0, z.jsx)("em", { children: "No match" }),
                      ],
                    }),
                    (0, z.jsxs)("button", {
                      className: "pill",
                      onClick: () => u(""),
                      children: [
                        "清空搜索 ",
                        (0, z.jsx)("em", { children: "Clear" }),
                      ],
                    }),
                  ],
                }),
              (0, z.jsxs)("p", {
                className: "source-line",
                children: [
                  (0, z.jsx)(X, { name: "info", size: 13 }),
                  nn.length,
                  " 条资源来自",
                  Vf.source,
                  "；「—」表示未标注 ",
                  (0, z.jsx)("em", { children: "Not tagged" }),
                  "。",
                ],
              }),
            ],
          }),
          g &&
            (0, z.jsx)(
              "aside",
              {
                className: "library-analysis",
                children: (0, z.jsx)(xc, {
                  graph: t,
                  node: g,
                  module: _t[0],
                  onGo: a,
                  onAction: l,
                  onClose: () => n(null),
                }),
              },
              g.id,
            ),
        ],
      }),
    ],
  });
}
function Q2({ graph: t, node: e }) {
  let n = li(t, e.id),
    a = [
      ...n.mutual.map((u) => ({ ...u, dir: "both" })),
      ...n.out.map((u) => ({ ...u, dir: "out" })),
      ...n.back.map((u) => ({ ...u, dir: "in" })),
    ].slice(0, 16),
    l = 92,
    i = 120;
  return (0, z.jsxs)("svg", {
    className: "mini-graph",
    viewBox: "0 0 240 240",
    role: "img",
    "aria-label": `${a.length} 条连接`,
    children: [
      (0, z.jsx)("defs", {
        children: (0, z.jsxs)("radialGradient", {
          id: "mg-core",
          children: [
            (0, z.jsx)("stop", { offset: "0", stopColor: L.mini.glow0 }),
            (0, z.jsx)("stop", { offset: ".5", stopColor: L.mini.core }),
            (0, z.jsx)("stop", {
              offset: "1",
              stopColor: L.mini.core,
              stopOpacity: "0",
            }),
          ],
        }),
      }),
      a.map((u, o) => {
        let c = (o / Math.max(a.length, 1)) * Math.PI * 2 - Math.PI / 2,
          r = t.index.get(u.id),
          s = i + Math.cos(c) * l,
          f = i + Math.sin(c) * l;
        return (0, z.jsxs)(
          "g",
          {
            style: { "--d": o * 60 + "ms" },
            className: `mg-link dir-${u.dir}`,
            children: [
              (0, z.jsx)("line", {
                x1: i,
                y1: i,
                x2: s,
                y2: f,
                stroke: u.dir === "both" ? L.mini.mutual : gt[r.kind].color,
              }),
              (0, z.jsx)("circle", {
                cx: s,
                cy: f,
                r: r.kind === "ghost" ? 3.5 : 4.5,
                fill: r.kind === "ghost" ? "none" : gt[r.kind].color,
                stroke: gt[r.kind].color,
                strokeDasharray: r.kind === "ghost" ? "2 2" : void 0,
              }),
              u.dir !== "in" &&
                (0, z.jsx)("circle", {
                  r: "2.2",
                  fill: L.mini.pulseOut,
                  className: "mg-pulse",
                  children: (0, z.jsx)("animateMotion", {
                    dur: 2 + (o % 3) * 0.4 + "s",
                    repeatCount: "indefinite",
                    path: `M${i},${i} L${s},${f}`,
                  }),
                }),
              u.dir !== "out" &&
                (0, z.jsx)("circle", {
                  r: "2",
                  fill: L.mini.pulseIn,
                  className: "mg-pulse",
                  children: (0, z.jsx)("animateMotion", {
                    dur: 2.4 + (o % 2) * 0.5 + "s",
                    repeatCount: "indefinite",
                    path: `M${s},${f} L${i},${i}`,
                  }),
                }),
            ],
          },
          u.id,
        );
      }),
      (0, z.jsx)("circle", { cx: i, cy: i, r: "26", fill: "url(#mg-core)" }),
      (0, z.jsx)("circle", { cx: i, cy: i, r: "8", fill: L.mini.dot }),
    ],
  });
}
function c1({
  graph: t,
  drafts: e,
  setDrafts: n,
  active: a,
  setActive: l,
  onNew: i,
  onDelete: u,
  onGo: o,
}) {
  let c = e.find((x) => x.id === a) || e[0],
    r = (0, Zn.useRef)(null),
    [s, f] = (0, Zn.useState)(null),
    [g, b] = (0, Zn.useState)(0),
    w = (x, v) => n(e.map((S) => (S.id === c.id ? { ...S, [x]: v } : S))),
    M = (0, Zn.useMemo)(
      () =>
        t.nodes
          .filter(
            (x) =>
              Ce.has(x.kind) && x.id !== "draft:" + (c == null ? void 0 : c.id),
          )
          .map((x) => {
            var v;
            return {
              id: x.id,
              title:
                ((v = x.path) == null
                  ? void 0
                  : v.split("/").pop().replace(/\.md$/, "")) || x.title,
              short: x.short || x.title,
              kind: x.kind,
            };
          }),
      [t, c == null ? void 0 : c.id],
    ),
    p = (x) => {
      let S = x.value.slice(0, x.selectionStart).match(/\[\[([^\]\n]*)$/);
      if (!S) {
        f(null);
        return;
      }
      let E = S[1].toLowerCase(),
        _ = M.filter(
          (D) =>
            D.title.toLowerCase().includes(E) ||
            D.short.toLowerCase().includes(E),
        ).slice(0, 7);
      (f({ q: S[1], start: x.selectionStart - S[1].length, list: _ }), b(0));
    },
    d = (x) => {
      let v = r.current,
        S = s.start,
        E = v.selectionStart,
        _ =
          v.value.slice(0, S) +
          x.title +
          "]]" +
          v.value.slice(E).replace(/^\]\]/, "");
      (w("body", _),
        f(null),
        requestAnimationFrame(() => {
          v.focus();
          let D = S + x.title.length + 2;
          v.setSelectionRange(D, D);
        }));
    },
    m = c && t.index.get("draft:" + c.id),
    h = m ? li(t, m.id) : null,
    y = m
      ? t.links
          .filter((x) => x.kind === "wiki" && x.s === m.id)
          .map((x) => t.index.get(x.t))
      : [];
  return (0, z.jsxs)("div", {
    className: "page page-drafts",
    children: [
      (0, z.jsx)(Kf, {
        zh: "记忆库",
        en: "Memories",
        sub: "沉淀下来的经验与记忆。",
        subEn:
          "Stored experiences and memories of this vault.",
        children: (0, z.jsxs)("button", {
          className: "pill primary",
          onClick: () => i(),
          children: [
            (0, z.jsx)(X, { name: "plus", size: 15 }),
            "添加记忆库 ",
            (0, z.jsx)("em", { children: "Add" }),
          ],
        }),
      }),
      (0, z.jsxs)("div", {
        className: "drafts-layout",
        children: [
          (0, z.jsxs)("aside", {
            className: "draft-list glass",
            children: [
              (0, z.jsxs)("h3", {
                children: [
                  "记忆库清单 ",
                  (0, z.jsx)("em", { children: "Memories" }),
                  (0, z.jsx)("b", { children: e.length }),
                ],
              }),
              e.map((x) => {
                var v;
                return (0, z.jsxs)(
                  "button",
                  {
                    className:
                      x.id === (c == null ? void 0 : c.id) ? "active" : "",
                    onClick: () => l(x.id),
                    children: [
                      (0, z.jsx)("i", {}),
                      (0, z.jsxs)("span", {
                        children: [
                          x.title || "未命名条目",
                          (0, z.jsxs)("small", {
                            children: [
                              (x.body || "").length,
                              " 字 chars · ",
                              ((v = t.index.get("draft:" + x.id)) == null
                                ? void 0
                                : v.deg) || 0,
                              " 连接 links",
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  x.id,
                );
              }),
              !e.length &&
                (0, z.jsxs)("p", {
                  className: "empty-line",
                  children: [
                    "清单是空的 ",
                    (0, z.jsx)("em", { children: "Nothing here" }),
                  ],
                }),
            ],
          }),
          c
            ? (0, z.jsxs)("section", {
                className: "editor glass",
                children: [
                  (0, z.jsxs)("div", {
                    className: "editor-meta",
                    children: [
                      (0, z.jsxs)("span", {
                        children: [
                          "03-记忆库 / 待处理 ",
                          (0, z.jsx)("em", { children: "To process" }),
                        ],
                      }),
                      (0, z.jsxs)("span", {
                        children: [
                          (0, z.jsx)(X, { name: "check", size: 13 }),
                          "已保存到此浏览器 ",
                          (0, z.jsx)("em", { children: "Saved locally" }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.jsx)("input", {
                    className: "editor-title",
                    value: c.title,
                    onChange: (x) => w("title", x.target.value),
                    placeholder: "这条记忆库是什么 Title",
                    "aria-label": "记忆库标题",
                  }),
                  (0, z.jsxs)("div", {
                    className: "editor-area",
                    children: [
                      (0, z.jsx)("textarea", {
                        ref: r,
                        value: c.body,
                        "aria-label": "记忆库正文",
                        placeholder:
                          "记点什么… 输入 [[ 链接到其他笔记 Type [[ to link a note",
                        onChange: (x) => {
                          (w("body", x.target.value), p(x.target));
                        },
                        onClick: (x) => p(x.target),
                        onKeyDown: (x) => {
                          s != null &&
                            s.list.length &&
                            (x.key === "ArrowDown"
                              ? (x.preventDefault(), b((g + 1) % s.list.length))
                              : x.key === "ArrowUp"
                                ? (x.preventDefault(),
                                  b((g - 1 + s.list.length) % s.list.length))
                                : x.key === "Enter" && !x.isComposing
                                  ? (x.preventDefault(), d(s.list[g]))
                                  : x.key === "Escape" && f(null));
                        },
                      }),
                      s &&
                        (0, z.jsxs)("div", {
                          className: "suggest glass",
                          role: "listbox",
                          "aria-label": "链接建议",
                          children: [
                            (0, z.jsxs)("p", {
                              children: [
                                "链接到笔记 ",
                                (0, z.jsx)("em", { children: "Link to note" }),
                                s.q &&
                                  (0, z.jsxs)(z.Fragment, {
                                    children: [" · “", s.q, "”"],
                                  }),
                              ],
                            }),
                            s.list.map((x, v) =>
                              (0, z.jsxs)(
                                "button",
                                {
                                  role: "option",
                                  "aria-selected": v === g,
                                  className: v === g ? "on" : "",
                                  onMouseDown: (S) => {
                                    (S.preventDefault(), d(x));
                                  },
                                  style: { "--kc": gt[x.kind].color },
                                  children: [
                                    (0, z.jsx)("i", {}),
                                    x.short,
                                    (0, z.jsxs)("small", {
                                      children: [
                                        gt[x.kind].label,
                                        " ",
                                        gt[x.kind].en,
                                      ],
                                    }),
                                  ],
                                },
                                x.id,
                              ),
                            ),
                            !s.list.length &&
                              (0, z.jsxs)("span", {
                                className: "none",
                                children: [
                                  "没有匹配，将成为未创建的笔记 ",
                                  (0, z.jsx)("em", {
                                    children: "Will be unresolved",
                                  }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                  (0, z.jsxs)("footer", {
                    className: "editor-foot",
                    children: [
                      (0, z.jsxs)("span", {
                        children: [
                          (c.body || "").length,
                          " 字 ",
                          (0, z.jsx)("em", { children: "chars" }),
                          " · ",
                          y.length,
                          " 个双链 ",
                          (0, z.jsx)("em", { children: "wikilinks" }),
                        ],
                      }),
                      (0, z.jsxs)("button", {
                        className: "pill ghost danger",
                        onClick: () => u(c.id),
                        children: [
                          (0, z.jsx)(X, { name: "trash", size: 14 }),
                          "删除 ",
                          (0, z.jsx)("em", { children: "Delete" }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, z.jsx)("section", {
                className: "editor glass empty",
                children: (0, z.jsxs)("p", {
                  children: [
                    "添加一条记忆库，在右侧记下要点 ",
                    (0, z.jsx)("em", { children: "Add an item to begin" }),
                  ],
                }),
              }),
          m &&
            (0, z.jsxs)("aside", {
              className: "draft-links glass",
              children: [
                (0, z.jsxs)("h3", {
                  children: [
                    (0, z.jsx)(X, { name: "pulse", size: 15 }),
                    "神经连接 ",
                    (0, z.jsx)("em", { children: "Neural links" }),
                  ],
                }),
                (0, z.jsx)(Q2, { graph: t, node: m }),
                (0, z.jsxs)("div", {
                  className: "dl-legend",
                  children: [
                    (0, z.jsxs)("span", {
                      children: [
                        (0, z.jsx)("i", { className: "out" }),
                        "出链 ",
                        (0, z.jsx)("em", { children: "Out" }),
                        " ",
                        h.out.length,
                      ],
                    }),
                    (0, z.jsxs)("span", {
                      children: [
                        (0, z.jsx)("i", { className: "in" }),
                        "反链 ",
                        (0, z.jsx)("em", { children: "In" }),
                        " ",
                        h.back.length,
                      ],
                    }),
                    (0, z.jsxs)("span", {
                      children: [
                        (0, z.jsx)("i", { className: "both" }),
                        "双向 ",
                        (0, z.jsx)("em", { children: "Mutual" }),
                        " ",
                        h.mutual.length,
                      ],
                    }),
                  ],
                }),
                [
                  ["[[双链]]", "Wikilinks", y.map((x) => x.id)],
                  [
                    "提及概念",
                    "Concepts",
                    h.out
                      .filter((x) => t.index.get(x.id).kind === "concept")
                      .map((x) => x.id),
                  ],
                  ["双向共振", "Resonance", h.mutual.map((x) => x.id)],
                  ["反链 · 来源", "Backlinks", h.back.map((x) => x.id)],
                ]
                  .filter((x) => x[2].length)
                  .map(([x, v, S]) =>
                    (0, z.jsxs)(
                      "div",
                      {
                        className: "dl-group",
                        children: [
                          (0, z.jsxs)("p", {
                            children: [
                              x,
                              " ",
                              (0, z.jsx)("em", { children: v }),
                            ],
                          }),
                          (0, z.jsx)("div", {
                            className: "chip-row",
                            children: S.map((E) => {
                              let _ = t.index.get(E);
                              return Ce.has(_.kind) || _.kind === "concept"
                                ? (0, z.jsx)(
                                    "button",
                                    {
                                      className: "chip",
                                      style: { "--kc": gt[_.kind].color },
                                      onClick: () => o(E),
                                      children: _.short || _.title,
                                    },
                                    E,
                                  )
                                : (0, z.jsx)(
                                    "span",
                                    {
                                      className: `chip static ${_.kind === "ghost" ? "ghost" : ""}`,
                                      style: { "--kc": gt[_.kind].color },
                                      children: _.short || _.title,
                                    },
                                    E,
                                  );
                            }),
                          }),
                        ],
                      },
                      x,
                    ),
                  ),
                !m.deg &&
                  (0, z.jsxs)("p", {
                    className: "empty-line",
                    children: [
                      "写下内容或 [[链接]] 后，这里会长出连接。",
                      (0, z.jsx)("em", {
                        children: "Links appear as you write.",
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
    ],
  });
}
var V2 = [
    ["待整理", "To sort"],
    ["进行中", "In progress"],
    ["已归档", "Archived"],
  ],
  i1 = { 高: ["High", "high"], 中: ["Medium", "mid"], 低: ["Low", "low"] };
function r1({ graph: t, ideas: e, onEdit: n, onNew: a, onGraph: l }) {
  return (0, z.jsxs)("div", {
    className: "page page-ideas",
    children: [
      (0, z.jsx)(Kf, {
        zh: "索引库",
        en: "Index",
        sub: "库里的导航与路由页。",
        subEn:
          "Index and routing pages of this vault.",
        children: (0, z.jsxs)("button", {
          className: "pill primary",
          onClick: a,
          children: [
            (0, z.jsx)(X, { name: "plus", size: 15 }),
            "新建索引 ",
            (0, z.jsx)("em", { children: "New index" }),
          ],
        }),
      }),
      (0, z.jsx)("div", {
        className: "lanes",
        children: V2.map(([i, u], o) => {
          let c = e.filter((r) => r.status === i);
          return (0, z.jsxs)(
            "section",
            {
              className: "lane glass",
              style: { animationDelay: o * 90 + "ms" },
              children: [
                (0, z.jsxs)("header", {
                  children: [
                    (0, z.jsx)("span", { className: `lane-dot l${o}` }),
                    i,
                    " ",
                    (0, z.jsx)("em", { children: u }),
                    (0, z.jsx)("b", { children: c.length }),
                  ],
                }),
                c.map((r, s) => {
                  var p;
                  let f = t.index.get("idea:" + r.id),
                    b = (f ? Vn(t, f.id) : []).filter(
                      (d) => t.index.get(d.id).kind === "post",
                    ),
                    [w, M] = i1[r.priority] || i1.中;
                  return (0, z.jsxs)(
                    "article",
                    {
                      className: `idea-card pri-${M}`,
                      style: { animationDelay: o * 90 + s * 70 + 140 + "ms" },
                      children: [
                        (0, z.jsxs)("div", {
                          className: "ic-top",
                          children: [
                            (0, z.jsxs)("span", {
                              className: "ic-pri",
                              children: [
                                (0, z.jsx)("i", {}),
                                r.priority,
                                " ",
                                (0, z.jsx)("em", { children: w }),
                              ],
                            }),
                            (0, z.jsx)("span", {
                              className: "ic-plat",
                              children: r.platform,
                            }),
                          ],
                        }),
                        (0, z.jsx)("h3", { children: r.title || "未命名灵感" }),
                        (0, z.jsx)("p", { children: r.note || "还没有备注。" }),
                        ((p = f == null ? void 0 : f.shared) == null
                          ? void 0
                          : p.length) > 0 &&
                          (0, z.jsx)("div", {
                            className: "chip-row",
                            children: f.shared
                              .slice(0, 5)
                              .map((d) =>
                                (0, z.jsx)(
                                  "span",
                                  {
                                    className: "chip static",
                                    style: { "--kc": gt.concept.color },
                                    children: d,
                                  },
                                  d,
                                ),
                              ),
                          }),
                        (0, z.jsxs)("div", {
                          className: "ic-reach",
                          children: [
                            (0, z.jsx)(X, { name: "link", size: 13 }),
                            b.length
                              ? (0, z.jsxs)(z.Fragment, {
                                  children: [
                                    "关联 ",
                                    b.length,
                                    " 条资源 ",
                                    (0, z.jsxs)("em", {
                                      children: [
                                        "linked to ",
                                        b.length,
                                        " resources",
                                      ],
                                    }),
                                  ],
                                })
                              : (0, z.jsxs)(z.Fragment, {
                                  children: [
                                    "暂无关联项目 ",
                                    (0, z.jsx)("em", {
                                      children: "No related resources",
                                    }),
                                  ],
                                }),
                          ],
                        }),
                        (0, z.jsxs)("footer", {
                          children: [
                            (0, z.jsxs)("button", {
                              className: "pill ghost",
                              onClick: () => l(f.id),
                              children: [
                                (0, z.jsx)(X, { name: "concept", size: 14 }),
                                "图谱 ",
                                (0, z.jsx)("em", { children: "Graph" }),
                              ],
                            }),
                            (0, z.jsxs)("button", {
                              className: "pill",
                              onClick: () => n(r),
                              children: [
                                "编辑 ",
                                (0, z.jsx)("em", { children: "Edit" }),
                                (0, z.jsx)(X, { name: "chevron", size: 13 }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    r.id,
                  );
                }),
                !c.length &&
                  (0, z.jsxs)("p", {
                    className: "empty-line",
                    children: [
                      "这个状态下还没有灵感 ",
                      (0, z.jsx)("em", { children: "Nothing here yet" }),
                    ],
                  }),
              ],
            },
            i,
          );
        }),
      }),
    ],
  });
}
var s1 = "data-neural-style";
function Z2(t) {
  if (typeof document == "undefined" || !document.head) return null;
  var e = document.head.querySelector("[" + s1 + "]");
  if (e) return e;
  var n = document.createElement("style");
  return (
    n.setAttribute(s1, "neural-creator-dashboard"),
    (n.textContent = t),
    document.head.appendChild(n),
    n
  );
}
var K2 = `/* 由 obsidian-plugin/postcss-scope.mjs 自动生成，请勿手工编辑。
 * 源文件：src/neural/neural.css
 * 作用域：所有规则限定在 .neural 容器内；html/body 规则已删除；
 *         @keyframes 与 @property 已加 nd- 前缀并同步改写引用。 */
@property --nd-cx { syntax: '<percentage>'; inherits: false; initial-value: 50%; }
@property --nd-orb-m0 { syntax: '<percentage>'; inherits: true; initial-value: 70%; }
/* 神经网络看板：中性深灰底、银灰光球、毛玻璃与辉光。 */
.neural {
  --bg: #0d0e0e; --bg-2: #161717; --teal: #252626;
  --glass: rgba(44, 45, 44, .5); --glass-strong: rgba(22, 23, 23, .9);
  --line: rgba(228, 228, 222, .11); --line-2: rgba(232, 232, 226, .2);
  --text: #ecece9; --text-2: #a5a6a1; --muted: #75766f;
  --gold: #e6cf98; --rose: #e3b3c4; --mint: #ace0cf; --lav: #c3bcf2; --cyan: #acd6e8; --red: #ff7385; --green: #6be3ad;
  --radius: 16px;
  min-height: 100vh; min-height: 100dvh; background: #0d0e0e; color: var(--text);
  font: 13px/1.55 -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", sans-serif;
  font-feature-settings: "tnum"; -webkit-font-smoothing: antialiased;
}
.neural *, .neural *::before, .neural *::after { box-sizing: border-box; }
.neural button, .neural input, .neural textarea, .neural select { font: inherit; color: inherit; }
.neural button { cursor: pointer; }
/* ── 宿主样式防火墙（t31）──────────────────────────────────────────
   作用域前缀只防住了「插件污染宿主」，防不住反向。取证口径（别再拿粗筛数字当依据）：
   解 obsidian.asar 的 app.css 共 3849 条规则，**按括号感知**拆选择器逗号、再按组合符取末段：
     · 严格裸标签（末段就是 button/input/select/textarea，无 class 祖先）：**7 段** —— 无条件命中
     · 裸标签 + [type=…] / 伪类：94 段 —— 真会命中的只有 input[type='number'] 一族（插件确实用了
       这个 type）与 hover/focus/disabled 状态类
     · 祖先含 class：267 段 —— 逐条比对插件 JSX 的 class 全集，**0 段命中**（宿主那些挂在
       .dialog / .mainContainer / .setting-item-control / .messageBar 等 Obsidian 自有结构下）
   注：先前用「不拆括号的粗筛」得到过 30 段，那是把 \`*:not(input, select, textarea)\` 这种
   **排除型**选择器错拆成命中裸标签，假阳性；captain 的「126 条裸 button」则是把 JS 源码文本
   当 CSS 计数。两者都已作废，以本段口径为准。
   宿主裸标签具体塞了什么：select → height:var(--input-height)、appearance:none（原生下拉箭头
   被抹掉，比宽度被钳更致命）、border:0、background-color、padding、corner-shape、text-align；
   button → display:inline-flex、white-space:nowrap、user-select:none、height、padding、outline:none；
   input[type='number'] → height:var(--input-height)（与我们自己的 padding + border-box 叠加会把
   数字内容裁掉，所以下面对 input/textarea 也复位 height）。
   这就是「灵感详情」弹窗里 select 文字被裁切、原生下拉没有箭头的机制。

   写法要点：
   ① 用 .neural button 这种「class + 裸标签」形式（特异性 (0,1,1)）：压过宿主裸标签的
      (0,0,1)，同时低于插件自己的 class 规则（.form select 作用域后是
      .neural .form select = (0,2,1)），决定权仍在插件样式手里 —— 防火墙只兜底，不抢戏。
   ② 不用 :where() / :is() 包列表：构建期的作用域自检按逗号拆选择器时不认识
      :where(a, b) 里的列表，会把列表项误报成「未进入作用域」而 fail-closed。
   ③ 放在文件靠前处（class 规则之前），靠「同特异性后者胜」把决定权交回插件自身。

   刻意未列入的宿主属性：box-shadow / background-color / opacity / cursor 的 hover
   与 disabled 变体（宿主是 (0,1,1) 起）。它们只影响悬停与禁用态观感，不改盒模型；
   强行覆盖会连带打断插件自己的 hover 样式，得不偿失。
   需要时按控件类名单独覆盖，不做全局强压。 */
.neural button, .neural input, .neural select, .neural textarea {
  white-space: normal;
  corner-shape: round;
  box-sizing: border-box;
}
.neural button { display: inline-block; align-items: revert; justify-content: revert; height: auto; user-select: text; }
.neural select, .neural input, .neural textarea { appearance: auto; -webkit-appearance: auto; height: auto; }
.neural select { width: 100%; max-width: 100%; min-width: 0; height: auto; line-height: inherit; text-align: start; background-image: none; background-color: #161717; color: var(--text); border: 1px solid var(--line-2); border-radius: 10px; padding: 10px 12px; }
.neural input, .neural textarea { background-color: rgba(255, 255, 255, .05); border: 1px solid var(--line-2); border-radius: 10px; padding: 10px 12px; }
/* 原生下拉列表项：宿主深色变量在部分主题下会让 option 文字与底色同色，这里显式给底。 */
.neural select option { background-color: #161717; color: #ecece9; }
/* 焦点环必须保住：宿主的 select:focus-visible / button:focus-visible 是 (0,1,1) 且写死
   outline:none，会盖过上一条 .neural :focus-visible（(0,1,0)）→ 在 Obsidian 里聚焦看不见环。
   这里按标签点名并带 :focus-visible，特异性 (0,1,2) 稳过宿主。 */
.neural button:focus-visible, .neural input:focus-visible, .neural select:focus-visible, .neural textarea:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
.neural em { font-style: normal; color: var(--muted); font-size: .8em; margin-left: .38em; letter-spacing: .02em; font-weight: 400; }
.neural :focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; border-radius: 8px; }
.neural .glass {
  background: linear-gradient(160deg, rgba(52, 53, 52, .5), rgba(14, 15, 15, .7));
  border: 1px solid var(--line); border-radius: var(--radius);
  backdrop-filter: blur(18px) saturate(1.25); -webkit-backdrop-filter: blur(18px) saturate(1.25);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .05), 0 24px 60px rgba(0, 0, 0, .35);
}
.neural .eyebrow { margin: 0 0 10px; font-size: 11px; letter-spacing: .22em; color: #e6cf98; font-weight: 600; }
.neural .eyebrow span { letter-spacing: .1em; color: var(--text-2); margin-left: 8px; font-weight: 400; }
.neural .quiet { color: var(--muted); font-size: 12px; }
.neural .icon-btn { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--line); background: rgba(255, 255, 255, .03); color: var(--text-2); }
.neural .icon-btn:hover { color: var(--text); border-color: var(--line-2); }

/* —— 顶栏 —— */
.neural .topbar { position: fixed; inset: 0 0 auto; z-index: 40; height: 64px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 28px; background: linear-gradient(to bottom, rgba(12, 13, 13, .92), rgba(12, 13, 13, 0)); }
.neural:not(.page-home) .topbar { background: rgba(14, 15, 15, .8); backdrop-filter: blur(16px); border-bottom: 1px solid var(--line); }
.neural .brand { display: flex; align-items: center; gap: 10px; color: var(--text); text-decoration: none; }
.neural .brand-mark { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: rgba(236, 236, 232, .07); border: 1px solid rgba(244, 213, 141, .25); box-shadow: 0 0 18px rgba(236, 236, 232, .1); border-color: rgba(236, 236, 232, .22); }
/* GEN-04：品牌字标原本行高 1.15 偏紧。它是「名称 + 小标」两行的正文语境，提到 1.3 ——
   既是检测器的正文行高底线，也保住紧凑观感（顶栏 64px、mark 32px，增长约 4px 不会挤破布局）。 */
.neural .brand-text { display: grid; font-size: 14px; letter-spacing: .14em; font-weight: 600; line-height: 1.3; }
.neural .brand-text b { color: #d9dad6; font-weight: 500; }
.neural .brand-text small { font-size: 10px; letter-spacing: .06em; color: var(--muted); font-weight: 400; margin-top: 3px; }
.neural .topbar nav { display: flex; gap: 4px; padding: 4px; border-radius: 999px; background: rgba(26, 27, 27, .62); border: 1px solid var(--line); backdrop-filter: blur(12px); }
.neural .topbar nav button { position: relative; border: 0; background: none; white-space: nowrap; padding: 6px 16px; border-radius: 999px; color: var(--text-2); font-size: 13px; display: grid; justify-items: center; line-height: 1.2; }
.neural .topbar nav button em { margin: 1px 0 0; font-size: 9.5px; letter-spacing: .08em; text-transform: uppercase; }
.neural .topbar nav button:hover { color: var(--text); }
.neural .topbar nav button.active { color: var(--text); background: linear-gradient(180deg, rgba(236, 236, 232, .14), rgba(236, 236, 232, .04)); box-shadow: inset 0 0 0 1px rgba(236, 236, 232, .26), 0 0 22px rgba(236, 236, 232, .08); }
.neural .topbar nav button.active em { color: #e6cf98; }
.neural .top-actions { display: flex; justify-content: flex-end; align-items: center; gap: 10px; }
/* GEN-23（blocker）：原来是固定 width + height 再 overflow:hidden —— 浏览器缩放或系统字体放大时
   圆框会吃掉内容。改成 height:auto + aspect-ratio 定形：仍是正圆、仍裁成圆，但盒子能随字号长高，
   min-height 兜住不塌陷，img 的百分比高度也因此有确定的解析基准。line-height 用无单位值。 */
.neural .avatar { width: 34px; height: auto; aspect-ratio: 1 / 1; min-height: 34px; padding: 0; border-radius: 50%; overflow: hidden; border: 1px solid var(--line-2); background: #111; line-height: 1; }
.neural .avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.neural .pill { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 14px; border-radius: 999px; border: 1px solid var(--line-2); background: rgba(255, 255, 255, .04); color: var(--text); font-size: 12.5px; text-decoration: none; white-space: nowrap; transition: background .2s, border-color .2s, box-shadow .2s; }
.neural .pill:hover { background: rgba(255, 255, 255, .08); border-color: rgba(220, 245, 240, .3); }
.neural .pill.primary { background: linear-gradient(135deg, #f4f4f1, #c6c7c2); color: #161716; border: 0; font-weight: 600; box-shadow: 0 6px 20px rgba(220, 220, 214, .16); }
.neural .pill.primary em { color: rgba(22, 23, 22, .55); }
.neural .pill.primary:hover { box-shadow: 0 6px 26px rgba(236, 236, 232, .3); }
.neural .pill.ghost { background: transparent; }
.neural .pill.danger { color: #ff9aa8; }
.neural .pill:disabled { opacity: .4; cursor: not-allowed; }
.neural .text-btn { border: 0; background: none; color: var(--text-2); display: inline-flex; align-items: center; gap: 4px; font-size: 12px; }
.neural .text-btn:hover { color: var(--gold); }

/* —— 首页舞台 —— */
.neural .home-stage { position: relative; height: 100vh; height: 100dvh; min-height: 640px; overflow: hidden; }
.neural .stage-bg { position: absolute; inset: 0; background:
  radial-gradient(ellipse 55% 60% at var(--nd-cx, 50%) 52%, rgba(88, 90, 88, .24), rgba(30, 31, 31, .26) 45%, transparent 75%), radial-gradient(ellipse 120% 90% at 50% 50%, #141515 0%, #090a0a 72%); transition: --nd-cx 1s; }
.neural .home-stage.stage-module .stage-bg, .neural .home-stage.stage-note .stage-bg { --nd-cx: 12%; }
.neural .network-canvas { position: absolute; inset: 0; width: 100%; height: 100%; transition: opacity .9s ease, filter .9s ease; }
.neural .stage-module .network-canvas, .neural .stage-note .network-canvas { opacity: .22; filter: blur(.6px); }
.neural .scene { position: absolute; inset: 0; pointer-events: none; }
.neural .scene > * { pointer-events: auto; }
.neural .orb { --nd-orb-m0: 58%; position: absolute; left: 0; top: 0; width: 460px; height: 460px; transform-origin: 0 0; pointer-events: none; mix-blend-mode: normal; will-change: transform; transition: --nd-orb-m0 1.1s cubic-bezier(.4, 0, .2, 1); }
/* 进入模块 / 笔记层级：光球缩到左侧，渐隐从中心更早开始，光晕放大，边缘向外飘散光点。 */
.neural .scene.stage-module .orb, .neural .scene.stage-note .orb { --nd-orb-m0: 24%; }
/* 视频透明地留在原位负责播放，画面由同位置的 canvas.vid 逐帧绘制（兼容不合成 <video> 的内置浏览器） */
.neural .vsrc { position: absolute; left: 0; top: 0; width: 100%; height: 100%; opacity: 0; pointer-events: none; }
.neural .orb-dust { position: absolute; left: -60%; top: -60%; width: 220%; height: 220%; pointer-events: none; }
.neural .orb .vid { position: relative; width: 100%; height: 100%; display: block; object-fit: cover; -webkit-mask-image: radial-gradient(circle closest-side at 50% 50%, #000 var(--nd-orb-m0), rgba(0, 0, 0, .82) calc(var(--nd-orb-m0) + (100% - var(--nd-orb-m0)) * .3), rgba(0, 0, 0, .5) calc(var(--nd-orb-m0) + (100% - var(--nd-orb-m0)) * .56), rgba(0, 0, 0, .2) calc(var(--nd-orb-m0) + (100% - var(--nd-orb-m0)) * .8), transparent 100%); mask-image: radial-gradient(circle closest-side at 50% 50%, #000 var(--nd-orb-m0), rgba(0, 0, 0, .82) calc(var(--nd-orb-m0) + (100% - var(--nd-orb-m0)) * .3), rgba(0, 0, 0, .5) calc(var(--nd-orb-m0) + (100% - var(--nd-orb-m0)) * .56), rgba(0, 0, 0, .2) calc(var(--nd-orb-m0) + (100% - var(--nd-orb-m0)) * .8), transparent 100%); filter: brightness(.86) contrast(1.1); }
.neural .orb-halo { position: absolute; inset: -48%; border-radius: 50%; background: radial-gradient(circle closest-side, rgba(196, 197, 193, .4) 0%, rgba(186, 187, 183, .33) 30%, rgba(166, 167, 163, .24) 44%, rgba(146, 147, 143, .17) 52%, rgba(116, 117, 114, .1) 63%, rgba(86, 87, 84, .045) 76%, rgba(60, 61, 59, .012) 88%, transparent 100%); filter: blur(14px); animation: nd-breathe 5.5s ease-in-out infinite; transition: scale 1.1s cubic-bezier(.4, 0, .2, 1), opacity 1.1s; }
.neural .scene.stage-module .orb-halo, .neural .scene.stage-note .orb-halo { scale: 1.45; opacity: .72; }
@keyframes nd-breathe { 50% { transform: scale(1.08); opacity: .75; } }
.neural .threads { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none !important; overflow: visible; }
.neural .thread-glow { fill: none; stroke: currentColor; stroke-width: 6; opacity: .45; }
.neural .thread-core { fill: none; stroke: currentColor; stroke-width: 1.3; stroke-linecap: round; }
.neural .fan-thread { fill: none; stroke: currentColor; stroke-width: 1; stroke-linecap: round; transition: stroke-width .3s; }
.neural .jelly { position: absolute; z-index: 1; left: 0; top: 0; width: 200px; height: 150px; padding: 0; border: 0; background: none; transform-origin: 0 0; mix-blend-mode: screen; will-change: transform, opacity; transition: filter .4s; }
.neural .jelly-inner { position: relative; width: 100%; height: 100%; }
.neural .jelly .vid { width: 100%; height: 100%; display: block; object-fit: cover; -webkit-mask-image: radial-gradient(ellipse 62% 64% at 50% 46%, #000 55%, transparent 100%); mask-image: radial-gradient(ellipse 62% 64% at 50% 46%, #000 55%, transparent 100%); }
.neural .jelly:hover, .neural .jelly.active { filter: brightness(1.35) drop-shadow(0 0 12px rgba(255, 255, 255, .25)); }
.neural .jelly:focus-visible { outline: none; filter: brightness(1.5); }
/* 标签始终压在所有水母的点击区之上，避免游动时被别的水母挡住 */
.neural .jelly-label { position: absolute; z-index: 2; left: 0; top: 0; display: grid; grid-template-columns: auto 1fr; grid-template-areas: "icon count" "name name" "sub sub"; align-items: center; column-gap: 8px; min-width: 132px; padding: 9px 12px 10px; border-radius: 12px; border: 1px solid var(--line); background: linear-gradient(160deg, rgba(50, 51, 50, .62), rgba(15, 16, 16, .76)); backdrop-filter: blur(10px); color: var(--text); text-align: left; will-change: transform, opacity; transition: border-color .3s, box-shadow .3s, background .3s; }
.neural .jelly-label.below { justify-items: start; }
.neural .jelly-label:hover { border-color: color-mix(in srgb, var(--mod) 55%, transparent); }
.neural .jelly-label.active { border-color: rgba(230, 207, 152, .7); background: linear-gradient(120deg, color-mix(in srgb, var(--mod) 20%, transparent), rgba(16, 17, 17, .82)); box-shadow: 0 0 0 1px rgba(230, 207, 152, .22), 0 0 26px color-mix(in srgb, var(--mod) 26%, transparent); }
.neural .jl-icon { grid-area: icon; width: 22px; height: 22px; border-radius: 7px; display: grid; place-items: center; color: var(--mod); background: color-mix(in srgb, var(--mod) 14%, transparent); }
.neural .jl-count { grid-area: count; font-size: 22px; font-weight: 600; line-height: 1; }
.neural .jl-name { grid-area: name; margin-top: 6px; font-size: 12.5px; font-weight: 500; white-space: nowrap; }
.neural .jl-sub { grid-area: sub; font-size: 10.5px; color: var(--text-2); white-space: nowrap; }
.neural .fan-item { position: absolute; z-index: 3; left: 0; top: 0; display: flex; align-items: center; gap: 9px; height: 30px; padding: 0; border: 0; background: none; color: var(--text); text-align: left; will-change: transform, opacity; }
.neural .fi-dot { flex: none; width: 9px; height: 9px; margin-left: -4.5px; border-radius: 50%; background: var(--kc); box-shadow: 0 0 0 3px color-mix(in srgb, var(--kc) 18%, transparent), 0 0 14px var(--kc); }
.neural .fi-body { display: grid; gap: 2px; padding: 3px 10px; border-radius: 9px; border: 1px solid transparent; transition: background .25s, border-color .25s; }
.neural .fi-title { max-width: 230px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 12.5px; line-height: 1.25; }
.neural .fi-meta { display: flex; gap: 5px; font-size: 9.5px; color: var(--text-2); line-height: 1.2; }
.neural .fi-meta > span { padding: 1px 5px; border-radius: 4px; background: rgba(255, 255, 255, .06); white-space: nowrap; }
.neural .fi-meta em { margin-left: 2px; font-size: 1em; }
.neural .fi-meta b { color: var(--text); font-weight: 500; }
.neural .fi-meta .mutual { background: rgba(230, 207, 152, .14); color: #e6cf98; }
.neural .fan-item:hover .fi-body { background: rgba(255, 255, 255, .05); border-color: var(--line); }
.neural .fan-item.active .fi-body { background: color-mix(in srgb, var(--kc) 14%, rgba(18, 19, 19, .82)); border-color: color-mix(in srgb, var(--kc) 55%, transparent); box-shadow: 0 0 22px color-mix(in srgb, var(--kc) 20%, transparent); }

.neural .hub-copy { position: absolute; left: 40px; top: 104px; max-width: 360px; transition: opacity .6s, transform .6s; animation: nd-introFade 1.2s .5s both; pointer-events: none; }
.neural .stage-module .hub-copy, .neural .stage-note .hub-copy { opacity: 0; transform: translateY(-10px); }
.neural .hub-copy h1 { margin: 0; font-size: clamp(28px, 2.8vw, 42px); line-height: 1.18; font-weight: 600; letter-spacing: .02em; background: linear-gradient(120deg, #ffffff 30%, #d6d7d3 62%, #e6cf98); -webkit-background-clip: text; background-clip: text; color: transparent; }
.neural .hub-en { margin: 8px 0 0; font-size: 14px; color: var(--text-2); letter-spacing: .04em; }
.neural .hub-meta { margin: 18px 0 0; font-size: 12px; color: var(--text-2); }
.neural .hub-hint { margin: 6px 0 0; font-size: 12px; color: #e6cf98; opacity: .85; }
@keyframes nd-introFade { from { opacity: 0; transform: translateY(12px); } }
.neural .crumbs { position: absolute; left: 28px; top: 82px; display: flex; align-items: center; gap: 8px; padding: 5px 14px 5px 5px; border-radius: 999px; background: rgba(20, 21, 21, .72); border: 1px solid var(--line); backdrop-filter: blur(10px); font-size: 12.5px; animation: nd-introFade .5s both; z-index: 5; }
.neural .crumbs button { border: 0; background: none; color: var(--text-2); padding: 0; }
.neural .crumbs button:hover { color: var(--text); }
.neural .crumbs .crumb-back { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: rgba(255, 255, 255, .06); color: var(--text); }
.neural .crumbs > span { color: var(--muted); }
.neural .crumbs b { font-weight: 500; max-width: 260px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.neural .stage-tools { position: absolute; right: 28px; top: 80px; display: flex; gap: 2px; padding: 4px; border-radius: 999px; z-index: 5; }
.neural .stage-tools button { display: inline-flex; align-items: center; gap: 6px; border: 0; background: none; color: var(--text-2); padding: 6px 12px; border-radius: 999px; font-size: 12px; }
.neural .stage-tools button:hover, .neural .stage-tools button[aria-pressed="true"] { color: var(--text); background: rgba(255, 255, 255, .07); }
.neural .stage-note .stage-tools { display: none; }
.neural .legend { position: absolute; right: 28px; top: 128px; padding: 12px 14px; min-width: 190px; font-size: 11.5px; animation: nd-introFade 1s 2.2s both; z-index: 4; }
.neural .legend h3 { margin: 0 0 8px; font-size: 10.5px; letter-spacing: .14em; color: var(--text-2); font-weight: 600; }
.neural .legend div { display: flex; align-items: center; gap: 8px; padding: 2px 0; color: var(--text-2); }
.neural .legend div i { width: 8px; height: 8px; border-radius: 50%; background: var(--kc); box-shadow: 0 0 8px var(--kc); }
.neural .legend div i.ghost { background: none; border: 1px dashed var(--kc); box-shadow: none; }
.neural .legend div b { margin-left: auto; color: var(--text); font-weight: 500; }
.neural .legend-lines { display: flex !important; gap: 12px !important; margin-top: 6px; padding-top: 8px !important; border-top: 1px solid var(--line); }
.neural .legend-lines span { display: inline-flex; align-items: center; gap: 6px; }
.neural .ln { width: 16px; height: 2px; border-radius: 2px; }
.neural .ln.mutual { background: #e6cf98; box-shadow: 0 0 6px #e6cf98; }
.neural .ln.one { background: var(--mint); opacity: .7; }
.neural .module-hint { position: absolute; left: 50%; bottom: 22px; transform: translateX(-50%); margin: 0; font-size: 12px; color: var(--text-2); padding: 7px 16px; border-radius: 999px; border: 1px solid var(--line); background: rgba(20, 21, 21, .72); animation: nd-introFade .6s .5s both; }

/* —— 对话坞 —— */
.neural .dock { position: absolute; left: 50%; bottom: 22px; width: min(600px, calc(100vw - 32px)); transform: translateX(-50%); display: grid; gap: 10px; animation: nd-dockIn 1s 2s both; z-index: 6; }
@keyframes nd-dockIn { from { opacity: 0; transform: translate(-50%, 18px); } }
.neural .intro-done .dock, .neural .intro-done .legend, .neural .intro-done .hub-copy { animation-delay: 0s; animation-duration: .5s; }
.neural .dock-panel { padding: 10px 12px 10px; border-radius: 18px; border-color: rgba(236, 236, 232, .2); box-shadow: 0 0 0 1px rgba(236, 236, 232, .05), 0 0 40px rgba(236, 236, 232, .06), 0 24px 60px rgba(0, 0, 0, .45); }
.neural .dock-kpis { display: grid; grid-template-columns: repeat(4, 1fr); padding: 2px 4px 10px; }
.neural .dock-kpis div { display: grid; gap: 1px; padding: 0 10px; border-left: 1px solid var(--line); }
.neural .dock-kpis div:first-child { border-left: 0; padding-left: 4px; }
.neural .dock-kpis span { font-size: 10.5px; color: var(--text-2); white-space: nowrap; }
.neural .dock-kpis strong { font-size: 19px; font-weight: 600; }
.neural .dock-kpis div:nth-child(3) strong { color: #e6cf98; }
.neural .ask { position: relative; display: flex; align-items: center; }
.neural .ask input { width: 100%; height: 42px; padding: 0 50px 0 18px; border-radius: 999px; border: 1px solid var(--line-2); background: rgba(255, 255, 255, .06); color: var(--text); outline: none; }
/* WUI-10：这三处改的是边框/阴影（装饰性反馈），不该在鼠标点击时也亮起；
   全局焦点环（.neural :focus-visible）仍会给键盘用户可见反馈，故改成 :focus-visible。 */
.neural .ask input:focus-visible { border-color: rgba(230, 207, 152, .5); box-shadow: 0 0 0 3px rgba(230, 207, 152, .1); }
.neural .ask input::placeholder, .neural .an-ask input::placeholder, .neural .search input::placeholder, .neural textarea::placeholder { color: var(--muted); }
.neural .send, .neural .an-ask form button { position: absolute; right: 5px; width: 32px; height: 32px; border-radius: 50%; border: 0; display: grid; place-items: center; color: #161716; background: linear-gradient(135deg, #f4f4f1, #c6c7c2); }
.neural .send { color: #161716; }
.neural .dock-chips { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; padding: 9px 2px 0; }
.neural .dock-chips .me { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; color: var(--text-2); padding: 4px 9px; border-radius: 8px; background: rgba(255, 255, 255, .05); }
/* WUI-44（high）：触控命中区原本约 21px 高（padding 4px + 11px 字号行高），低于 Web 底线 24×24。
   用 min-height 扩命中区（不是放大图标/文字）：字号与 padding 保持原样，只把盒子撑到 28px。 */
.neural .dock-chips button { font-size: 11px; padding: 4px 10px; min-height: 28px; min-width: 28px; border-radius: 999px; border: 1px solid var(--line); background: none; color: var(--text-2); }
.neural .dock-chips button:hover { color: var(--text); border-color: rgba(236, 236, 232, .35); background: rgba(236, 236, 232, .07); }
.neural .ask-results { max-height: min(46vh, 420px); overflow: auto; padding: 12px; border-radius: 16px; background: var(--glass-strong); animation: nd-fadeUp .45s both; }
.neural .ask-results header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-size: 12px; font-weight: 600; letter-spacing: .08em; }
.neural .ask-results header span { display: inline-flex; align-items: center; gap: 6px; }
.neural .ask-results header small { color: var(--muted); font-weight: 400; letter-spacing: 0; font-size: 11px; }
.neural .ask-results header .icon-btn { margin-left: auto; width: 24px; height: 24px; }
.neural .ask-cards { display: grid; gap: 8px; }
.neural .ask-card { position: relative; padding: 10px 12px 11px 16px; border-radius: 12px; border: 1px solid var(--line); background: rgba(255, 255, 255, .03); animation: nd-fadeUp .5s both; }
.neural .ask-card::before { content: ""; position: absolute; left: 7px; top: 12px; bottom: 12px; width: 2px; border-radius: 2px; background: var(--mint); }
.neural .ask-card.tone-warn { background: linear-gradient(110deg, rgba(150, 50, 70, .28), rgba(40, 20, 30, .15)); border-color: rgba(255, 115, 133, .2); }
.neural .ask-card.tone-warn::before { background: var(--red); }
.neural .ask-card.tone-gold { background: linear-gradient(110deg, rgba(150, 128, 80, .22), rgba(30, 30, 26, .1)); border-color: rgba(230, 207, 152, .2); }
.neural .ask-card.tone-gold::before { background: #e6cf98; }
.neural .ask-card h4 { margin: 0 0 3px; font-size: 13px; font-weight: 600; }
.neural .ask-card p { margin: 0; font-size: 12px; color: var(--text-2); }
.neural .ask-card .chip-row { margin-top: 8px; }
.neural .pair-list { display: grid; gap: 4px; margin-top: 8px; }
.neural .pair-list button { display: flex; align-items: center; gap: 8px; border: 0; background: rgba(255, 255, 255, .03); border-radius: 8px; padding: 5px 9px; color: var(--text); font-size: 12px; text-align: left; }
.neural .pair-list button:hover { background: rgba(244, 213, 141, .08); }
.neural .pair-list span { max-width: 170px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.neural .pair-list i { color: var(--gold); font-style: normal; }
.neural .pair-list small { margin-left: auto; color: var(--muted); white-space: nowrap; }
@keyframes nd-fadeUp { from { opacity: 0; transform: translateY(10px); } }

/* —— 分析面板 —— */
.neural .analysis-wrap { position: absolute; right: 24px; top: 76px; bottom: 20px; width: clamp(380px, 33vw, 470px); z-index: 8; animation: nd-slideIn .75s cubic-bezier(.2, .8, .2, 1) both; }
@keyframes nd-slideIn { from { opacity: 0; transform: translateX(48px) scale(.98); } }
.neural .analysis { height: 100%; display: flex; flex-direction: column; overflow: hidden; border-radius: 20px; border-color: rgba(236, 236, 232, .15); background: linear-gradient(165deg, rgba(60, 61, 60, .6), rgba(14, 15, 15, .88) 55%); }
.neural .an-float { margin: 14px 0 0 20px; display: inline-flex; align-self: flex-start; padding: 5px 12px; border-radius: 999px; background: rgba(255, 255, 255, .05); border: 1px solid var(--line); font-size: 11px; color: var(--text-2); }
.neural .an-scroll { flex: 1; overflow: auto; padding: 16px 20px 20px; scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, .15) transparent; }
.neural .an-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.neural .an-cat { display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; color: var(--text-2); }
.neural .an-cat-icon { width: 28px; height: 28px; display: grid; place-items: center; border-radius: 9px; color: var(--kc); background: color-mix(in srgb, var(--kc) 15%, transparent); border: 1px solid color-mix(in srgb, var(--kc) 30%, transparent); }
.neural .an-title-row { display: flex; gap: 14px; align-items: flex-start; justify-content: space-between; animation: nd-fadeUp .6s .1s both; }
.neural .an-title-row h2 { margin: 0; font-size: 22px; line-height: 1.28; font-weight: 600; letter-spacing: .01em; }
.neural .an-full { margin: 6px 0 0; font-size: 12px; color: var(--muted); }
.neural .an-cover { flex: none; width: 58px; height: 76px; object-fit: cover; border-radius: 9px; border: 1px solid var(--line-2); box-shadow: 0 8px 20px rgba(0, 0, 0, .4); }
.neural .an-status { margin: 14px 0; padding: 12px; border-radius: 13px; border: 1px solid var(--line); background: rgba(255, 255, 255, .025); display: grid; gap: 8px; animation: nd-fadeUp .6s .16s both; }
.neural .an-status p { margin: 0; font-size: 12px; color: var(--text-2); word-break: break-all; }
.neural .badge { justify-self: start; display: inline-flex; padding: 2px 8px; border-radius: 6px; font-size: 11px; color: #9ff2cc; background: rgba(107, 227, 173, .12); border: 1px solid rgba(107, 227, 173, .25); }
.neural .badge em { color: rgba(159, 242, 204, .65); }
.neural .an-actions { display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap; }
.neural .an-explore { display: inline-flex; align-items: center; gap: 4px; height: 28px; padding: 0 12px; border-radius: 8px; border: 1px solid var(--line-2); background: rgba(255, 255, 255, .06); color: var(--text); font-size: 12px; }
.neural .an-explore:hover { background: rgba(236, 236, 232, .1); border-color: rgba(236, 236, 232, .32); }
.neural .an-explore.ghost { background: none; }
.neural .an-metric { padding: 13px 15px 14px; border-radius: 15px; border: 1px solid rgba(255, 255, 255, .08); background: linear-gradient(115deg, rgba(104, 44, 62, .48), rgba(44, 34, 46, .42) 50%, rgba(28, 29, 30, .5)); animation: nd-fadeUp .6s .22s both; }
.neural .an-metric header { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--text-2); }
.neural .lvl { font-size: 10.5px; font-weight: 500; padding: 2px 8px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, .2); color: var(--text); }
.neural .lvl em { color: var(--text-2); }
.neural .lvl-high { border-color: rgba(230, 207, 152, .5); color: #e6cf98; }
.neural .lvl-low { border-color: rgba(255, 115, 133, .4); color: #ffb0bb; }
.neural .an-metric-body { display: flex; align-items: flex-end; gap: 12px; margin-top: 8px; }
.neural .an-metric-body strong { font-size: 40px; font-weight: 600; line-height: 1; letter-spacing: -.01em; }
.neural .an-metric-body small { display: grid; font-size: 11.5px; line-height: 1.3; padding-bottom: 3px; white-space: nowrap; }
.neural .an-metric-body small em { margin: 0; font-size: 10px; }
.neural .an-metric-body small.up { color: var(--green); }
.neural .an-metric-body small.down { color: var(--red); }
.neural .bars { flex: 1; height: 44px; display: flex; align-items: flex-end; justify-content: flex-end; gap: 2px; }
.neural .bars i { flex: 1; max-width: 9px; height: calc(var(--h) * 100%); border-radius: 1.5px 1.5px 0 0; background: linear-gradient(to top, rgba(255, 255, 255, .12), rgba(255, 255, 255, .42)); transform-origin: bottom; animation: nd-grow .7s cubic-bezier(.2, .8, .2, 1) both; }
.neural .bars i.on { background: linear-gradient(to top, rgba(230, 207, 152, .4), #e6cf98); box-shadow: 0 0 10px rgba(230, 207, 152, .55); }
@keyframes nd-grow { from { transform: scaleY(0); } }
.neural .an-tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin-top: 10px; }
.neural .an-tile { padding: 11px 12px; border-radius: 13px; border: 1px solid var(--line); background: rgba(255, 255, 255, .025); display: grid; grid-template-columns: auto 1fr; grid-template-areas: "icon num" "label label"; column-gap: 9px; align-items: center; animation: nd-fadeUp .6s both; }
.neural .t-icon { grid-area: icon; width: 26px; height: 26px; display: grid; place-items: center; border-radius: 50%; border: 1px solid var(--line-2); color: var(--text-2); }
.neural .an-tile strong { grid-area: num; font-size: 22px; font-weight: 600; }
.neural .an-tile p { grid-area: label; margin: 6px 0 0; font-size: 11.5px; color: var(--text-2); display: grid; }
.neural .an-tile p em { margin: 0; font-size: 10px; }
.neural .an-section { margin-top: 18px; animation: nd-fadeUp .6s .3s both; }
.neural .an-section h3 { display: flex; align-items: center; gap: 6px; margin: 0 0 9px; font-size: 12px; font-weight: 600; color: var(--text); letter-spacing: .04em; }
.neural .an-all { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; border-radius: 12px; overflow: hidden; border: 1px solid var(--line); background: var(--line); }
.neural .an-all div { display: flex; justify-content: space-between; align-items: baseline; gap: 8px; padding: 8px 11px; background: rgba(16, 17, 17, .94); font-size: 11.5px; }
.neural .an-all span { color: var(--text-2); display: grid; line-height: 1.25; }
.neural .an-all span em { margin: 0; font-size: 9.5px; }
.neural .an-all b { font-weight: 500; font-size: 13px; }
.neural .insight { position: relative; margin-bottom: 7px; padding: 9px 12px 10px 16px; border-radius: 11px; border: 1px solid var(--line); background: rgba(255, 255, 255, .025); animation: nd-fadeUp .55s both; }
.neural .insight::before { content: ""; position: absolute; left: 7px; top: 11px; bottom: 11px; width: 2px; border-radius: 2px; background: var(--mint); }
.neural .insight.tone-gold { background: linear-gradient(110deg, rgba(150, 128, 80, .2), transparent); }
.neural .insight.tone-gold::before { background: #e6cf98; }
.neural .insight.tone-warn { background: linear-gradient(110deg, rgba(150, 50, 70, .22), transparent); }
.neural .insight.tone-warn::before { background: var(--red); }
.neural .insight.tone-muted::before { background: var(--muted); }
.neural .insight h4 { margin: 0 0 2px; font-size: 12.5px; font-weight: 600; }
.neural .insight p { margin: 0; font-size: 12px; color: var(--text-2); }
.neural .chip-row { display: flex; flex-wrap: wrap; gap: 5px; }
/* WUI-44 同源（high）：button.chip 命中区约 23px，低于 Web 底线 24×24，同样用 min-height 撑到 28px
   而不是放大字号。这条与 .chip static（span，不可点）共用规则 —— 混排时统一高度反而更整齐。
   注：它原本被检测器的 .slice(0,3) 遮蔽（同规则先命中 .dock-chips button），修完 .avatar 才暴露。 */
.neural .chip { display: inline-flex; align-items: center; gap: 6px; max-width: 100%; min-height: 28px; min-width: 28px; white-space: nowrap; padding: 3px 9px; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--kc, #9db3af) 38%, transparent); background: color-mix(in srgb, var(--kc, #9db3af) 9%, transparent); color: var(--text); font-size: 11.5px; line-height: 1.5; text-align: left; overflow: hidden; }
.neural .chip > :first-child { overflow: hidden; text-overflow: ellipsis; }
.neural button.chip:hover { background: color-mix(in srgb, var(--kc, #9db3af) 22%, transparent); }
.neural .chip small { color: var(--muted); font-size: 10px; white-space: nowrap; }
.neural .chip.static { cursor: default; }
.neural .chip.ghost { border-style: dashed; color: var(--text-2); background: none; }
.neural .chip.more { color: var(--muted); }
.neural .link-group { margin-bottom: 10px; }
.neural .link-group p { display: flex; align-items: center; gap: 4px; margin: 0 0 6px; font-size: 11.5px; color: var(--text-2); }
.neural .link-group p i { width: 18px; color: #e6cf98; font-style: normal; text-align: center; }
.neural .link-group p b { margin-left: 4px; color: var(--text); font-weight: 500; }
.neural .an-ask { border-top: 1px solid var(--line); padding: 12px 16px 12px; background: rgba(12, 13, 13, .62); }
.neural .an-ask form { position: relative; display: flex; align-items: center; }
.neural .an-ask input { width: 100%; height: 40px; padding: 0 46px 0 16px; border-radius: 999px; border: 1px solid rgba(255, 255, 255, .55); background: rgba(255, 255, 255, .07); outline: none; box-shadow: 0 0 18px rgba(255, 255, 255, .06); }
.neural .an-ask-foot { display: flex; justify-content: space-between; margin-top: 8px; font-size: 11px; color: var(--text-2); }
.neural .an-ask-foot span { display: inline-flex; align-items: center; gap: 5px; }
.neural .an-ask-res { display: grid; gap: 6px; max-height: 30vh; overflow: auto; margin-bottom: 10px; }
.neural .ask-card.mini { padding: 8px 10px 9px 15px; }

/* —— 快照区 —— */
.neural .snapshot { position: relative; max-width: 1320px; margin: 0 auto; padding: 72px 28px 40px; }
.neural .snapshot-head { display: flex; justify-content: space-between; align-items: baseline; }
.neural .kpi-band { display: grid; grid-template-columns: repeat(4, 1fr); padding: 18px 8px; margin: 12px 0 18px; }
.neural .kpi-band div { display: grid; justify-items: center; gap: 4px; border-left: 1px solid var(--line); }
.neural .kpi-band div:first-child { border-left: 0; }
.neural .kpi-band span { font-size: 12px; color: var(--text-2); }
.neural .kpi-band strong { font-size: 32px; font-weight: 600; letter-spacing: -.01em; }
.neural .snapshot-grid { display: grid; grid-template-columns: 1.45fr 1fr; gap: 18px; }
.neural .card { padding: 18px 20px; }
.neural .card > header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.neural .card h2 { margin: 0; font-size: 17px; font-weight: 600; }
.neural .perf table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
.neural .perf th { text-align: right; font-weight: 400; font-size: 11px; color: var(--text-2); padding: 8px 6px; border-bottom: 1px solid var(--line); }
.neural .perf th:first-child, .neural .perf td:first-child { text-align: left; }
.neural .perf td { text-align: right; padding: 10px 6px; border-bottom: 1px solid var(--line); }
.neural .perf tbody tr { cursor: pointer; transition: background .2s; }
.neural .perf tbody tr:hover { background: rgba(255, 255, 255, .03); }
.neural .t-title { display: block; }
/* t30：删除两条进度条样式规则 —— 使用处已在 t24 移除，全仓 grep 确认 JSX/JS 零引用、
   自定义属性 --w 也再无消费者，属死 CSS（且会让检测器误报成「文本盒裁切」——它们是 3px 进度条，不是文本盒）。
   与它们配套的那条关键帧（唯一引用者就是这两条规则）也一并删了。
   这里刻意不复述被删的选择器名与关键帧名：构建期自检会把注释一起读进来比对，
   写了就会命中「未改写的关键帧名」那条拦截 —— 详见 AGENTS.md「构建门不剥注释」。
   t33 之后：判据已从「恰好 N 个关键帧」的硬编码改成「产物集合 === 源码集合」+ 孤儿/悬空检测，
   所以删掉它不需要改任何断言 —— 这正是那次判据改造买到的东西。 */
.neural .plan-body { display: grid; grid-template-columns: auto 1fr; gap: 22px; align-items: center; }
.neural .ring { position: relative; width: 150px; height: 150px; padding: 0; border: 0; background: none; }
.neural .ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.neural .ring .track { fill: none; stroke: rgba(255, 255, 255, .07); stroke-width: 9; }
.neural .ring .value { fill: none; stroke: url(#ring-g); stroke-width: 9; stroke-linecap: round; filter: drop-shadow(0 0 6px rgba(236, 236, 232, .35)); }
.neural .ring > span { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; font-size: 15px; color: var(--text-2); }
.neural .ring strong { font-size: 34px; color: var(--text); font-weight: 600; }
.neural .ring small { font-size: 10.5px; color: var(--muted); }
.neural .plan-ideas h3 { margin: 0 0 8px; font-size: 13px; font-weight: 600; }
.neural .plan-ideas button { display: flex; gap: 10px; align-items: center; width: 100%; padding: 8px 0; border: 0; border-bottom: 1px solid var(--line); background: none; text-align: left; font-size: 12.5px; }
.neural .plan-ideas button:hover { color: #e6cf98; }
.neural .plan-ideas b { width: 22px; height: 22px; flex: none; display: grid; place-items: center; border-radius: 50%; background: rgba(230, 207, 152, .12); color: #e6cf98; font-size: 11px; font-weight: 500; }
.neural .plan-draft { display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 16px; padding: 12px 0 0; border: 0; border-top: 1px solid var(--line); background: none; font-size: 12.5px; color: var(--text-2); }
.neural .plan-draft span { flex: 1; text-align: left; color: var(--text); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.neural .plan-draft:hover { color: #e6cf98; }
.neural .site-foot { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; max-width: 1320px; margin: 0 auto; padding: 20px 28px 32px; font-size: 11.5px; color: var(--muted); }
.neural .site-foot button { display: inline-flex; align-items: center; gap: 6px; border: 0; background: none; color: var(--muted); padding: 0; font-size: 11.5px; }
.neural .site-foot button:hover { color: var(--text-2); }

/* —— 内页通用 —— */
.neural .page { position: relative; max-width: 1400px; margin: 0 auto; padding: 96px 28px 24px; animation: nd-fadeUp .6s both; }
.neural .page::before { content: ""; position: fixed; inset: 0; z-index: -1; background: radial-gradient(ellipse 70% 55% at 20% 0%, rgba(120, 122, 120, .22), transparent 70%), radial-gradient(ellipse 50% 50% at 90% 100%, rgba(110, 90, 100, .14), transparent 70%), #0d0e0e; }
.neural .page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; margin-bottom: 18px; }
.neural .page-head h1 { margin: 0; font-size: clamp(26px, 2.6vw, 36px); font-weight: 600; letter-spacing: .02em; }
.neural .page-sub { margin: 6px 0 0; color: var(--text-2); font-size: 13.5px; }
.neural .toolbar-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin-bottom: 14px; }
.neural .search { position: relative; display: flex; align-items: center; flex: 1; min-width: 220px; max-width: 360px; color: var(--text-2); }
.neural .search svg { position: absolute; left: 14px; }
.neural .search input { width: 100%; height: 38px; padding: 0 14px 0 38px; border-radius: 999px; border: 1px solid var(--line-2); background: rgba(255, 255, 255, .05); outline: none; }
.neural .search input:focus-visible { border-color: rgba(230, 207, 152, .45); }
.neural .seg { display: flex; gap: 2px; padding: 3px; border-radius: 999px; border: 1px solid var(--line); background: rgba(255, 255, 255, .03); }
.neural .seg button { border: 0; background: none; color: var(--text-2); padding: 5px 12px; border-radius: 999px; font-size: 12px; }
.neural .seg button.active { background: rgba(236, 236, 232, .12); color: #f4f4f1; box-shadow: inset 0 0 0 1px rgba(236, 236, 232, .26); }
.neural .seg button.active em { color: #e6cf98; }
.neural .source-line { display: flex; align-items: flex-start; gap: 6px; margin: 16px 0 0; color: var(--muted); font-size: 12px; }
.neural .empty, .neural .empty-line { color: var(--muted); }
.neural .empty { display: grid; justify-items: center; gap: 10px; padding: 48px 0; }
.neural .empty-line { margin: 10px 2px; font-size: 12px; }

/* 项目库 */
.neural .page-library .kpi-band { margin-top: 0; }
.neural .library-layout { display: grid; grid-template-columns: 1fr clamp(380px, 32vw, 460px); gap: 20px; align-items: start; }
.neural .library-analysis { position: sticky; top: 80px; height: calc(100vh - 100px); height: calc(100dvh - 100px); animation: nd-slideIn .6s cubic-bezier(.2, .8, .2, 1) both; }
.neural .works-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 14px; }
.neural .work-card { display: grid; grid-template-rows: auto 1fr; padding: 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--line); background: linear-gradient(170deg, rgba(48, 49, 48, .55), rgba(14, 15, 15, .82)); text-align: left; color: var(--text); transition: transform .3s, border-color .3s, box-shadow .3s; animation: nd-fadeUp .55s both; }
.neural .work-card:hover { transform: translateY(-3px); border-color: var(--line-2); }
.neural .work-card.active { border-color: rgba(230, 207, 152, .6); box-shadow: 0 0 0 1px rgba(230, 207, 152, .2), 0 18px 40px rgba(0, 0, 0, .45), 0 0 30px rgba(230, 207, 152, .1); }
.neural .wc-cover { position: relative; display: block; aspect-ratio: 4 / 3; overflow: hidden; background: #1a1b1b; }
.neural .wc-cover img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.85) brightness(.85); transition: transform .6s, filter .4s; }
.neural .work-card:hover .wc-cover img { transform: scale(1.04); filter: saturate(1) brightness(.95); }
.neural .wc-cover::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 50%, rgba(13, 14, 14, .9)); }
.neural .wc-fallback { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; gap: 6px; padding: 16px 16px 30px; background: radial-gradient(circle at 78% 22%, hsl(var(--h) 45% 62% / .45), transparent 55%), linear-gradient(150deg, hsl(var(--h) 22% 24%), hsl(calc(var(--h) + 40) 18% 10%)); }
.neural .wc-fallback b { position: relative; z-index: 1; font-size: 17px; line-height: 1.35; font-weight: 700; color: #f4f4f0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.neural .wc-fallback small { position: relative; z-index: 1; font-size: 11px; letter-spacing: .08em; color: rgba(244, 244, 240, .62); }
.neural .wc-index { position: absolute; left: 10px; top: 10px; z-index: 1; font-size: 11px; padding: 2px 8px; border-radius: 6px; background: rgba(12, 13, 13, .7); border: 1px solid var(--line-2); color: #e6cf98; }
.neural .wc-body { display: grid; gap: 6px; padding: 12px 14px 14px; }
.neural .wc-date { font-size: 11px; color: var(--muted); }
.neural .wc-title { font-size: 14px; font-weight: 500; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 2.8em; }
.neural .wc-stats { display: flex; justify-content: space-between; gap: 6px; margin-top: 4px; font-size: 10.5px; color: var(--text-2); }
.neural .wc-stats span { display: grid; }
.neural .wc-stats em { margin: 0; font-size: 9.5px; }
.neural .wc-stats b { color: var(--text); font-size: 15px; font-weight: 600; }

/* 创作台 */
.neural .drafts-layout { display: grid; grid-template-columns: 250px minmax(0, 1fr) 320px; gap: 16px; align-items: start; }
.neural .draft-list { padding: 14px 10px; position: sticky; top: 80px; }
.neural .draft-list h3, .neural .draft-links h3 { display: flex; align-items: center; gap: 6px; margin: 0 6px 10px; font-size: 13px; font-weight: 600; }
.neural .draft-list h3 b { margin-left: auto; color: var(--text-2); font-weight: 400; }
.neural .draft-list > button { display: flex; gap: 10px; width: 100%; padding: 10px; border: 1px solid transparent; border-radius: 11px; background: none; text-align: left; color: var(--text); }
.neural .draft-list > button i { flex: none; width: 8px; height: 8px; margin-top: 6px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 10px var(--cyan); }
.neural .draft-list > button span { display: grid; gap: 2px; font-size: 12.5px; min-width: 0; }
.neural .draft-list > button small { color: var(--muted); font-size: 10.5px; }
.neural .draft-list > button:hover { background: rgba(255, 255, 255, .04); }
.neural .draft-list > button.active { background: rgba(118, 216, 245, .1); border-color: rgba(118, 216, 245, .3); }
.neural .editor { padding: 18px 22px 14px; display: grid; gap: 8px; }
.neural .editor.empty { min-height: 300px; place-items: center; color: var(--muted); }
.neural .editor-meta { display: flex; justify-content: space-between; font-size: 11.5px; color: var(--muted); }
.neural .editor-meta span { display: inline-flex; align-items: center; gap: 5px; }
.neural .editor-title { width: 100%; border: 0; border-bottom: 1px solid var(--line); background: none; padding: 8px 0 12px; font-size: 24px; font-weight: 600; outline: none; }
.neural .editor-area { position: relative; }
.neural .editor-area textarea { width: 100%; min-height: 56vh; resize: vertical; border: 0; background: none; outline: none; padding: 10px 0; font-size: 15px; line-height: 1.9; color: var(--text); }
.neural .suggest { position: absolute; left: 0; bottom: 12px; width: min(340px, 100%); padding: 8px; border-radius: 13px; display: grid; gap: 2px; z-index: 3; animation: nd-fadeUp .25s both; }
.neural .suggest p { margin: 2px 6px 6px; font-size: 11px; color: var(--muted); }
.neural .suggest button { display: flex; align-items: center; gap: 8px; border: 0; background: none; padding: 7px 8px; border-radius: 8px; text-align: left; font-size: 12.5px; }
.neural .suggest button i { flex: none; width: 7px; height: 7px; border-radius: 50%; background: var(--kc); box-shadow: 0 0 8px var(--kc); }
.neural .suggest button small { margin-left: auto; color: var(--muted); font-size: 10.5px; white-space: nowrap; }
.neural .suggest button.on, .neural .suggest button:hover { background: rgba(255, 255, 255, .07); }
.neural .suggest .none { padding: 6px 8px; font-size: 12px; color: var(--text-2); }
.neural .editor-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid var(--line); font-size: 11.5px; color: var(--text-2); }
.neural .draft-links { padding: 16px; position: sticky; top: 80px; }
.neural .mini-graph { width: 100%; max-width: 260px; display: block; margin: 0 auto; }
.neural .mg-link line { stroke-width: 1; opacity: .55; stroke-dasharray: 200; stroke-dashoffset: 200; animation: nd-draw 1s var(--d) cubic-bezier(.2, .8, .2, 1) forwards; }
.neural .mg-link.dir-both line { stroke-width: 1.5; opacity: .9; }
@keyframes nd-draw { to { stroke-dashoffset: 0; } }
.neural .dl-legend { display: flex; justify-content: center; gap: 12px; margin: 4px 0 12px; font-size: 11px; color: var(--text-2); }
.neural .dl-legend span { display: inline-flex; align-items: center; gap: 5px; }
.neural .dl-legend i { width: 7px; height: 7px; border-radius: 50%; }
.neural .dl-legend i.out { background: var(--mint); } .neural .dl-legend i.in { background: var(--rose); } .neural .dl-legend i.both { background: var(--gold); box-shadow: 0 0 6px var(--gold); }
.neural .dl-group { margin-top: 12px; }
.neural .dl-group p { margin: 0 0 6px; font-size: 11.5px; color: var(--text-2); }

/* 选题池 */
.neural .lanes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: start; }
.neural .lane { padding: 14px; animation: nd-fadeUp .6s both; }
.neural .lane > header { display: flex; align-items: center; gap: 8px; margin: 2px 4px 12px; font-size: 13.5px; font-weight: 600; }
.neural .lane > header b { margin-left: auto; font-weight: 400; color: var(--text-2); }
.neural .lane-dot { width: 9px; height: 9px; border-radius: 50%; }
.neural .lane-dot.l0 { background: #e6cf98; box-shadow: 0 0 10px #e6cf98; } .neural .lane-dot.l1 { background: var(--lav); box-shadow: 0 0 10px var(--lav); } .neural .lane-dot.l2 { background: var(--cyan); box-shadow: 0 0 10px var(--cyan); }
.neural .idea-card { position: relative; display: grid; gap: 9px; padding: 14px 14px 12px; margin-bottom: 10px; border-radius: 14px; border: 1px solid var(--line); background: rgba(12, 13, 13, .55); overflow: hidden; animation: nd-fadeUp .55s both; transition: border-color .3s, transform .3s; }
.neural .idea-card:hover { border-color: var(--line-2); transform: translateY(-2px); }
.neural .idea-card::before { content: ""; position: absolute; inset: 0 auto 0 0; width: 2px; background: var(--pc, var(--lav)); box-shadow: 0 0 14px var(--pc, var(--lav)); }
.neural .idea-card.pri-high { --pc: var(--rose); } .neural .idea-card.pri-mid { --pc: var(--lav); } .neural .idea-card.pri-low { --pc: var(--mint); }
.neural .ic-top { display: flex; justify-content: space-between; font-size: 11px; color: var(--text-2); }
.neural .ic-pri { display: inline-flex; align-items: center; gap: 6px; color: var(--pc); }
.neural .ic-pri i { width: 6px; height: 6px; border-radius: 50%; background: var(--pc); box-shadow: 0 0 8px var(--pc); }
.neural .idea-card h3 { margin: 0; font-size: 15px; font-weight: 600; line-height: 1.4; }
.neural .idea-card > p { margin: 0; font-size: 12.5px; color: var(--text-2); }
.neural .ic-reach { display: flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--gold); }
.neural .idea-card footer { display: flex; justify-content: flex-end; gap: 8px; padding-top: 4px; }
.neural .idea-card footer .pill { height: 28px; font-size: 12px; }

/* —— 弹窗 —— */
.neural .veil { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 20px; background: rgba(4, 4, 4, .6); backdrop-filter: blur(6px); animation: nd-fadeIn .25s both; }
/* 遮罩关闭层（WUI-03）：原生 button 铺满整块遮罩，Tab 聚焦 + Enter/Space 即可关闭；
   弹窗本体抬到它之上（z-index），因此点弹窗内部不会误关，不再需要 stopPropagation。
   appearance:none + 透明背景，视觉上与原来的 <div> 完全一致。 */
.neural .veil-close { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background: none; appearance: none; -webkit-appearance: none; cursor: pointer; }
/* 焦点必须可见（a11y 底线），但这里不能沿用全局的 outline-offset: 2px ——
   .veil-close 是 inset:0 的全屏 fixed 元素，正偏移会把焦点环画到视口之外，
   等于「有 outline 但看不见」。改成 -4px 把环画在遮罩内侧，并用轻微提亮做第二通道。 */
.neural .veil-close:focus-visible { outline: 2px solid var(--gold); outline-offset: -4px; background: rgba(236, 236, 232, .05); }
@keyframes nd-fadeIn { from { opacity: 0; } }
/* WUI-51（medium）：overscroll-behavior: contain 防滚动穿透 —— 弹窗内滚到底后不再带着后面的页面一起滚。
   加在 .modal 与 .veil 两处：.veil 本身在移动端长内容时也可能成为滚动容器。 */
.neural .modal { position: relative; z-index: 2; width: min(540px, 100%); max-height: 86vh; overflow: auto; overscroll-behavior: contain; padding: 18px 22px 22px; background: linear-gradient(160deg, rgba(52, 53, 52, .5), rgba(14, 15, 15, .7)); outline: none; animation: nd-fadeUp .35s both; }
.neural .veil { overscroll-behavior: contain; }
.neural .modal.wide { width: min(860px, 100%); }
.neural .modal > header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.neural .modal h2 { margin: 0; font-size: 17px; font-weight: 600; }
.neural .about p, .neural .about li { font-size: 13px; color: var(--text-2); }
.neural .about strong, .neural .about b { color: var(--text); font-weight: 500; }
.neural .about h3 { margin: 14px 0 6px; font-size: 13.5px; }
.neural .about ul { padding-left: 18px; margin: 6px 0; }
.neural .about hr { border: 0; border-top: 1px solid var(--line); margin: 14px 0; }
.neural .form { display: grid; gap: 14px; }
.neural .form label { display: grid; gap: 6px; font-size: 12px; color: var(--text-2); }
.neural .form input, .neural .form select, .neural .form textarea { width: 100%; padding: 10px 12px; border-radius: 10px; border: 1px solid var(--line-2); background: rgba(255, 255, 255, .05); color: var(--text); outline: none; }
.neural .form select option { background: #161717; }
.neural .form textarea { min-height: 100px; resize: vertical; }
.neural .form input:focus-visible, .neural .form select:focus-visible, .neural .form textarea:focus-visible { border-color: rgba(244, 213, 141, .5); }
.neural .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.neural .form-actions { display: flex; justify-content: flex-end; gap: 10px; }
.neural .reader pre { margin: 0; white-space: pre-wrap; font: inherit; font-size: 14px; line-height: 1.9; color: var(--text); }
.neural .toast { position: fixed; left: 50%; bottom: 24px; z-index: 120; transform: translateX(-50%); display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 999px; font-size: 12.5px; animation: nd-fadeUp .3s both; }

/* —— 响应式 —— */
@media (max-width: 1180px) {
  .neural .drafts-layout { grid-template-columns: 220px minmax(0, 1fr); }
  .neural .draft-links { grid-column: 1 / -1; position: static; }
  .neural .topbar nav button { padding: 6px 11px; }
  .neural .brand-text small { display: none; }
}
@media (max-width: 960px) {
  .neural .library-layout, .neural .snapshot-grid, .neural .lanes { grid-template-columns: 1fr; }
  .neural .library-analysis { position: static; height: 72vh; }
  .neural .legend { display: none; }
  .neural .top-actions .pill.ghost { display: none; }
}
@media (max-width: 760px) {
  .neural .topbar { grid-template-columns: auto 1fr; padding: 0 12px; height: 56px; }
  .neural .topbar nav { position: fixed; left: 50%; bottom: 12px; transform: translateX(-50%); z-index: 45; background: rgba(18, 19, 19, .92); }
  .neural .topbar nav button em { display: none; }
  .neural .top-actions .pill { display: none; }
  .neural .brand-text { font-size: 12px; }
  .neural .page { padding: 76px 16px 90px; }
  .neural .page-head { flex-direction: column; align-items: flex-start; }
  .neural .kpi-band { grid-template-columns: repeat(2, 1fr); row-gap: 14px; }
  .neural .kpi-band div:nth-child(3) { border-left: 0; }
  .neural .kpi-band strong { font-size: 26px; }
  .neural .drafts-layout { grid-template-columns: 1fr; }
  .neural .draft-list { position: static; }
  .neural .hub-copy { left: 16px; top: 68px; right: 16px; }
  .neural .hub-copy h1 { font-size: 22px; }
  .neural .hub-copy .eyebrow { margin-bottom: 6px; }
  .neural .hub-en { font-size: 12px; margin-top: 4px; }
  .neural .hub-meta, .neural .hub-hint { display: none; }
  .neural .stage-tools { display: none; }
  .neural .topbar nav button { padding: 7px 14px; }
  .neural .dock { bottom: 68px; }
  .neural .dock-kpis strong { font-size: 16px; }
  .neural .dock-kpis div { padding: 0 6px; }
  .neural .dock-chips button:nth-child(n+4) { display: none; }
  .neural .crumbs { left: 12px; top: 64px; right: 12px; overflow: hidden; }
  .neural .analysis-wrap { left: 8px; right: 8px; top: auto; bottom: 8px; width: auto; height: 78vh; z-index: 50; }
  .neural .jelly-label { min-width: 0; padding: 6px 9px; }
  .neural .jl-count { font-size: 16px; }
  .neural .jl-sub { display: none; }
  .neural .fi-title { max-width: calc(100vw - 110px); }
  .neural .module-hint { bottom: 70px; white-space: nowrap; }
  .neural .snapshot { padding: 48px 16px 90px; }
  .neural .plan-body { grid-template-columns: 1fr; justify-items: center; }
  .neural .site-foot { padding-bottom: 90px; }
  /* WUI-47：iOS 在聚焦 < 16px 的表单控件时会自动放大整页（且不会缩回去）。
     桌面端维持 13px 体系不变，只在小屏把这些输入控件提到 16px。
     特异性说明：作用域后本行与桌面端 \`.form input\` 等规则同级（(0,2,1)），
     靠「同特异性后者胜」生效——本块在文件靠后且同处一个媒体查询内，不会反向影响桌面端。 */
  .neural .ask input, .neural .search input, .neural .an-ask input, .neural .form input, .neural .form select, .neural .form textarea, .neural .editor-area textarea { font-size: 16px; }
}
@media (prefers-reduced-motion: reduce) {
  .neural *, .neural *::before, .neural *::after { animation-duration: .01ms !important; animation-delay: 0ms !important; transition-duration: .01ms !important; }
}
`,
  v5 = Z2(K2);
var N = yt(ce(), 1);
Aa() || gu(Hf);
var p1,
  m1,
  Kn,
  Jn,
  ui,
  al,
  g1 = () => {
    let t = Aa();
    ((p1 = t.seedIdeas),
      (m1 = t.seedDrafts),
      (Kn = t.snapshot),
      (Jn = hu()),
      (ui = qf()),
      (al = t.usingSample !== !1));
  };
g1();
ai(g1);
var J2 = {
    getItem: (t) => {
      try {
        return localStorage.getItem(t);
      } catch (e) {
        return null;
      }
    },
    setItem: (t, e) => {
      try {
        localStorage.setItem(t, e);
      } catch (n) {}
    },
  },
  $f = J2,
  h1 = (t) => {
    t &&
      typeof t.getItem == "function" &&
      typeof t.setItem == "function" &&
      ($f = t);
  };
function Jf(t, e) {
  let [n, a] = (0, st.useState)(() => {
    var l;
    try {
      return (l = JSON.parse($f.getItem(t))) != null ? l : e;
    } catch (i) {
      return e;
    }
  });
  return (
    (0, st.useEffect)(() => {
      try {
        $f.setItem(t, JSON.stringify(n));
      } catch (l) {}
    }, [t, n]),
    [n, a]
  );
}
function Nc({ title: t, en: e, onClose: n, children: a, wide: l }) {
  let i = (0, st.useRef)(null),
    u = (0, st.useRef)(n);
  return (
    (u.current = n),
    (0, st.useEffect)(() => {
      var r;
      let o = document.activeElement;
      (r = i.current) == null || r.focus({ preventScroll: !0 });
      let c = (s) => {
        if (
          (s.key === "Escape" && !s.isComposing && u.current(), s.key === "Tab")
        ) {
          let f = [
              ...i.current.querySelectorAll(
                "button,input,textarea,select,a[href]",
              ),
            ].filter((w) => !w.disabled),
            g = f[0],
            b = f[f.length - 1];
          s.shiftKey && document.activeElement === g
            ? (s.preventDefault(), b.focus())
            : !s.shiftKey &&
              document.activeElement === b &&
              (s.preventDefault(), g.focus());
        }
      };
      return (
        window.addEventListener("keydown", c),
        () => {
          (window.removeEventListener("keydown", c),
            o != null && o.isConnected && o.focus({ preventScroll: !0 }));
        }
      );
    }, []),
    (0, N.jsxs)("div", {
      className: "veil",
      children: [
        (0, N.jsx)("button", {
          type: "button",
          className: "veil-close",
          "aria-label": "关闭弹窗（点击空白处）Dismiss",
          onClick: n,
        }),
        (0, N.jsxs)("section", {
          ref: i,
          tabIndex: -1,
          className: `modal glass ${l ? "wide" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": t,
          children: [
            (0, N.jsxs)("header", {
              children: [
                (0, N.jsxs)("h2", {
                  children: [t, " ", (0, N.jsx)("em", { children: e })],
                }),
                (0, N.jsx)("button", {
                  className: "icon-btn",
                  onClick: n,
                  "aria-label": "关闭弹窗",
                  children: (0, N.jsx)(X, { name: "close", size: 16 }),
                }),
              ],
            }),
            a,
          ],
        }),
      ],
    })
  );
}
var b1 = [
    ["home", "工作台", "Workspace"],
    ["library", "项目库", "Projects"],
    ["drafts", "记忆库", "Memories"],
    ["ideas", "索引库", "Index"],
  ],
  $2 = {
    current: () => location.hash.slice(1),
    go: (t) =>
      history.replaceState(
        null,
        "",
        t === "home" ? location.pathname : "#" + t,
      ),
  },
  Wf = $2,
  v1 = (t) => {
    t &&
      typeof t.current == "function" &&
      typeof t.go == "function" &&
      (Wf = t);
  };
var W2 = () => {
  let t = Wf.current();
  return b1.some((e) => e[0] === t) ? t : "home";
};
function F2({
  goal: t,
  onGoal: e,
  ideas: n,
  drafts: a,
  onIdea: l,
  onDraft: i,
  onLibrary: u,
}) {
  var r;
  let o = Jn.filter((s) => s.views === 0 && s.saves === 0).length,
    c = [
      ["项目总数", "Projects", Jn.length],
      ["本月新增", "Added", ui.length],
      ["待读", "To read", o],
      ["索引 · 记忆库", "Index", n.length + a.length],
    ];
  return (0, N.jsxs)("section", {
    className: "snapshot",
    "aria-label": "知识库快照",
    children: [
      (0, N.jsxs)("div", {
        className: "snapshot-head",
        children: [
          (0, N.jsxs)("p", {
            className: "eyebrow",
            children: [
              "SNAPSHOT ",
              (0, N.jsx)("span", { children: "知识库快照" }),
            ],
          }),
          (0, N.jsxs)("p", {
            className: "quiet",
            children: [
              Kn.source,
              " · ",
              Kn.capturedAt,
              " ",
              (0, N.jsx)("em", { children: al ? "Sample data" : "Vault data" }),
            ],
          }),
        ],
      }),
      (0, N.jsx)("div", {
        className: "kpi-band glass",
        children: c.map(([s, f, g]) =>
          (0, N.jsxs)(
            "div",
            {
              children: [
                (0, N.jsxs)("span", {
                  children: [s, " ", (0, N.jsx)("em", { children: f })],
                }),
                (0, N.jsx)("strong", {
                  children: (0, N.jsx)(ii, { value: g }),
                }),
              ],
            },
            s,
          ),
        ),
      }),
      (0, N.jsxs)("div", {
        className: "snapshot-grid",
        children: [
          (0, N.jsxs)("section", {
            className: "glass card perf",
            children: [
              (0, N.jsxs)("header", {
                children: [
                  (0, N.jsxs)("h2", {
                    children: [
                      "最近收藏 ",
                      (0, N.jsx)("em", { children: "Recently saved" }),
                    ],
                  }),
                  (0, N.jsxs)("button", {
                    className: "text-btn",
                    onClick: u,
                    children: [
                      "全部资源 ",
                      (0, N.jsx)("em", { children: "All projects" }),
                      (0, N.jsx)(X, { name: "arrow", size: 14 }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)("table", {
                children: [
                  (0, N.jsx)("thead", {
                    children: (0, N.jsxs)("tr", {
                      children: [
                        (0, N.jsxs)("th", {
                          scope: "col",
                          children: [
                            "资源 ",
                            (0, N.jsx)("em", { children: "Resource" }),
                          ],
                        }),
                        (0, N.jsxs)("th", {
                          scope: "col",
                          children: [
                            "分类 ",
                            (0, N.jsx)("em", { children: "Category" }),
                          ],
                        }),
                        (0, N.jsxs)("th", {
                          scope: "col",
                          children: [
                            "状态 ",
                            (0, N.jsx)("em", { children: "Status" }),
                          ],
                        }),
                        (0, N.jsxs)("th", {
                          scope: "col",
                          children: [
                            "连接 ",
                            (0, N.jsx)("em", { children: "Links" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, N.jsx)("tbody", {
                    children: [...Jn]
                      .sort((s, f) => f.date.localeCompare(s.date))
                      .slice(0, 6)
                      .map((s) => {
                        var f;
                        return (0, N.jsxs)(
                          "tr",
                          {
                            onClick: () => u(s.id),
                            children: [
                              (0, N.jsx)("td", {
                                children: (0, N.jsx)("span", {
                                  className: "t-title",
                                  children: s.title,
                                }),
                              }),
                              (0, N.jsx)("td", {
                                children: s.date.slice(0, 10),
                              }),
                              (0, N.jsx)("td", { children: "—" }),
                              (0, N.jsx)("td", {
                                children: (f = s.saves) != null ? f : "—",
                              }),
                            ],
                          },
                          s.id,
                        );
                      }),
                  }),
                ],
              }),
              (0, N.jsxs)("p", {
                className: "quiet",
                children: [
                  "最近 6 条 · 共 ",
                  Jn.length,
                  " 条 · 未标注的显示「—」",
                  (0, N.jsxs)("em", { children: ["Latest 6 of ", Jn.length] }),
                ],
              }),
            ],
          }),
          (0, N.jsxs)("section", {
            className: "glass card plan",
            children: [
              (0, N.jsx)("header", {
                children: (0, N.jsxs)("h2", {
                  children: [
                    "整理计划 ",
                    (0, N.jsx)("em", { children: "Plan" }),
                  ],
                }),
              }),
              (0, N.jsxs)("div", {
                className: "plan-body",
                children: [
                  (0, N.jsxs)("button", {
                    className: "ring",
                    onClick: e,
                    "aria-label": `修改目标，本月新增 ${ui.length} 条，目标 ${t} 条`,
                    children: [
                      (0, N.jsxs)("svg", {
                        viewBox: "0 0 180 180",
                        children: [
                          (0, N.jsx)("defs", {
                            children: (0, N.jsxs)("linearGradient", {
                              id: "ring-g",
                              x1: "0",
                              x2: "1",
                              children: [
                                (0, N.jsx)("stop", {
                                  offset: "0",
                                  stopColor: L.ring[0],
                                }),
                                (0, N.jsx)("stop", {
                                  offset: "1",
                                  stopColor: L.ring[1],
                                }),
                              ],
                            }),
                          }),
                          (0, N.jsx)("circle", {
                            cx: "90",
                            cy: "90",
                            r: "72",
                            className: "track",
                          }),
                          (0, N.jsx)("circle", {
                            cx: "90",
                            cy: "90",
                            r: "72",
                            className: "value",
                            strokeDasharray: `${Math.min(ui.length / t, 1) * 452.39} 452.39`,
                          }),
                        ],
                      }),
                      (0, N.jsxs)("span", {
                        children: [
                          (0, N.jsx)("strong", { children: ui.length }),
                          "/",
                          t,
                          (0, N.jsx)("small", { children: "本月目标 Goal" }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)("div", {
                    className: "plan-ideas",
                    children: [
                      (0, N.jsxs)("h3", {
                        children: [
                          "待整理的索引 ",
                          (0, N.jsx)("em", { children: "Up next" }),
                        ],
                      }),
                      n
                        .slice(0, 3)
                        .map((s, f) =>
                          (0, N.jsxs)(
                            "button",
                            {
                              onClick: () => l(s),
                              children: [
                                (0, N.jsx)("b", { children: f + 1 }),
                                (0, N.jsx)("span", { children: s.title }),
                              ],
                            },
                            s.id,
                          ),
                        ),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)("button", {
                className: "plan-draft",
                onClick: () => {
                  var s;
                  return i((s = a[0]) == null ? void 0 : s.id);
                },
                children: [
                  (0, N.jsx)(X, { name: "draft", size: 15 }),
                  "去整理 ",
                  (0, N.jsx)("em", { children: "Process" }),
                  (0, N.jsx)("span", {
                    children:
                      ((r = a[0]) == null ? void 0 : r.title) ||
                      "记忆库清单是空的",
                  }),
                  (0, N.jsx)(X, { name: "arrow", size: 15 }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function wc() {
  var K, ht, zt;
  let [t, e] = (0, st.useState)(W2),
    [n, a] = Jf(Wt.storagePrefix + "-goal-v1", 8),
    [l, i] = Jf(Wt.storagePrefix + "-ideas-v1", p1),
    [u, o] = Jf(Wt.storagePrefix + "-drafts-v1", m1),
    [c, r] = (0, st.useState)(() => {
      var k;
      return (k = u[0]) == null ? void 0 : k.id;
    }),
    [s, f] = (0, st.useState)({ mod: null, sel: null }),
    [g, b] = (0, st.useState)(
      (zt = (K = Jn[1]) == null ? void 0 : K.id) != null
        ? zt
        : (ht = Jn[0]) == null
          ? void 0
          : ht.id,
    ),
    [w, M] = (0, st.useState)(null),
    [p, d] = (0, st.useState)(null),
    [m, h] = (0, st.useState)(String(n)),
    [y, x] = (0, st.useState)(""),
    v = (0, st.useMemo)(
      () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      [],
    ),
    S = (0, st.useDeferredValue)(u),
    E = (0, st.useMemo)(() => Qh({ ideas: l, drafts: S }), [l, S]),
    _ = (0, st.useMemo)(() => Vh(E), [E]);
  ((0, st.useEffect)(() => {
    (Wf.go(t), window.scrollTo({ top: 0 }));
  }, [t]),
    (0, st.useEffect)(() => {
      if (!y) return;
      let k = setTimeout(() => x(""), 2800);
      return () => clearTimeout(k);
    }, [y]));
  let D = (0, st.useCallback)(() => M(null), []);
  function R(k = "未命名条目", B = "", U) {
    let Y = "draft-" + Date.now();
    (o((I) => [{ id: Y, title: k, body: B, source: U }, ...I]),
      r(Y),
      e("drafts"),
      M(null),
      x("已加入记忆库，只保存在此浏览器 · Saved locally"));
  }
  function F(k) {
    (d({ ...k }), M("idea"));
  }
  function Q() {
    p.title.trim() &&
      (i(
        l.some((k) => k.id === p.id)
          ? l.map((k) => (k.id === p.id ? p : k))
          : [...l, p],
      ),
      M(null),
      x("灵感已保存 · Spark saved"));
  }
  function ee(k) {
    let B = u.find((Y) => Y.source === k.id);
    if (B) {
      (r(B.id),
        e("drafts"),
        M(null),
        x("已打开关联的记忆库条目 · Linked item opened"));
      return;
    }
    let U = { ...k, status: "进行中" };
    (i(
      l.some((Y) => Y.id === U.id)
        ? l.map((Y) => (Y.id === U.id ? U : Y))
        : [...l, U],
    ),
      R(
        U.title,
        `【根据灵感创建的记忆库条目，未调用 AI】

方向：${U.note}

要点：

待查：

结论：`,
        U.id,
      ));
  }
  function Ft(k) {
    var Y;
    let B = u.find((I) => I.id === k);
    if (
      !window.confirm(
        `删除「${(B == null ? void 0 : B.title) || "未命名条目"}」？此操作只影响当前浏览器。`,
      )
    )
      return;
    let U = u.filter((I) => I.id !== k);
    (o(U),
      r((Y = U[0]) == null ? void 0 : Y.id),
      x("已从记忆库移除 · Removed"));
  }
  let Ue = (0, st.useCallback)(
      (k) => {
        (k.type === "page" &&
          (k.page === "library" && b(k.id),
          k.page === "drafts" && r(k.id),
          e(k.page)),
          k.type === "read" && M({ read: E.index.get(k.id) }),
          k.type === "editIdea" && F(k.idea),
          k.type === "ideaToDraft" && ee(k.idea));
      },
      [E, u, l],
    ),
    C = (k) => {
      let B = E.index.get(k),
        U = {
          post: "works",
          note: "methods",
          idea: "ideas",
          draft: "drafts",
          concept: "concepts",
        }[B == null ? void 0 : B.kind];
      U && (f({ mod: U, sel: k }), e("home"));
    },
    q = bu(E);
  return (0, N.jsxs)("div", {
    className: `neural page-${t}`,
    children: [
      (0, N.jsxs)("header", {
        className: "topbar",
        children: [
          (0, N.jsxs)("a", {
            className: "brand",
            href: Ca(""),
            onClick: (k) => {
              (k.preventDefault(), e("home"), f({ mod: null, sel: null }));
            },
            children: [
              (0, N.jsx)("span", {
                className: "brand-mark",
                "aria-hidden": "true",
                children: (0, N.jsxs)("svg", {
                  viewBox: "0 0 24 28",
                  width: "18",
                  height: "21",
                  children: [
                    (0, N.jsx)("path", {
                      fill: L.logo[0],
                      d: "m14 1 8 7-2 12-7 7-10-5L1 12 8 4Z",
                    }),
                    (0, N.jsx)("path", {
                      fill: L.logo[1],
                      d: "m14 1-3 10 2 16 7-7 2-12Z",
                    }),
                    (0, N.jsx)("path", {
                      fill: L.logo[2],
                      d: "m14 1-3 10 11-3Z",
                    }),
                    (0, N.jsx)("path", {
                      fill: L.logo[3],
                      d: "m1 12 10-1 2 16-10-5Z",
                    }),
                  ],
                }),
              }),
              (0, N.jsxs)("span", {
                className: "brand-text",
                children: [
                  Wt.brand.name,
                  " ",
                  (0, N.jsxs)("b", { children: ["/ ", Wt.brand.sub] }),
                  (0, N.jsxs)("small", {
                    children: [Wt.brand.tagline, " · ", Wt.brand.taglineEn],
                  }),
                ],
              }),
            ],
          }),
          (0, N.jsx)("nav", {
            "aria-label": "主导航",
            children: b1.map(([k, B, U]) =>
              (0, N.jsxs)(
                "button",
                {
                  className: t === k ? "active" : "",
                  "aria-current": t === k ? "page" : void 0,
                  onClick: () => e(k),
                  children: [B, (0, N.jsx)("em", { children: U })],
                },
                k,
              ),
            ),
          }),
          (0, N.jsxs)("div", {
            className: "top-actions",
            children: [
              (0, N.jsxs)("button", {
                className: "pill primary",
                onClick: () => R(),
                children: [
                  (0, N.jsx)(X, { name: "plus", size: 14 }),
                  "加记忆库 ",
                  (0, N.jsx)("em", { children: "Add" }),
                ],
              }),
              (0, N.jsx)("button", {
                className: "avatar",
                onClick: () => M("about"),
                "aria-label": `${Kn.account}，查看数据来源`,
                children: (0, N.jsx)("img", {
                  src: Ca(Wt.avatar),
                  alt: "",
                  width: 34,
                  height: 34,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, N.jsxs)("main", {
        children: [
          t === "home" &&
            (0, N.jsxs)(N.Fragment, {
              children: [
                (0, N.jsx)(a1, {
                  graph: E,
                  layout: _,
                  focus: s,
                  setFocus: f,
                  onAction: Ue,
                  onAbout: () => M("about"),
                  reduced: v,
                }),
                (0, N.jsx)(F2, {
                  goal: n,
                  onGoal: () => {
                    (h(String(n)), M("goal"));
                  },
                  ideas: l,
                  drafts: u,
                  onIdea: F,
                  onDraft: (k) => {
                    (r(k), e("drafts"));
                  },
                  onLibrary: (k) => {
                    (typeof k == "string" && b(k), e("library"));
                  },
                }),
              ],
            }),
          t === "library" &&
            (0, N.jsx)(o1, {
              graph: E,
              selected: g,
              setSelected: b,
              onGo: C,
              onAction: Ue,
            }),
          t === "drafts" &&
            (0, N.jsx)(c1, {
              graph: E,
              drafts: u,
              setDrafts: o,
              active: c,
              setActive: r,
              onNew: () => R(),
              onDelete: Ft,
              onGo: C,
            }),
          t === "ideas" &&
            (0, N.jsx)(r1, {
              graph: E,
              ideas: l,
              onEdit: F,
              onGraph: C,
              onNew: () =>
                F({
                  id: Math.max(0, ...l.map((k) => k.id)) + 1,
                  title: "",
                  platform: "随手记",
                  priority: "中",
                  status: "待整理",
                  note: "",
                }),
            }),
        ],
      }),
      (0, N.jsxs)("footer", {
        className: "site-foot",
        children: [
          (0, N.jsxs)("button", {
            onClick: () => M("about"),
            children: [
              (0, N.jsx)(X, { name: "info", size: 13 }),
              al
                ? "当前展示的是虚构示例数据，换成你自己的数据见 README"
                : "当前展示的是 Obsidian 库里的真实笔记",
              " ",
              (0, N.jsx)("em", { children: al ? "Sample data" : "Vault data" }),
            ],
          }),
          (0, N.jsxs)("span", {
            children: [
              Wt.footer.zh,
              (0, N.jsx)("em", { children: Wt.footer.en }),
            ],
          }),
        ],
      }),
      y &&
        (0, N.jsxs)("div", {
          className: "toast glass",
          role: "status",
          children: [(0, N.jsx)(X, { name: "check", size: 15 }), y],
        }),
      w === "about" &&
        (0, N.jsx)(Nc, {
          title: "关于这份数据",
          en: "About the data",
          onClose: D,
          children: (0, N.jsxs)("div", {
            className: "about",
            children: [
              (0, N.jsxs)("p", {
                children: [
                  "知识库 ",
                  (0, N.jsx)("em", { children: "Library" }),
                  "：",
                  (0, N.jsx)("strong", { children: Kn.account }),
                  " · 读取日期 ",
                  (0, N.jsx)("em", { children: "Captured" }),
                  "：",
                  Kn.capturedAt,
                ],
              }),
              (0, N.jsxs)("p", {
                children: [
                  "数据来源 ",
                  (0, N.jsx)("em", { children: "Source" }),
                  "：",
                  Kn.source,
                  "；收录范围 ",
                  Kn.publishedFrom,
                  " — ",
                  Kn.publishedTo,
                  "。",
                ],
              }),
              (0, N.jsx)("hr", {}),
              (0, N.jsxs)("h3", {
                children: [
                  "图谱怎么来的 ",
                  (0, N.jsx)("em", { children: "How the graph is built" }),
                ],
              }),
              (0, N.jsxs)("p", {
                children: [
                  "全部由",
                  al
                    ? (0, N.jsxs)(N.Fragment, {
                        children: [
                          " ",
                          (0, N.jsx)("code", {
                            children: "src/data/sample.js",
                          }),
                          " 里的资料",
                        ],
                      })
                    : " Obsidian 库里的笔记",
                  "在浏览器中推导",
                  al ? "，不读取外部 Obsidian 仓库" : "",
                  "：",
                ],
              }),
              (0, N.jsxs)("ul", {
                children: [
                  (0, N.jsxs)("li", {
                    children: [
                      (0, N.jsx)("b", { children: "[[双链]] Wikilinks" }),
                      "：知识库笔记与记忆库条目正文中的双链；找不到对应笔记的记为「未创建」。",
                    ],
                  }),
                  (0, N.jsxs)("li", {
                    children: [
                      (0, N.jsx)("b", { children: "话题 Topics" }),
                      "：资源正文里的 # 话题标签。",
                    ],
                  }),
                  (0, N.jsxs)("li", {
                    children: [
                      (0, N.jsx)("b", { children: "正文提及 Mentions" }),
                      "：内容中出现概念词（如「模板」「口播」），且至少两条内容提及才成为概念节点。",
                    ],
                  }),
                  (0, N.jsxs)("li", {
                    children: [
                      (0, N.jsx)("b", { children: "双向共振 Resonance" }),
                      "：两条内容共同提及 ≥2 个概念，或灵感与记忆库条目互相记录。",
                    ],
                  }),
                  (0, N.jsxs)("li", {
                    children: [
                      (0, N.jsx)("b", { children: "灵感来源 Source" }),
                      "：记忆库条目记录来源灵感；灵感状态为「进行中」时反向成立。",
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)("p", {
                children: [
                  "项目库：",
                  Jn.length,
                  " 条",
                  al
                    ? (0, N.jsxs)(N.Fragment, {
                        children: [
                          (0, N.jsx)("b", { children: "示例资源" }),
                          "，标题、日期与分类均为虚构，仅用于展示效果",
                        ],
                      })
                    : (0, N.jsx)("b", { children: "资源" }),
                  "。",
                ],
              }),
              (0, N.jsxs)("p", {
                children: [
                  "当前：",
                  q.content,
                  " 条内容 · ",
                  q.links,
                  " 条连接 · ",
                  q.mutual,
                  " 组双向 · ",
                  q.ghosts,
                  " 个未创建双链。",
                ],
              }),
              (0, N.jsxs)("p", {
                className: "quiet",
                children: [
                  "图谱分析是本地规则检索，未调用 AI。灵感、记忆库与目标保存在当前浏览器，不写入 Obsidian、不发布到平台。",
                  (0, N.jsx)("em", {
                    children:
                      "Local rules only · no AI · nothing is published.",
                  }),
                ],
              }),
            ],
          }),
        }),
      w === "goal" &&
        (0, N.jsx)(Nc, {
          title: "本月新增目标",
          en: "Monthly goal",
          onClose: D,
          children: (0, N.jsxs)("form", {
            className: "form",
            onSubmit: (k) => {
              k.preventDefault();
              let B = Number(m);
              Number.isInteger(B) &&
                B >= 1 &&
                B <= 100 &&
                (a(B), M(null), x("目标已更新 · Goal updated"));
            },
            children: [
              (0, N.jsxs)("p", {
                className: "quiet",
                children: [
                  "本月已新增 ",
                  ui.length,
                  " 条。目标只保存在当前浏览器。",
                ],
              }),
              (0, N.jsxs)("label", {
                children: [
                  "目标条数 ",
                  (0, N.jsx)("em", { children: "Target" }),
                  (0, N.jsx)("input", {
                    autoFocus: !0,
                    type: "number",
                    min: "1",
                    max: "100",
                    step: "1",
                    required: !0,
                    value: m,
                    onChange: (k) => h(k.target.value),
                  }),
                ],
              }),
              (0, N.jsxs)("div", {
                className: "form-actions",
                children: [
                  (0, N.jsxs)("button", {
                    type: "button",
                    className: "pill ghost",
                    onClick: D,
                    children: [
                      "取消 ",
                      (0, N.jsx)("em", { children: "Cancel" }),
                    ],
                  }),
                  (0, N.jsxs)("button", {
                    className: "pill primary",
                    children: [
                      "保存目标 ",
                      (0, N.jsx)("em", { children: "Save" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      w === "idea" &&
        p &&
        (0, N.jsx)(Nc, {
          title: "灵感详情",
          en: "Spark",
          onClose: D,
          children: (0, N.jsxs)("div", {
            className: "form",
            children: [
              (0, N.jsxs)("p", {
                className: "quiet",
                children: [
                  "编辑后保存在此浏览器 ",
                  (0, N.jsx)("em", { children: "Saved locally" }),
                ],
              }),
              (0, N.jsxs)("label", {
                children: [
                  "灵感标题 ",
                  (0, N.jsx)("em", { children: "Title" }),
                  (0, N.jsx)("input", {
                    autoFocus: !0,
                    value: p.title,
                    onChange: (k) => d({ ...p, title: k.target.value }),
                  }),
                ],
              }),
              (0, N.jsxs)("div", {
                className: "form-row",
                children: [
                  (0, N.jsxs)("label", {
                    children: [
                      "优先级 ",
                      (0, N.jsx)("em", { children: "Priority" }),
                      (0, N.jsxs)("select", {
                        value: p.priority,
                        onChange: (k) => d({ ...p, priority: k.target.value }),
                        children: [
                          (0, N.jsx)("option", { children: "高" }),
                          (0, N.jsx)("option", { children: "中" }),
                          (0, N.jsx)("option", { children: "低" }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsxs)("label", {
                    children: [
                      "状态 ",
                      (0, N.jsx)("em", { children: "Status" }),
                      (0, N.jsxs)("select", {
                        value: p.status,
                        onChange: (k) => d({ ...p, status: k.target.value }),
                        children: [
                          (0, N.jsx)("option", { children: "待整理" }),
                          (0, N.jsx)("option", { children: "进行中" }),
                          (0, N.jsx)("option", { children: "已归档" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)("label", {
                children: [
                  "备注 ",
                  (0, N.jsx)("em", { children: "Note" }),
                  (0, N.jsx)("textarea", {
                    value: p.note,
                    onChange: (k) => d({ ...p, note: k.target.value }),
                  }),
                ],
              }),
              (0, N.jsxs)("div", {
                className: "form-actions",
                children: [
                  (0, N.jsxs)("button", {
                    className: "pill ghost",
                    disabled: !p.title.trim(),
                    onClick: Q,
                    children: [
                      "保存灵感 ",
                      (0, N.jsx)("em", { children: "Save" }),
                    ],
                  }),
                  (0, N.jsxs)("button", {
                    className: "pill primary",
                    disabled: !p.title.trim(),
                    onClick: () => ee(p),
                    children: [
                      (0, N.jsx)(X, { name: "draft", size: 14 }),
                      u.some((k) => k.source === p.id)
                        ? "打开记忆库条目"
                        : "加入记忆库",
                      " ",
                      (0, N.jsx)("em", {
                        children: u.some((k) => k.source === p.id)
                          ? "Open item"
                          : "To memories",
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsx)("p", {
                className: "quiet",
                children: "加入记忆库只生成本地条目，不模拟 AI 生成结果。",
              }),
            ],
          }),
        }),
      (w == null ? void 0 : w.read) &&
        (0, N.jsx)(Nc, {
          title: w.read.short || w.read.title,
          en: gt[w.read.kind].en,
          onClose: D,
          wide: !0,
          children: (0, N.jsxs)("div", {
            className: "reader",
            children: [
              (0, N.jsx)("p", { className: "quiet", children: w.read.path }),
              (0, N.jsx)("pre", { children: w.read.body }),
            ],
          }),
        }),
    ],
  });
}
var f1 = document.getElementById("root");
f1 && (0, d1.createRoot)(f1).render((0, N.jsx)(wc, {}));
var Ff = yt(ce(), 1),
  y1 = { page: "home" },
  I2 = {
    current: () => y1.page,
    go: (t) => {
      y1.page = t;
    },
  };
function P2(t) {
  if (typeof t == "function") return t;
  let e = String(t != null ? t : "").replace(/[/\\]$/, ""),
    n = e && !/[/\\]$/.test(e) ? "/" : "";
  return (a) => `${e}${n}${String(a).replace(/^[/\\]/, "")}`;
}
function zc(t, e = {}) {
  let { storage: n, assetUrl: a, vaultData: l, onDataChange: i } = e;
  (n && h1(n), a != null && qh(P2(a)), l && gu(l), v1(I2));
  let u = (0, x1.createRoot)(t);
  u.render((0, Ff.jsx)(wc, {}));
  let o = null,
    c = (f) => {
      let g = !!(f && f.usingSample);
      g && !o
        ? (getComputedStyle(t).position === "static" &&
            (t.style.position = "relative"),
          (o = document.createElement("div")),
          (o.textContent = "当前显示示例数据 · Sample data"),
          (o.style.cssText =
            "position:absolute;top:8px;right:8px;z-index:5;padding:4px 10px;border-radius:10px;background:rgba(30,30,32,.82);color:#e6e7e3;font-size:11px;letter-spacing:.04em;pointer-events:none;"),
          t.appendChild(o))
        : !g && o && (o.remove(), (o = null));
    };
  c(l);
  let r = null;
  i &&
    l &&
    (r = i((f) => {
      (gu(f), c(f), u.render((0, Ff.jsx)(wc, {})));
    }));
  let s = !1;
  return () => {
    if (!s) {
      if (((s = !0), r)) {
        try {
          r();
        } catch (f) {}
        r = null;
      }
      (o && (o.remove(), (o = null)), u.unmount());
    }
  };
}
var Ec = "neural-dashboard-view",
  If = class extends N1.ItemView {
    constructor(e, n) {
      (super(e), (this.plugin = n), (this.cleanup = null));
    }
    getViewType() {
      return Ec;
    }
    getDisplayText() {
      return "潮汐创作台";
    }
    getIcon() {
      return "network";
    }
    async onOpen() {
      this.cleanup = await this.render();
    }
    async render() {
      try {
        await this.plugin.ensureData();
      } catch (e) {
        console.error("[neural-dashboard] vault 扫描失败：", e);
      }
      return zc(this.contentEl, this.plugin.mountContext());
    }
    async onClose() {
      if (this.cleanup) {
        try {
          this.cleanup();
        } catch (e) {
          console.error("[neural-dashboard] 卸载异常：", e);
        }
        this.cleanup = null;
      }
    }
  };
function w1(t) {
  (t.registerView(Ec, (e) => new If(e, t)),
    t.addCommand({
      id: "open-neural-dashboard",
      name: "打开潮汐创作台 Open neural dashboard",
      callback: () => S1(t),
    }),
    t.addRibbonIcon("maximize", "潮汐创作台（展开/收起）Toggle dashboard", () => S2(t)));
}
async function S1(t) {
  let e = t.app.workspace.getLeavesOfType(Ec),
    n;
  return (
    e.length
      ? (n = e[0])
      : ((n = t.app.workspace.getLeaf("tab")),
        await n.setViewState({ type: Ec, active: !0 })),
    t.app.workspace.revealLeaf(n),
    n
  );
}
async function S2(t) {
  let ws = t.app.workspace,
    leaves = ws.getLeavesOfType(Ec),
    expandSide = (s) => {
      try {
        if (!s) return;
        if (typeof s.expand === "function") s.expand();
        else if ("collapsed" in s) s.collapsed = false;
      } catch (e) {}
    },
    collapseSide = (s) => {
      try {
        if (!s) return;
        if (typeof s.collapse === "function") s.collapse();
        else if ("collapsed" in s) s.collapsed = true;
      } catch (e) {}
    };
  if (leaves.length) {
    expandSide(ws.leftSplit);
    expandSide(ws.rightSplit);
    for (let leaf of leaves) {
      try {
        leaf.detach && leaf.detach();
      } catch (e) {}
    }
    return null;
  }
  let view = await S1(t);
  collapseSide(ws.leftSplit);
  collapseSide(ws.rightSplit);
  return view;
}
var ci = require("obsidian");
var ed = 2,
  oi = 640,
  yu = new Set(),
  Tn = new Set();
function Pf(t, e, n) {
  let a = t.querySelector(e);
  if (a) return (n(a), () => {});
  let l = new MutationObserver(() => {
    let i = t.querySelector(e);
    i && (l.disconnect(), n(i));
  });
  return (l.observe(t, { childList: !0, subtree: !0 }), () => l.disconnect());
}
function tx(t, e, n) {
  let a = () => {
    var i, u;
    for (let o of e)
      for (let c of (u =
        (i = t.querySelectorAll) == null ? void 0 : i.call(t, o)) != null
        ? u
        : [])
        n(c, o);
  };
  a();
  let l = new MutationObserver(a);
  return (l.observe(t, { childList: !0, subtree: !0 }), () => l.disconnect());
}
function nd(t) {
  let e = t.doMount();
  e &&
    typeof e.catch == "function" &&
    e.catch((n) => console.error("[neural-dashboard] 代码块挂载失败：", n));
}
var ad = class extends ci.MarkdownRenderChild {
  constructor(e, n) {
    (super(e),
      (this.plugin = n),
      (this.cleanup = null),
      (this.undoFns = []),
      (this._mountSeq = 0),
      (this.embedEl = null),
      (this.placeholderEl = null));
  }
  addUndo(e) {
    typeof e == "function" && this.undoFns.push(e);
  }
  onload() {
    yu.add(this);
    let e = (0, ci.createDiv)({ cls: "neural-embed" });
    ((e.style.cssText = `position:relative;width:100%;min-height:${oi}px;overflow:hidden;border-radius:16px;`),
      this.containerEl.appendChild(e),
      (this.embedEl = e),
      this.tryActivate());
  }
  onunload() {
    (this.deactivate(), yu.delete(this), td(this.plugin));
  }
  isActive() {
    return Tn.has(this);
  }
  tryActivate() {
    return this.isActive()
      ? !0
      : Tn.size < ed
        ? (nd(this), !0)
        : (this.showPlaceholder(), !1);
  }
  async doMount() {
    var a;
    if (this.isActive()) return;
    let e = ++this._mountSeq;
    (Tn.add(this), this.clearPlaceholder());
    let n = () => {
      e === this._mountSeq && Tn.delete(this);
    };
    try {
      try {
        await this.plugin.ensureData();
      } catch (l) {
        console.error("[neural-dashboard] 代码块数据准备失败：", l);
      }
      if (e !== this._mountSeq || !this.isActive()) {
        n();
        return;
      }
      if (!this.embedEl || !this.embedEl.isConnected) {
        n();
        return;
      }
      ((this.cleanup = zc(this.embedEl, this.plugin.mountContext())),
        this.addUndo(
          Pf(this.embedEl, ".neural", (l) => {
            ((l.style.cssText += "height:auto;min-height:0;overflow:visible;"),
              this.addUndo(
                Pf(l, ".home-stage", (i) => {
                  ((i.style.height = `${oi}px`),
                    (i.style.minHeight = `${oi}px`));
                }),
              ),
              this.addUndo(
                Pf(l, ".library-analysis", (i) => {
                  ((i.style.height = "auto"),
                    (i.style.maxHeight = `${oi}px`),
                    (i.style.overflow = "auto"));
                }),
              ),
              this.addUndo(
                tx(l, [".topbar", ".toast", ".veil", ".topbar nav"], (i) => {
                  i.style.position = "absolute";
                }),
              ));
          }),
        ));
    } catch (l) {
      (Tn.delete(this),
        console.error("[neural-dashboard] 代码块挂载失败：", l),
        (a = this.containerEl) != null &&
          a.isConnected &&
          this.showPlaceholder());
    } finally {
      td(this.plugin);
    }
  }
  deactivate(e = {}) {
    let n = this.isActive();
    Tn.delete(this);
    for (let a of this.undoFns.splice(0))
      try {
        a();
      } catch (l) {}
    if (this.cleanup) {
      try {
        this.cleanup();
      } catch (a) {
        console.error("[neural-dashboard] 代码块卸载异常：", a);
      }
      this.cleanup = null;
    }
    (this.embedEl && (this.embedEl.remove(), (this.embedEl = null)),
      this.clearPlaceholder(),
      n && e.promote !== !1 && td(this.plugin));
  }
  showPlaceholder() {
    if (this.placeholderEl) return;
    let e = (0, ci.createDiv)({
      cls: "neural-embed-placeholder",
      text: `看板实例已达同屏上限 · Dashboard instances at capacity
点击激活本块 · Click to activate this instance`,
      attr: {
        role: "button",
        tabindex: "0",
        "aria-label": "点击激活看板 Click to activate dashboard",
      },
    });
    e.style.cssText = `position:relative;width:100%;min-height:${oi}px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;cursor:pointer;border-radius:16px;background:rgba(30,31,30,.6);color:#e6e7e3;font-size:13px;letter-spacing:.04em;text-align:center;white-space:pre-line;`;
    let n = () => {
      if (!this.isActive()) {
        if (Tn.size >= ed) {
          let a = Tn.values().next().value;
          a && a !== this && a.releaseSlot({ promote: !1 });
        }
        nd(this);
      }
    };
    (e.addEventListener("click", n),
      e.addEventListener("keydown", (a) => {
        (a.key === "Enter" || a.key === " ") && (a.preventDefault(), n());
      }),
      this.embedEl
        ? this.embedEl.appendChild(e)
        : this.containerEl.appendChild(e),
      (this.placeholderEl = e));
  }
  clearPlaceholder() {
    this.placeholderEl &&
      (this.placeholderEl.remove(), (this.placeholderEl = null));
  }
  releaseSlot(e = {}) {
    if (this.isActive()) {
      if ((this.deactivate(e), !this.embedEl && this.containerEl.isConnected)) {
        let n = (0, ci.createDiv)({ cls: "neural-embed" });
        ((n.style.cssText = `position:relative;width:100%;min-height:${oi}px;overflow:hidden;border-radius:16px;`),
          this.containerEl.appendChild(n),
          (this.embedEl = n));
      }
      this.showPlaceholder();
    }
  }
};
function td(t) {
  var e;
  if (!(Tn.size >= ed)) {
    for (let n of yu)
      if (
        !n.isActive() &&
        n.placeholderEl &&
        (e = n.embedEl) != null &&
        e.isConnected
      ) {
        nd(n);
        return;
      }
  }
}
function z1(t) {
  t.registerMarkdownCodeBlockProcessor("neural-dashboard", (e, n, a) => {
    let l = new ad(n, t);
    a.addChild(l);
  });
}
function E1() {
  for (let t of [...yu])
    try {
      t.deactivate();
    } catch (e) {
      console.error("[neural-dashboard] 代码块批量卸载异常：", e);
    }
  (yu.clear(), Tn.clear());
}
var ex = "github-capability-vault",
  ld = "workflow.json";
var nx = [
    { key: "project_records", kind: "works", role: "project" },
    { key: "capability_records", kind: "methods", role: "capability" },
    { key: "distillations", kind: "methods", role: "distillation" },
  ],
  ax = ["indexes", "router", "logs", ".workflow", ".obsidian"],
  lx = [
    "agent-router.md",
    "workflow.json",
    "candidate-pool.md",
    "rejection-log.md",
    "maintenance-log.md",
    "level1-router.md",
  ],
  Re = (t) =>
    String(t != null ? t : "")
      .replace(/\\/g, "/")
      .replace(/^\.\//, "")
      .replace(/\/{2,}/g, "/")
      .replace(/\/+$/, ""),
  ri = (t, e) => (Re(t) ? Re(t) + "/" + Re(e) : Re(e)),
  xu = !1,
  T1 = new Set(),
  M1 = new Set();
function O1(t) {
  ((xu = !0),
    !T1.has(t) &&
      (T1.add(t),
      console.warn(`[neural-dashboard] 冷库读取失败，疑似**宿主 API 问题**（不是"这个库没有冷库"）：读取 ${ri(t, ld)} 时宿主抛错。
  症状：冷库内容不会进图谱（coldStorage=0）。影响范围：仅冷库；普通笔记照常解析，不是崩溃、无需重启。
  下一步：确认 Obsidian 版本是否提供 DataAdapter.read(path)；过旧请升级后重试。`)));
}
function ix(t) {
  M1.has(t) ||
    (M1.add(t),
    console.warn(`[neural-dashboard] 指定的冷库根里没有 workflow.json：${ri(t, ld)} 不存在或为空 —— 即**这个库没有冷库**（不是宿主 API 故障）。
  症状：冷库内容不会进图谱（coldStorage=0）。影响范围：仅冷库；普通笔记照常解析，不是崩溃。
  下一步：检查该目录是否在库里、目录名是否被改过（改名可用设置项 coldRoot 指定实际根名）。`));
}
var ux = (t) => /\.md$/i.test(t),
  id = (t) => String(t != null ? t : "").toLowerCase(),
  ox = ax.map(id),
  cx = lx.map(id);
function ud(t) {
  let e = Re(t).split("/").filter(Boolean).map(id);
  if (!e.length) return !1;
  let n = e.pop() || "";
  return cx.includes(n) ? !0 : e.concat(n).some((a) => ox.includes(a));
}
function A1(t, e) {
  let n = String(t != null ? t : "").trim(),
    a = n.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})/);
  if (a) return `${a[1]}-${a[2]}-${a[3]} ${a[4]}:${a[5]}`;
  let l = n.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return l ? `${l[1]}-${l[2]}-${l[3]} 00:00` : e != null ? e : "";
}
function rx(t) {
  let e = String(t || "").match(/^\s{0,3}#\s+(.+?)\s*$/m);
  return e ? e[1].trim() : "";
}
function sx(t, e) {
  let n;
  try {
    n = JSON.parse(t);
  } catch (i) {
    return [];
  }
  let a = n && typeof n == "object" ? n.paths : null;
  if (!a || typeof a != "object") return [];
  let l = [];
  for (let { key: i, kind: u, role: o } of nx) {
    if (typeof a[i] != "string") continue;
    let c = Re(a[i]);
    !c ||
      c.includes("..") ||
      /(^|\/)\.md$/.test(c) ||
      ud(c) ||
      l.push({ root: e, dirPath: c, kind: u, role: o, fromWorkflow: i });
  }
  return l;
}
function od(t, e) {
  let n = Re(e);
  if (!ux(n) || ud(n)) return null;
  for (let a of t || []) {
    let l = ri(a.root, a.dirPath);
    if (n === l || n.startsWith(l + "/")) return a;
  }
  return null;
}
function cd(t, e, n, a = {}) {
  var y, x, v, S, E, _, D, R, F, Q, ee, Ft, Ue;
  let { parse: l, pick: i, tagsOf: u, clean: o } = n,
    c = "";
  try {
    c = String((y = a.text) != null ? y : "");
  } catch (C) {
    c = "";
  }
  let r = {},
    s = c;
  try {
    let C = l(c) || {};
    ((r = C.fm || {}), (s = typeof C.body == "string" ? C.body : c));
  } catch (C) {
    ((r = {}), (s = c));
  }
  let f = String(
      (S = (v = (x = t.basename) != null ? x : t.name) != null ? v : t.path) !=
        null
        ? S
        : "",
    ).replace(/\.md$/i, ""),
    g = "";
  try {
    g = String(
      (_ = (E = r.id) != null ? E : i(r, ["id", "record_id", "name"])) != null
        ? _
        : "",
    ).trim();
  } catch (C) {
    g = "";
  }
  let b = g || rx(s) || f;
  b || (b = "未命名冷库记录");
  let w = [];
  try {
    w = u(r, s) || [];
  } catch (C) {
    w = [];
  }
  let M = [];
  try {
    let C = String((D = i(r, ["grade"])) != null ? D : "").trim(),
      q = String((R = i(r, ["status"])) != null ? R : "").trim(),
      K = String(
        (F = i(r, ["trigger_level", "trigger"])) != null ? F : "",
      ).trim();
    (C && M.push("grade:" + C.toLowerCase()),
      q && M.push("status:" + q.toLowerCase()),
      K && M.push("trigger:" + K.toLowerCase()));
  } catch (C) {}
  (M.push(e.role === "project" ? "冷库项目" : "冷库笔记"),
    (w = [...new Set([...w, ...M])].slice(0, 12)));
  let p = "";
  try {
    p = A1(i(r, ["updated_at", "updatedAt", "date"]));
  } catch (C) {
    p = "";
  }
  if (!p) {
    let C = (Q = t.stat) == null ? void 0 : Q.mtime;
    p = C ? A1(new Date(C).toISOString()) : "";
  }
  let d = "";
  try {
    d = String((ee = i(r, ["canonical_url", "url"])) != null ? ee : "").trim();
  } catch (C) {
    d = "";
  }
  let m = [];
  (d && m.push(`> 来源 / canonical_url: ${d}`),
    m.push(`> 冷库 / capability-vault: ${e.role} · ${ri(e.root, e.dirPath)}`));
  let h =
    m.join(`
`) +
    `

` +
    s;
  return {
    kind: e.kind,
    root: Re(ri(e.root, e.dirPath)).split("/").length,
    sub: Re(e.dirPath).split("/").filter(Boolean).pop() || "冷库",
    path: Re(t.path),
    fm: r,
    body: o ? o(h) : h.slice(0, 6e3),
    title: b,
    tags: w,
    date: p,
    mtime: (Ue = (Ft = t.stat) == null ? void 0 : Ft.mtime) != null ? Ue : null,
    cold: {
      root: e.root,
      dirPath: e.dirPath,
      role: e.role,
      fromWorkflow: e.fromWorkflow,
    },
  };
}
async function Tc(t, e = {}) {
  var b, w, M, p, d;
  if (e.coldEnabled === !1) return [];
  if (!t || typeof t.getMarkdownFiles != "function") return [];
  let n = typeof ((b = t.adapter) == null ? void 0 : b.read) == "function",
    a =
      typeof t.cachedRead == "function" &&
      typeof t.getAbstractFileByPath == "function",
    l =
      /\b(enoent|enotdir)\b|no such file|does not exist|file not found|path not found/i;
  function i(m) {
    var x, v, S, E;
    let h = String(
      (x = m == null ? void 0 : m.code) != null ? x : "",
    ).toUpperCase();
    if (h === "ENOENT" || h === "ENOTDIR") return !0;
    let y = String((v = m == null ? void 0 : m.name) != null ? v : "");
    return y === "NotFoundError" || y === "NotFound"
      ? !0
      : l.test(
          String(
            (E = (S = m == null ? void 0 : m.message) != null ? S : m) != null
              ? E
              : "",
          ),
        );
  }
  async function u(m) {
    var h, y, x, v;
    if (n)
      try {
        let S = await t.adapter.read(m),
          E =
            typeof S == "string"
              ? S
              : S && typeof S.value == "string"
                ? S.value
                : null;
        return E != null ? { ok: !0, text: E } : { ok: !1, reason: "empty" };
      } catch (S) {
        return i(S)
          ? { ok: !1, reason: "missing" }
          : {
              ok: !1,
              reason: "error",
              detail: String(
                (y = (h = S == null ? void 0 : S.message) != null ? h : S) !=
                  null
                  ? y
                  : "",
              ).slice(0, 160),
            };
      }
    if (a)
      try {
        let S = t.getAbstractFileByPath(m);
        if (!S) return { ok: !1, reason: "missing" };
        let E = await t.cachedRead(S);
        return typeof E == "string" && E !== ""
          ? { ok: !0, text: E }
          : { ok: !1, reason: "empty" };
      } catch (S) {
        return i(S)
          ? { ok: !1, reason: "missing" }
          : {
              ok: !1,
              reason: "error",
              detail: String(
                (v = (x = S == null ? void 0 : S.message) != null ? x : S) !=
                  null
                  ? v
                  : "",
              ).slice(0, 160),
            };
      }
    return { ok: !1, reason: "missing" };
  }
  if (!n && !a)
    return (
      xu ||
        ((xu = !0),
        console.warn(`[neural-dashboard] 冷库未启用，疑似**宿主 API 问题**（不是"这个库没有冷库"）：宿主既无 adapter.read 也无 vault.cachedRead，无法读取 workflow.json（按设计不猜目录名，故跳过冷库）。
  症状：冷库内容不会进图谱（coldStorage=0）。影响范围：仅冷库；普通笔记照常解析，不是崩溃、无需重启。
  下一步：确认 Obsidian 版本是否提供 DataAdapter.read(path)。`)),
      []
    );
  let o = Re((w = e.coldRoot) != null ? w : "") || ex,
    c = [];
  async function r(m) {
    if (!m || ud(m + "/x.md")) return { hit: !1, hostError: !1 };
    let h = await u(ri(m, ld));
    return h.ok
      ? { hit: !0, parsed: sx(String(h.text), m) }
      : { hit: !1, hostError: h.reason === "error", reason: h.reason };
  }
  let s = await r(o);
  if (
    (s.hostError ? O1(o) : s.hit ? c.push(...s.parsed) : ix(o),
    !c.length && !s.hostError)
  ) {
    let m = new Set();
    try {
      if (typeof ((M = t.adapter) == null ? void 0 : M.list) == "function") {
        let h = await t.adapter.list("");
        for (let y of (p = h == null ? void 0 : h.folders) != null ? p : []) {
          let x = Re(y);
          x && !x.includes("/") && x !== o && m.add(x);
        }
      }
    } catch (h) {}
    try {
      for (let h of (d = t.getMarkdownFiles()) != null ? d : []) {
        let y = Re(h == null ? void 0 : h.path)
          .split("/")
          .filter(Boolean);
        y.length > 1 && !y[0].startsWith(".") && y[0] !== o && m.add(y[0]);
      }
    } catch (h) {}
    for (let h of m) {
      let y = await r(h);
      if (y.hit) {
        c.push(...y.parsed);
        continue;
      }
      if (y.hostError) {
        O1(h);
        break;
      }
    }
  }
  let f = new Set(),
    g = c.filter((m) => {
      let h = m.root + "|" + m.dirPath;
      return f.has(h) ? !1 : (f.add(h), !0);
    });
  return (g.length && xu && (xu = !1), g);
}
var dx = [
    [
      "works",
      /(作品|works?$|published|已发布|资源|resources?$|链接|书签|bookmarks?$|projects?$|项目)/i,
    ],
    [
      "drafts",
      /(草稿|创作台|drafts?$|正在写|写作中|记忆库|待读|inbox|memories?|记忆)/i,
    ],
    ["ideas", /(选题|ideas?$|灵感|sparks?$|点子|indexes?|router|索引)/i],
    [
      "methods",
      /(方法|methods?$|模板|templates?$|流程|workflow|知识|卡片|notes?$|wiki)/i,
    ],
  ],
  px = [".git", ".workflow", ".obsidian", ".trash", "node_modules", "candidate-pool.md", "rejection-log.md", "agent-router.md", "maintenance-log.md"],
  mx = [".ghcr-source"];
function fd(t) {
  return String(t || "")
    .split("/")
    .filter(Boolean)
    .some((n) => {
      let a = n.toLowerCase();
      return px.includes(a) || mx.includes(a);
    });
}
function C1(t) {
  var l;
  let e = new Map(),
    n =
      typeof ((l = t == null ? void 0 : t.adapter) == null
        ? void 0
        : l.exists) == "function",
    a = (i) => {
      var u;
      return (u = String(i || "")
        .split("/")
        .filter(Boolean)[0]) != null
        ? u
        : "";
    };
  return {
    active: n,
    async isRepoRoot(i) {
      let u = a(i);
      if (!n || !u) return !1;
      if (e.has(u)) return e.get(u);
      let o = !1;
      try {
        o = await t.adapter.exists(`${u}/.git`);
      } catch (c) {
        o = !1;
      }
      return (e.set(u, o), o);
    },
    isRepoRootSync(i) {
      let u = a(i);
      return u ? e.get(u) === !0 : !1;
    },
    markRepoRoot(i, u = !0) {
      i && e.set(String(i).split("/")[0], !!u);
    },
    forget(i) {
      let u = a(i);
      u && e.delete(u);
    },
  };
}
function gx(t) {
  let e = String(t || "")
    .split("/")
    .filter(Boolean)
    .slice(0, -1);
  for (let n = 0; n < e.length; n++)
    for (let [a, l] of dx) if (l.test(e[n])) return { kind: a, root: n + 1 };
  return null;
}
function k1(t, e = null) {
  return fd(t) || (e != null && e.isRepoRootSync(t)) ? null : gx(t);
}
function D1(t) {
  let e = String(t || "").match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/),
    n = {};
  if (e) {
    let a = null;
    for (let l of e[1].split(/\r?\n/)) {
      let i = l.match(/^\s*-\s+(.*)$/);
      if (i && a) {
        (Array.isArray(n[a]) || (n[a] = []), n[a].push(rd(i[1])));
        continue;
      }
      let u = l.match(/^([^:#][^:]*):\s*(.*)$/);
      if (!u) continue;
      a = u[1].trim();
      let o = u[2].trim();
      n[a] =
        o.startsWith("[") && o.endsWith("]")
          ? o.slice(1, -1).split(",").map(rd).filter(Boolean)
          : o === ""
            ? ""
            : rd(o);
    }
  }
  return { fm: n, body: e ? t.slice(e[0].length) : String(t || "") };
}
var rd = (t) =>
    String(t)
      .trim()
      .replace(/^['"]|['"]$/g, ""),
  jt = (t, e) => {
    for (let n of e)
      for (let a of Object.keys(t))
        if (a.toLowerCase() === n.toLowerCase() && t[a] !== "") return t[a];
  };
function $n(t) {
  if (t == null || t === "") return null;
  let n = String(t)
    .replace(/[,，\s%秒s]/gi, "")
    .match(/^(-?\d+(?:\.\d+)?)(万|w|k|千)?$/i);
  if (!n) return null;
  let a = { 万: 1e4, w: 1e4, W: 1e4, k: 1e3, K: 1e3, 千: 1e3 }[n[2]] || 1;
  return Math.round(Number(n[1]) * a * 10) / 10;
}
var si = (t) => String(t).padStart(2, "0");
function hx(t, e) {
  var i, u;
  let n = t
      ? String(t)
          .trim()
          .replace(/\//g, "-")
          .replace(/^(\d{4}-\d{1,2}-\d{1,2})$/, "$1 00:00")
      : "",
    a = n ? new Date(n) : null,
    l =
      a && !isNaN(a)
        ? a
        : new Date(
            (u =
              (i = e == null ? void 0 : e.stat) == null ? void 0 : i.mtime) !=
              null
              ? u
              : Date.now(),
          );
  return `${l.getFullYear()}-${si(l.getMonth() + 1)}-${si(l.getDate())} ${si(l.getHours())}:${si(l.getMinutes())}`;
}
function _1(t, e) {
  let n = jt(t, ["tags", "tag", "标签", "话题"]),
    a = Array.isArray(n) ? n : n ? String(n).split(/[,，\s]+/) : [];
  for (let l of e.matchAll(/(?:^|\s)#([^\s#，。,.!?！？、；;:：()（）[\]]+)/g))
    a.push(l[1]);
  return [
    ...new Set(
      a
        .map((l) => l.replace(/^#/, "").trim())
        .filter((l) => l && !/^\d+$/.test(l)),
    ),
  ].slice(0, 12);
}
var Su = (t) => String(t).replace(/\r/g, "").trim().slice(0, 6e3),
  R1 = { parse: D1, pick: jt, tagsOf: _1, clean: Su };
function U1(t, e, n, a) {
  var r, s, f, g;
  let { fm: l, body: i } = D1(a),
    u = String(
      (s = (r = t.basename) != null ? r : t.name) != null ? s : t.path,
    ).replace(/\.md$/i, ""),
    o = String(jt(l, ["title", "标题", "name"]) || u).trim(),
    c = _1(l, i);
  return {
    kind: e,
    root: n,
    path: t.path,
    fm: l,
    body: i,
    title: o,
    tags: c,
    mtime: (g = (f = t.stat) == null ? void 0 : f.mtime) != null ? g : null,
  };
}
var H1 = (t) =>
  String(t || "")
    .split("/")
    .some((e) => e.startsWith("."));
function bx(t, e = {}) {
  let n = { works: [], methods: [], ideas: [], drafts: [] };
  for (let v of t.values()) n[v.kind].push(v);
  for (let v of Object.keys(n))
    n[v].sort((S, E) => S.path.localeCompare(E.path, "zh-Hans-CN"));
  let a = e.maxWorks || 30,
    l = e.maxNotes || 40,
    i = Number.isFinite(e.maxColdStorage) ? e.maxColdStorage : 60,
    u = [...n.works, ...n.methods, ...n.ideas, ...n.drafts]
      .filter((v) => v.cold)
      .map((v) => v.path)
      .sort((v, S) => v.localeCompare(S, "zh-Hans-CN")),
    o = new Set(u.slice(0, Math.max(0, i))),
    c = (v) => !v.cold || o.has(v.path);
  for (let v of Object.keys(n)) n[v] = n[v].filter(c);
  let r = n.works
      .map((v) => {
        var _, D, R, F, Q;
        let S = /视频|video/i.test(
            String(jt(v.fm, ["media", "类型", "type", "形式"]) || ""),
          )
            ? "video"
            : "images",
          E = {
            title: v.title,
            date:
              v.date ||
              hx(
                jt(v.fm, [
                  "date",
                  "发布时间",
                  "发布日期",
                  "published",
                  "publishedAt",
                  "created",
                  "创建时间",
                ]),
                v,
              ),
            views:
              (_ = $n(jt(v.fm, ["views", "观看", "浏览", "阅读", "播放"]))) !=
              null
                ? _
                : 0,
            likes: (D = $n(jt(v.fm, ["likes", "点赞"]))) != null ? D : 0,
            comments: (R = $n(jt(v.fm, ["comments", "评论"]))) != null ? R : 0,
            saves: (F = $n(jt(v.fm, ["saves", "收藏"]))) != null ? F : 0,
            follows: $n(jt(v.fm, ["follows", "涨粉"])),
            shares:
              (Q = $n(jt(v.fm, ["shares", "分享", "转发"]))) != null ? Q : 0,
            impressions: $n(jt(v.fm, ["impressions", "曝光"])),
            ctr: $n(jt(v.fm, ["ctr", "点击率", "封面点击率"])),
            duration: $n(
              jt(v.fm, ["duration", "平均观看", "平均观看时长", "时长"]),
            ),
          };
        return {
          _cold: !!v.cold,
          post: E,
          content: { title: v.title, body: Su(v.body), tags: v.tags, media: S },
        };
      })
      .sort((v, S) => S.post.date.localeCompare(v.post.date))
      .slice(0, a),
    s = r.map((v, S) => ({ ...v, post: { id: "w" + (S + 1), ...v.post } })),
    f = n.methods.slice(0, l),
    g = f.map((v, S) => {
      let E = v.path.split("/"),
        _ =
          v.sub ||
          (E[v.root] && v.root < E.length - 1
            ? E[v.root]
            : E[v.root - 1] || "笔记");
      return {
        id: "n" + (S + 1),
        title: v.title,
        path: `05-知识库 methods/${_}/${E[E.length - 1]}`,
        body: Su(v.body),
      };
    }),
    b = n.ideas.map((v, S) => {
      let E = String(jt(v.fm, ["status", "状态"]) || "待整理"),
        _ = String(jt(v.fm, ["priority", "优先级"]));
      return {
        id: S + 1,
        title: v.title,
        platform: String(jt(v.fm, ["platform", "平台"]) || "随手记"),
        priority: ["高", "中", "低"].includes(_) ? _ : "中",
        status: ["待整理", "进行中", "已归档"].includes(E) ? E : "待整理",
        note: String(
          jt(v.fm, ["note", "备注", "description", "简介"]) ||
            Su(v.body)
              .replace(/^#.*\n/, "")
              .trim()
              .slice(0, 120),
        ),
      };
    }),
    w = n.drafts.map((v, S) => {
      let E = String(jt(v.fm, ["source", "来源选题", "选题"]) || ""),
        _ = b.find((D) => D.title === E);
      return {
        id: "draft-" + (S + 1),
        title: String(jt(v.fm, ["title", "标题", "name", "why"]) || v.title),
        body: Su(v.body),
        source: _ ? _.id : null,
      };
    }),
    M = new Map();
  for (let v of [
    ...s.flatMap((S) => S.content.tags),
    ...f.flatMap((S) => S.tags),
  ])
    M.set(v, (M.get(v) || 0) + 1);
  let p = [...M]
      .filter(([, v]) => v >= 2)
      .sort((v, S) => S[1] - v[1])
      .slice(0, 20)
      .map(([v]) => [v, [v.toLowerCase()]]),
    d = s.map((v) => v.post.date.slice(0, 10)).sort(),
    m = new Date(),
    h = {
      account: e.account || "我的账号",
      followers: Number.isFinite(e.followers) ? e.followers : null,
      capturedAt: `${m.getFullYear()}-${si(m.getMonth() + 1)}-${si(m.getDate())}`,
      publishedFrom: d[0] || "",
      publishedTo: d[d.length - 1] || "",
      source: "读取自当前 vault 笔记",
    },
    y = { works: s.length, notes: g.length, ideas: b.length, drafts: w.length },
    x = r.filter((v) => v._cold).length + f.filter((v) => v.cold).length;
  return !y.works && !y.notes && !y.ideas && !y.drafts
    ? {
        ...Uf,
        usingSample: !0,
        counts: {
          works: dc.length,
          notes: pc.length,
          ideas: mc.length,
          drafts: gc.length,
        },
        coldStorage: 0,
      }
    : {
        snapshot: h,
        posts: s.map((v) => v.post),
        postContent: s.map((v) => v.content),
        notes: g,
        seedIdeas: b,
        seedDrafts: w,
        concepts: p,
        usingSample: !1,
        counts: y,
        coldStorage: x,
      };
}
async function sd(t, e, n = [], a = {}, l = null) {
  let i = l != null ? l : C1(t);
  e.clear();
  let u = typeof t.getMarkdownFiles == "function" ? t.getMarkdownFiles() : [];
  for (let o of u) {
    if (!o || typeof o.path != "string" || H1(o.path) || fd(o.path)) continue;
    let c = null;
    try {
      c = od(n, o.path);
    } catch (f) {
      c = null;
    }
    if (!c && (await i.isRepoRoot(o.path))) continue;
    let r = c ? { kind: c.kind, root: c.root } : k1(o.path, i);
    if (!r) continue;
    let s;
    try {
      s = await t.cachedRead(o);
    } catch (f) {
      continue;
    }
    e.set(o.path, c ? cd(o, c, R1, { text: s }) : U1(o, r.kind, r.root, s));
  }
  return e;
}
function j1(t, e = {}) {
  let { onChange: n, debounceMs: a = 200, register: l, ...i } = e,
    u = new Map(),
    o = [],
    c = C1(t),
    r = null,
    s = !1,
    f = () => {
      let p = bx(u, i);
      return (n && n(p), p);
    },
    g = () => {
      s ||
        (r && clearTimeout(r),
        (r = setTimeout(() => {
          ((r = null), s || f());
        }, a)));
    },
    b = async (p) => {
      if (!p || typeof p.path != "string") return;
      if (H1(p.path) || fd(p.path)) {
        u.delete(p.path);
        return;
      }
      if (/workflow\.json$/i.test(p.path)) {
        ((o = await Tc(t, i).catch(() => o)), await sd(t, u, o, i, c));
        return;
      }
      let d = null;
      try {
        d = od(o, p.path);
      } catch (y) {
        d = null;
      }
      if (!d && (await c.isRepoRoot(p.path))) {
        u.delete(p.path);
        return;
      }
      let m = d ? { kind: d.kind, root: d.root } : k1(p.path, c);
      if (!m) {
        u.delete(p.path);
        return;
      }
      let h;
      try {
        h = await t.cachedRead(p);
      } catch (y) {
        u.delete(p.path);
        return;
      }
      u.set(p.path, d ? cd(p, d, R1, { text: h }) : U1(p, m.kind, m.root, h));
    },
    w = [
      ["modify", (p) => b(p).then(g, g)],
      ["create", (p) => b(p).then(g, g)],
      [
        "delete",
        (p) => {
          !p ||
            typeof p.path != "string" ||
            (/workflow\.json$/i.test(p.path) && (o = []),
            u.delete(p.path),
            c.forget(p.path),
            g());
        },
      ],
    ],
    M = [];
  for (let [p, d] of w) {
    if (typeof t.on != "function") continue;
    let m = t.on(p, d);
    (m && M.push(m), l && m && l(m));
  }
  return {
    ready: Tc(t, i)
      .catch(() => [])
      .then((p) => ((o = p), sd(t, u, o, i, c)))
      .then(() => f()),
    async refresh() {
      return (
        (o = await Tc(t, i).catch(() => o)),
        await sd(t, u, o, i, c),
        f()
      );
    },
    stop() {
      var p;
      ((s = !0), r && (clearTimeout(r), (r = null)));
      for (let [d, m] of w)
        try {
          (p = t.off) == null || p.call(t, d, m);
        } catch (h) {}
      (u.clear(), (o = []));
    },
  };
}
function B1(t, e = {}) {
  let { debounceMs: n = 400, onError: a } = e;
  if (!t || typeof t.loadData != "function" || typeof t.saveData != "function")
    throw new TypeError(
      "createPluginStorage 需要一个提供 loadData/saveData 的 Plugin 实例",
    );
  let l = {},
    i = !1,
    u = !1,
    o = null,
    c = null,
    r = (b, w) => {
      a && a(b, w);
    };
  async function s() {
    if (c)
      try {
        await c;
      } catch (w) {}
    if (!u) return;
    let b = { version: 1, kv: l };
    ((u = !1),
      (c = t.saveData(b).then(
        () => {
          c = null;
        },
        (w) => {
          ((c = null), (u = !0), r(w, "saveData"));
        },
      )),
      await c);
  }
  function f() {
    (o && clearTimeout(o),
      (o = setTimeout(() => {
        ((o = null), s().catch((b) => r(b, "saveData")));
      }, n)));
  }
  return {
    getItem(b) {
      return Object.prototype.hasOwnProperty.call(l, b) ? l[b] : null;
    },
    setItem(b, w) {
      ((l[b] = String(w)), (u = !0), i && f());
    },
    ready: t.loadData().then(
      (b) => {
        if (b && typeof b == "object" && b.kv && typeof b.kv == "object")
          for (let [w, M] of Object.entries(b.kv))
            typeof M == "string" && (l[w] = M);
        if (((i = !0), u)) return s();
      },
      (b) => {
        ((i = !0), r(b, "loadData"));
      },
    ),
    flush() {
      return (o && (clearTimeout(o), (o = null)), s());
    },
    remote() {
      return t.loadData();
    },
  };
}
var Mc = class extends q1.Plugin {
  async onload() {
    ((this.store = B1(this, {
      onError: (e, n) => console.error(`[neural-dashboard] ${n} 失败：`, e),
    })),
      (this.dataListeners = new Set()),
      (this.vaultService = null),
      (this.currentData = null),
      (this._dataReady = null),
      (this._assetWarned = new Set()),
      (this.assetUrl = (e) => {
        var o, c, r, s, f, g, b;
        let n = String(e != null ? e : "")
            .replace(/^[/\\]+/, "")
            .replace(/^media\//, "assets/"),
          a = (o = this.app) == null ? void 0 : o.vault,
          l = String(
            (r = (c = this.manifest) == null ? void 0 : c.dir) != null ? r : "",
          )
            .replace(/[\\/]+$/, "")
            .replace(/\\/g, "/"),
          i = l ? `${l}/${n}` : n,
          u = (w) => (
            this._assetWarned.has(n) ||
              (this._assetWarned.add(n),
              console.warn(
                `[neural-dashboard] 素材 URL 解析失败（光球/水母将退化为静态海报）：${w} · rel=${n} · abs=${i}`,
              )),
            ""
          );
        if (!a || !l) return u("缺 app.vault 或 manifest.dir");
        try {
          let w = [i],
            M = "/.obsidian/plugins/";
          l.includes(M) && w.push(l.slice(l.indexOf(M) + 1) + "/" + n);
          for (let p of w) {
            let d =
              (s = a.getAbstractFileByPath) == null ? void 0 : s.call(a, p);
            if (d && typeof a.getResourcePath == "function") {
              let m = a.getResourcePath(d);
              if (m) return m;
            }
          }
        } catch (w) {}
        try {
          let w =
            (g = (f = a.adapter) == null ? void 0 : f.getResourcePath) == null
              ? void 0
              : g.call(f, i);
          if (w) return w;
        } catch (w) {
          return u(
            `vault.adapter.getResourcePath 抛错：${(b = w == null ? void 0 : w.message) != null ? b : w}`,
          );
        }
        return u("vault 与 adapter 两条受支持 API 均未产出 URL");
      }),
      w1(this),
      z1(this));
  }
  ensureData() {
    return (
      this._dataReady ||
        (this._dataReady = (async () => (
          await this.store.ready,
          (this.vaultService = j1(this.app.vault, {
            onChange: (e) => {
              this.currentData = e;
              for (let n of [...this.dataListeners])
                try {
                  n(e);
                } catch (a) {
                  console.error("[neural-dashboard] 数据回调失败：", a);
                }
            },
          })),
          (this.currentData = await this.vaultService.ready),
          this.currentData
        ))()),
      this._dataReady
    );
  }
  subscribeData(e) {
    return (this.dataListeners.add(e), () => this.dataListeners.delete(e));
  }
  mountContext() {
    return {
      storage: this.store,
      assetUrl: this.assetUrl,
      vaultData: this.currentData,
      onDataChange: (e) => this.subscribeData(e),
    };
  }
  async onunload() {
    try {
      E1();
    } catch (e) {
      console.error("[neural-dashboard] 代码块卸载异常：", e);
    }
    (this.dataListeners.clear(),
      this.vaultService &&
        (this.vaultService.stop(), (this.vaultService = null)));
    try {
      await this.store.flush();
    } catch (e) {}
  }
};
