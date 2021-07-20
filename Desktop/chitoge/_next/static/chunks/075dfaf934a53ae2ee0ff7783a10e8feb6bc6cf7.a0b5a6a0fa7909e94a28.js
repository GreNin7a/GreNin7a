(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[4], {
		"+DAV": function (e, t, n) {
			e.exports = {
				filterWrapper: "FilterBar_filterWrapper__3NFUm",
				sectionWrapper: "FilterBar_sectionWrapper__1AiN_",
				sectionTitle: "FilterBar_sectionTitle__1prB0",
				sectionTitleActive: "FilterBar_sectionTitleActive__1T4mt",
				contentWrapper: "FilterBar_contentWrapper__3DbRA",
				open: "FilterBar_open__IreVp"
			}
		},
		"/0+H": function (e, t, n) {
			"use strict";
			t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function () {
				return i(r.default.useContext(o.AmpStateContext))
			};
			var a, r = (a = n("q1tI")) && a.__esModule ? a : {
					default: a
				},
				o = n("lwAK");

			function i() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.ampFirst,
					n = void 0 !== t && t,
					a = e.hybrid,
					r = void 0 !== a && a,
					o = e.hasQuery,
					i = void 0 !== o && o;
				return n || r && i
			}
		},
		"2gGe": function (e, t, n) {
			"use strict";
			var a = n("q1tI");
			t.a = function (e) {
				var t = Object(a.useRef)(Array(e || 4)),
					n = Object(a.useState)({
						current: -1,
						prev: -1
					}),
					r = n[0],
					o = n[1];
				Object(a.useEffect)((function () {
					t.current.map((function (e, n) {
						t.current[n].style.height = "0px"
					}))
				}), []);
				return Object(a.useEffect)((function () {
					-1 !== r.prev && (t.current[r.prev].style.height = "0px"), -1 !== r.current && (t.current[r.current].style.height = "".concat(t.current[r.current].scrollHeight, "px"))
				}), [r]), [r.current, function (e) {
					o({
						current: e === r.current ? -1 : e,
						prev: r.current
					})
				}, t]
			}
		},
		"2v50": function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return o
			})), n.d(t, "d", (function () {
				return i
			})), n.d(t, "c", (function () {
				return c
			})), n.d(t, "e", (function () {
				return l
			})), n.d(t, "b", (function () {
				return u
			}));
			var a = n("6WYK"),
				r = n.n(a),
				o = function (e) {
					return "https://res.cloudinary.com/hmlet/image/upload/" + ((null === e || void 0 === e ? void 0 : e.skipConfig) || e.name.indexOf(".svg") > -1 ? "" : e.config ? e.config + ",f_auto/" : "f_auto/") + (e.version || "") + "/Website%20Statics/" + e.name
				},
				i = function (e, t) {
					return 0 === t || e / t === 0
				},
				c = function (e, t, n) {
					var a = i(e, t) ? "Fully Booked" : "".concat(e, "/").concat(t, " Rooms Available");
					return n || (a = ""), a
				},
				l = function (e) {
					var t = e.vacant,
						n = e.capacity,
						a = e.text;
					return i(t, n) ? null === a || void 0 === a ? void 0 : a.full : null === a || void 0 === a ? void 0 : a.available
				},
				u = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
						a = arguments.length > 3 ? arguments[3] : void 0,
						o = arguments.length > 4 ? arguments[4] : void 0;
					return e.replace("{priceLower}", r()(t || 0)).replace("{priceHigher}", r()(n || 0)).replace("{pricePeriod}", a.toLowerCase()).replace("{currency}", o)
				}
		},
		"30Jy": function (e, t, n) {
			"use strict";
			var a = n("wx14"),
				r = n("Ff2n"),
				o = n("q1tI"),
				i = n.n(o),
				c = n("7rHM"),
				l = n.n(c),
				u = i.a.createElement,
				s = i.a.forwardRef((function (e, t) {
					var n = e.className,
						o = e.style,
						i = e.children,
						c = Object(r.a)(e, ["className", "style", "children"]);
					return u("div", Object(a.a)({
						className: "".concat(l.a.card, " ").concat(n),
						style: o,
						ref: t
					}, c), i)
				}));
			s.displayName = "Card", t.a = s
		},
		"6WYK": function (e, t, n) {
			"use strict";

			function a(e, t, n) {
				let a, r, o;
				const i = t || ",",
					c = n || ".";
				switch (typeof e) {
					case "string":
						if (e.length < ("-" === e[0] ? 5 : 4)) return e;
						r = e, a = Number("." !== c ? r.replace(c, ".") : r);
						break;
					case "number":
						r = String(e), a = e;
						break;
					default:
						return e
				}
				if (-1e3 < a && a < 1e3 || isNaN(a) || !isFinite(a)) return r;
				let l = r.lastIndexOf(c);
				return l > -1 && (o = r.slice(l), r = r.slice(0, -o.length)), r = function (e, t) {
					const n = "-" === e[0] ? 1 : 0;
					let a = (e.length - n - 1) % 3 + 1 + n;
					const r = [e.slice(0, a)];
					for (; a < e.length;) r.push(e.substr(a, 3)), a += 3;
					return r.join(t)
				}(r, i), o ? r + o : r
			}
			e.exports = a, e.exports.bindWith = function (e, t) {
				return function (n) {
					return a(n, e, t)
				}
			}
		},
		"6yR0": function (e, t, n) {
			"use strict";
			var a = n("rePB"),
				r = n("ODXe"),
				o = n("q1tI"),
				i = n.n(o),
				c = n("YFqc"),
				l = n.n(c),
				u = n("nOHt"),
				s = n("2v50"),
				d = n("wyBh"),
				v = n("co3k"),
				f = n("2gGe"),
				p = n("30Jy"),
				m = n("bhxT"),
				b = n("yFsk"),
				g = n("S68s"),
				h = n("ma3e"),
				y = i.a.createElement,
				O = function (e) {
					var t = e.number;
					return y("div", {
						className: "d-flex"
					}, y("div", {
						className: "align-self-center"
					}, y(h.a, null)), y("div", {
						className: "align-self-center ml-2"
					}, t))
				};
			t.a = function (e) {
				var t, n, c, h, E, _, N, S = e.data,
					A = void 0 === S ? {
						snippets: {}
					} : S,
					P = e.cities,
					I = e.lang,
					C = i.a.createRef(),
					w = Object(u.useRouter)(),
					j = null === (t = w.asPath.split("/")) || void 0 === t ? void 0 : t[1],
					R = "ja" === j || "en" === j,
					k = Object(o.useState)(I),
					x = k[0],
					M = k[1],
					T = Object(o.useState)({
						collapsed: !1
					}),
					D = T[0],
					G = T[1],
					H = Object(f.a)(),
					L = Object(r.a)(H, 3),
					U = L[0],
					B = L[1],
					F = L[2],
					Y = Object(o.useState)({
						home: "",
						community: "",
						membership: "",
						corporate: "",
						landlords: ""
					}),
					q = Y[0],
					W = Y[1];
				Object(b.a)(C, (function () {
					return B(-1)
				})), i.a.useEffect((function () {
					if (R && I !== x && x.length) {
						var e = w.asPath.split("/");
						e[1] = x;
						var t = e.join("/");
						w.push(t)
					}
				}), [x]), i.a.useEffect((function () {
					W("ja" === x || "en" === x ? {
						home: "/".concat(x),
						community: "/".concat(x).concat(null === d.b || void 0 === d.b ? void 0 : d.b.COMMUNITY_PAGE),
						membership: "/".concat(x).concat(null === d.b || void 0 === d.b ? void 0 : d.b.MEMBERSHIP_PAGE),
						corporate: "/".concat(x).concat(null === d.b || void 0 === d.b ? void 0 : d.b.CORPORATE_PAGE),
						landlords: "/".concat(x).concat(null === d.b || void 0 === d.b ? void 0 : d.b.LANDLORDS_PAGE)
					} : {
						home: "/",
						community: "/en".concat(null === d.b || void 0 === d.b ? void 0 : d.b.COMMUNITY_PAGE),
						membership: "/en".concat(null === d.b || void 0 === d.b ? void 0 : d.b.MEMBERSHIP_PAGE),
						corporate: "/en".concat(null === d.b || void 0 === d.b ? void 0 : d.b.CORPORATE_PAGE),
						landlords: "/en".concat(null === d.b || void 0 === d.b ? void 0 : d.b.LANDLORDS_PAGE)
					})
				}), [x]);
				var K = A.snippets,
					J = function (e) {
						var t = Number(e.currentTarget.id);
						B(t)
					},
					V = function (e) {
						var t = e.target.id;
						(null === t || void 0 === t ? void 0 : t.length) && M(t), B(-1)
					},
					z = function (e) {
						var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
							n = Object(o.useState)(t),
							a = n[0],
							r = n[1];
						return Object(o.useEffect)((function () {
							var t = function () {
								var t = window.scrollY > e;
								a ? t || r(!1) : t && r(!0)
							};
							return document.addEventListener("scroll", t),
								function () {
									document.removeEventListener("scroll", t)
								}
						}), [a]), a
					}(600, !1),
					Q = function (e, t) {
						return y("a", {
							className: "nav-link pl-0 pr-0 ".concat(e, " ").concat(w.asPath === q.home ? "navbar-item-selected" : ""),
							id: t,
							onClick: J
						}, K.navbar_find_a_home, y("span", {
							className: "navbar-down-arrow"
						}))
					},
					X = function () {
						var e, t;
						if ((null === w || void 0 === w || null === (e = w.pathname) || void 0 === e ? void 0 : e.indexOf("/landlords")) > -1) m.a.ctaNavigation(w, null === K || void 0 === K ? void 0 : K.navbar_im_interested, "Landlord Login"), window.location.href = "https://landlord.hmlet.com/user/login";
						else if (null === d.f || void 0 === d.f ? void 0 : d.f[((null === w || void 0 === w || null === (t = w.query) || void 0 === t ? void 0 : t.citySlug) || "").toUpperCase()]) {
							var n, a;
							Object(g.b)(), m.a.ctaNavigation(w, null === K || void 0 === K ? void 0 : K.navbar_im_interested, d.a.MAIN_FORM, null === w || void 0 === w || null === (n = w.query) || void 0 === n ? void 0 : n.citySlug), w.push("".concat(d.b.MAIN_FORM).concat(null === w || void 0 === w || null === (a = w.query) || void 0 === a ? void 0 : a.citySlug))
						} else Object(g.b)(), m.a.ctaNavigation(w, null === K || void 0 === K ? void 0 : K.navbar_im_interested, d.a.CITIES), w.push("".concat(d.b.CITIES))
					},
					Z = (null === w || void 0 === w || null === (n = w.pathname) || void 0 === n ? void 0 : n.indexOf(d.b.LANDLORDS_PAGE)) > -1 ? null === K || void 0 === K ? void 0 : K.navbar_login : (null === w || void 0 === w || null === (c = w.pathname) || void 0 === c ? void 0 : c.indexOf(d.b.CITIES)) > -1 ? null : null === K || void 0 === K ? void 0 : K.navbar_im_interested,
					$ = (null === w || void 0 === w || null === (h = w.pathname) || void 0 === h ? void 0 : h.indexOf(d.b.CAREER_PAGE)) > -1 || (null === w || void 0 === w || null === (E = w.pathname) || void 0 === E ? void 0 : E.indexOf(d.b.CAREER_LISTING_PAGE)) > -1,
					ee = function () {
						var e = w.query.citySlug;
						return e ? "singapore" === e ? y(O, {
							number: "+65 3138 5596"
						}) : "hongkong" === e ? y(O, {
							number: "+852 3001 5849"
						}) : null : "en" === x ? y(O, {
							number: "+65 3138 5596"
						}) : null
					};
				return y("nav", {
					ref: C,
					className: "navbar sticky-top navbar-expand-lg navbar-wrapper bg-white navbar-light pl-0"
				}, y("div", {
					className: "container-fluid pl-0 pr-0 ml-0 mr-0"
				}, y("div", {
					className: "col-4 col-lg-auto"
				}, y(l.a, {
					href: q.home
				}, y("a", {
					className: "navbar-brand",
					onClick: function () {
						return m.a.menuNavigation(!0, w, d.a.HOME)
					}
				}, y("img", {
					className: "hmlet-logo",
					alt: "hmlet-logo",
					src: Object(s.a)({
						version: "v1587010481",
						name: "logo_black.png"
					})
				})))), y("div", {
					className: "d-flex align-items-center justify-content-end col-8 text-right d-lg-none pr-0"
				}, y("div", {
					className: "ml-2 mr-2"
				}, ee()), y("button", {
					className: "navbar-toggler",
					type: "button",
					"data-toggle": "collapse",
					"data-target": "#navbarSupportedContent",
					"aria-controls": "navbarSupportedContent",
					"aria-expanded": "false",
					"aria-label": "Toggle navigation",
					onClick: function () {
						return G({
							collapsed: !D.collapsed
						})
					}
				}, y("span", {
					className: "navbar-toggler-icon"
				}, y("div", {
					className: "bar1 ".concat(D.collapsed ? "change" : "")
				}), y("div", {
					className: "bar2 ".concat(D.collapsed ? "change" : "")
				}), y("div", {
					className: "bar3 ".concat(D.collapsed ? "change" : "")
				})))), y("div", {
					className: !1 === (null === D || void 0 === D ? void 0 : D.collapsed) ? "collapse navbar-collapse col-lg-auto col-xl-7" : "collapse navbar-collapse show navbar-text"
				}, y("ul", {
					className: "navbar-nav mr-auto"
				}, y("li", {
					className: "nav-item col-auto"
				}, Q("d-sm-block d-md-block d-lg-none", 0), y("ul", {
					ref: function (e) {
						F.current[0] = e
					},
					className: "navbar-nav navbar-sub-nav d-sm-block d-md-block d-lg-none"
				}, null === P || void 0 === P || null === (_ = P.inOrder) || void 0 === _ ? void 0 : _.map((function (e) {
					return y("li", {
						className: "nav-sub-item",
						key: e.Code
					}, y(l.a, {
						href: "/".concat(I || "en").concat(d.b.UNIT_LISTING_PAGES).concat(e.Slug)
					}, y("a", {
						onClick: function () {
							var t;
							m.a.track({
								eventName: m.j.name,
								props: (t = {}, Object(a.a)(t, m.j.props.menu, "top"), Object(a.a)(t, m.j.props.cityName, null === e || void 0 === e ? void 0 : e.Name), t)
							}), m.a.menuNavigation(!0, w, d.a.UNIT + e.Slug, e.Slug)
						}
					}, e.Name)))
				}))), Q("d-none d-lg-block", 2)), y(p.a, {
					className: "d-none card ".concat(2 === U ? "d-lg-block" : ""),
					style: {
						backgroundImage: "url(".concat(Object(s.a)({
							version: "v1599736816",
							name: "desktop-menu-bg-2.png",
							skipConfig: !0
						}), ")"),
						backgroundSize: "240px"
					},
					ref: function (e) {
						F.current[2] = e
					}
				}, y("div", {
					className: "row p-3"
				}, null === P || void 0 === P || null === (N = P.inOrder) || void 0 === N ? void 0 : N.map((function (e, t) {
					var n;
					return y("div", {
						key: t,
						className: "col col-6 p-0"
					}, y("div", {
						className: "title"
					}, null === e || void 0 === e || null === (n = e.Country) || void 0 === n ? void 0 : n.Name), y(l.a, {
						href: "/".concat(I || "en").concat(d.b.UNIT_LISTING_PAGES).concat(e.Slug)
					}, y("a", {
						onClick: function () {
							var t;
							m.a.track({
								eventName: m.j.name,
								props: (t = {}, Object(a.a)(t, m.j.props.menu, "top"), Object(a.a)(t, m.j.props.cityName, null === e || void 0 === e ? void 0 : e.Name), t)
							}), m.a.menuNavigation(!0, w, d.a.UNIT + e.Slug, e.Slug), B(-1)
						}
					}, e.Name)))
				})))), y("li", {
					className: "nav-item col-auto"
				}, y(l.a, {
					href: q.membership
				}, y("a", {
					className: "nav-link pl-0 pr-0 ".concat(w.asPath === q.membership ? "navbar-item-selected" : ""),
					onClick: function () {
						return m.a.menuNavigation(!0, w, d.a.MEMBERSHIP)
					}
				}, K.navbar_membership))), y("li", {
					className: "nav-item col-auto"
				}, y(l.a, {
					href: q.community
				}, y("a", {
					className: "nav-link pl-0 pr-0 ".concat(w.asPath === q.community ? "navbar-item-selected" : ""),
					onClick: function () {
						return m.a.menuNavigation(!0, w, d.a.COMMUNITY)
					}
				}, K.navbar_community))), y("li", {
					className: "nav-item col-auto"
				}, y(l.a, {
					href: q.corporate
				}, y("a", {
					className: "nav-link pl-0 pr-0 ".concat(w.asPath === q.corporate ? "navbar-item-selected" : ""),
					onClick: function () {
						return m.a.menuNavigation(!0, w, d.a.CORPORATE)
					}
				}, K.navbar_corporate_stay))), y("li", {
					className: "nav-item col-auto pr-0"
				}, y(l.a, {
					href: q.landlords
				}, y("a", {
					className: "nav-link pl-0 pr-0 ".concat(w.asPath === q.landlords ? "navbar-item-selected" : ""),
					onClick: function () {
						return m.a.menuNavigation(!0, w, d.a.LANDLORDS)
					}
				}, K.navbar_landlords))), y("li", {
					className: "".concat(R ? "d-sm-block d-lg-none" : "d-none", " nav-item col-auto pr-0")
				}, y("a", {
					className: "nav-link pl-0 pr-0 navbar-lang ".concat(w.asPath === q.landlords ? "navbar-item-selected" : ""),
					id: 1,
					onClick: J
				}, function () {
					switch (x) {
						case "en":
							return "English";
						case "ja":
							return "\u65e5\u672c\u8a9e";
						default:
							return "English"
					}
				}(), y("span", {
					className: "navbar-down-arrow"
				})), y("ul", {
					onClick: V,
					ref: function (e) {
						return F.current[1] = e
					},
					className: "navbar-nav navbar-sub-nav"
				}, y("li", {
					className: "nav-sub-item"
				}, y("span", {
					id: "en",
					className: ne("en")
				}, "English")), y("li", {
					className: "nav-sub-item"
				}, y("span", {
					id: "ja",
					className: ne("ja"),
					style: {
						fontWeight: 500
					}
				}, "\u65e5\u672c\u8a9e"))))), Z && !$ && y(v.a, {
					text: Z,
					btnClass: "navbar-btn-interested d-sm-block d-lg-none",
					onClick: X
				})), y("div", {
					className: "d-none d-sm-none d-lg-flex col-4 px-0"
				}, y("div", {
					className: "flex-grow-1"
				}), ee(), y("div", {
					className: "align-self-center"
				}, y("button", {
					className: "".concat(R ? "" : "d-none", " btn navbar-lang"),
					id: 3,
					onClick: J
				}, null === x || void 0 === x ? void 0 : x.toUpperCase()), y(p.a, {
					className: "card",
					ref: function (e) {
						return F.current[3] = e
					}
				}, y("ul", {
					className: "navbar-nav navbar-sub-nav",
					onClick: V
				}, y("li", {
					className: "nav-sub-item navbar-lang-item ".concat(te("en")),
					id: "en"
				}, y("span", {
					id: "en",
					className: "navbar-lang-item-text"
				}, "English")), y("li", {
					className: "nav-sub-item navbar-lang-item ".concat(te("ja")),
					id: "ja"
				}, y("span", {
					id: "ja"
				}, "\u65e5\u672c\u8a9e"))))), Z && !$ && y(v.a, {
					text: Z,
					btnClass: "navbar-btn-interested ".concat("/[lang]" === w.route ? z ? "ctaBtnHidden ctaBtnVisible" : "ctaBtnHidden " : ""),
					onClick: X
				}))));

				function te(e) {
					return e === x ? "navbar-lang-item-selected" : ""
				}

				function ne(e) {
					return e === x ? "mobile-lang-item-selected" : ""
				}
			}
		},
		"7rHM": function (e, t, n) {
			e.exports = {
				card: "Card_card__1IPpd"
			}
		},
		"8Kt/": function (e, t, n) {
			"use strict";
			n("lSNA");
			t.__esModule = !0, t.defaultHead = s, t.default = void 0;
			var a, r = function (e) {
					if (e && e.__esModule) return e;
					if (null === e || "object" !== typeof e && "function" !== typeof e) return {
						default: e
					};
					var t = u();
					if (t && t.has(e)) return t.get(e);
					var n = {},
						a = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (var r in e)
						if (Object.prototype.hasOwnProperty.call(e, r)) {
							var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
							o && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = e[r]
						}
					n.default = e, t && t.set(e, n);
					return n
				}(n("q1tI")),
				o = (a = n("Xuae")) && a.__esModule ? a : {
					default: a
				},
				i = n("lwAK"),
				c = n("FYa8"),
				l = n("/0+H");

			function u() {
				if ("function" !== typeof WeakMap) return null;
				var e = new WeakMap;
				return u = function () {
					return e
				}, e
			}

			function s() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = [r.default.createElement("meta", {
						charSet: "utf-8"
					})];
				return e || t.push(r.default.createElement("meta", {
					name: "viewport",
					content: "width=device-width"
				})), t
			}

			function d(e, t) {
				return "string" === typeof t || "number" === typeof t ? e : t.type === r.default.Fragment ? e.concat(r.default.Children.toArray(t.props.children).reduce((function (e, t) {
					return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
				}), [])) : e.concat(t)
			}
			var v = ["name", "httpEquiv", "charSet", "itemProp"];

			function f(e, t) {
				return e.reduce((function (e, t) {
					var n = r.default.Children.toArray(t.props.children);
					return e.concat(n)
				}), []).reduce(d, []).reverse().concat(s(t.inAmpMode)).filter(function () {
					var e = new Set,
						t = new Set,
						n = new Set,
						a = {};
					return function (r) {
						var o = !0;
						if (r.key && "number" !== typeof r.key && r.key.indexOf("$") > 0) {
							var i = r.key.slice(r.key.indexOf("$") + 1);
							e.has(i) ? o = !1 : e.add(i)
						}
						switch (r.type) {
							case "title":
							case "base":
								t.has(r.type) ? o = !1 : t.add(r.type);
								break;
							case "meta":
								for (var c = 0, l = v.length; c < l; c++) {
									var u = v[c];
									if (r.props.hasOwnProperty(u))
										if ("charSet" === u) n.has(u) ? o = !1 : n.add(u);
										else {
											var s = r.props[u],
												d = a[u] || new Set;
											d.has(s) ? o = !1 : (d.add(s), a[u] = d)
										}
								}
						}
						return o
					}
				}()).reverse().map((function (e, t) {
					var n = e.key || t;
					return r.default.cloneElement(e, {
						key: n
					})
				}))
			}

			function p(e) {
				var t = e.children,
					n = (0, r.useContext)(i.AmpStateContext),
					a = (0, r.useContext)(c.HeadManagerContext);
				return r.default.createElement(o.default, {
					reduceComponentsToState: f,
					headManager: a,
					inAmpMode: (0, l.isInAmpMode)(n)
				}, t)
			}
			p.rewind = function () {};
			var m = p;
			t.default = m
		},
		Bnag: function (e, t) {
			e.exports = function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
		},
		EbDI: function (e, t) {
			e.exports = function (e) {
				if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}
		},
		Ff2n: function (e, t, n) {
			"use strict";

			function a(e, t) {
				if (null == e) return {};
				var n, a, r = function (e, t) {
					if (null == e) return {};
					var n, a, r = {},
						o = Object.keys(e);
					for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
					return r
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
				}
				return r
			}
			n.d(t, "a", (function () {
				return a
			}))
		},
		Ijbi: function (e, t, n) {
			var a = n("WkPL");
			e.exports = function (e) {
				if (Array.isArray(e)) return a(e)
			}
		},
		Lnxd: function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return u
			}));
			var a = n("q1tI"),
				r = n.n(a),
				o = {
					color: void 0,
					size: void 0,
					className: void 0,
					style: void 0,
					attr: void 0
				},
				i = r.a.createContext && r.a.createContext(o),
				c = function () {
					return (c = Object.assign || function (e) {
						for (var t, n = 1, a = arguments.length; n < a; n++)
							for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						return e
					}).apply(this, arguments)
				},
				l = function (e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
					}
					return n
				};

			function u(e) {
				return function (t) {
					return r.a.createElement(s, c({
						attr: c({}, e.attr)
					}, t), function e(t) {
						return t && t.map((function (t, n) {
							return r.a.createElement(t.tag, c({
								key: n
							}, t.attr), e(t.child))
						}))
					}(e.child))
				}
			}

			function s(e) {
				var t = function (t) {
					var n, a = e.attr,
						o = e.size,
						i = e.title,
						u = l(e, ["attr", "size", "title"]),
						s = o || t.size || "1em";
					return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.a.createElement("svg", c({
						stroke: "currentColor",
						fill: "currentColor",
						strokeWidth: "0"
					}, t.attr, a, u, {
						className: n,
						style: c(c({
							color: e.color || t.color
						}, t.style), e.style),
						height: s,
						width: s,
						xmlns: "http://www.w3.org/2000/svg"
					}), i && r.a.createElement("title", null, i), e.children)
				};
				return void 0 !== i ? r.a.createElement(i.Consumer, null, (function (e) {
					return t(e)
				})) : t(o)
			}
		},
		ODXe: function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return r
			}));
			var a = n("BsWD");

			function r(e, t) {
				return function (e) {
					if (Array.isArray(e)) return e
				}(e) || function (e, t) {
					if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
						var n = [],
							a = !0,
							r = !1,
							o = void 0;
						try {
							for (var i, c = e[Symbol.iterator](); !(a = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); a = !0);
						} catch (l) {
							r = !0, o = l
						} finally {
							try {
								a || null == c.return || c.return()
							} finally {
								if (r) throw o
							}
						}
						return n
					}
				}(e, t) || Object(a.a)(e, t) || function () {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
		},
		RIqP: function (e, t, n) {
			var a = n("Ijbi"),
				r = n("EbDI"),
				o = n("ZhPi"),
				i = n("Bnag");
			e.exports = function (e) {
				return a(e) || r(e) || o(e) || i()
			}
		},
		RecQ: function (e, t, n) {
			"use strict";
			var a = n("ODXe"),
				r = n("q1tI"),
				o = n.n(r),
				i = n("8Kt/"),
				c = n.n(i),
				l = n("nOHt"),
				u = n("TxL0"),
				s = n("jobX"),
				d = n("wyBh"),
				v = o.a.createElement;
			t.a = function (e) {
				var t, n, r, o, i, f, p, m = e.data,
					b = void 0 === m ? {
						snippets: {}
					} : m,
					g = b.snippets,
					h = b.links,
					y = b.images,
					O = Object(s.a)(u.r).data,
					E = Object(s.a)(u.w),
					_ = Object(a.a)(E, 1)[0],
					N = null === _ || void 0 === _ || null === (t = _.data) || void 0 === t ? void 0 : t.bySlug,
					S = Object(l.useRouter)(),
					A = "",
					P = "",
					I = "",
					C = "",
					w = function (e) {
						var t;
						return (null === S || void 0 === S || null === (t = S.pathname) || void 0 === t ? void 0 : t.indexOf(e)) > -1
					},
					j = function (e) {
						var t, n;
						if ((null === S || void 0 === S || null === (t = S.pathname) || void 0 === t ? void 0 : t.indexOf(d.b.UNIT_LISTING_PAGES)) > -1 && e === (null === S || void 0 === S || null === (n = S.query) || void 0 === n ? void 0 : n.citySlug)) return e
					};
				return w(d.b.BUILDING_PAGE) ? (C = "building", A = null === O || void 0 === O || null === (o = O.data) || void 0 === o ? void 0 : o.FullTitle, I = null === O || void 0 === O || null === (i = O.data) || void 0 === i || null === (f = i.Pictures) || void 0 === f || null === (p = f.Building) || void 0 === p ? void 0 : p[0]) : C = "/[lang]" === (null === S || void 0 === S ? void 0 : S.pathname) ? "home" : w(d.b.MEMBERSHIP_PAGE) ? d.b.MEMBERSHIP_PAGE : w(d.b.COMMUNITY_PAGE) ? d.b.COMMUNITY_PAGE : w(d.b.CORPORATE_PAGE) ? d.b.CORPORATE_PAGE : w(d.b.LANDLORDS_PAGE) ? d.b.LANDLORDS_PAGE : w(d.b.ABOUT_US_PAGE) ? d.b.ABOUT_US_PAGE : w(d.b.CAREER_PAGE) ? d.b.CAREER_PAGE : w(d.b.NEWS_PAGE) ? d.b.NEWS_PAGE : w(d.b.FAQ_PAGE) ? d.b.FAQ_PAGE : j(N.singapore.Slug) ? N.singapore.Slug + "_units" : j(N.hongkong.Slug) ? N.hongkong.Slug + "_units" : j(N.tokyo.Slug) ? N.tokyo.Slug + "_units" : "other", A = "other" === (C = C.replace(/\//g, "")) ? "" : A || (null === g || void 0 === g ? void 0 : g["seo_".concat(C, "_title")]), P = P || (null === g || void 0 === g ? void 0 : g["seo_".concat(C, "_description")]) || (null === g || void 0 === g ? void 0 : g.seo_other_description), I = I || (null === y || void 0 === y ? void 0 : y["seo_".concat(C)]) || (null === y || void 0 === y ? void 0 : y.seo_other), n = (null === h || void 0 === h ? void 0 : h["seo_".concat(C)]) || (null === h || void 0 === h ? void 0 : h.seo_other), r = (null === g || void 0 === g ? void 0 : g["seo_".concat(C, "_keywords")]) || (null === g || void 0 === g ? void 0 : g.seo_other_keywords), v(c.a, null, A && v("meta", {
					name: "title",
					content: A
				}), v("meta", {
					name: "facebook-domain-verification",
					content: "hnbxmy2fa2anrfqfzxth18ak38mk1z"
				}), v("meta", {
					name: "description",
					content: P
				}), v("meta", {
					name: "keywords",
					content: r
				}), v("meta", {
					property: "og:type",
					content: "website"
				}), v("meta", {
					property: "og:url",
					content: n
				}), v("meta", {
					property: "og:title",
					content: A
				}), v("meta", {
					property: "og:description",
					content: P
				}), v("meta", {
					property: "og:image",
					content: I
				}), v("meta", {
					property: "twitter:card",
					content: "summary_large_image"
				}), v("meta", {
					property: "twitter:url",
					content: n
				}), v("meta", {
					property: "twitter:title",
					content: A
				}), v("meta", {
					property: "twitter:description",
					content: P
				}), v("meta", {
					property: "twitter:image",
					content: I
				}), v("meta", {
					name: "viewport",
					content: "initial-scale=1.0, width=device-width",
					key: "viewport"
				}), v("link", {
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css?family=Muli:300,400,500,600&font-display=auto",
					onLoad: "this.media='all'; this.onload=null;",
					key: "muli-font"
				}), v("link", {
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,400,500,600&font-display=auto",
					onLoad: "this.media='all'; this.onload=null;",
					key: "ibm-plex-font"
				}), v("link", {
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css?family=Mulish:700&font-display=auto",
					onLoad: "this.media='all'; this.onload=null;",
					key: "mulish"
				}), v("script", {
					type: "text/javascript",
					src: "//widget.instabot.io/jsapi/rokoInstabot.js",
					crossOrigin: "",
					dangerouslySetInnerHTML: {
						__html: 'apiKey: "'.concat("vOA/M7D5z6xxjZsD32c7hiODFAyzTURDG2SyVYIZ6EM=", '" ')
					},
					defer: !0
				}), v("meta", {
					name: "theme-color",
					content: "#333333"
				}), v("link", {
					rel: "icon",
					href: "https://res.cloudinary.com/hmlet/image/upload/v1587372669/Website%20Statics/favicon-32x32.png"
				}), v("script", {
					type: "text/javascript",
					dangerouslySetInnerHTML: {
						__html: " \n              OMID = ".concat("2102218", ";\n              OPID = ").concat("38087", ';\n              ORef = escape(window.parent.location.href);\n              ! function() {\n                  var a = document.createElement("script");\n                  a.type = "text/javascript", a.async = !0, a.src = "//track.omguk.com/e/qs/?action=Content&MID=" + OMID + "&PID=" + OPID + "&ref=" + ORef;\n                  var b = document.getElementsByTagName("body")[0];\n                  if (b) b.appendChild(a, b);\n                  else {\n                      var b = document.getElementsByTagName("script")[0];\n                      b.parentNode.insertBefore(a, b)\n                  }\n              }();\n              ')
					}
				}))
			}
		},
		RoTl: function (e, t, n) {
			"use strict";
			var a = n("ODXe"),
				r = n("q1tI"),
				o = n.n(r),
				i = n("yFsk"),
				c = n("+DAV"),
				l = n.n(c),
				u = o.a.createElement,
				s = l.a.sectionWrapper,
				d = l.a.sectionTitleActive,
				v = l.a.sectionTitle,
				f = "".concat(s, " pl-5 pr-5 pt-1 pb-1");
			var p = o.a.createElement,
				m = function (e) {
					var t = e.active,
						n = e.id,
						a = e.children,
						r = e.width;
					return p("div", null, p("div", {
						className: "card ".concat(l.a.contentWrapper, " ").concat(t === n ? l.a.open : "")
					}, p("div", {
						style: {
							width: r || "100%"
						},
						className: "card-body"
					}, a)))
				},
				b = o.a.createElement,
				g = function (e) {
					var t = e.children,
						n = o.a.useRef(),
						r = o.a.useState(""),
						c = Object(a.a)(r, 2),
						u = c[0],
						s = c[1];
					return Object(i.a)(n, (function () {
						s("")
					})), b("nav", {
						ref: n,
						className: "".concat(l.a.filterWrapper)
					}, b("section", {
						id: "sections-wrapper",
						className: "d-flex flex-row"
					}, o.a.Children.map(t, (function (e) {
						return o.a.cloneElement(e, {
							active: u,
							onClick: d
						})
					}))));

					function d(e) {
						return s(e === u ? "" : e)
					}
				};
			g.Section = function (e) {
				var t = e.onClick,
					n = e.title,
					a = e.children,
					r = e.active,
					i = e.id,
					c = i || n,
					l = function () {
						return t(c)
					},
					s = function () {
						var e = c === r ? d : "";
						return "text-center ".concat(v, " ").concat(e)
					};
				return u("div", {
					className: f
				}, c ? u(o.a.Fragment, null, u("div", {
					onClick: l,
					className: s()
				}, n, " ", u("span", {
					className: "navbar-down-arrow"
				})), o.a.Children.map(a, (function (e) {
					return o.a.cloneElement(e, {
						active: r,
						id: c
					})
				}))) : a)
			}, g.Content = m;
			t.a = g
		},
		S68s: function (e, t, n) {
			"use strict";
			n.d(t, "b", (function () {
				return r
			})), n.d(t, "a", (function () {
				return o
			}));
			var a = n("32ec"),
				r = function () {
					return Object(a.b)("hmlet-landing-page", window.location.href)
				},
				o = function () {
					return Object(a.a)("hmlet-landing-page")
				}
		},
		Xuae: function (e, t, n) {
			"use strict";
			var a = n("RIqP"),
				r = n("lwsE"),
				o = n("W8MJ"),
				i = (n("PJYZ"), n("7W2i")),
				c = n("a1gu"),
				l = n("Nsbk");

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
					var n, a = l(e);
					if (t) {
						var r = l(this).constructor;
						n = Reflect.construct(a, arguments, r)
					} else n = a.apply(this, arguments);
					return c(this, n)
				}
			}
			t.__esModule = !0, t.default = void 0;
			var s = n("q1tI"),
				d = function (e) {
					i(n, e);
					var t = u(n);

					function n(e) {
						var o;
						return r(this, n), (o = t.call(this, e))._hasHeadManager = void 0, o.emitChange = function () {
							o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances), o.props))
						}, o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances, o
					}
					return o(n, [{
						key: "componentDidMount",
						value: function () {
							this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
						}
					}, {
						key: "componentDidUpdate",
						value: function () {
							this.emitChange()
						}
					}, {
						key: "componentWillUnmount",
						value: function () {
							this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
						}
					}, {
						key: "render",
						value: function () {
							return null
						}
					}]), n
				}(s.Component);
			t.default = d
		},
		YFqc: function (e, t, n) {
			e.exports = n("cTJO")
		},
		YZKd: function (e, t, n) {
			"use strict";
			var a = n("q1tI");
			t.a = function () {
				var e = Object(a.useState)(),
					t = e[0],
					n = e[1],
					r = function (e) {
						var t, n, a = RegExp("[?&]" + e + "=([^&]*)").exec(null === (t = window) || void 0 === t || null === (n = t.location) || void 0 === n ? void 0 : n.search);
						return a && decodeURIComponent(a[1].replace(/\+/g, " "))
					},
					o = function (e) {
						return {
							value: e,
							expiryDate: (new Date).getTime() + 7776e6
						}
					};
				return Object(a.useEffect)((function () {
					! function () {
						var e, t = r("gclid"),
							a = null,
							i = r("gclsrc"),
							c = !i || -1 !== i.indexOf("aw");
						["gclid_field"].forEach((function (t) {
							var n;
							(null === (n = document) || void 0 === n ? void 0 : n.getElementById(t)) && (e = document.getElementById(t))
						})), t && c && (a = o(t), localStorage.setItem("gclid", JSON.stringify(a)));
						var l = a || JSON.parse(localStorage.getItem("gclid")),
							u = l && (new Date).getTime() < l.expiryDate;
						e && u && (e.value = l.value, n(l.value))
					}()
				}), []), t
			}
		},
		cTJO: function (e, t, n) {
			"use strict";
			var a = n("J4zp"),
				r = n("284h");
			t.__esModule = !0, t.default = void 0;
			var o, i = r(n("q1tI")),
				c = n("elyg"),
				l = n("nOHt"),
				u = new Map,
				s = window.IntersectionObserver,
				d = {};
			var v = function (e, t) {
				var n = o || (s ? o = new s((function (e) {
					e.forEach((function (e) {
						if (u.has(e.target)) {
							var t = u.get(e.target);
							(e.isIntersecting || e.intersectionRatio > 0) && (o.unobserve(e.target), u.delete(e.target), t())
						}
					}))
				}), {
					rootMargin: "200px"
				}) : void 0);
				return n ? (n.observe(e), u.set(e, t), function () {
					try {
						n.unobserve(e)
					} catch (t) {
						console.error(t)
					}
					u.delete(e)
				}) : function () {}
			};

			function f(e, t, n, a) {
				(0, c.isLocalURL)(t) && (e.prefetch(t, n, a).catch((function (e) {
					0
				})), d[t + "%" + n] = !0)
			}
			var p = function (e) {
				var t = !1 !== e.prefetch,
					n = i.default.useState(),
					r = a(n, 2),
					o = r[0],
					u = r[1],
					p = (0, l.useRouter)(),
					m = p && p.pathname || "/",
					b = i.default.useMemo((function () {
						var t = (0, c.resolveHref)(m, e.href, !0),
							n = a(t, 2),
							r = n[0],
							o = n[1];
						return {
							href: r,
							as: e.as ? (0, c.resolveHref)(m, e.as) : o || r
						}
					}), [m, e.href, e.as]),
					g = b.href,
					h = b.as;
				i.default.useEffect((function () {
					if (t && s && o && o.tagName && (0, c.isLocalURL)(g) && !d[g + "%" + h]) return v(o, (function () {
						f(p, g, h)
					}))
				}), [t, o, g, h, p]);
				var y = e.children,
					O = e.replace,
					E = e.shallow,
					_ = e.scroll,
					N = e.locale;
				"string" === typeof y && (y = i.default.createElement("a", null, y));
				var S = i.Children.only(y),
					A = {
						ref: function (e) {
							e && u(e), S && "object" === typeof S && S.ref && ("function" === typeof S.ref ? S.ref(e) : "object" === typeof S.ref && (S.ref.current = e))
						},
						onClick: function (e) {
							S.props && "function" === typeof S.props.onClick && S.props.onClick(e), e.defaultPrevented || function (e, t, n, a, r, o, i, l) {
								("A" !== e.currentTarget.nodeName || ! function (e) {
									var t = e.currentTarget.target;
									return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
								}(e) && (0, c.isLocalURL)(n)) && (e.preventDefault(), null == i && (i = a.indexOf("#") < 0), t[r ? "replace" : "push"](n, a, {
									shallow: o,
									locale: l
								}).then((function (e) {
									e && i && (window.scrollTo(0, 0), document.body.focus())
								})))
							}(e, p, g, h, O, E, _, N)
						}
					};
				return t && (A.onMouseEnter = function (e) {
					(0, c.isLocalURL)(g) && (S.props && "function" === typeof S.props.onMouseEnter && S.props.onMouseEnter(e), f(p, g, h, {
						priority: !0
					}))
				}), (e.passHref || "a" === S.type && !("href" in S.props)) && (A.href = (0, c.addBasePath)((0, c.addLocale)(h, "undefined" !== typeof N ? N : p && p.locale, p && p.defaultLocale))), i.default.cloneElement(S, A)
			};
			t.default = p
		},
		co3k: function (e, t, n) {
			"use strict";
			var a = n("q1tI"),
				r = n.n(a),
				o = n("kI6m"),
				i = n.n(o),
				c = r.a.createElement;
			t.a = function (e) {
				var t = e.id,
					n = e.btnClass,
					a = e.className,
					r = e.text,
					o = e.onClick,
					l = e.isSubmit,
					u = e.icon,
					s = e.disabled;
				return l ? c("input", {
					type: "submit",
					value: r,
					className: "".concat(n, " ").concat(a, " ").concat(i.a.btnRound, " "),
					id: t,
					disabled: s
				}) : c("button", {
					className: "".concat(n, " ").concat(a, " ").concat(i.a.btnRound, " "),
					onClick: o,
					id: t,
					disabled: s
				}, u && c("img", {
					"data-src": u,
					alt: r,
					className: "lazyload"
				}), r)
			}
		},
		jobX: function (e, t, n) {
			"use strict";
			var a = n("KQm4"),
				r = n("rePB"),
				o = n("q1tI"),
				i = n("/MKj"),
				c = n("ZPNs"),
				l = n("Fw/C"),
				u = n("qL8y");

			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}

			function d(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? s(Object(n), !0).forEach((function (t) {
						Object(r.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			t.a = function (e, t) {
				var n = l.schema[e];
				"function" === typeof n && (n = n({}));
				var r = Object(i.c)(),
					s = Object(i.e)(),
					v = Object(i.d)((function (e) {
						var t;
						return null === e || void 0 === e || null === (t = e.genericReducer) || void 0 === t ? void 0 : t[n.props]
					}), i.b);
				Object(o.useEffect)((function () {
					var t = l.schema[e];
					if ("function" === typeof t && (t = t({})), t.persist) {
						var n, a, o = u.a(t.props),
							i = null === (n = s.getState()) || void 0 === n ? void 0 : n.genericReducer;
						if (o) r({
							type: e + "_SUCCESS",
							data: o,
							readProps: t.props
						});
						else if (null === i || void 0 === i || null === (a = i[t.props]) || void 0 === a ? void 0 : a.data) {
							var c;
							u.b(t.props, null === i || void 0 === i || null === (c = i[t.props]) || void 0 === c ? void 0 : c.data)
						}
					}
				}), [e]);
				var f = function (e) {
						return d(d({}, t), e)
					},
					p = function (t) {
						var n = function (t) {
								var n = f(t),
									a = l.schema[e];
								return "function" === typeof a && (a = a(n)), a
							}(t),
							o = f(t);
						(null === n || void 0 === n ? void 0 : n.url) ? ((null === o || void 0 === o ? void 0 : o.beforeStore) || (null === o || void 0 === o ? void 0 : o.refresh) || (null === n || void 0 === n ? void 0 : n.append) ? r({
							type: e + "_PENDING",
							data: (null === o || void 0 === o ? void 0 : o.initialData) || (null === v || void 0 === v ? void 0 : v.data),
							readProps: n.props
						}) : r({
							type: e + "_PENDING",
							data: o.initialData,
							readProps: n.props
						}), Object(c.request)({
							url: n.url,
							method: n.method,
							payload: o.payload
						}).then((function (t) {
							var i, c;
							(null === t || void 0 === t ? void 0 : t.statusCode) || (null === t || void 0 === t || null === (i = t.data) || void 0 === i ? void 0 : i.statusCode) ? r({
								type: e + "_FAILURE",
								readProps: n.props
							}): (c = o.beforeStore ? o.beforeStore((null === t || void 0 === t ? void 0 : t.data) || t) : (null === t || void 0 === t ? void 0 : t.data) || t, (null === n || void 0 === n ? void 0 : n.append) && !o.initialData && (c = "top" === (null === n || void 0 === n ? void 0 : n.append) ? [].concat(Object(a.a)(c), Object(a.a)(null === v || void 0 === v ? void 0 : v.data)) : [].concat(Object(a.a)(null === v || void 0 === v ? void 0 : v.data), Object(a.a)(c))), n.persist && u.b(n.props, c), r(d(d({
								type: e + "_SUCCESS",
								data: c,
								readProps: n.props
							}, t.page && {
								page: null === t || void 0 === t ? void 0 : t.page
							}), t.numResults && {
								numResults: null === t || void 0 === t ? void 0 : t.numResults
							})))
						})).catch((function (t) {
							console.error("api error: ", t), r({
								type: e + "_FAILURE",
								readProps: n.props
							})
						}))) : r({
							type: e + "_SUCCESS",
							data: o.payload,
							readProps: n.props
						})
					};
				return Object(o.useEffect)((function () {
					void 0 === (t || n).lazy || (t || n).lazy || p(t)
				}), []), [v, p, {
					fetchNext: function (e) {
						p(e)
					},
					refresh: function (e) {
						p(d(d({}, e), {}, {
							refresh: !0
						}))
					}
				}]
			}
		},
		kI6m: function (e, t, n) {
			e.exports = {
				btnRound: "Button_btnRound__3VAH7"
			}
		},
		lSNA: function (e, t) {
			e.exports = function (e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
		},
		lwAK: function (e, t, n) {
			"use strict";
			var a;
			t.__esModule = !0, t.AmpStateContext = void 0;
			var r = ((a = n("q1tI")) && a.__esModule ? a : {
				default: a
			}).default.createContext({});
			t.AmpStateContext = r
		},
		qL8y: function (e, t, n) {
			"use strict";
			n.d(t, "b", (function () {
				return o
			})), n.d(t, "a", (function () {
				return i
			}));
			var a = n("rePB");

			function r(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}
			var o = function (e, t, n) {
					var o = function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? r(Object(n), !0).forEach((function (t) {
								Object(a.a)(e, t, n[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}))
						}
						return e
					}({}, t);
					null === n || void 0 === n || n.map((function (e) {
						return o[e] = null
					})), localStorage.setItem(e, JSON.stringify(o))
				},
				i = function (e) {
					return JSON.parse(localStorage.getItem(e))
				}
		},
		wx14: function (e, t, n) {
			"use strict";

			function a() {
				return (a = Object.assign || function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "a", (function () {
				return a
			}))
		},
		wyBh: function (e, t, n) {
			"use strict";
			n.d(t, "a", (function () {
				return a
			})), n.d(t, "b", (function () {
				return r
			})), n.d(t, "f", (function () {
				return o
			})), n.d(t, "c", (function () {
				return i
			})), n.d(t, "e", (function () {
				return c
			})), n.d(t, "g", (function () {
				return l
			})), n.d(t, "d", (function () {
				return u
			}));
			var a = {
					HOME: "Hmlet | Home",
					COMMUNITY: "Hmlet | Community",
					LANDLORDS: "Hmlet | Landlords",
					MEMBERSHIP: "Hmlet | Membership",
					CORPORATE: "Hmlet | Corporate Housing",
					NEWS_ROOM: "Hmlet | News Room",
					ABOUT_US: "Hmlet | About Us",
					FAQ: "Hmlet | FAQ",
					TERMS_PAGE: "Hmlet | Terms & Conditions",
					PRIVACY_POLICY: "Hmlet | Privacy Policy",
					APP_PRIVACY: "Hmlet | App Privacy Policy",
					VERIFY_ACCOUNT: "Hmlet | Verify Your Account",
					RESET_PASSWORD: "Hmlet | Reset Your Account Password",
					NOT_FOUND: "404 Page Not Found",
					SERVER_ERROR: "Server error",
					BOOKING_PAGE: "Hmlet | Booking",
					CAREER: "Hmlet | Career",
					CITIES: "Hmlet | Cities",
					MAIN_FORM: "Hmlet | Form",
					THANK_YOU: "Hmlet | Thank You",
					YOU_CAN_BOOK_ME: "Hmlet | You can book me",
					UNIT: "Hmlet | ",
					FURNITURE: "Hmlet | Furniture",
					INTERIOR: "Hmlet | Interior",
					LISTED: "Hmlet | Listing",
					ACCOUNT: "Hmlet | My Account",
					COMPARE: "Hmlet | Compare",
					BLOG: "Hmlet | Blog"
				},
				r = {
					HOME_PAGE: "",
					COMMUNITY_PAGE: "/community",
					MEMBERSHIP_PAGE: "/membership",
					CORPORATE_PAGE: "/corporate",
					LANDLORDS_PAGE: "/landlords",
					ABOUT_US_PAGE: "/about-us",
					NEWS_PAGE: "/newsroom",
					FAQ_PAGE: "/faq",
					PRIVACY_PAGE: "/privacy-policy",
					APP_PRIVACY_PAGE: "/app-privacy",
					USER_GEN_TERM_PAGE: "/user-generated-tos",
					TERM_PAGE: "/terms-and-conditions",
					CAREER_PAGE: "/careers",
					CAREER_LISTING_PAGE: "/career-listing",
					ACCOUNT_VERIFICATION: "/account-verification",
					BOOKING: "/booking",
					CITIES: "/cities",
					MAIN_FORM: "/form/",
					UNIT_LISTING_PAGES: "/",
					BUILDING: function (e, t, n, a) {
						return "/".concat(e, "/").concat(t, "/").concat(n, "/").concat(a)
					},
					THANK_YOU: "/thank-you",
					YOU_CAN_BOOK_ME: "/youcanbookme",
					FURNITURE: "https://furniture.hmlet.com/",
					INTERIOR: "https://www.interiors.hmlet.com/",
					LISTED: "https://listed.hmlet.com/",
					BLOG: "https://www.hmlet.com/blog?utm_source=website&utm_content=footerMenuLink"
				},
				o = {
					SINGAPORE: {
						CODE: "SG",
						COUNTRY: "Singapore",
						SLUG: "singapore",
						DIAL: "65",
						BOT: "Singapore"
					},
					SYDNEY: {
						CODE: "AU",
						COUNTRY: "Australia",
						SLUG: "sydney",
						DIAL: "61",
						BOT: "Sydney"
					},
					TOKYO: {
						CODE: "JP",
						COUNTRY: "Japan",
						SLUG: "tokyo",
						DIAL: "81",
						BOT: "Tokyo"
					},
					HONGKONG: {
						CODE: "HK",
						COUNTRY: "Hong Kong",
						SLUG: "hongkong",
						DIAL: "852",
						BOT: "Hong Kong"
					}
				},
				i = {
					SG: "6531290089",
					AU: "61240479208",
					HK: "85230022321",
					JP: "817077735033"
				},
				c = {
					singapore: [{
						min: 1200,
						max: 1500,
						range: "1,200 - 1,500"
					}, {
						min: 1500,
						max: 2e3,
						range: "1,500 - 2,000"
					}, {
						min: 2e3,
						max: 3e3,
						range: "2,000 - 3,000"
					}, {
						min: 3e3,
						max: 4e3,
						range: "3,000 - 4,000"
					}, {
						min: 4e3,
						max: 5e3,
						range: "4,000 - 5,000"
					}, {
						min: 5e3,
						max: 6e3,
						range: "5,000 - 6,000"
					}, {
						min: 6e3,
						max: 7e3,
						range: "> 6,000"
					}],
					hongkong: [{
						min: 7300,
						max: 10500,
						range: "7,300 - 10,500"
					}, {
						min: 11500,
						max: 13e3,
						range: "11,500 - 13,000"
					}, {
						min: 13e3,
						max: 15e3,
						range: "13,000 - 15,000"
					}, {
						min: 15e3,
						max: 18e3,
						range: "15,000 - 18,000"
					}, {
						min: 18e3,
						max: 2e4,
						range: "18,000 - 20,000"
					}, {
						min: 2e4,
						max: 23e3,
						range: "20,000 - 23,000"
					}, {
						min: 23e3,
						max: 3e4,
						range: "23,000 - 30,000"
					}],
					sydney: [{
						min: 1200,
						max: 1500,
						range: "1,200 - 1,500"
					}, {
						min: 1500,
						max: 2e3,
						range: "1,500 - 2,000"
					}, {
						min: 2e3,
						max: 2400,
						range: "2,000 - 2,400"
					}, {
						min: 2400,
						max: 2600,
						range: "2,400 - 2,600"
					}, {
						min: 2600,
						max: 9e3,
						range: "> 2,600"
					}],
					tokyo: [{
						min: 1e5,
						max: 125e3,
						range: "100,000 - 125,000"
					}, {
						min: 125e3,
						max: 15e4,
						range: "125,000 - 150,000"
					}, {
						min: 15e4,
						max: 175e3,
						range: "150,000 - 175,000"
					}, {
						min: 175e3,
						max: 2e5,
						range: "175,000 - 200,000"
					}, {
						min: 2e5,
						max: 225e3,
						range: "200,000 - 225,000"
					}, {
						min: 225e3,
						max: 25e4,
						range: "225,000 - 250,000"
					}, {
						min: 25e4,
						max: 275e3,
						range: "250,000 - 275,000"
					}, {
						min: 275e3,
						max: 3e5,
						range: "275,000 - 300,000"
					}, {
						min: 3e5,
						max: 9e5,
						range: "> 300,000"
					}]
				},
				l = 310,
				u = [{
					label: "Rooms Available",
					value: "rooms-available"
				}, {
					label: "Waitlist",
					value: "waitlist"
				}]
		},
		yFsk: function (e, t, n) {
			"use strict";
			var a = n("q1tI");
			t.a = function (e, t) {
				var n = function (n) {
					e.current && !e.current.contains(n.target) && t()
				};
				Object(a.useEffect)((function () {
					return document.addEventListener("click", n),
						function () {
							document.removeEventListener("click", n)
						}
				}))
			}
		}
	}
]);