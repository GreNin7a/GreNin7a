_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[24], {
		"1TsT": function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return s
			}));
			var i = !("undefined" === typeof window || !window.document || !window.document.createElement);
			var o = void 0;

			function l() {
				return void 0 === o && (o = function () {
					if (!i) return !1;
					if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) return !1;
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
								get: function () {
									e = !0
								}
							}),
							n = function () {};
						window.addEventListener("testPassiveEventSupport", n, t), window.removeEventListener("testPassiveEventSupport", n, t)
					} catch (o) {}
					return e
				}()), o
			}

			function r(e) {
				e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice())
			}

			function a(e) {
				this.target = e, this.events = {}
			}
			a.prototype.getEventHandlers = function (e, t) {
				var n, i = String(e) + " " + String((n = t) ? !0 === n ? 100 : (n.capture << 0) + (n.passive << 1) + (n.once << 2) : 0);
				return this.events[i] || (this.events[i] = {
					handlers: [],
					handleEvent: void 0
				}, this.events[i].nextHandlers = this.events[i].handlers), this.events[i]
			}, a.prototype.handleEvent = function (e, t, n) {
				var i = this.getEventHandlers(e, t);
				i.handlers = i.nextHandlers, i.handlers.forEach((function (e) {
					e && e(n)
				}))
			}, a.prototype.add = function (e, t, n) {
				var i = this,
					o = this.getEventHandlers(e, n);
				r(o), 0 === o.nextHandlers.length && (o.handleEvent = this.handleEvent.bind(this, e, n), this.target.addEventListener(e, o.handleEvent, n)), o.nextHandlers.push(t);
				var l = !0;
				return function () {
					if (l) {
						l = !1, r(o);
						var a = o.nextHandlers.indexOf(t);
						o.nextHandlers.splice(a, 1), 0 === o.nextHandlers.length && (i.target && i.target.removeEventListener(e, o.handleEvent, n), o.handleEvent = void 0)
					}
				}
			};

			function s(e, t, n, i) {
				e.__consolidated_events_handlers__ || (e.__consolidated_events_handlers__ = new a(e));
				var o = function (e) {
					if (e) return l() ? e : !!e.capture
				}(i);
				return e.__consolidated_events_handlers__.add(t, n, o)
			}
		},
		"37ip": function (e, t, n) {
			e.exports = {
				loaderPage: "Loader_loaderPage__be8MM",
				loaderWrapper: "Loader_loaderWrapper__3ps-q",
				loader: "Loader_loader__-KAE_",
				spin: "Loader_spin__1HSfN"
			}
		},
		YuTi: function (e, t) {
			e.exports = function (e) {
				return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function () {
						return e.l
					}
				}), Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function () {
						return e.i
					}
				}), e.webpackPolyfill = 1), e
			}
		},
		ZiGb: function (e, t, n) {
			"use strict";
			n.r(t), n.d(t, "__N_SSG", (function () {
				return L
			}));
			var i = n("ODXe"),
				o = n("8Kt/"),
				l = n.n(o),
				r = n("LvDl"),
				a = n("q1tI"),
				s = n.n(a),
				c = n("TxL0"),
				d = n("5Yp1"),
				u = n("jobX"),
				v = n("nOHt"),
				p = n("tlJE"),
				f = n.n(p),
				h = n("Bl+U"),
				g = n("ayiN"),
				b = n("uuth"),
				w = n("YRVN"),
				y = s.a.createElement,
				m = function (e) {
					var t = e.buildings,
						n = e.onScrollBuilding,
						i = e.mouseOnUnit,
						o = e.city,
						l = e.lang,
						r = [];
					return t.map((function (e, a) {
						var s, c, d, u, v;
						a === (null === t || void 0 === t ? void 0 : t.length) - 5 && r.push(y(b.a, {
							onEnter: n,
							key: "waypoint"
						})), r.push(y(w.a, {
							key: e.Slug,
							slug: e.Slug,
							title: e.FullTitle,
							address: e.Address,
							areaName: null === e || void 0 === e || null === (s = e.Area) || void 0 === s ? void 0 : s.Name,
							areaSlug: null === e || void 0 === e ? void 0 : e.AreaSlug,
							citySlug: null === e || void 0 === e ? void 0 : e.CitySlug,
							pictures: (null === e || void 0 === e || null === (c = e.Pictures) || void 0 === c ? void 0 : c.Building) || [],
							capacity: null !== (d = e.Capacity) && void 0 !== d ? d : 0,
							vacant: null !== (u = e.Vacant) && void 0 !== u ? u : 0,
							priceHigher: null === e || void 0 === e ? void 0 : e.PriceHigher,
							priceLower: null === e || void 0 === e ? void 0 : e.PriceLower,
							index: a,
							mouseOnUnit: i,
							usesAvailability: o.UsesAvailability,
							lang: l,
							currency: null === o || void 0 === o || null === (v = o.Country) || void 0 === v ? void 0 : v.Currency,
							pricePeriod: null === e || void 0 === e ? void 0 : e.PricePeriod,
							petFriendly: null === e || void 0 === e ? void 0 : e.PetFriendly,
							LinkOverride: null === e || void 0 === e ? void 0 : e.LinkOverride
						}))
					})), r
				},
				_ = n("2v50"),
				O = s.a.createElement,
				j = function (e) {
					var t, n, i, o, l, r, a, s, c = e.unitListStaticData,
						d = e.clearFilter;
					return O("div", {
						className: "".concat(f.a.error, " col-12 text-center")
					}, O("img", {
						"data-src": Object(_.a)({
							name: "sad-face.svg",
							version: "v1592396802",
							config: "c_scale,w_180,h_165"
						}),
						className: "lazyload"
					}), O("h4", null, null === c || void 0 === c || null === (t = c.data) || void 0 === t || null === (n = t.snippets) || void 0 === n ? void 0 : n.units_listing_oh_no), O("p", {
						dangerouslySetInnerHTML: {
							__html: null === c || void 0 === c || null === (i = c.data) || void 0 === i || null === (o = i.snippets) || void 0 === o ? void 0 : o.units_listing_no_matches_your_search
						}
					}), (null === c || void 0 === c || null === (l = c.data) || void 0 === l || null === (r = l.snippets) || void 0 === r ? void 0 : r.units_listing_try_again_filters) && O("p", null, O("a", {
						onClick: function (e) {
							e.preventDefault(), d({
								payload: !0
							})
						}
					}, null === c || void 0 === c || null === (a = c.data) || void 0 === a || null === (s = a.snippets) || void 0 === s ? void 0 : s.units_listing_try_again_filters)))
				},
				N = s.a.createElement;

			function E(e) {
				var t, n, o, l, r, s, d, v = e.buildings,
					p = e.page,
					b = e.numResults,
					w = e.loading,
					y = e.city,
					_ = e.lang,
					O = e.pageInit,
					E = Object(a.useState)(),
					T = E[0],
					L = E[1],
					S = Object(a.useState)([]),
					P = S[0],
					x = S[1],
					k = Object(u.a)(c.w),
					B = Object(i.a)(k, 1)[0].data,
					H = Object(u.a)(c.q),
					C = Object(i.a)(H, 3)[2],
					R = Object(u.a)(c.b),
					A = Object(i.a)(R, 1)[0],
					U = null === A || void 0 === A ? void 0 : A.data,
					D = Object(u.a)(c.eb),
					W = Object(i.a)(D, 1)[0],
					F = null === W || void 0 === W ? void 0 : W.data,
					I = Object(u.a)(c.d),
					z = Object(i.a)(I, 1)[0],
					M = null === z || void 0 === z ? void 0 : z.data,
					q = Object(u.a)(c.cb),
					G = Object(i.a)(q, 1)[0],
					J = null === G || void 0 === G ? void 0 : G.data,
					V = Object(u.a)(c.W),
					X = Object(i.a)(V, 1)[0],
					Y = Object(u.a)(c.e),
					Z = Object(i.a)(Y, 2)[1],
					K = null === X || void 0 === X || null === (t = X.data) || void 0 === t || null === (n = t.snippets) || void 0 === n || null === (o = n.units_listing_homes_in) || void 0 === o ? void 0 : o.replace("{city}", (null === y || void 0 === y ? void 0 : y.Name) || "");
				return N("div", {
					className: "container-fluid"
				}, w || !O ? N("div", {
					className: "row"
				}, N("div", {
					className: "col-12 col-lg-8"
				}, N("div", {
					className: "row"
				}, N("div", {
					className: "col-12"
				}, N("h3", {
					className: f.a.heading
				}, K))), N("div", {
					className: "row p-3 mt-n5"
				}, N(g.a, {
					className: "text-center h-auto mt-5 pt-0 pt-md-5 pb-5 pb-md-0 col-12",
					text: " ",
					containerClassName: "w-100 ".concat(f.a.loading)
				}))), N("div", {
					className: "d-none d-lg-block col-4 pr-0"
				}, N(h.a, {
					buildings: v,
					lat: (null === (s = v[0]) || void 0 === s ? void 0 : s.LAT) || (null === y || void 0 === y ? void 0 : y.Lat) || 1.29027,
					lng: (null === (d = v[0]) || void 0 === d ? void 0 : d.LNG) || (null === y || void 0 === y ? void 0 : y.Lng) || 103.851959,
					flyTo: P,
					highlight: T,
					markerClickable: !0,
					language: _,
					city: y
				}))) : N("div", {
					className: "row"
				}, N("div", {
					className: "col-12 col-lg-8"
				}, N("div", {
					className: "row"
				}, N("div", {
					className: "col-12"
				}, N("h3", {
					className: f.a.heading
				}, K), N("p", {
					className: f.a.numResults
				}, b || 0, " results"))), N("div", {
					className: "row p-3 mt-n5"
				}, 0 === v.length ? N(j, {
					unitListStaticData: X,
					clearFilter: Z
				}) : N(m, {
					onScrollBuilding: function (e) {
						if ("below" === e.previousPosition && 20 * p <= b) {
							var t, n = {
								city: null === B || void 0 === B || null === (t = B.current) || void 0 === t ? void 0 : t.Code,
								page: p + 1,
								area: (U || []).join("__"),
								roomType: (F || []).join("__"),
								availability: (M || []).join("__") || "rooms-available__waitlist",
								lang: _
							};
							void 0 !== (null === J || void 0 === J ? void 0 : J[0]) && (n.priceLower = J[0]), void 0 !== (null === J || void 0 === J ? void 0 : J[1]) && (n.priceHigher = J[1]), n.lang = _, null === C || void 0 === C || C.fetchNext({
								payload: n
							})
						}
					},
					mouseOnUnit: function (e, t) {
						var n, i;
						t ? (L(null === v || void 0 === v || null === (n = v[e]) || void 0 === n ? void 0 : n.Slug), x([null === v || void 0 === v || null === (i = v[e]) || void 0 === i ? void 0 : i.LAT, null === v || void 0 === v ? void 0 : v[e].LNG])) : x([])
					},
					city: y,
					lang: _,
					buildings: v
				}))), N("div", {
					className: "d-none d-lg-block col-4 pr-0"
				}, N(h.a, {
					buildings: v,
					lat: (null === (l = v[0]) || void 0 === l ? void 0 : l.LAT) || (null === y || void 0 === y ? void 0 : y.Lat) || 1.29027,
					lng: (null === (r = v[0]) || void 0 === r ? void 0 : r.LNG) || (null === y || void 0 === y ? void 0 : y.Lng) || 103.851959,
					flyTo: P,
					highlight: T,
					markerClickable: !0,
					language: _,
					city: y
				}))))
			}
			var T = s.a.createElement;
			var L = !0;
			t.default = function () {
				var e, t, n, o, s = Object(v.useRouter)(),
					p = s.query.lang,
					f = void 0 === p ? "en" : p,
					h = Object(u.a)(c.w),
					g = Object(i.a)(h, 1)[0].data;
				delete g.bySlug.sydney, g.inOrder = g.inOrder.filter((function (e) {
					return "Sydney" !== e.Name
				}));
				var b = null === g || void 0 === g ? void 0 : g.current;
				"Sydney" === (null === (e = b) || void 0 === e ? void 0 : e.Name) && (console.log("HMM"), window.history.pushState({}, "Singapore", "/en/singapore"), b = g.inOrder[0]);
				var w = Object(u.a)(c.b),
					y = Object(i.a)(w, 1)[0],
					m = null === y || void 0 === y ? void 0 : y.data,
					_ = Object(u.a)(c.d),
					O = Object(i.a)(_, 1)[0],
					j = null === O || void 0 === O ? void 0 : O.data,
					N = Object(u.a)(c.eb),
					L = Object(i.a)(N, 1)[0],
					S = null === L || void 0 === L ? void 0 : L.data,
					P = Object(u.a)(c.cb),
					x = Object(i.a)(P, 1)[0],
					k = null === x || void 0 === x ? void 0 : x.data,
					B = Object(u.a)(c.q),
					H = Object(i.a)(B, 2),
					C = H[0],
					R = H[1],
					A = null === C || void 0 === C ? void 0 : C.page,
					U = null === C || void 0 === C ? void 0 : C.numResults,
					D = Object(a.useState)(void 0),
					W = D[0],
					F = D[1],
					I = Object(a.useState)(!1),
					z = I[0],
					M = I[1];
				return Object(a.useEffect)((function () {
					M(!1)
				}), [s.query.citySlug]), Object(a.useEffect)((function () {
					Object(r.get)(C, "page") && Object(r.get)(C, "numResults") && M(!0)
				}), [C]), Object(a.useEffect)((function () {
					if (m || S || k || j) {
						var e, t, n = {
							city: null === (e = b) || void 0 === e || null === (t = e.Country) || void 0 === t ? void 0 : t.Id,
							page: 1,
							area: (m || []).join("__"),
							roomType: (S || []).join("__"),
							availability: (j || []).join("__") || "rooms-available__waitlist",
							lang: f
						};
						void 0 !== (null === k || void 0 === k ? void 0 : k[0]) && (n.priceLower = k[0]), void 0 !== (null === k || void 0 === k ? void 0 : k[1]) && (n.priceHigher = k[1]), W && JSON.stringify(W) === JSON.stringify(n) || (R({
							payload: n,
							initialData: []
						}), F(n))
					}
				}), [null === y || void 0 === y ? void 0 : y.data, null === L || void 0 === L ? void 0 : L.data, null === x || void 0 === x ? void 0 : x.data, null === O || void 0 === O ? void 0 : O.data, f]), T(d.a, {
					showFilterBar: !0,
					selectedCity: null === (t = b) || void 0 === t || null === (n = t.Country) || void 0 === n ? void 0 : n.Id
				}, T(l.a, null, T("title", null, "".concat("ja" === f ? "\u30cf\u30e0\u30ec\u30c3\u30c8" : "Hmlet | ").concat(null === (o = b) || void 0 === o ? void 0 : o.Name))), T("main", null, T(E, {
					buildings: Object(r.get)(C, "data", []),
					page: A,
					numResults: U,
					loading: null === C || void 0 === C ? void 0 : C.loading,
					city: b,
					lang: f,
					pageInit: z
				})))
			}
		},
		ayiN: function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return s
			}));
			var i = n("q1tI"),
				o = n.n(i),
				l = n("37ip"),
				r = n.n(l),
				a = o.a.createElement;

			function s(e) {
				var t = e.text,
					n = e.className,
					i = e.containerClassName,
					o = e.loaderClassName;
				return a("div", {
					className: "row ".concat(i)
				}, a("div", {
					className: "".concat(n, " ").concat(r.a.loaderPage, " align-middle full-height col-md-12 col-sm-12")
				}, a("div", {
					className: "".concat(r.a.loaderWrapper, " text-center")
				}, a("div", {
					className: "".concat(r.a.loader, " ").concat(o)
				}), a("h4", null, t || "Hang tight, while we submit your details!"))))
			}
		},
		nIZD: function (e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[lang]/[citySlug]", function () {
				return n("ZiGb")
			}])
		},
		tlJE: function (e, t, n) {
			e.exports = {
				heading: "UnitListing_heading__3tCh2",
				numResults: "UnitListing_numResults__2Y3oi",
				compareLink: "UnitListing_compareLink__3MkwG",
				error: "UnitListing_error__kQyVJ",
				loading: "UnitListing_loading__dn2sO"
			}
		},
		uuth: function (e, t, n) {
			"use strict";
			(function (e) {
				n.d(t, "a", (function () {
					return w
				}));
				var i = n("1TsT"),
					o = (n("17x9"), n("q1tI")),
					l = n.n(o),
					r = n("TOwV");

				function a(e, t) {
					for (var n = 0; n < t.length; n++) {
						var i = t[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}

				function s(e) {
					return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
						return e.__proto__ || Object.getPrototypeOf(e)
					})(e)
				}

				function c(e, t) {
					return (c = Object.setPrototypeOf || function (e, t) {
						return e.__proto__ = t, e
					})(e, t)
				}

				function d(e, t) {
					return !t || "object" !== typeof t && "function" !== typeof t ? function (e) {
						if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e
					}(e) : t
				}

				function u(e) {
					var t = function () {
						if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" === typeof Proxy) return !0;
						try {
							return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
						} catch (e) {
							return !1
						}
					}();
					return function () {
						var n, i = s(e);
						if (t) {
							var o = s(this).constructor;
							n = Reflect.construct(i, arguments, o)
						} else n = i.apply(this, arguments);
						return d(this, n)
					}
				}

				function v(e, t) {
					var n, i = (n = e, !isNaN(parseFloat(n)) && isFinite(n) ? parseFloat(n) : "px" === n.slice(-2) ? parseFloat(n.slice(0, -2)) : void 0);
					if ("number" === typeof i) return i;
					var o = function (e) {
						if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100
					}(e);
					return "number" === typeof o ? o * t : void 0
				}

				function p(e) {
					return "string" === typeof e.type
				}
				var f;
				var h = [];

				function g(e) {
					h.push(e), f || (f = setTimeout((function () {
						var e;
						for (f = null; e = h.shift();) e()
					}), 0));
					var t = !0;
					return function () {
						if (t) {
							t = !1;
							var n = h.indexOf(e); - 1 !== n && (h.splice(n, 1), !h.length && f && (clearTimeout(f), f = null))
						}
					}
				}
				var b = {
						debug: !1,
						scrollableAncestor: void 0,
						children: void 0,
						topOffset: "0px",
						bottomOffset: "0px",
						horizontal: !1,
						onEnter: function () {},
						onLeave: function () {},
						onPositionChange: function () {},
						fireOnRapidScroll: !0
					},
					w = function (t) {
						! function (e, t) {
							if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
							e.prototype = Object.create(t && t.prototype, {
								constructor: {
									value: e,
									writable: !0,
									configurable: !0
								}
							}), t && c(e, t)
						}(f, t);
						var n, o, s, d = u(f);

						function f(e) {
							var t;
							return function (e, t) {
								if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
							}(this, f), (t = d.call(this, e)).refElement = function (e) {
								t._ref = e
							}, t
						}
						return n = f, (o = [{
							key: "componentDidMount",
							value: function () {
								var e = this;
								f.getWindow() && (this.cancelOnNextTick = g((function () {
									e.cancelOnNextTick = null;
									var t = e.props,
										n = t.children;
									t.debug,
										function (e, t) {
											if (e && !p(e) && !t) throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")
										}(n, e._ref), e._handleScroll = e._handleScroll.bind(e), e.scrollableAncestor = e._findScrollableAncestor(), e.scrollEventListenerUnsubscribe = Object(i.a)(e.scrollableAncestor, "scroll", e._handleScroll, {
											passive: !0
										}), e.resizeEventListenerUnsubscribe = Object(i.a)(window, "resize", e._handleScroll, {
											passive: !0
										}), e._handleScroll(null)
								})))
							}
						}, {
							key: "componentDidUpdate",
							value: function () {
								var e = this;
								f.getWindow() && this.scrollableAncestor && (this.cancelOnNextTick || (this.cancelOnNextTick = g((function () {
									e.cancelOnNextTick = null, e._handleScroll(null)
								}))))
							}
						}, {
							key: "componentWillUnmount",
							value: function () {
								f.getWindow() && (this.scrollEventListenerUnsubscribe && this.scrollEventListenerUnsubscribe(), this.resizeEventListenerUnsubscribe && this.resizeEventListenerUnsubscribe(), this.cancelOnNextTick && this.cancelOnNextTick())
							}
						}, {
							key: "_findScrollableAncestor",
							value: function () {
								var t = this.props,
									n = t.horizontal,
									i = t.scrollableAncestor;
								if (i) return function (t) {
									return "window" === t ? e.window : t
								}(i);
								for (var o = this._ref; o.parentNode;) {
									if ((o = o.parentNode) === document.body) return window;
									var l = window.getComputedStyle(o),
										r = (n ? l.getPropertyValue("overflow-x") : l.getPropertyValue("overflow-y")) || l.getPropertyValue("overflow");
									if ("auto" === r || "scroll" === r || "overlay" === r) return o
								}
								return window
							}
						}, {
							key: "_handleScroll",
							value: function (e) {
								if (this._ref) {
									var t = this._getBounds(),
										n = function (e) {
											return e.viewportBottom - e.viewportTop === 0 ? "invisible" : e.viewportTop <= e.waypointTop && e.waypointTop <= e.viewportBottom || e.viewportTop <= e.waypointBottom && e.waypointBottom <= e.viewportBottom || e.waypointTop <= e.viewportTop && e.viewportBottom <= e.waypointBottom ? "inside" : e.viewportBottom < e.waypointTop ? "below" : e.waypointTop < e.viewportTop ? "above" : "invisible"
										}(t),
										i = this._previousPosition,
										o = this.props,
										l = (o.debug, o.onPositionChange),
										r = o.onEnter,
										a = o.onLeave,
										s = o.fireOnRapidScroll;
									if (this._previousPosition = n, i !== n) {
										var c = {
											currentPosition: n,
											previousPosition: i,
											event: e,
											waypointTop: t.waypointTop,
											waypointBottom: t.waypointBottom,
											viewportTop: t.viewportTop,
											viewportBottom: t.viewportBottom
										};
										l.call(this, c), "inside" === n ? r.call(this, c) : "inside" === i && a.call(this, c), s && ("below" === i && "above" === n || "above" === i && "below" === n) && (r.call(this, {
											currentPosition: "inside",
											previousPosition: i,
											event: e,
											waypointTop: t.waypointTop,
											waypointBottom: t.waypointBottom,
											viewportTop: t.viewportTop,
											viewportBottom: t.viewportBottom
										}), a.call(this, {
											currentPosition: n,
											previousPosition: "inside",
											event: e,
											waypointTop: t.waypointTop,
											waypointBottom: t.waypointBottom,
											viewportTop: t.viewportTop,
											viewportBottom: t.viewportBottom
										}))
									}
								}
							}
						}, {
							key: "_getBounds",
							value: function () {
								var e, t, n = this.props,
									i = n.horizontal,
									o = (n.debug, this._ref.getBoundingClientRect()),
									l = o.left,
									r = o.top,
									a = o.right,
									s = o.bottom,
									c = i ? l : r,
									d = i ? a : s;
								this.scrollableAncestor === window ? (e = i ? window.innerWidth : window.innerHeight, t = 0) : (e = i ? this.scrollableAncestor.offsetWidth : this.scrollableAncestor.offsetHeight, t = i ? this.scrollableAncestor.getBoundingClientRect().left : this.scrollableAncestor.getBoundingClientRect().top);
								var u = this.props,
									p = u.bottomOffset;
								return {
									waypointTop: c,
									waypointBottom: d,
									viewportTop: t + v(u.topOffset, e),
									viewportBottom: t + e - v(p, e)
								}
							}
						}, {
							key: "render",
							value: function () {
								var e = this,
									t = this.props.children;
								return t ? p(t) || Object(r.isForwardRef)(t) ? l.a.cloneElement(t, {
									ref: function (n) {
										e.refElement(n), t.ref && ("function" === typeof t.ref ? t.ref(n) : t.ref.current = n)
									}
								}) : l.a.cloneElement(t, {
									innerRef: this.refElement
								}) : l.a.createElement("span", {
									ref: this.refElement,
									style: {
										fontSize: 0
									}
								})
							}
						}]) && a(n.prototype, o), s && a(n, s), f
					}(l.a.PureComponent);
				w.above = "above", w.below = "below", w.inside = "inside", w.invisible = "invisible", w.getWindow = function () {
					if ("undefined" !== typeof window) return window
				}, w.defaultProps = b, w.displayName = "Waypoint"
			}).call(this, n("yLpj"))
		}
	},
	[
		["nIZD", 1, 2, 3, 5, 9, 15, 0, 4, 6, 7, 8, 18]
	]
]);