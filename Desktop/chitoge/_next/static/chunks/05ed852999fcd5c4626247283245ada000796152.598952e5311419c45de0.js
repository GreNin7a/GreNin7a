(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[7], {
		"5Yp1": function (e, t, n) {
			"use strict";
			var o = n("wx14"),
				r = n("ODXe"),
				i = n("q1tI"),
				a = n.n(i),
				c = n("6yR0"),
				l = n("rePB"),
				u = n("YFqc"),
				s = n.n(u),
				f = n("2v50"),
				d = n("Ku6/"),
				p = n.n(d),
				v = n("2gGe"),
				h = n("wyBh"),
				m = n("bhxT"),
				b = n("nOHt"),
				y = a.a.createElement,
				g = function (e) {
					var t = e.image,
						n = e.number;
					return y("div", {
						className: p.a.telephoneBlock
					}, n && y("img", {
						"data-src": t,
						className: "lazyload"
					}), y("a", {
						href: "tel:".concat(n.trim())
					}, n, y("br", null), "Operating hours from 9am to 6pm"))
				};
			var O = function (e) {
					var t, n, o, i = e.cities,
						a = e.snippets,
						c = e.links,
						u = e.images,
						d = e.lang,
						O = e.selectedCity,
						w = Object(v.a)(),
						j = Object(r.a)(w, 3),
						E = j[0],
						k = j[1],
						_ = j[2],
						C = Object(b.useRouter)(),
						T = function (e) {
							var t = Number(e.currentTarget.id);
							k(t)
						},
						P = function (e, t) {
							var n, o, r, i;
							m.a.track({
								eventName: m.u.socialMedia,
								props: (i = {}, Object(l.a)(i, m.u.props.currentPage.slug, null === (n = Object.keys(C.query)) || void 0 === n || null === (o = n.map((function (e) {
									return C.query[e]
								}))) || void 0 === o ? void 0 : o.join(",")), Object(l.a)(i, m.u.props.currentPage.title, null === (r = document) || void 0 === r ? void 0 : r.title), Object(l.a)(i, m.u.props.targetPage.title, e), Object(l.a)(i, m.u.props.targetPage.slug, t), i)
							})
						},
						S = "";
					return "SG" !== O && O && (S = "_" + O.toLowerCase()), y("footer", {
						className: p.a.footerWrapper
					}, y("div", {
						className: "container"
					}, y("div", {
						className: "row flex-md-row flex-column"
					}, y("div", {
						className: "col-md-3 col-12"
					}, y("img", {
						src: Object(f.a)({
							version: "v1587010481",
							name: "logo_black.png"
						}),
						className: p.a.footerLogo
					}), y("div", {
						className: p.a.addressBlock
					}, y("img", {
						"data-src": null === u || void 0 === u ? void 0 : u.footer_address,
						className: "lazyload"
					}), y("address", {
						dangerouslySetInnerHTML: {
							__html: (null === a || void 0 === a || null === (t = a["footer_address" + S]) || void 0 === t ? void 0 : t.trim()) || (null === a || void 0 === a || null === (n = a.footer_address) || void 0 === n ? void 0 : n.trim())
						}
					})), function (e) {
						var t = C.query.citySlug;
						return t ? y(g, "singapore" === t ? {
							image: e,
							number: "+65 3138 5596"
						} : "hongkong" === t ? {
							image: e,
							number: "+852 3001 5849"
						} : {
							image: e,
							number: ""
						}) : "en" === d ? y(g, {
							image: e,
							number: "+65 3138 5596"
						}) : null
					}(null === u || void 0 === u ? void 0 : u.footer_phone)), y("div", {
						className: "col-md-9 mt-md-0 mb-md-0 col-12 mt-4 mb-5"
					}, y("div", {
						className: "row flex-md-row flex-column"
					}, y("div", {
						className: "col-12 col-md ".concat(p.a.footerCol)
					}, y("div", {
						className: "row ".concat(p.a.menu),
						id: 0,
						onClick: T
					}, y("h1", {
						className: "col"
					}, null === a || void 0 === a ? void 0 : a.footer_find_a_home), y("div", {
						className: "".concat(p.a.arrow, " ").concat(0 === E ? p.a.up : p.a.down, " col-auto")
					})), y("ul", {
						ref: function (e) {
							return _.current[0] = e
						}
					}, null === i || void 0 === i || null === (o = i.inOrder) || void 0 === o ? void 0 : o.map((function (e) {
						return y("li", {
							key: e.Code
						}, y(s.a, {
							href: "/".concat(d).concat(h.b.UNIT_LISTING_PAGES).concat(e.Slug)
						}, y("a", {
							onClick: function () {
								var t;
								m.a.track({
									eventName: m.j.name,
									props: (t = {}, Object(l.a)(t, m.j.props.menu, "bottom"), Object(l.a)(t, m.j.props.cityName, null === e || void 0 === e ? void 0 : e.Name), t)
								}), m.a.menuNavigation(!1, C, h.a.UNIT + e.Slug, e.Slug)
							}
						}, e.Name)))
					}))), y("div", {
						className: p.a.separator
					}, " ")), y("div", {
						className: "col-12 col-md ".concat(p.a.footerCol)
					}, y("div", {
						className: "row ".concat(p.a.menu),
						id: 1,
						onClick: T
					}, y("h1", {
						className: "col"
					}, null === a || void 0 === a ? void 0 : a.footer_services), y("div", {
						className: "".concat(p.a.arrow, " ").concat(2 === E ? p.a.up : p.a.down, " col-auto")
					})), y("ul", {
						ref: function (e) {
							return _.current[1] = e
						}
					}, y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.MEMBERSHIP_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.MEMBERSHIP)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_membership))), y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.CORPORATE_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.CORPORATE)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_corporate_stays))), y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.LANDLORDS_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.LANDLORDS)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_landlords)))), y("div", {
						className: p.a.separator
					}, " ")), y("div", {
						className: "col-12 col-md ".concat(p.a.footerCol)
					}, y("div", {
						className: "row ".concat(p.a.menu),
						id: 2,
						onClick: T
					}, y("h1", {
						className: "col"
					}, null === a || void 0 === a ? void 0 : a.footer_company), y("div", {
						className: "".concat(p.a.arrow, " ").concat(1 === E ? p.a.up : p.a.down, " col-auto")
					})), y("ul", {
						ref: function (e) {
							return _.current[2] = e
						}
					}, y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.ABOUT_US_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.ABOUT_US)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_about_us))), y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.CAREER_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.CAREER)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_careers))), y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.NEWS_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.NEWS_ROOM)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_press_and_media))), y("li", null, y(s.a, {
						href: "/".concat(d).concat(h.b.FAQ_PAGE)
					}, y("a", {
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.FAQ)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_faq))), y("li", null, y("a", {
						href: h.b.BLOG,
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.BLOG)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_blog))), y("div", {
						className: p.a.separator
					}, " ")), y("div", {
						className: "col-12 col-md ".concat(p.a.footerCol)
					}, y("div", {
						className: "row ".concat(p.a.menu),
						id: 3,
						onClick: T
					}, y("h1", {
						className: "col"
					}, null === a || void 0 === a ? void 0 : a.footer_products), y("div", {
						className: "".concat(p.a.arrow, " ").concat(3 === E ? p.a.up : p.a.down, " col-auto")
					})), y("ul", {
						ref: function (e) {
							return _.current[3] = e
						}
					}, y("li", null, y("a", {
						href: h.b.FURNITURE,
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.FURNITURE)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_furniture)), y("li", null, y("a", {
						href: h.b.INTERIOR,
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.INTERIOR)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_interior)), y("li", null, y("a", {
						href: h.b.LISTED,
						onClick: function () {
							return m.a.menuNavigation(!1, C, h.a.LISTED)
						}
					}, null === a || void 0 === a ? void 0 : a.footer_hmlet_listed))), y("div", {
						className: p.a.separator
					}, " "))))), y("div", {
						className: "divider my-30 d-none d-sm-none d-md-block"
					}), y("div", {
						className: p.a.footerEnd
					}, y("div", {
						className: p.a.socialMedia
					}, y("a", {
						href: null === c || void 0 === c ? void 0 : c.footer_facebook,
						target: "_blank",
						rel: "noreferrer",
						onClick: function () {
							return P("facebook", null === c || void 0 === c ? void 0 : c.footer_facebook)
						}
					}, y("img", {
						src: Object(f.a)({
							version: "v1587010481",
							name: "footer-facebook-button.svg"
						}),
						className: "footerLogo"
					})), y("a", {
						href: null === c || void 0 === c ? void 0 : c.footer_instagram,
						target: "_blank",
						rel: "noreferrer",
						onClick: function () {
							return P("instagram", null === c || void 0 === c ? void 0 : c.footer_instagram)
						}
					}, y("img", {
						src: Object(f.a)({
							version: "v1587010481",
							name: "footer-instagram-button.svg"
						}),
						className: "footerLogo"
					})), y("a", {
						href: null === c || void 0 === c ? void 0 : c.footer_twitter,
						target: "_blank",
						rel: "noreferrer",
						onClick: function () {
							return P("twitter", null === c || void 0 === c ? void 0 : c.footer_twitter)
						}
					}, y("img", {
						src: Object(f.a)({
							version: "v1587010481",
							name: "footer-twitter-button.svg"
						}),
						className: "footerLogo"
					})), y("a", {
						href: null === c || void 0 === c ? void 0 : c.footer_linkedin,
						target: "_blank",
						rel: "noreferrer",
						onClick: function () {
							return P("linkedin", null === c || void 0 === c ? void 0 : c.footer_linkedin)
						}
					}, y("img", {
						src: Object(f.a)({
							version: "v1587010481",
							name: "footer-linkedin-button.svg"
						}),
						className: "footerLogo"
					}))), y("p", null, y(s.a, {
						href: h.b.PRIVACY_PAGE
					}, y("a", null, null === a || void 0 === a ? void 0 : a.footer_privacy)), ".", " ", y(s.a, {
						href: h.b.TERM_PAGE
					}, y("a", null, null === a || void 0 === a ? void 0 : a.footer_terms_and_conditions)), ".", " ", y(s.a, {
						href: h.b.USER_GEN_TERM_PAGE
					}, y("a", null, null === a || void 0 === a ? void 0 : a.footer_footer_user_generated_tos)), ". ", null === a || void 0 === a ? void 0 : a.footer_copyright, y("span", null, null === a || void 0 === a ? void 0 : a.footer_be_unordinary)))))
				},
				w = n("KQm4"),
				j = n("EaTz"),
				E = n.n(j),
				k = n("RoTl"),
				_ = a.a.createElement;
			var C = function (e) {
					var t, n = e.cities,
						o = e.citySlug,
						r = e.lang,
						i = e.styles;
					return _("div", {
						className: "row"
					}, null === n || void 0 === n || null === (t = n.inOrder) || void 0 === t ? void 0 : t.map((function (e, t) {
						return _("div", {
							key: t,
							className: "col-12 ".concat(e.Slug === o ? i.simpleLinkActive : i.simpleLink)
						}, _(s.a, {
							href: "/".concat(r).concat(h.b.UNIT_LISTING_PAGES).concat(e.Slug, "/")
						}, _("a", {
							onClick: function () {
								var t;
								return m.a.track({
									eventName: m.j.name,
									props: (t = {}, Object(l.a)(t, m.j.props.menu, "filterbar"), Object(l.a)(t, m.j.props.cityName, null === e || void 0 === e ? void 0 : e.Name), t)
								})
							}
						}, e.Name)))
					})))
				},
				T = n("eETR"),
				P = a.a.createElement;

			function S(e) {
				var t = e.items,
					n = e.checkedItems,
					o = e.handleChange,
					r = e.mobile,
					i = void 0 !== r && r;
				return P("div", {
					className: i ? "" : "d-flex flex-wrap flex-row pl-3 pt-0"
				}, t.map((function (e) {
					return P(T.a, {
						key: e.label,
						label: e.label,
						name: e.value,
						checked: n.includes(e.value),
						className: i ? "mt-2" : "mt-2 mt-md-4 ml-0 col-6",
						onChange: o,
						id: e.value
					})
				})))
			}
			var N = a.a.createElement;
			var x = function (e) {
					var t = e.areas,
						n = e.checkedAreas,
						o = e.checkAllAreas,
						r = e.handleChangeAreas,
						i = e.setAreas,
						a = e.setCheckAllAreas,
						c = e.styles;
					return N("div", {
						className: "p-2"
					}, N("div", {
						className: "d-flex flex-row ml-3 mb-2"
					}, N(T.a, {
						checked: o,
						onChange: function () {
							i(o ? [] : t.map((function (e) {
								return e.value
							}))), a(!o)
						}
					}), N("span", {
						className: c.dropdownText
					}, "All Areas")), N(S, {
						items: t,
						checkedItems: n,
						handleChange: r
					}))
				},
				M = a.a.createElement;
			var R = function (e) {
					var t = e.availabilityTypes,
						n = e.checkedAvailabilities,
						o = e.checkAllAvailabilities,
						r = e.handleChangeAvailabilities,
						i = e.setAvailabilities,
						a = e.setCheckAllAvailabilities,
						c = e.styles;
					return M("div", {
						className: "p-2"
					}, M("div", {
						className: "d-flex flex-row ml-3 mb-2"
					}, M(T.a, {
						checked: o,
						onChange: function () {
							i(o ? [] : t.map((function (e) {
								return e.value
							}))), a(!o)
						}
					}), M("span", {
						className: c.dropdownText
					}, "Select All")), M(S, {
						items: t,
						checkedItems: n,
						handleChange: r
					}))
				},
				A = a.a.createElement;
			var D = function (e) {
				var t = e.checkedRoomTypes,
					n = e.handledAllRoomsChecked,
					o = e.handleAllRoomCheckbox,
					r = e.handleChangeRoomTypes,
					i = e.id,
					a = e.mapRoomTypes,
					c = e.mobile,
					l = e.roomTypes,
					u = e.styles,
					s = e.type;
				return A("div", {
					className: "p-3"
				}, A("div", {
					className: "d-flex flex-row"
				}, A("div", null, " ", A(T.a, {
					name: s,
					checked: n(s),
					onChange: o
				})), A("div", {
					className: u.dropdownText
				}, i)), A("div", {
					className: "ml-3"
				}, A(S, {
					mobile: c,
					items: a(l, s),
					checkedItems: t,
					handleChange: r
				})))
			};

			function L(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function F(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}

			function H(e, t, n) {
				return t && F(e.prototype, t), n && F(e, n), e
			}

			function I(e, t) {
				return (I = Object.setPrototypeOf || function (e, t) {
					return e.__proto__ = t, e
				})(e, t)
			}

			function B(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && I(e, t)
			}

			function V(e) {
				return (V = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
					return typeof e
				} : function (e) {
					return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function U(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function W(e, t) {
				return !t || "object" !== V(t) && "function" !== typeof t ? U(e) : t
			}

			function G(e) {
				return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}
			var K = {};

			function X(e, t) {
				0
			}

			function Y(e, t, n) {
				t || K[n] || (e(!1, n), K[n] = !0)
			}
			var z = function (e, t) {
				Y(X, e, t)
			};

			function q(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function Q(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? q(Object(n), !0).forEach((function (t) {
						Object(l.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var Z = function (e) {
					var t, n, o = e.className,
						r = e.included,
						i = e.vertical,
						c = e.style,
						u = e.length,
						s = e.offset,
						f = e.reverse;
					u < 0 && (f = !f, u = Math.abs(u), s = 100 - s);
					var d = i ? (t = {}, Object(l.a)(t, f ? "top" : "bottom", "".concat(s, "%")), Object(l.a)(t, f ? "bottom" : "top", "auto"), Object(l.a)(t, "height", "".concat(u, "%")), t) : (n = {}, Object(l.a)(n, f ? "right" : "left", "".concat(s, "%")), Object(l.a)(n, f ? "left" : "right", "auto"), Object(l.a)(n, "width", "".concat(u, "%")), n),
						p = Q(Q({}, c), d);
					return r ? a.a.createElement("div", {
						className: o,
						style: p
					}) : null
				},
				J = n("Ff2n");

			function $(e, t, n) {
				return ($ = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
					var o = function (e, t) {
						for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = G(e)););
						return e
					}(e, t);
					if (o) {
						var r = Object.getOwnPropertyDescriptor(o, t);
						return r.get ? r.get.call(n) : r.value
					}
				})(e, t, n || e)
			}
			var ee = n("i8i4"),
				te = n.n(ee);

			function ne(e, t, n, o) {
				var r = te.a.unstable_batchedUpdates ? function (e) {
					te.a.unstable_batchedUpdates(n, e)
				} : n;
				return e.addEventListener && e.addEventListener(t, r, o), {
					remove: function () {
						e.removeEventListener && e.removeEventListener(t, r)
					}
				}
			}
			var oe = n("TSYQ"),
				re = n.n(oe);

			function ie(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function ae(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? ie(Object(n), !0).forEach((function (t) {
						Object(l.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var ce = function (e) {
				var t = e.prefixCls,
					n = e.vertical,
					o = e.reverse,
					r = e.marks,
					i = e.dots,
					c = e.step,
					u = e.included,
					s = e.lowerBound,
					f = e.upperBound,
					d = e.max,
					p = e.min,
					v = e.dotStyle,
					h = e.activeDotStyle,
					m = d - p,
					b = function (e, t, n, o, r, i) {
						z(!n || o > 0, "`Slider[step]` should be a positive number in order to make Slider[dots] work.");
						var a = Object.keys(t).map(parseFloat).sort((function (e, t) {
							return e - t
						}));
						if (n && o)
							for (var c = r; c <= i; c += o) - 1 === a.indexOf(c) && a.push(c);
						return a
					}(0, r, i, c, p, d).map((function (e) {
						var r, i = "".concat(Math.abs(e - p) / m * 100, "%"),
							c = !u && e === f || u && e <= f && e >= s,
							d = ae(ae({}, v), {}, n ? Object(l.a)({}, o ? "top" : "bottom", i) : Object(l.a)({}, o ? "right" : "left", i));
						c && (d = ae(ae({}, d), h));
						var b = re()((r = {}, Object(l.a)(r, "".concat(t, "-dot"), !0), Object(l.a)(r, "".concat(t, "-dot-active"), c), Object(l.a)(r, "".concat(t, "-dot-reverse"), o), r));
						return a.a.createElement("span", {
							className: b,
							style: d,
							key: e
						})
					}));
				return a.a.createElement("div", {
					className: "".concat(t, "-step")
				}, b)
			};

			function le(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function ue(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? le(Object(n), !0).forEach((function (t) {
						Object(l.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var se = function (e) {
				var t = e.className,
					n = e.vertical,
					o = e.reverse,
					r = e.marks,
					i = e.included,
					c = e.upperBound,
					u = e.lowerBound,
					s = e.max,
					f = e.min,
					d = e.onClickLabel,
					p = Object.keys(r),
					v = s - f,
					h = p.map(parseFloat).sort((function (e, t) {
						return e - t
					})).map((function (e) {
						var s, p = r[e],
							h = "object" === V(p) && !a.a.isValidElement(p),
							m = h ? p.label : p;
						if (!m && 0 !== m) return null;
						var b = !i && e === c || i && e <= c && e >= u,
							y = re()((s = {}, Object(l.a)(s, "".concat(t, "-text"), !0), Object(l.a)(s, "".concat(t, "-text-active"), b), s)),
							g = Object(l.a)({
								marginBottom: "-50%"
							}, o ? "top" : "bottom", "".concat((e - f) / v * 100, "%")),
							O = Object(l.a)({
								transform: "translateX(".concat(o ? "50%" : "-50%", ")"),
								msTransform: "translateX(".concat(o ? "50%" : "-50%", ")")
							}, o ? "right" : "left", "".concat((e - f) / v * 100, "%")),
							w = n ? g : O,
							j = h ? ue(ue({}, w), p.style) : w;
						return a.a.createElement("span", {
							className: y,
							style: j,
							key: e,
							onMouseDown: function (t) {
								return d(t, e)
							},
							onTouchStart: function (t) {
								return d(t, e)
							}
						}, m)
					}));
				return a.a.createElement("div", {
					className: t
				}, h)
			};

			function fe(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function de(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? fe(Object(n), !0).forEach((function (t) {
						Object(l.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function pe(e) {
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
					var n, o = G(e);
					if (t) {
						var r = G(this).constructor;
						n = Reflect.construct(o, arguments, r)
					} else n = o.apply(this, arguments);
					return W(this, n)
				}
			}
			var ve = function (e) {
					B(n, e);
					var t = pe(n);

					function n() {
						var e;
						return L(this, n), (e = t.apply(this, arguments)).state = {
							clickFocused: !1
						}, e.setHandleRef = function (t) {
							e.handle = t
						}, e.handleMouseUp = function () {
							document.activeElement === e.handle && e.setClickFocus(!0)
						}, e.handleMouseDown = function (t) {
							t.preventDefault(), e.focus()
						}, e.handleBlur = function () {
							e.setClickFocus(!1)
						}, e.handleKeyDown = function () {
							e.setClickFocus(!1)
						}, e
					}
					return H(n, [{
						key: "componentDidMount",
						value: function () {
							this.onMouseUpListener = ne(document, "mouseup", this.handleMouseUp)
						}
					}, {
						key: "componentWillUnmount",
						value: function () {
							this.onMouseUpListener && this.onMouseUpListener.remove()
						}
					}, {
						key: "setClickFocus",
						value: function (e) {
							this.setState({
								clickFocused: e
							})
						}
					}, {
						key: "clickFocus",
						value: function () {
							this.setClickFocus(!0), this.focus()
						}
					}, {
						key: "focus",
						value: function () {
							this.handle.focus()
						}
					}, {
						key: "blur",
						value: function () {
							this.handle.blur()
						}
					}, {
						key: "render",
						value: function () {
							var e, t, n, o = this.props,
								r = o.prefixCls,
								i = o.vertical,
								c = o.reverse,
								u = o.offset,
								s = o.style,
								f = o.disabled,
								d = o.min,
								p = o.max,
								v = o.value,
								h = o.tabIndex,
								m = o.ariaLabel,
								b = o.ariaLabelledBy,
								y = o.ariaValueTextFormatter,
								g = Object(J.a)(o, ["prefixCls", "vertical", "reverse", "offset", "style", "disabled", "min", "max", "value", "tabIndex", "ariaLabel", "ariaLabelledBy", "ariaValueTextFormatter"]),
								O = re()(this.props.className, Object(l.a)({}, "".concat(r, "-handle-click-focused"), this.state.clickFocused)),
								w = i ? (e = {}, Object(l.a)(e, c ? "top" : "bottom", "".concat(u, "%")), Object(l.a)(e, c ? "bottom" : "top", "auto"), Object(l.a)(e, "transform", c ? null : "translateY(+50%)"), e) : (t = {}, Object(l.a)(t, c ? "right" : "left", "".concat(u, "%")), Object(l.a)(t, c ? "left" : "right", "auto"), Object(l.a)(t, "transform", "translateX(".concat(c ? "+" : "-", "50%)")), t),
								j = de(de({}, s), w),
								E = h || 0;
							return (f || null === h) && (E = null), y && (n = y(v)), a.a.createElement("div", Object.assign({
								ref: this.setHandleRef,
								tabIndex: E
							}, g, {
								className: O,
								style: j,
								onBlur: this.handleBlur,
								onKeyDown: this.handleKeyDown,
								onMouseDown: this.handleMouseDown,
								role: "slider",
								"aria-valuemin": d,
								"aria-valuemax": p,
								"aria-valuenow": v,
								"aria-disabled": !!f,
								"aria-label": m,
								"aria-labelledby": b,
								"aria-valuetext": n
							}))
						}
					}]), n
				}(a.a.Component),
				he = {
					MAC_ENTER: 3,
					BACKSPACE: 8,
					TAB: 9,
					NUM_CENTER: 12,
					ENTER: 13,
					SHIFT: 16,
					CTRL: 17,
					ALT: 18,
					PAUSE: 19,
					CAPS_LOCK: 20,
					ESC: 27,
					SPACE: 32,
					PAGE_UP: 33,
					PAGE_DOWN: 34,
					END: 35,
					HOME: 36,
					LEFT: 37,
					UP: 38,
					RIGHT: 39,
					DOWN: 40,
					PRINT_SCREEN: 44,
					INSERT: 45,
					DELETE: 46,
					ZERO: 48,
					ONE: 49,
					TWO: 50,
					THREE: 51,
					FOUR: 52,
					FIVE: 53,
					SIX: 54,
					SEVEN: 55,
					EIGHT: 56,
					NINE: 57,
					QUESTION_MARK: 63,
					A: 65,
					B: 66,
					C: 67,
					D: 68,
					E: 69,
					F: 70,
					G: 71,
					H: 72,
					I: 73,
					J: 74,
					K: 75,
					L: 76,
					M: 77,
					N: 78,
					O: 79,
					P: 80,
					Q: 81,
					R: 82,
					S: 83,
					T: 84,
					U: 85,
					V: 86,
					W: 87,
					X: 88,
					Y: 89,
					Z: 90,
					META: 91,
					WIN_KEY_RIGHT: 92,
					CONTEXT_MENU: 93,
					NUM_ZERO: 96,
					NUM_ONE: 97,
					NUM_TWO: 98,
					NUM_THREE: 99,
					NUM_FOUR: 100,
					NUM_FIVE: 101,
					NUM_SIX: 102,
					NUM_SEVEN: 103,
					NUM_EIGHT: 104,
					NUM_NINE: 105,
					NUM_MULTIPLY: 106,
					NUM_PLUS: 107,
					NUM_MINUS: 109,
					NUM_PERIOD: 110,
					NUM_DIVISION: 111,
					F1: 112,
					F2: 113,
					F3: 114,
					F4: 115,
					F5: 116,
					F6: 117,
					F7: 118,
					F8: 119,
					F9: 120,
					F10: 121,
					F11: 122,
					F12: 123,
					NUMLOCK: 144,
					SEMICOLON: 186,
					DASH: 189,
					EQUALS: 187,
					COMMA: 188,
					PERIOD: 190,
					SLASH: 191,
					APOSTROPHE: 192,
					SINGLE_QUOTE: 222,
					OPEN_SQUARE_BRACKET: 219,
					BACKSLASH: 220,
					CLOSE_SQUARE_BRACKET: 221,
					WIN_KEY: 224,
					MAC_FF_META: 224,
					WIN_IME: 229,
					isTextModifyingKeyEvent: function (e) {
						var t = e.keyCode;
						if (e.altKey && !e.ctrlKey || e.metaKey || t >= he.F1 && t <= he.F12) return !1;
						switch (t) {
							case he.ALT:
							case he.CAPS_LOCK:
							case he.CONTEXT_MENU:
							case he.CTRL:
							case he.DOWN:
							case he.END:
							case he.ESC:
							case he.HOME:
							case he.INSERT:
							case he.LEFT:
							case he.MAC_FF_META:
							case he.META:
							case he.NUMLOCK:
							case he.NUM_CENTER:
							case he.PAGE_DOWN:
							case he.PAGE_UP:
							case he.PAUSE:
							case he.PRINT_SCREEN:
							case he.RIGHT:
							case he.SHIFT:
							case he.UP:
							case he.WIN_KEY:
							case he.WIN_KEY_RIGHT:
								return !1;
							default:
								return !0
						}
					},
					isCharacterKey: function (e) {
						if (e >= he.ZERO && e <= he.NINE) return !0;
						if (e >= he.NUM_ZERO && e <= he.NUM_MULTIPLY) return !0;
						if (e >= he.A && e <= he.Z) return !0;
						if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) return !0;
						switch (e) {
							case he.SPACE:
							case he.QUESTION_MARK:
							case he.NUM_PLUS:
							case he.NUM_MINUS:
							case he.NUM_PERIOD:
							case he.NUM_DIVISION:
							case he.SEMICOLON:
							case he.DASH:
							case he.EQUALS:
							case he.COMMA:
							case he.PERIOD:
							case he.SLASH:
							case he.APOSTROPHE:
							case he.SINGLE_QUOTE:
							case he.OPEN_SQUARE_BRACKET:
							case he.BACKSLASH:
							case he.CLOSE_SQUARE_BRACKET:
								return !0;
							default:
								return !1
						}
					}
				},
				me = he;

			function be(e, t) {
				try {
					return Object.keys(t).some((function (n) {
						return e.target === Object(ee.findDOMNode)(t[n])
					}))
				} catch (n) {
					return !1
				}
			}

			function ye(e, t) {
				var n = t.min,
					o = t.max;
				return e < n || e > o
			}

			function ge(e) {
				return e.touches.length > 1 || "touchend" === e.type.toLowerCase() && e.touches.length > 0
			}

			function Oe(e, t) {
				var n = t.marks,
					o = t.step,
					r = t.min,
					i = t.max,
					a = Object.keys(n).map(parseFloat);
				if (null !== o) {
					var c = Math.floor((i - r) / o),
						l = Math.min((e - r) / o, c),
						u = Math.round(l) * o + r;
					a.push(u)
				}
				var s = a.map((function (t) {
					return Math.abs(e - t)
				}));
				return a[s.indexOf(Math.min.apply(Math, Object(w.a)(s)))]
			}

			function we(e, t) {
				return e ? t.clientY : t.pageX
			}

			function je(e, t) {
				return e ? t.touches[0].clientY : t.touches[0].pageX
			}

			function Ee(e, t) {
				var n = t.getBoundingClientRect();
				return e ? n.top + .5 * n.height : window.pageXOffset + n.left + .5 * n.width
			}

			function ke(e, t) {
				var n = t.max,
					o = t.min;
				return e <= o ? o : e >= n ? n : e
			}

			function _e(e, t) {
				var n = t.step,
					o = isFinite(Oe(e, t)) ? Oe(e, t) : 0;
				return null === n ? o : parseFloat(o.toFixed(function (e) {
					var t = e.toString(),
						n = 0;
					return t.indexOf(".") >= 0 && (n = t.length - t.indexOf(".") - 1), n
				}(n)))
			}

			function Ce(e) {
				e.stopPropagation(), e.preventDefault()
			}

			function Te(e, t, n) {
				var o = "increase";
				switch (e.keyCode) {
					case me.UP:
						o = t && n ? "decrease" : "increase";
						break;
					case me.RIGHT:
						o = !t && n ? "decrease" : "increase";
						break;
					case me.DOWN:
						o = t && n ? "increase" : "decrease";
						break;
					case me.LEFT:
						o = !t && n ? "increase" : "decrease";
						break;
					case me.END:
						return function (e, t) {
							return t.max
						};
					case me.HOME:
						return function (e, t) {
							return t.min
						};
					case me.PAGE_UP:
						return function (e, t) {
							return e + 2 * t.step
						};
					case me.PAGE_DOWN:
						return function (e, t) {
							return e - 2 * t.step
						};
					default:
						return
				}
				return function (e, t) {
					return function (e, t, n) {
						var o = {
								increase: function (e, t) {
									return e + t
								},
								decrease: function (e, t) {
									return e - t
								}
							},
							r = o[e](Object.keys(n.marks).indexOf(JSON.stringify(t)), 1),
							i = Object.keys(n.marks)[r];
						return n.step ? o[e](t, n.step) : Object.keys(n.marks).length && n.marks[i] ? n.marks[i] : t
					}(o, e, t)
				}
			}

			function Pe(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function Se(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Pe(Object(n), !0).forEach((function (t) {
						Object(l.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function Ne(e) {
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
					var n, o = G(e);
					if (t) {
						var r = G(this).constructor;
						n = Reflect.construct(o, arguments, r)
					} else n = o.apply(this, arguments);
					return W(this, n)
				}
			}

			function xe() {}

			function Me(e) {
				var t;
				return (t = function (e) {
					B(n, e);
					var t = Ne(n);

					function n(e) {
						var o;
						L(this, n), (o = t.call(this, e)).onMouseDown = function (e) {
							if (0 === e.button) {
								var t = o.props.vertical,
									n = we(t, e);
								if (be(e, o.handlesRefs)) {
									var r = Ee(t, e.target);
									o.dragOffset = n - r, n = r
								} else o.dragOffset = 0;
								o.removeDocumentEvents(), o.onStart(n), o.addDocumentMouseEvents()
							}
						}, o.onTouchStart = function (e) {
							if (!ge(e)) {
								var t = o.props.vertical,
									n = je(t, e);
								if (be(e, o.handlesRefs)) {
									var r = Ee(t, e.target);
									o.dragOffset = n - r, n = r
								} else o.dragOffset = 0;
								o.onStart(n), o.addDocumentTouchEvents(), Ce(e)
							}
						}, o.onFocus = function (e) {
							var t = o.props,
								n = t.onFocus,
								r = t.vertical;
							if (be(e, o.handlesRefs)) {
								var i = Ee(r, e.target);
								o.dragOffset = 0, o.onStart(i), Ce(e), n && n(e)
							}
						}, o.onBlur = function (e) {
							var t = o.props.onBlur;
							o.onEnd(), t && t(e)
						}, o.onMouseUp = function () {
							o.handlesRefs[o.prevMovedHandleIndex] && o.handlesRefs[o.prevMovedHandleIndex].clickFocus()
						}, o.onMouseMove = function (e) {
							if (o.sliderRef) {
								var t = we(o.props.vertical, e);
								o.onMove(e, t - o.dragOffset)
							} else o.onEnd()
						}, o.onTouchMove = function (e) {
							if (!ge(e) && o.sliderRef) {
								var t = je(o.props.vertical, e);
								o.onMove(e, t - o.dragOffset)
							} else o.onEnd()
						}, o.onKeyDown = function (e) {
							o.sliderRef && be(e, o.handlesRefs) && o.onKeyboard(e)
						}, o.onClickMarkLabel = function (e, t) {
							e.stopPropagation(), o.onChange({
								value: t
							}), o.setState({
								value: t
							}, (function () {
								return o.onEnd(!0)
							}))
						}, o.saveSlider = function (e) {
							o.sliderRef = e
						};
						var r = e.step,
							i = e.max,
							a = e.min,
							c = !isFinite(i - a) || (i - a) % r === 0;
						return z(!r || Math.floor(r) !== r || c, "Slider[max] - Slider[min] (".concat(i - a, ") should be a multiple of Slider[step] (").concat(r, ")")), o.handlesRefs = {}, o
					}
					return H(n, [{
						key: "componentDidMount",
						value: function () {
							this.document = this.sliderRef && this.sliderRef.ownerDocument;
							var e = this.props,
								t = e.autoFocus,
								n = e.disabled;
							t && !n && this.focus()
						}
					}, {
						key: "componentWillUnmount",
						value: function () {
							$(G(n.prototype), "componentWillUnmount", this) && $(G(n.prototype), "componentWillUnmount", this).call(this), this.removeDocumentEvents()
						}
					}, {
						key: "getSliderStart",
						value: function () {
							var e = this.sliderRef,
								t = this.props,
								n = t.vertical,
								o = t.reverse,
								r = e.getBoundingClientRect();
							return n ? o ? r.bottom : r.top : window.pageXOffset + (o ? r.right : r.left)
						}
					}, {
						key: "getSliderLength",
						value: function () {
							var e = this.sliderRef;
							if (!e) return 0;
							var t = e.getBoundingClientRect();
							return this.props.vertical ? t.height : t.width
						}
					}, {
						key: "addDocumentTouchEvents",
						value: function () {
							this.onTouchMoveListener = ne(this.document, "touchmove", this.onTouchMove), this.onTouchUpListener = ne(this.document, "touchend", this.onEnd)
						}
					}, {
						key: "addDocumentMouseEvents",
						value: function () {
							this.onMouseMoveListener = ne(this.document, "mousemove", this.onMouseMove), this.onMouseUpListener = ne(this.document, "mouseup", this.onEnd)
						}
					}, {
						key: "removeDocumentEvents",
						value: function () {
							this.onTouchMoveListener && this.onTouchMoveListener.remove(), this.onTouchUpListener && this.onTouchUpListener.remove(), this.onMouseMoveListener && this.onMouseMoveListener.remove(), this.onMouseUpListener && this.onMouseUpListener.remove()
						}
					}, {
						key: "focus",
						value: function () {
							this.props.disabled || this.handlesRefs[0].focus()
						}
					}, {
						key: "blur",
						value: function () {
							var e = this;
							this.props.disabled || Object.keys(this.handlesRefs).forEach((function (t) {
								e.handlesRefs[t] && e.handlesRefs[t].blur && e.handlesRefs[t].blur()
							}))
						}
					}, {
						key: "calcValue",
						value: function (e) {
							var t = this.props,
								n = t.vertical,
								o = t.min,
								r = t.max,
								i = Math.abs(Math.max(e, 0) / this.getSliderLength());
							return n ? (1 - i) * (r - o) + o : i * (r - o) + o
						}
					}, {
						key: "calcValueByPos",
						value: function (e) {
							var t = (this.props.reverse ? -1 : 1) * (e - this.getSliderStart());
							return this.trimAlignValue(this.calcValue(t))
						}
					}, {
						key: "calcOffset",
						value: function (e) {
							var t = this.props,
								n = t.min,
								o = (e - n) / (t.max - n);
							return Math.max(0, 100 * o)
						}
					}, {
						key: "saveHandle",
						value: function (e, t) {
							this.handlesRefs[e] = t
						}
					}, {
						key: "render",
						value: function () {
							var e, t = this.props,
								o = t.prefixCls,
								r = t.className,
								i = t.marks,
								c = t.dots,
								u = t.step,
								s = t.included,
								f = t.disabled,
								d = t.vertical,
								p = t.reverse,
								v = t.min,
								h = t.max,
								m = t.children,
								b = t.maximumTrackStyle,
								y = t.style,
								g = t.railStyle,
								O = t.dotStyle,
								w = t.activeDotStyle,
								j = $(G(n.prototype), "render", this).call(this),
								E = j.tracks,
								k = j.handles,
								_ = re()(o, (e = {}, Object(l.a)(e, "".concat(o, "-with-marks"), Object.keys(i).length), Object(l.a)(e, "".concat(o, "-disabled"), f), Object(l.a)(e, "".concat(o, "-vertical"), d), Object(l.a)(e, r, r), e));
							return a.a.createElement("div", {
								ref: this.saveSlider,
								className: _,
								onTouchStart: f ? xe : this.onTouchStart,
								onMouseDown: f ? xe : this.onMouseDown,
								onMouseUp: f ? xe : this.onMouseUp,
								onKeyDown: f ? xe : this.onKeyDown,
								onFocus: f ? xe : this.onFocus,
								onBlur: f ? xe : this.onBlur,
								style: y
							}, a.a.createElement("div", {
								className: "".concat(o, "-rail"),
								style: Se(Se({}, b), g)
							}), E, a.a.createElement(ce, {
								prefixCls: o,
								vertical: d,
								reverse: p,
								marks: i,
								dots: c,
								step: u,
								included: s,
								lowerBound: this.getLowerBound(),
								upperBound: this.getUpperBound(),
								max: h,
								min: v,
								dotStyle: O,
								activeDotStyle: w
							}), k, a.a.createElement(se, {
								className: "".concat(o, "-mark"),
								onClickLabel: f ? xe : this.onClickMarkLabel,
								vertical: d,
								marks: i,
								included: s,
								lowerBound: this.getLowerBound(),
								upperBound: this.getUpperBound(),
								max: h,
								min: v,
								reverse: p
							}), m)
						}
					}]), n
				}(e)).displayName = "ComponentEnhancer(".concat(e.displayName, ")"), t.defaultProps = Se(Se({}, e.defaultProps), {}, {
					prefixCls: "rc-slider",
					className: "",
					min: 0,
					max: 100,
					step: 1,
					marks: {},
					handle: function (e) {
						var t = e.index,
							n = Object(J.a)(e, ["index"]);
						return delete n.dragging, null === n.value ? null : a.a.createElement(ve, Object.assign({}, n, {
							key: t
						}))
					},
					onBeforeChange: xe,
					onChange: xe,
					onAfterChange: xe,
					included: !0,
					disabled: !1,
					dots: !1,
					vertical: !1,
					reverse: !1,
					trackStyle: [{}],
					handleStyle: [{}],
					railStyle: {},
					dotStyle: {},
					activeDotStyle: {}
				}), t
			}

			function Re(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					t && (o = o.filter((function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, o)
				}
				return n
			}

			function Ae(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Re(Object(n), !0).forEach((function (t) {
						Object(l.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function De(e) {
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
					var n, o = G(e);
					if (t) {
						var r = G(this).constructor;
						n = Reflect.construct(o, arguments, r)
					} else 