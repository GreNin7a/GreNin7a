_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[46], {
		"37ip": function (e, o, n) {
			e.exports = {
				loaderPage: "Loader_loaderPage__be8MM",
				loaderWrapper: "Loader_loaderWrapper__3ps-q",
				loader: "Loader_loader__-KAE_",
				spin: "Loader_spin__1HSfN"
			}
		},
		C076: function (e, o, n) {
			"use strict";
			n.d(o, "b", (function () {
				return a
			})), n.d(o, "a", (function () {
				return r
			}));
			var t = n("32ec");

			function i(e, o) {
				var n;
				if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
					if (Array.isArray(e) || (n = function (e, o) {
							if (!e) return;
							if ("string" === typeof e) return l(e, o);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							"Object" === n && e.constructor && (n = e.constructor.name);
							if ("Map" === n || "Set" === n) return Array.from(e);
							if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, o)
						}(e)) || o && e && "number" === typeof e.length) {
						n && (e = n);
						var t = 0,
							i = function () {};
						return {
							s: i,
							n: function () {
								return t >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[t++]
								}
							},
							e: function (e) {
								throw e
							},
							f: i
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var a, r = !0,
					d = !1;
				return {
					s: function () {
						n = e[Symbol.iterator]()
					},
					n: function () {
						var e = n.next();
						return r = e.done, e
					},
					e: function (e) {
						d = !0, a = e
					},
					f: function () {
						try {
							r || null == n.return || n.return()
						} finally {
							if (d) throw a
						}
					}
				}
			}

			function l(e, o) {
				(null == o || o > e.length) && (o = e.length);
				for (var n = 0, t = new Array(o); n < o; n++) t[n] = e[n];
				return t
			}
			var a = function () {
					var e = {},
						o = Object(t.a)("utm_values");
					if (!o) return e;
					var n = decodeURIComponent(o),
						i = JSON.parse(n);
					return e = {
						utm_campaign: null === i || void 0 === i ? void 0 : i.utm_campaign,
						utm_content: null === i || void 0 === i ? void 0 : i.utm_content,
						utm_medium: null === i || void 0 === i ? void 0 : i.utm_medium,
						utm_source: null === i || void 0 === i ? void 0 : i.utm_source,
						utm_term: null === i || void 0 === i ? void 0 : i.utm_term
					}
				},
				r = function (e) {
					var o, n, t, l, a = {},
						r = i((null === (o = decodeURIComponent(e)) || void 0 === o || null === (n = o.split("?")) || void 0 === n || null === (t = n[1]) || void 0 === t ? void 0 : t.split("&")) || []);
					try {
						for (r.s(); !(l = r.n()).done;) {
							var d = l.value.split("=");
							a[d[0]] = d[1]
						}
					} catch (u) {
						r.e(u)
					} finally {
						r.f()
					}
					return a
				}
		},
		HnuQ: function (e, o, n) {
			e.exports = {
				actionsWrapper: "Area_actionsWrapper__3mdIU"
			}
		},
		Pc1N: function (e, o, n) {
			e.exports = {
				parentWrapper: "MainForm_parentWrapper__1i_l9",
				imageWrapper: "MainForm_imageWrapper__15XqV",
				property: "MainForm_property__7yLnU",
				bookingStep: "MainForm_bookingStep__3Z5Av",
				contentWrapper: "MainForm_contentWrapper__3TDO1"
			}
		},
		YuTi: function (e, o) {
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
		ayiN: function (e, o, n) {
			"use strict";
			n.d(o, "a", (function () {
				return d
			}));
			var t = n("q1tI"),
				i = n.n(t),
				l = n("37ip"),
				a = n.n(l),
				r = i.a.createElement;

			function d(e) {
				var o = e.text,
					n = e.className,
					t = e.containerClassName,
					i = e.loaderClassName;
				return r("div", {
					className: "row ".concat(t)
				}, r("div", {
					className: "".concat(n, " ").concat(a.a.loaderPage, " align-middle full-height col-md-12 col-sm-12")
				}, r("div", {
					className: "".concat(a.a.loaderWrapper, " text-center")
				}, r("div", {
					className: "".concat(a.a.loader, " ").concat(i)
				}), r("h4", null, o || "Hang tight, while we submit your details!"))))
			}
		},
		f87Q: function (e, o, n) {
			e.exports = {
				actionsWrapper: "RoomType_actionsWrapper__ghLgh",
				typeTitle: "RoomType_typeTitle__3GDpk",
				sectionTitle: "RoomType_sectionTitle__TsWBe"
			}
		},
		gUrY: function (e, o, n) {
			"use strict";
			n.r(o), n.d(o, "__N_SSP", (function () {
				return J
			}));
			var t = n("ODXe"),
				i = n("8Kt/"),
				l = n.n(i),
				a = n("q1tI"),
				r = n.n(a),
				d = n("TxL0"),
				u = n("wyBh"),
				v = n("jobX"),
				c = n("rePB"),
				m = n("Pc1N"),
				p = n.n(m),
				s = n("O0fl"),
				f = n("HnuQ"),
				_ = n.n(f),
				b = n("co3k"),
				y = n("l4F9"),
				g = n("iPIw"),
				O = n("eETR"),
				h = n("LvDl"),
				j = n.n(h),
				N = n("bhxT"),
				P = r.a.createElement;

			function w(e, o) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					o && (t = t.filter((function (o) {
						return Object.getOwnPropertyDescriptor(e, o).enumerable
					}))), n.push.apply(n, t)
				}
				return n
			}

			function S(e) {
				for (var o = 1; o < arguments.length; o++) {
					var n = null != arguments[o] ? arguments[o] : {};
					o % 2 ? w(Object(n), !0).forEach((function (o) {
						Object(c.a)(e, o, n[o])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function (o) {
						Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
					}))
				}
				return e
			}

			function T(e) {
				var o, n = e.snippets,
					i = e.setProgress,
					l = e.mainFormData,
					r = e.setMainFormData,
					u = e.nextStep,
					m = e.selectedCity,
					p = Object(v.a)(d.o),
					s = Object(t.a)(p, 1)[0],
					f = null === s || void 0 === s ? void 0 : s.data;
				Object(a.useEffect)((function () {
					k({
						areasObj: S({}, null === l || void 0 === l ? void 0 : l.areasObj)
					})
				}), []);
				var h = Object(y.a)({
						callback: function () {
							var e = j.a.keys(null === x || void 0 === x ? void 0 : x.areasObj),
								o = Object(c.a)({}, N.c.props.area, e);
							N.a.track({
								eventName: N.c.name,
								props: o
							}), N.a.setProfile(o), r(S(S({}, l), {}, {
								areasArray: e,
								areasObj: null === x || void 0 === x ? void 0 : x.areasObj
							})), i(u)
						},
						initialState: {
							areasObj: {}
						},
						validate: function () {}
					}),
					w = h.handleSubmit,
					T = h.handleMultipleCheckboxes,
					x = h.values,
					k = h.setValues,
					F = function (e) {
						var o = (null === m || void 0 === m ? void 0 : m.CODE) + " - " + e.currentTarget.name;
						T({
							name: o,
							stateHandle: "areasObj"
						})
					};
				return P(g.a, {
					title: null === n || void 0 === n ? void 0 : n.main_form_area_title
				}, P("div", {
					className: _.a.formSection
				}, P("form", {
					onSubmit: w
				}, P("div", {
					className: "row"
				}, null === f || void 0 === f || null === (o = f.filter((function (e) {
					return e.City === (null === m || void 0 === m ? void 0 : m.CODE)
				}))) || void 0 === o ? void 0 : o.map((function (e) {
					var o;
					return P("div", {
						className: "col-6 col-md-4",
						key: null === e || void 0 === e ? void 0 : e.Slug
					}, P(O.a, {
						key: null === e || void 0 === e ? void 0 : e.Name,
						label: null === e || void 0 === e ? void 0 : e.Name,
						name: null === e || void 0 === e ? void 0 : e.Name,
						checked: null === x || void 0 === x || null === (o = x.areasObj) || void 0 === o ? void 0 : o[(null === m || void 0 === m ? void 0 : m.CODE) + " - " + (null === e || void 0 === e ? void 0 : e.Name)],
						className: "".concat(_.a.issame, " mt-2 mt-md-4 ml-0"),
						onChange: F
					}))
				}))), P("div", {
					className: _.a.actionsWrapper
				}, P(b.a, {
					text: null === n || void 0 === n ? void 0 : n.main_form_next_btn,
					isSubmit: !0,
					disabled: 0 === j.a.values(null === x || void 0 === x ? void 0 : x.areasObj).length
				})))))
			}
			var x = n("f87Q"),
				k = n.n(x),
				F = n("p5pK"),
				C = n("nOHt"),
				D = r.a.createElement;

			function E(e, o) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					o && (t = t.filter((function (o) {
						return Object.getOwnPropertyDescriptor(e, o).enumerable
					}))), n.push.apply(n, t)
				}
				return n
			}

			function A(e) {
				for (var o = 1; o < arguments.length; o++) {
					var n = null != arguments[o] ? arguments[o] : {};
					o % 2 ? E(Object(n), !0).forEach((function (o) {
						Object(c.a)(e, o, n[o])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function (o) {
						Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
					}))
				}
				return e
			}

			function W(e) {
				var o, n, t = e.snippets,
					i = e.setProgress,
					l = e.mainFormData,
					r = e.setMainFormData,
					d = e.nextStep,
					u = e.roomTypes,
					v = e.enablePetFriendly,
					m = Object(C.useRouter)(),
					p = null === m || void 0 === m || null === (o = m.query) || void 0 === o ? void 0 : o.unit,
					s = Object(a.useState)(null === l || void 0 === l ? void 0 : l.petFriendly),
					f = s[0],
					_ = s[1],
					h = null === u || void 0 === u ? void 0 : u.data,
					j = null === h || void 0 === h ? void 0 : h.filter((function (e) {
						return "Private" === e.Privacy
					})),
					P = null === h || void 0 === h ? void 0 : h.filter((function (e) {
						return "Shared" === e.Privacy
					}));
				Object(a.useEffect)((function () {
					F(A(A({}, x), {}, {
						roomType: (null === l || void 0 === l ? void 0 : l.roomType) || ""
					}))
				}), [null === l || void 0 === l ? void 0 : l.petFriendly]);
				var w = Object(y.a)({
						callback: function () {
							var e = function (e) {
								var o, n = null === h || void 0 === h ? void 0 : h.filter((function (o) {
									return o.Title == e
								}));
								return null === n || void 0 === n || null === (o = n[0]) || void 0 === o ? void 0 : o.SFKey
							}(null === x || void 0 === x ? void 0 : x.roomType);
							if (p) {
								var o, n, t, a;
								N.a.track({
									eventName: N.o.unitHomeType,
									props: (n = {}, Object(c.a)(n, N.o.props.roomType, e), Object(c.a)(n, N.o.props.city, null === m || void 0 === m || null === (o = m.query) || void 0 === o ? void 0 : o.formCity), Object(c.a)(n, N.o.props.building, p), n)
								}), N.a.setProfile((a = {}, Object(c.a)(a, N.o.props.profileBuilding, p), Object(c.a)(a, N.o.props.profileMarket, null === m || void 0 === m || null === (t = m.query) || void 0 === t ? void 0 : t.formCity), Object(c.a)(a, N.o.props.profileRoomType, e), a))
							} else {
								var u = Object(c.a)({}, N.o.props.homeType, e);
								N.a.track({
									eventName: N.o.aboutHomeType,
									props: u
								}), N.a.setProfile(u)
							}
							r(A(A({}, l), {}, {
								roomType: null === x || void 0 === x ? void 0 : x.roomType,
								petFriendly: f
							})), i(d)
						},
						initialState: {
							roomType: ""
						},
						validate: function () {}
					}),
					S = w.handleSubmit,
					T = w.handleRadioButton,
					x = w.values,
					F = w.setValues;
				return D(g.a, {
					title: null === t || void 0 === t ? void 0 : t.main_form_type_title
				}, D("div", {
					className: k.a.formSection
				}, D("form", {
					onSubmit: S
				}, (null === P || void 0 === P ? void 0 : P.length) > 0 && D(M, {
					roomTypeArray: P,
					header: null === t || void 0 === t ? void 0 : t.main_form_shared_apartment,
					handleRadioButton: T,
					values: x
				}), (null === j || void 0 === j ? void 0 : j.length) > 0 && D(M, {
					roomTypeArray: j,
					header: null === t || void 0 === t ? void 0 : t.main_form_private_apartment,
					handleRadioButton: T,
					values: x
				}), v && D("div", {
					className: "".concat(k.a.typeTitle)
				}, D("div", {
					className: "row"
				}, D("p", {
					className: "px-3 m-0 ".concat(k.a.sectionTitle)
				}, null === t || void 0 === t ? void 0 : t.main_form_preferences)), D(O.a, {
					label: null === t || void 0 === t ? void 0 : t.main_form_pet_friendly,
					name: "petFriendly",
					checked: f,
					className: " mt-4 ml-0",
					onChange: function (e) {
						_(e.currentTarget.checked)
					}
				})), D("div", {
					className: k.a.actionsWrapper
				}, D(b.a, {
					text: null === t || void 0 === t ? void 0 : t.main_form_next_btn,
					isSubmit: !0,
					disabled: 0 === (null === x || void 0 === x || null === (n = x.roomType) || void 0 === n ? void 0 : n.length)
				})))))
			}
			var M = function (e) {
					var o = e.roomTypeArray,
						n = e.header,
						t = e.handleRadioButton,
						i = e.values;
					return D("div", {
						className: "".concat(k.a.typeTitle)
					}, D("div", {
						className: "row"
					}, D("p", {
						className: "px-3 m-0 ".concat(k.a.sectionTitle)
					}, n)), D("div", {
						className: "row ".concat("mt-3 mt-md-0")
					}, null === o || void 0 === o ? void 0 : o.map((function (e, o) {
						return D("div", {
							key: e.Key1 + o,
							className: "col-12 col-md-4 mt-3 mt-md-4 "
						}, D(F.a, {
							name: e.Title,
							onChange: function (e) {
								t({
									name: "roomType",
									value: e.currentTarget.id
								})
							},
							label: e.Title,
							checked: e.Title === (null === i || void 0 === i ? void 0 : i.roomType),
							className: "".concat(k.a.issame)
						}))
					}))))
				},
				R = n("gVWY"),
				I = n("LmYi"),
				B = n("kDnf"),
				L = n("ayiN"),
				q = n("C076"),
				K = n("YZKd"),
				U = n("S68s"),
				H = r.a.createElement;

			function Y(e, o) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					o && (t = t.filter((function (o) {
						return Object.getOwnPropertyDescriptor(e, o).enumerable
					}))), n.push.apply(n, t)
				}
				return n
			}

			function Q(e) {
				for (var o = 1; o < arguments.length; o++) {
					var n = null != arguments[o] ? arguments[o] : {};
					o % 2 ? Y(Object(n), !0).forEach((function (o) {
						Object(c.a)(e, o, n[o])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function (o) {
						Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
					}))
				}
				return e
			}
			var X = function (e) {
					var o, n, i, l, c, m, f, _ = e.snippets,
						b = e.images,
						y = Object(v.a)(d.fb),
						g = Object(t.a)(y, 2),
						O = g[0],
						h = g[1],
						j = Object(v.a)(d.r),
						N = Object(t.a)(j, 1)[0],
						P = Object(v.a)(d.E),
						w = Object(t.a)(P, 1)[0],
						S = Object(v.a)(d.o),
						x = Object(t.a)(S, 1)[0],
						k = Object(v.a)(d.P),
						F = Object(t.a)(k, 1)[0],
						D = Object(K.a)(),
						E = null === w || void 0 === w || null === (o = w.data) || void 0 === o ? void 0 : o.snippets,
						A = Object(C.useRouter)(),
						M = null === u.f || void 0 === u.f ? void 0 : u.f[null === A || void 0 === A || null === (n = A.query) || void 0 === n ? void 0 : n.formCity.toUpperCase()],
						Y = null === A || void 0 === A || null === (i = A.query) || void 0 === i ? void 0 : i.unit,
						X = null === A || void 0 === A || null === (l = A.query) || void 0 === l ? void 0 : l.type,
						V = (null === N || void 0 === N || null === (c = N.data) || void 0 === c ? void 0 : c.FullTitle) ? {
							title: null === N || void 0 === N || null === (m = N.data) || void 0 === m ? void 0 : m.FullTitle,
							address: null === N || void 0 === N || null === (f = N.data) || void 0 === f ? void 0 : f.Address,
							roomType: X
						} : null,
						G = Object(a.useState)({
							level: 1,
							percent: 16,
							text: "1/6"
						}),
						J = G[0],
						Z = G[1],
						z = Object(a.useState)(""),
						$ = z[0],
						ee = z[1],
						oe = Object(a.useState)({}),
						ne = oe[0],
						te = oe[1],
						ie = function (e) {
							"SG" === (null === M || void 0 === M ? void 0 : M.CODE) || "AU" === (null === M || void 0 === M ? void 0 : M.CODE) ? ee(!1): ee(e)
						};
					Object(a.useEffect)((function () {
						if (Y && X) {
							var e, o, n, t, i, l, a, r, d, v;
							Z({
								level: 1,
								percent: 33,
								text: "1/3"
							}), null === N || void 0 === N || null === (e = N.data) || void 0 === e || null === (o = e.RoomInfo) || void 0 === o || o.map((function (e) {
								(null === e || void 0 === e ? void 0 : e.TypeSlug) === X && (v = null === e || void 0 === e ? void 0 : e.Price)
							}));
							var c, m = null === A || void 0 === A || null === (n = A.query) || void 0 === n ? void 0 : n.type;
							null === N || void 0 === N || null === (t = N.data) || void 0 === t || null === (i = t.RoomInfo) || void 0 === i || i.map((function (e) {
								(null === e || void 0 === e ? void 0 : e.TypeSlug) === m && (c = null === e || void 0 === e ? void 0 : e.TypeSFKey)
							}));
							var p = [null === N || void 0 === N || null === (l = N.data) || void 0 === l || null === (a = l.Area) || void 0 === a ? void 0 : a.SFKey],
								s = u.e[null === A || void 0 === A || null === (r = A.query) || void 0 === r ? void 0 : r.formCity],
								f = s.filter((function (e) {
									return e.min <= v && e.max >= v
								}));
							te(Q(Q({}, ne), {}, {
								budget: v,
								areasArray: p,
								roomType: c,
								budgetRange: f.length < 1 ? null === s || void 0 === s || null === (d = s[s.length - 1]) || void 0 === d ? void 0 : d.range : null === f || void 0 === f ? void 0 : f[0].range
							}))
						} else if (Y) {
							var _, b, y;
							Z({
								level: 1,
								percent: 20,
								text: "1/5"
							});
							var g = [(null === M || void 0 === M ? void 0 : M.CODE) + " - " + (null === N || void 0 === N || null === (_ = N.data) || void 0 === _ || null === (b = _.Area) || void 0 === b ? void 0 : b.Name)];
							te(Q(Q({}, ne), {}, {
								areasArray: g
							})), ie(null === N || void 0 === N || null === (y = N.data) || void 0 === y ? void 0 : y.PetFriendly)
						} else ie(!0)
					}), [Y, X]);
					var le, ae = function (e) {
							return H(W, {
								snippets: _,
								setProgress: Z,
								mainFormData: ne,
								setMainFormData: te,
								selectedCity: M,
								nextStep: e,
								key: e.level,
								roomTypes: F,
								enablePetFriendly: $
							})
						},
						re = function (e) {
							return H(I.a, {
								snippets: {
									booking_stay_title: null === _ || void 0 === _ ? void 0 : _.main_form_move_in,
									booking_select_date: null === _ || void 0 === _ ? void 0 : _.main_form_select_date,
									booking_date_label: null === _ || void 0 === _ ? void 0 : _.main_form_date_label,
									booking_choose_plan_label: null === _ || void 0 === _ ? void 0 : _.main_form_choose_plan_label,
									booking_continue_btn: null === _ || void 0 === _ ? void 0 : _.main_form_next_btn
								},
								setProgress: Z,
								mainFormData: ne,
								setMainFormData: te,
								propertyDetails: V,
								offerButton: !1,
								nextStep: e,
								selectedCity: M,
								formWrapper: "mt-0",
								errorSnippets: E,
								key: e.level
							})
						},
						de = function (e) {
							var o, n, t = null === x || void 0 === x || null === (o = x.data) || void 0 === o || null === (n = o.find((function (e) {
								var o;
								return (null === e || void 0 === e ? void 0 : e.Name) === (null === ne || void 0 === ne || null === (o = ne.areasArray) || void 0 === o ? void 0 : o[0])
							}))) || void 0 === n ? void 0 : n.City;
							return H(R.a, {
								snippets: {
									booking_budget_title: null === _ || void 0 === _ ? void 0 : _.main_form_budget,
									booking_make_us_offer: "AU" === t ? null === _ || void 0 === _ ? void 0 : _.main_form_fee_per_week_for_australia : null === _ || void 0 === _ ? void 0 : _.main_form_fee_per_month,
									booking_continue_btn: null === _ || void 0 === _ ? void 0 : _.main_form_next_btn
								},
								setProgress: Z,
								mainFormData: ne,
								setMainFormData: te,
								isBookingFlow: !1,
								nextStep: e,
								formWrapper: "mt-0",
								errorSnippets: E,
								key: e.level
							})
						},
						ue = function (e) {
							return H(B.a, {
								snippets: {
									signup_complete_profile_title: null === _ || void 0 === _ ? void 0 : _.main_form_get_in_touch_title,
									signup_label_firstname: null === _ || void 0 === _ ? void 0 : _.main_form_first_name,
									signup_label_lastname: null === _ || void 0 === _ ? void 0 : _.main_form_last_name,
									signup_label_contact_number: null === _ || void 0 === _ ? void 0 : _.main_form_contact_number,
									signup_hint_code: null === _ || void 0 === _ ? void 0 : _.main_form_hint_code,
									signup_hint_enter_number: null === _ || void 0 === _ ? void 0 : _.main_form_hint_number,
									signup_label_email: null === _ || void 0 === _ ? void 0 : _.main_form_email_label,
									phone_call: null === _ || void 0 === _ ? void 0 : _.main_form_phone_call,
									whatsapp_call: null === _ || void 0 === _ ? void 0 : _.main_form_whatsapp_call,
									whatsapp_number: null === _ || void 0 === _ ? void 0 : _.main_form_whatsapp_label,
									signup_label_same_number: null === _ || void 0 === _ ? void 0 : _.main_form_same_number,
									booking_continue_btn: null === _ || void 0 === _ ? void 0 : _.main_form_next_btn
								},
								setProgress: Z,
								mainFormData: ne,
								setMainFormData: te,
								isBookingFlow: !1,
								nextStep: e,
								descriptionText: null === _ || void 0 === _ ? void 0 : _.main_form_get_in_touch_desc,
								finalFormSubmission: me,
								errorSnippets: E,
								selectedCity: M,
								key: e.level
							})
						},
						ve = function () {
							return H(r.a.Fragment, null, H(L.a, {
								className: "lazyload mx-auto d-block pt-5",
								loaderClassName: (null === O || void 0 === O ? void 0 : O.error) ? "d-none" : "",
								text: (null === O || void 0 === O ? void 0 : O.error) ? null === _ || void 0 === _ ? void 0 : _.main_form_something_went_wrong : null
							}))
						};
					le = Y && X ? [{
						level: 1,
						percent: 33,
						text: "1/3",
						component: re
					}, {
						level: 2,
						percent: 66,
						text: "2/3",
						component: ue
					}, {
						level: 3,
						percent: 100,
						text: "3/3",
						component: ve
					}] : Y ? [{
						level: 1,
						percent: 20,
						text: "1/5",
						component: ae
					}, {
						level: 2,
						percent: 40,
						text: "2/5",
						component: re
					}, {
						level: 3,
						percent: 60,
						text: "3/5",
						component: de
					}, {
						level: 4,
						percent: 80,
						text: "4/5",
						component: ue
					}, {
						level: 5,
						percent: 100,
						text: "5/5",
						component: ve
					}] : [{
						level: 1,
						percent: 16,
						text: "1/6",
						component: function (e) {
							return H(T, {
								snippets: _,
								setProgress: Z,
								mainFormData: ne,
								setMainFormData: te,
								nextStep: e,
								selectedCity: M,
								key: e.level
							})
						}
					}, {
						level: 2,
						percent: 33,
						text: "2/6",
						component: ae
					}, {
						level: 3,
						percent: 50,
						text: "3/6",
						component: re
					}, {
						level: 4,
						percent: 66,
						text: "4/6",
						component: de
					}, {
						level: 5,
						percent: 83,
						text: "5/6",
						component: ue
					}, {
						level: 6,
						percent: 100,
						text: "6/6",
						component: ve
					}], Object(a.useEffect)((function () {
						(null === ne || void 0 === ne ? void 0 : ne.firstName) && me()
					}), [ne]);
					var ce = function (e) {
							return "Master" === e || "Regular" === e || "Pocket" === e ? "I prefer shared apartment" : "I would like a private apartment to myself"
						},
						me = function () {
							var e, o, n = Object(q.b)(),
								t = function (e) {
									var o, n, t = null === F || void 0 === F || null === (o = F.data) || void 0 === o ? void 0 : o.filter((function (o) {
										return o.Title == e || o.SFKey === e
									}));
									return null === t || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.SFKey
								}(null === ne || void 0 === ne ? void 0 : ne.roomType);
							h({
								payload: {
									FirstName: null === ne || void 0 === ne ? void 0 : ne.firstName,
									LastName: null === ne || void 0 === ne ? void 0 : ne.lastName,
									country: M.COUNTRY,
									Email: null === ne || void 0 === ne ? void 0 : ne.email,
									PhoneNumber: "".concat(null === ne || void 0 === ne ? void 0 : ne.code).concat(null === ne || void 0 === ne ? void 0 : ne.phone),
									Budget: (null === ne || void 0 === ne ? void 0 : ne.budgetRange) || "",
									EnteredBudget: (null === ne || void 0 === ne || null === (e = ne.budget) || void 0 === e ? void 0 : e.toString()) || "",
									DurationOfStay: null === ne || void 0 === ne ? void 0 : ne.plan,
									MoveInDate: (null === ne || void 0 === ne ? void 0 : ne.date) || "",
									RoomType: t,
									PrivateOrSharedApartment: ce(t) || "",
									Location: null === ne || void 0 === ne || null === (o = ne.areasArray) || void 0 === o ? void 0 : o.join(";"),
									LeadSource: 16000356746,
									landingPage: Object(U.a)(),
									utmCampaign: null === n || void 0 === n ? void 0 : n.utm_campaign,
									utmMedium: null === n || void 0 === n ? void 0 : n.utm_medium,
									utmSource: null === n || void 0 === n ? void 0 : n.utm_source,
									utmContent: null === n || void 0 === n ? void 0 : n.utm_content,
									utmTerm: null === n || void 0 === n ? void 0 : n.utm_term,
									GdrpConsent: ne.gdprConsent,
									preferredWayOfContact: null === ne || void 0 === ne ? void 0 : ne.preferredWayOfContact,
									whatsAppNo: "".concat(null === ne || void 0 === ne ? void 0 : ne.whatsappcode).concat(null === ne || void 0 === ne ? void 0 : ne.whatsappnumber),
									petFriendly: null === ne || void 0 === ne ? void 0 : ne.petFriendly,
									selectedBuilding: null === V || void 0 === V ? void 0 : V.title,
									gclid: D
								}
							})
						};
					return Object(a.useEffect)((function () {
						var e, o;
						(null === O || void 0 === O || null === (e = O.data) || void 0 === e ? void 0 : e.id) && A.push({
							pathname: null === u.b || void 0 === u.b ? void 0 : u.b.YOU_CAN_BOOK_ME,
							query: {
								code: M.CODE.toLowerCase(),
								leadId: null === O || void 0 === O || null === (o = O.data) || void 0 === o ? void 0 : o.id,
								name: (null === ne || void 0 === ne ? void 0 : ne.firstName) + " " + (null === ne || void 0 === ne ? void 0 : ne.lastName),
								email: null === ne || void 0 === ne ? void 0 : ne.email,
								phone: "".concat(null === ne || void 0 === ne ? void 0 : ne.code).concat(null === ne || void 0 === ne ? void 0 : ne.phone)
							}
						})
					}), [O]), H("div", {
						className: "w-100  ".concat(p.a.parentWrapper)
					}, H("div", {
						className: "row m-0 h-100"
					}, H("div", {
						className: " ".concat(p.a.imageWrapper, " p-0 col-6 d-none d-md-flex")
					}, H("img", {
						src: null === b || void 0 === b ? void 0 : b["main_form_image_".concat(J.level)]
					}), H("div", {
						className: "".concat(p.a.property, " d-none d-lg-block w-50")
					}, H("p", null, null === _ || void 0 === _ ? void 0 : _["main_form_image_title_".concat(J.level)]), H("p", null, null === _ || void 0 === _ ? void 0 : _["main_form_image_location_".concat(J.level)]))), H("div", {
						className: "col-12 col-md-6 d-flex align-middle h-100 justify-content-center"
					}, H("div", {
						className: "".concat(p.a.bookingStep, " ")
					}, H("div", {
						className: "".concat(p.a.contentWrapper)
					}, !(100 === J.percent) && H(s.a, {
						progress: J,
						setProgress: Z,
						snippets: _,
						steps: le,
						previousQuestion: null === _ || void 0 === _ ? void 0 : _.main_form_previous_question,
						hidePrevBtnOnLevel: [1]
					}), le.map((function (e, o) {
						return J.level !== o + 1 ? null : (n = o === le.length - 1 ? {} : {
							level: le[o + 1].level,
							percent: le[o + 1].percent,
							text: le[o + 1].text
						}, e.component(n));
						var n
					})))))))
				},
				V = n("ceS8"),
				G = r.a.createElement;
			var J = !0;
			o.default = function () {
				var e, o, n = Object(v.a)(d.I),
					i = Object(t.a)(n, 1)[0],
					a = null === i || void 0 === i || null === (e = i.data) || void 0 === e ? void 0 : e.snippets,
					r = null === i || void 0 === i || null === (o = i.data) || void 0 === o ? void 0 : o.images;
				return G(V.a, null, G(l.a, null, G("title", null, u.a.MAIN_FORM)), G("main", null, G(X, {
					snippets: a,
					images: r
				})))
			}
		},
		iKL6: function (e, o, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/form/[formCity]", function () {
				return n("gUrY")
			}])
		}
	},
	[
		["iKL6", 1, 2, 3, 5, 9, 0, 4, 6, 12, 16, 17]
	]
]);