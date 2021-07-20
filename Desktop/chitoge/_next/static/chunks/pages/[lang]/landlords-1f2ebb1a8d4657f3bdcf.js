_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[33], {
		"7bXc": function (a, e, l) {
			"use strict";
			var o = l("q1tI"),
				t = l.n(o).a.createElement;
			e.a = function (a) {
				var e = a.img,
					l = a.imgAlt,
					o = a.imgClassName,
					n = a.position,
					d = void 0 === n ? "left" : n,
					i = a.containerClassName,
					r = a.leftColumnClassName,
					s = void 0 === r ? "" : r,
					c = a.rightColumnClassName,
					m = void 0 === c ? "" : c,
					u = a.children,
					v = a.video,
					_ = a.videoWidth,
					b = a.videoHeight,
					g = a.videoClass,
					p = a.fullWidth,
					f = void 0 !== p && p,
					N = a.ignoreDefaultLeftColumn,
					y = void 0 !== N && N,
					h = a.ignoreDefaultRightColumn,
					w = void 0 !== h && h,
					C = a.anim,
					L = a.noLazyload,
					O = void 0 !== L && L;
				if (!e && !v) return t("div", {
					className: f ? "full-width" : "container-fluid"
				}, t("div", {
					className: "".concat(i)
				}, u));
				var j = v && t("iframe", {
						width: _,
						height: b,
						src: v,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0,
						className: g
					}),
					x = "string" === typeof e ? t("img", O ? {
						src: e,
						alt: l,
						className: "".concat(o),
						"data-aos": C ? "fade-in" : null,
						"data-aos-duration": C ? "1300" : null,
						"data-aos-delay": C ? "500" : null
					} : {
						"data-src": e,
						alt: l,
						className: "".concat(o, " lazyload"),
						"data-aos": C ? "fade-in" : null,
						"data-aos-duration": C ? "1300" : null,
						"data-aos-delay": C ? "500" : null
					}) : e,
					k = v ? j : x;
				return t("div", {
					className: f ? "full-width" : "container-fluid"
				}, t("div", {
					className: "row ".concat(i)
				}, t("div", {
					className: "".concat(y ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(s)
				}, "left" === d ? u : k), t("div", {
					className: "".concat(w ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(m)
				}, "left" === d ? k : u), t("div", {
					className: "d-sm-flex d-md-none ".concat(y ? "" : "col", " ").concat(s)
				}, k, u)))
			}
		},
		"9HNw": function (a, e, l) {
			"use strict";
			var o = l("q1tI"),
				t = l.n(o),
				n = l("m6Xz"),
				d = l.n(n),
				i = l("2v50"),
				r = t.a.createElement,
				s = function (a) {
					return r("span", {
						style: {
							backgroundImage: 'url("'.concat(Object(i.a)({
								version: "v1587010481",
								name: "number-bg-w3.svg"
							}), '")')
						}
					}, a.children)
				};
			e.a = function (a) {
				for (var e = a.title, l = a.subtitle, o = a.snippetsArray, t = a.columnClass, n = void 0 === t ? "col-md-3 col-12" : t, i = a.sectionTitleClass, c = a.titleClassName, m = a.containerClassName, u = a.anim, v = [], _ = o.length, b = 0; b < _; b++) {
					var g, p, f = null === (g = o[b]) || void 0 === g ? void 0 : g.title,
						N = null === (p = o[b]) || void 0 === p ? void 0 : p.desc;
					v.push(r("div", {
						key: b,
						className: n,
						"data-aos": u ? "fade-up" : null,
						"data-aos-duration": u ? "1000" : null,
						"data-aos-delay": u ? 100 * (b + 1) : null,
						"data-aos-anchor-placement": u ? "bottom-bottom" : null
					}, r("div", {
						className: "row"
					}, r("h3", {
						className: "".concat(c, " ").concat(d.a.noGutter, " col-auto")
					}, r(s, null, b + 1)), r("h3", {
						className: "".concat(c, " ").concat(d.a.noGutter, " col")
					}, f)), r("p", null, N)))
				}
				return r("div", {
					className: "".concat(d.a.touchBaseWrapper, " ").concat(m, " row justify-content-center")
				}, r("div", {
					className: "".concat(d.a.containerColor, " col-auto")
				}, r("div", {
					className: "container"
				}, r("h2", {
					className: "text-center ".concat(i)
				}, e), l && r("p", {
					className: d.a.subtitle
				}, l), r("div", {
					className: "row"
				}, v))))
			}
		},
		K2T2: function (a, e, l) {
			a.exports = {
				h4: "LeasingSteps_h4__1bHFc",
				steps: "LeasingSteps_steps__30j_X",
				number: "LeasingSteps_number__1NGQt",
				verticalLine: "LeasingSteps_verticalLine__15tbG",
				titleImg: "LeasingSteps_titleImg__1hwBe",
				noGutter: "LeasingSteps_noGutter__3fge3",
				mb60: "LeasingSteps_mb60__b14qF"
			}
		},
		OJk7: function (a, e, l) {
			a.exports = {
				featuredWrapper: "Featured_featuredWrapper__lTXMZ",
				sectionTitle: "Featured_sectionTitle__gXX-0",
				logoRow: "Featured_logoRow__1DeXE",
				logoWrapper: "Featured_logoWrapper__3_reS"
			}
		},
		"j49/": function (a, e, l) {
			a.exports = {
				lease: "LeaseForm_lease__68NIi",
				mt50: "LeaseForm_mt50__2bqCh",
				submitBtn: "LeaseForm_submitBtn__3PUSG",
				pdpaConsent: "LeaseForm_pdpaConsent__nWLC5"
			}
		},
		k1G3: function (a, e, l) {
			a.exports = {
				leaseForm: "Landlord_leaseForm__32dOp",
				getMore: "Landlord_getMore__1VCFB",
				getMoreImg: "Landlord_getMoreImg__2NggZ",
				mt40: "Landlord_mt40__3gtHd",
				title: "Landlord_title__E9ic2",
				memberBase: "Landlord_memberBase__2P2nN",
				aboutHmlet: "Landlord_aboutHmlet__2UjDF",
				description: "Landlord_description__1L6P1",
				backedBy: "Landlord_backedBy__2duau",
				backedByImg: "Landlord_backedByImg__1yxml",
				mb12: "Landlord_mb12__3-oFf",
				pl0: "Landlord_pl0__qp_yi",
				plantBg: "Landlord_plantBg__lva-G",
				touchBase: "Landlord_touchBase__3oMvb",
				numberTitle: "Landlord_numberTitle__mZ3u8",
				ourProperites: "Landlord_ourProperites__1QojE",
				items: "Landlord_items__1NO3_",
				carouselDotList: "Landlord_carouselDotList__1RYU2",
				dot: "Landlord_dot__lcExL",
				active: "Landlord_active__3XlRB"
			}
		},
		m6Xz: function (a, e, l) {
			a.exports = {
				touchBaseWrapper: "TouchBase_touchBaseWrapper__1eA26",
				containerColor: "TouchBase_containerColor__2JDoF",
				subtitle: "TouchBase_subtitle__2vNnF",
				noGutter: "TouchBase_noGutter__2d03w"
			}
		},
		"o+F/": function (a, e, l) {
			"use strict";
			var o = l("ODXe"),
				t = l("q1tI"),
				n = l.n(t),
				d = l("OJk7"),
				i = l.n(d),
				r = l("jobX"),
				s = l("TxL0"),
				c = n.a.createElement;
			e.a = function (a) {
				var e = a.title,
					l = Object(r.a)(s.C),
					t = Object(o.a)(l, 1)[0],
					n = null === t || void 0 === t ? void 0 : t.data,
					d = null === n || void 0 === n ? void 0 : n.Links,
					m = null === n || void 0 === n ? void 0 : n.Images;
				return c("div", {
					className: "".concat(i.a.featuredWrapper)
				}, c("div", {
					className: "container"
				}, c("h1", {
					className: i.a.sectionTitle
				}, e), c("div", {
					className: "".concat(i.a.logoRow, " row d-flex")
				}, null === d || void 0 === d ? void 0 : d.map((function (a, e) {
					var l;
					return c("a", {
						href: null === a || void 0 === a ? void 0 : a.URL,
						target: "_blank",
						rel: "noreferrer",
						className: "col-md-2 col-4 mb-3 ".concat(i.a.logoWrapper),
						key: e
					}, c("img", {
						"data-src": null === (l = m[e]) || void 0 === l ? void 0 : l.URL,
						className: "lazyload"
					}))
				})))))
			}
		},
		vAdM: function (a, e, l) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[lang]/landlords", function () {
				return l("wYeg")
			}])
		},
		wYeg: function (a, e, l) {
			"use strict";
			l.r(e), l.d(e, "__N_SSG", (function () {
				return W
			}));
			var o = l("ODXe"),
				t = l("8Kt/"),
				n = l.n(t),
				d = l("q1tI"),
				i = l.n(d),
				r = l("TxL0"),
				s = l("wyBh"),
				c = l("5Yp1"),
				m = l("jobX"),
				u = l("k1G3"),
				v = l.n(u),
				_ = l("2v50"),
				b = l("7bXc"),
				g = l("K2T2"),
				p = l.n(g),
				f = i.a.createElement;

			function N(a) {
				var e = a.title,
					l = a.steps,
					o = void 0 === l ? [] : l;
				return f("div", {
					className: "container my-80 ".concat(p.a.mb60)
				}, f("h4", {
					className: "".concat(p.a.h4, " text-center")
				}, e), f("div", {
					className: "row justify-content-center"
				}, o.map((function (a, e) {
					return f("div", {
						className: "row col-12 col-md-auto flex-md-column text-cente ".concat(p.a.steps),
						key: e
					}, f("div", {
						className: "text-center col ".concat(p.a.noGutter)
					}, f("img", {
						"data-src": a.img,
						alt: a.title,
						className: "".concat(p.a.titleImg, " lazyload")
					})), f("h4", {
						style: {
							backgroundImage: 'url("'.concat(Object(_.a)({
								version: "v1587010481",
								name: "number-bg-w3.svg"
							}), '")')
						},
						className: "".concat(p.a.number, " ").concat(p.a.noGutter, " text-center col mt-md-4 mb-md-4")
					}, e + 1, e + 1 !== o.length && f("img", {
						"data-src": Object(_.a)({
							version: "v1595480123",
							name: "curved-line-w3.svg"
						}),
						alt: a.title,
						className: "lazyload d-none d-sm-none d-md-block"
					}), f("div", {
						className: p.a.verticalLine
					})), f("p", {
						className: "".concat(p.a.noGutter, " col")
					}, a.title))
				}))))
			}
			var y = l("9HNw"),
				h = l("1+QS"),
				w = l("ipDU"),
				C = l("o+F/"),
				L = l("rePB"),
				O = l("j49/"),
				j = l.n(O),
				x = l("30Jy"),
				k = l("z5Aq"),
				B = l("TQGz"),
				S = l("co3k"),
				T = l("l4F9"),
				I = l("99/u"),
				F = l("Ttqc"),
				z = l("WHkz"),
				E = function (a) {
					var e = a.values,
						l = a.errorSnippets,
						o = {};
					return (null === e || void 0 === e ? void 0 : e.firstName) || (o.firstName = null === l || void 0 === l ? void 0 : l.errors_required), (null === e || void 0 === e ? void 0 : e.lastName) || (o.lastName = null === l || void 0 === l ? void 0 : l.errors_required), (null === e || void 0 === e ? void 0 : e.email) ? Object(z.b)(null === e || void 0 === e ? void 0 : e.email) || (o.email = null === l || void 0 === l ? void 0 : l.errors_invalid_email) : o.email = null === l || void 0 === l ? void 0 : l.errors_required, (null === e || void 0 === e ? void 0 : e.country) || (o.country = null === l || void 0 === l ? void 0 : l.errors_required), (null === e || void 0 === e ? void 0 : e.bedrooms) || (o.bedrooms = null === l || void 0 === l ? void 0 : l.errors_required), (null === e || void 0 === e ? void 0 : e.mobile) || (o.mobile = null === l || void 0 === l ? void 0 : l.errors_required), o
				},
				D = i.a.createElement;

			function M(a, e) {
				var l = Object.keys(a);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(a);
					e && (o = o.filter((function (e) {
						return Object.getOwnPropertyDescriptor(a, e).enumerable
					}))), l.push.apply(l, o)
				}
				return l
			}

			function G(a) {
				for (var e = 1; e < arguments.length; e++) {
					var l = null != arguments[e] ? arguments[e] : {};
					e % 2 ? M(Object(l), !0).forEach((function (e) {
						Object(L.a)(a, e, l[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(l)) : M(Object(l)).forEach((function (e) {
						Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(l, e))
					}))
				}
				return a
			}

			function H(a) {
				var e, l, t = a.title,
					n = a.label_first_name,
					i = a.label_last_name,
					s = a.label_email,
					c = a.label_country,
					u = a.label_bedrooms,
					v = a.button_get_started,
					_ = a.contact_number,
					b = a.pdpa_label,
					g = Object(m.a)(r.ib),
					p = Object(o.a)(g, 2),
					f = p[0],
					N = p[1],
					y = Object(m.a)(r.E),
					h = Object(o.a)(y, 1)[0],
					w = null === h || void 0 === h || null === (e = h.data) || void 0 === e ? void 0 : e.snippets,
					C = Object(m.a)(r.g),
					L = Object(o.a)(C, 2),
					O = L[0],
					z = L[1],
					M = Object(m.a)(r.bb),
					H = Object(o.a)(M, 2),
					P = H[0],
					q = H[1],
					X = Object(d.useState)(),
					W = X[0],
					A = X[1],
					R = Object(d.useState)(),
					J = R[0],
					U = R[1],
					K = Object(T.a)({
						callback: function (a) {
							N({
								payload: G(G({}, a), {}, {
									phoneNumber: "".concat(a.code).concat(a.mobile)
								})
							})
						},
						initialState: {
							code: 65
						},
						validate: function (a) {
							return E({
								values: a,
								errorSnippets: w
							})
						}
					}),
					Y = K.handleChange,
					Q = K.handleSubmit,
					Z = K.values,
					V = K.errors,
					$ = K.isSubmitting,
					aa = function () {
						q({
							payload: {
								phone: "".concat(Z.code).concat(Z.mobile)
							}
						})
					};
				return Object(d.useEffect)((function () {
					Z.mobile && aa()
				}), [Z.code]), Object(d.useEffect)((function () {
					O && !(null === O || void 0 === O ? void 0 : O.loading) && A(Object(I.a)(O))
				}), [O]), Object(d.useEffect)((function () {
					P && !(null === P || void 0 === P ? void 0 : P.loading) && U(Object(I.b)(P))
				}), [P]), Object(d.useEffect)((function () {
					var a;
					(null === f || void 0 === f || null === (a = f.data) || void 0 === a ? void 0 : a.id) && (window.location.href = "https://landlord.hmlet.com/user/login")
				}), [null === f || void 0 === f || null === (l = f.data) || void 0 === l ? void 0 : l.id]), D(x.a, {
					className: "".concat(j.a.lease)
				}, D("h3", {
					className: "text-center mb-64 font-weight-normal"
				}, t), D("form", {
					onSubmit: Q
				}, D("div", {
					className: "row text-left"
				}, D(k.a, {
					className: "col-12 col-md-6",
					name: "firstName",
					value: Z.firstName,
					label: n,
					error: null === V || void 0 === V ? void 0 : V.firstName,
					onChange: Y
				}), D(k.a, {
					className: "col-12 col-md-6",
					name: "lastName",
					value: Z.lastName,
					label: i,
					error: null === V || void 0 === V ? void 0 : V.lastName,
					onChange: Y
				}), D(k.a, {
					className: "col-12",
					name: "email",
					value: Z.email,
					label: s,
					error: null === V || void 0 === V ? void 0 : V.email,
					onChange: Y,
					onBlur: function (a) {
						var e = a.currentTarget.value;
						z({
							payload: {
								email: e
							}
						})
					},
					valid: W,
					validationMessage: "valid" === W ? null === w || void 0 === w ? void 0 : w.errors_valid_email : "invalid" === W ? null === w || void 0 === w ? void 0 : w.errors_invalid_email : ""
				}), D(B.a, {
					className: "col-12",
					name: "country",
					value: Z.country,
					label: c,
					items: [{
						value: "SG",
						text: "Singapore"
					}, {
						value: "JP",
						text: "Japan"
					}, {
						value: "HK",
						text: "Hong Kong"
					}, {
						value: "AU",
						text: "Australia"
					}, {
						value: "TH",
						text: "Thailand"
					}, {
						value: "MY",
						text: "Malaysia"
					}],
					display: {
						id: "value",
						name: "text"
					},
					error: null === V || void 0 === V ? void 0 : V.country,
					onChange: Y,
					listContainerClassName: "w-100"
				}), D(B.a, {
					className: "col-12",
					name: "bedrooms",
					value: Z.bedrooms,
					label: u,
					items: [{
						value: "1",
						text: "One Bedroom"
					}, {
						value: "2",
						text: "Two Bedroom"
					}, {
						value: "3",
						text: "Three Bedroom"
					}, {
						value: "4",
						text: "Four Bedroom"
					}, {
						value: "5",
						text: "Five Bedroom"
					}],
					listContainerClassName: "w-100",
					display: {
						id: "value",
						name: "text"
					},
					error: null === V || void 0 === V ? void 0 : V.bedrooms,
					onChange: Y
				}), D("div", {
					className: "col-12"
				}, D("div", {
					className: "row"
				}, D(F.a, {
					label: _,
					className: "col-auto",
					phoneValidState: "",
					codeId: "code",
					codeName: "code",
					numberName: "mobile",
					numberId: "mobile",
					placeholder: "mobile",
					defaultCountry: "sg",
					preferredCountries: ["jp", "sg", "au", "hk", "us", "gb"],
					onChangeNumber: Y,
					onChangeCode: Y,
					onBlur: aa,
					error: null === V || void 0 === V ? void 0 : V.mobile,
					valid: J,
					validationMessage: "valid" === J ? null === w || void 0 === w ? void 0 : w.errors_valid_phone_no : "invalid" === J ? null === w || void 0 === w ? void 0 : w.errors_invalid_phone_no : ""
				})))), D(S.a, {
					text: v,
					btnClass: "".concat(j.a.mt50, " ").concat(j.a.submitBtn),
					isSubmit: $
				}), D("p", {
					className: j.a.pdpaConsent,
					dangerouslySetInnerHTML: {
						__html: b
					}
				})))
			}
			var P = i.a.createElement;

			function q(a) {
				var e = a.snippets,
					l = a.images;
				return [P("div", {
					className: "container ".concat(v.a.leaseForm),
					key: "lease-form"
				}, P("div", {
					className: "col-12 offset-0 col-md-6 offset-md-1"
				}, P(H, {
					title: null === e || void 0 === e ? void 0 : e.landlords_form_title,
					label_first_name: null === e || void 0 === e ? void 0 : e.landlords_form_label_first_name,
					label_last_name: null === e || void 0 === e ? void 0 : e.landlords_form_label_last_name,
					label_email: null === e || void 0 === e ? void 0 : e.landlords_form_label_email,
					label_country: null === e || void 0 === e ? void 0 : e.landlords_form_label_country,
					label_bedrooms: null === e || void 0 === e ? void 0 : e.landlords_form_label_bedrooms,
					button_get_started: null === e || void 0 === e ? void 0 : e.landlords_form_button_get_started,
					contact_number: null === e || void 0 === e ? void 0 : e.landlords_contact_number,
					pdpa_label: null === e || void 0 === e ? void 0 : e.landlords_accept_pdpa
				}))), P("div", {
					className: "baby-powder-bg container-fluid overflow-hidden pl-xs-sm-only-5 pr-xs-sm-only-5",
					key: "landlord-get-more"
				}, P("div", {
					className: "container ".concat(v.a.getMore)
				}, P("div", {
					className: "row"
				}, P("div", {
					className: "col-12 col-md-5"
				}, P("h1", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.landlords_get_more
					},
					className: "mb-20"
				}), P("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.landlords_hassle_free
					}
				}))))), P("div", {
					className: "container ".concat(v.a.getMoreImg),
					key: "get-more-image"
				}, P("img", {
					alt: null === e || void 0 === e ? void 0 : e.landlords_get_more,
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_your_space,
					className: "lazyload fit-image d-none d-sm-none d-md-block ".concat(v.a.mt40)
				}), P("img", {
					alt: null === e || void 0 === e ? void 0 : e.landlords_get_more,
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_your_space_mobile,
					className: "lazyload fit-image d-sm-flex d-md-none"
				})), P(y.a, {
					title: null === e || void 0 === e ? void 0 : e.landlords_why_lease,
					snippetsArray: [{
						title: null === e || void 0 === e ? void 0 : e.landlords_stable_rent,
						desc: null === e || void 0 === e ? void 0 : e.landlords_we_guarantee
					}, {
						title: null === e || void 0 === e ? void 0 : e.landlords_efficient,
						desc: null === e || void 0 === e ? void 0 : e.landlords_paperwork
					}, {
						title: null === e || void 0 === e ? void 0 : e.landlords_design,
						desc: null === e || void 0 === e ? void 0 : e.landlords_renovating
					}],
					sectionTitleClass: v.a.title,
					titleClassName: "".concat(v.a.numberTitle),
					columnClass: "col-12 col-md-4",
					containerClassName: v.a.touchBase,
					key: "why-lease"
				}), P("div", {
					className: "baby-powder-bg container-fluid overflow-hidden",
					key: "about-hmlet-about-base"
				}, P("div", {
					className: "container"
				}, P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_plant,
					alt: "plant background",
					className: "lazyload d-none d-sm-none d-md-block ".concat(v.a.plantBg)
				}), P(b.a, {
					img: null === l || void 0 === l ? void 0 : l.landlords_about_hmlet,
					imgAlt: null === e || void 0 === e ? void 0 : e.landlords_about,
					imgClassName: "fit-image lazyload aboutUsImg",
					position: "right",
					leftColumnClassName: "col-12 col-md-5 flex-column flex-md-row",
					rightColumnClassName: "flex-column offset-1 col-6",
					containerClassName: "".concat(v.a.aboutHmlet, " pt-64 pb-64"),
					fullWidth: !0
				}, P("h4", {
					style: {
						backgroundImage: "url(".concat(Object(_.a)({
							version: "v1587010481",
							name: "green-highlight-w3.png"
						}), ")")
					},
					className: v.a.title
				}, null === e || void 0 === e ? void 0 : e.landlords_about), P("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.landlords_pronounced
					},
					className: v.a.description
				}), P("div", {
					className: "row"
				}, P("p", {
					className: "".concat(v.a.backedBy, " ").concat(v.a.mb12, " col-4 col-lg-auto")
				}, null === e || void 0 === e ? void 0 : e.landlords_backed_by), P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_investment_burda,
					className: "".concat(v.a.backedByImg, " ").concat(v.a.mb12, " lazyload col-4 col-lg-auto")
				}), P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_investment_mitsubishi,
					className: "".concat(v.a.backedByImg, " ").concat(v.a.mb12, " lazyload col-4 col-lg-auto")
				}), P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_investment_sequoia,
					className: "".concat(v.a.backedByImg, " ").concat(v.a.mb12, " lazyload offset-4 offset-lg-0 col-4 col-lg-auto")
				}), P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_investment_reinventure,
					className: "".concat(v.a.backedByImg, " ").concat(v.a.mb12, " lazyload col-4 col-lg-auto")
				}))), P(b.a, {
					img: P("div", {
						className: "row"
					}, P("img", {
						"data-src": null === l || void 0 === l ? void 0 : l.landlords_member_base_1,
						alt: null === e || void 0 === e ? void 0 : e.landlords_member_base,
						className: "lazyload col-6"
					}), P("img", {
						"data-src": null === l || void 0 === l ? void 0 : l.landlords_member_base_2,
						alt: null === e || void 0 === e ? void 0 : e.landlords_member_base,
						className: "lazyload col-6 ".concat(v.a.pl0)
					})),
					position: "left",
					leftColumnClassName: "col-12 col-md-5 flex-column",
					rightColumnClassName: "col-12 col-md-7",
					containerClassName: "".concat(v.a.memberBase, " pb-64"),
					fullWidth: !0
				}, P("h4", {
					style: {
						backgroundImage: "url(".concat(Object(_.a)({
							version: "v1587010481",
							name: "green-highlight-w3.png"
						}), ")")
					},
					className: v.a.title
				}, null === e || void 0 === e ? void 0 : e.landlords_member_base), P("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.landlords_curated
					},
					className: v.a.description
				})))), P(N, {
					key: "leasing-steps",
					title: null === e || void 0 === e ? void 0 : e.landlords_leasing,
					steps: [{
						title: null === e || void 0 === e ? void 0 : e.landlords_estimate,
						img: null === l || void 0 === l ? void 0 : l.landlords_estimate
					}, {
						title: null === e || void 0 === e ? void 0 : e.landlords_contract,
						img: null === l || void 0 === l ? void 0 : l.landlords_contract
					}, {
						title: null === e || void 0 === e ? void 0 : e.landlords_renovation,
						img: null === l || void 0 === l ? void 0 : l.landlords_renovation
					}, {
						title: null === e || void 0 === e ? void 0 : e.landlords_profiting,
						img: null === l || void 0 === l ? void 0 : l.landlords_profiting
					}]
				}), P("div", {
					className: "".concat(v.a.ourProperites, " container"),
					key: "our-properties"
				}, P("h2", {
					className: "text-center"
				}, null === e || void 0 === e ? void 0 : e.landlords_existing), P(h.a, {
					showDots: !0,
					renderDotsOutside: !0,
					dots: P(w.a, {
						className: v.a.dot,
						activeClassName: v.a.active
					}),
					dotListClass: v.a.carouselDotList,
					itemClass: "".concat(v.a.items, " col-12 col-md-4 pl-xs-sm-only-5 pr-xs-sm-only-5"),
					infinite: !1
				}, P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_properties_1,
					alt: "our property one",
					className: "lazyload fit-image"
				}), P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_properties_2,
					alt: "our property two",
					className: "lazyload fit-image"
				}), P("img", {
					"data-src": null === l || void 0 === l ? void 0 : l.landlords_properties_3,
					alt: "our property three",
					className: "lazyload fit-image"
				}))), P(C.a, {
					title: null === e || void 0 === e ? void 0 : e.landlords_featured_in,
					key: "featured-in"
				})]
			}
			var X = i.a.createElement;
			var W = !0;
			e.default = function () {
				var a, e, l, t = Object(m.a)(r.H),
					d = Object(o.a)(t, 1)[0],
					i = null === d || void 0 === d || null === (a = d.data) || void 0 === a ? void 0 : a.snippets,
					u = null === d || void 0 === d || null === (e = d.data) || void 0 === e ? void 0 : e.images,
					v = null === d || void 0 === d || null === (l = d.data) || void 0 === l ? void 0 : l.links;
				return X(c.a, null, X(n.a, null, X("title", null, s.a.LANDLORDS)), X("main", null, X(q, {
					snippets: i,
					images: u,
					links: v
				})))
			}
		}
	},
	[
		["vAdM", 1, 2, 3, 5, 0, 4, 6, 7, 8, 12]
	]
]);