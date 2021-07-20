_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[31], {
		"1Sne": function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				n = e.n(t),
				i = e("9qpc"),
				l = e.n(i),
				c = e("2v50"),
				s = e("co3k"),
				r = n.a.createElement;
			o.a = function (a) {
				var o = a.title,
					e = a.subtitle,
					t = a.buttonText,
					n = a.onClick,
					i = a.leftColumnStyles;
				return r("div", {
					className: "full-width ".concat(l.a.interestedWrapper)
				}, r("div", {
					className: "container ".concat(l.a.containerWrapper),
					style: {
						backgroundImage: "url(".concat(Object(c.a)({
							version: "v1587010481",
							name: "smile-face.svg"
						}), "\n                )")
					}
				}, r("div", {
					className: "row h-100"
				}, r("div", {
					className: "col-12 col-md-6 d-flex ".concat(l.a.leftColumn, "  align-items-center align-items-sm-center justify-content-md-end justify-content-center")
				}, r("div", {
					className: "".concat(i, " ")
				}, r("h2", {
					className: "text-md-left text-sm-center"
				}, o), r("p", {
					className: "text-md-left text-sm-center text-center"
				}, e))), r("div", {
					className: "col-12 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center ".concat(l.a.contentWrapper)
				}, r("div", {
					className: "offset-sm-0 offset-md-2"
				}, r(s.a, {
					btnClass: l.a.buttonClass,
					text: t,
					onClick: n
				}))))))
			}
		},
		"9HNw": function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				n = e.n(t),
				i = e("m6Xz"),
				l = e.n(i),
				c = e("2v50"),
				s = n.a.createElement,
				r = function (a) {
					return s("span", {
						style: {
							backgroundImage: 'url("'.concat(Object(c.a)({
								version: "v1587010481",
								name: "number-bg-w3.svg"
							}), '")')
						}
					}, a.children)
				};
			o.a = function (a) {
				for (var o = a.title, e = a.subtitle, t = a.snippetsArray, n = a.columnClass, i = void 0 === n ? "col-md-3 col-12" : n, c = a.sectionTitleClass, m = a.titleClassName, d = a.containerClassName, _ = a.anim, u = [], p = t.length, v = 0; v < p; v++) {
					var g, h, f = null === (g = t[v]) || void 0 === g ? void 0 : g.title,
						N = null === (h = t[v]) || void 0 === h ? void 0 : h.desc;
					u.push(s("div", {
						key: v,
						className: i,
						"data-aos": _ ? "fade-up" : null,
						"data-aos-duration": _ ? "1000" : null,
						"data-aos-delay": _ ? 100 * (v + 1) : null,
						"data-aos-anchor-placement": _ ? "bottom-bottom" : null
					}, s("div", {
						className: "row"
					}, s("h3", {
						className: "".concat(m, " ").concat(l.a.noGutter, " col-auto")
					}, s(r, null, v + 1)), s("h3", {
						className: "".concat(m, " ").concat(l.a.noGutter, " col")
					}, f)), s("p", null, N)))
				}
				return s("div", {
					className: "".concat(l.a.touchBaseWrapper, " ").concat(d, " row justify-content-center")
				}, s("div", {
					className: "".concat(l.a.containerColor, " col-auto")
				}, s("div", {
					className: "container"
				}, s("h2", {
					className: "text-center ".concat(c)
				}, o), e && s("p", {
					className: l.a.subtitle
				}, e), s("div", {
					className: "row"
				}, u))))
			}
		},
		"9qpc": function (a, o, e) {
			a.exports = {
				interestedWrapper: "Interested_interestedWrapper__3RDs5",
				containerWrapper: "Interested_containerWrapper__2jWNc",
				leftColumn: "Interested_leftColumn__2pZ-5",
				contentWrapper: "Interested_contentWrapper__3n6SJ",
				buttonClass: "Interested_buttonClass__36UDb"
			}
		},
		AkRe: function (a, o, e) {
			a.exports = {
				featuredWrapper: "Clientele_featuredWrapper__1_UOJ",
				logoRow: "Clientele_logoRow__18Vyx",
				logoWrapper: "Clientele_logoWrapper__2Lo72"
			}
		},
		GmWV: function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				n = e.n(t),
				i = e("z4UT"),
				l = e.n(i),
				c = n.a.createElement;
			o.a = function (a) {
				var o = a.src,
					e = a.position,
					t = a.className,
					n = a.onClick;
				return c("div", {
					className: "".concat(l.a.sqrBtn, " ").concat(l.a[e], " ").concat(t),
					onClick: n
				}, c("img", {
					src: o,
					className: "".concat(l.a.arrow, " ").concat(l.a[e])
				}))
			}
		},
		QOUz: function (a, o, e) {
			a.exports = {
				imageWrapper: "ImageGrid_imageWrapper__2K0t1",
				halfImgWrapper: "ImageGrid_halfImgWrapper__3JHut",
				halfImage: "ImageGrid_halfImage__1MlGh",
				pb15: "ImageGrid_pb15__1I_ad",
				pt15: "ImageGrid_pt15__1pfSo",
				pl15: "ImageGrid_pl15__BOxUU",
				pr15: "ImageGrid_pr15__3gpX-",
				mobileContainer: "ImageGrid_mobileContainer__wme1O",
				pr0: "ImageGrid_pr0__2HC_c",
				w454: "ImageGrid_w454__1pzkh",
				w302: "ImageGrid_w302__mlcat"
			}
		},
		SjI2: function (a, o, e) {
			a.exports = {
				wrapper: "Amenities_wrapper__RTIEB",
				title: "Amenities_title__13-4R",
				imgContainer: "Amenities_imgContainer__3lBit",
				img1: "Amenities_img1__1NM2b",
				img3: "Amenities_img3__1i21X",
				img2: "Amenities_img2__3nOfI",
				img4: "Amenities_img4__Lg2zf",
				img5: "Amenities_img5__3BIsM",
				img7: "Amenities_img7__12CD2",
				img8: "Amenities_img8__3GnLo",
				img6: "Amenities_img6__11amw",
				pb50: "Amenities_pb50__2eVzi"
			}
		},
		TuNj: function (a, o, e) {
			"use strict";
			e.r(o), e.d(o, "__N_SSG", (function () {
				return O
			}));
			var t = e("ODXe"),
				n = e("8Kt/"),
				i = e.n(n),
				l = e("q1tI"),
				c = e.n(l),
				s = e("TxL0"),
				r = e("wyBh"),
				m = e("5Yp1"),
				d = e("jobX"),
				_ = e("7bXc"),
				u = e("XfR6"),
				p = e.n(u),
				v = e("gDgw"),
				g = e("9HNw"),
				h = e("AkRe"),
				f = e.n(h),
				N = c.a.createElement;
			var b = function (a) {
					var o = a.logoArray,
						e = a.logoColumnClass,
						t = void 0 === e ? "col-md-2 col-4 mb-3" : e;
					return N("div", {
						className: "".concat(f.a.featuredWrapper)
					}, N("div", {
						className: "container"
					}, N("div", {
						className: "".concat(f.a.logoRow, " row d-flex no-margin")
					}, o.map((function (a, o) {
						return N("div", {
							key: o,
							className: "".concat(t, " ").concat(f.a.logoWrapper)
						}, N("img", {
							"data-src": a,
							className: "lazyload"
						}))
					})))))
				},
				y = e("1Sne"),
				w = e("W2oC"),
				k = e("QOUz"),
				C = e.n(k),
				I = c.a.createElement;
			var x = function (a) {
					var o = a.images;
					return I("div", {
						className: "col-12"
					}, I("div", {
						className: "".concat(C.a.mobileContainer)
					}, I("div", {
						className: "".concat(C.a.logoRow, " row d-flex flex-nowrap overflow-auto")
					}, I("div", {
						className: "col-auto ".concat(C.a.pr15, " ").concat(C.a.halfImgWrapper)
					}, I("div", {
						className: "row flex-row flex-md-column flex-nowrap"
					}, I("div", {
						className: "col-auto ".concat(C.a.imageWrapper, " ").concat(C.a.pb15, " ").concat(C.a.pr15, " ").concat(C.a.w302)
					}, I("img", {
						src: null === o || void 0 === o ? void 0 : o.corporate_housing_facilities_1,
						alt: "",
						className: "fit-image lazyload h-md-auto w-md-auto h-100 w-inherit"
					})), I("div", {
						className: "col-auto ".concat(C.a.halfImage, " ").concat(C.a.imageWrapper, " ").concat(C.a.pt15, " ").concat(C.a.pr15, " ").concat(C.a.w302)
					}, I("img", {
						src: null === o || void 0 === o ? void 0 : o.corporate_housing_facilities_2,
						alt: "",
						className: "fit-image lazyload h-md-auto w-md-auto h-100 w-inherit"
					})))), I("div", {
						className: "col-auto ".concat(C.a.imageWrapper, " ").concat(C.a.pl15, " ").concat(C.a.pr15, " ").concat(C.a.w302)
					}, I("img", {
						src: null === o || void 0 === o ? void 0 : o.corporate_housing_facilities_3,
						alt: "",
						className: "fit-image lazyload h-md-auto w-md-auto h-100 w-inherit"
					})), I("div", {
						className: "col-auto ".concat(C.a.imageWrapper, " ").concat(C.a.pl15, " ").concat(C.a.pr0, " ").concat(C.a.w454)
					}, I("img", {
						src: null === o || void 0 === o ? void 0 : o.corporate_housing_facilities_4,
						alt: "",
						className: "fit-image lazyload h-md-auto w-md-auto h-100 w-inherit"
					})))))
				},
				H = e("iZN9"),
				W = e("cRvF"),
				S = e("rN/A"),
				T = c.a.createElement;

			function q(a) {
				var o, e = a.snippets,
					n = a.images,
					i = a.amenitiesSnippets,
					c = a.amenitiesImages,
					r = Object(l.useState)(!1),
					m = r[0],
					u = r[1],
					h = Object(d.a)(s.gb),
					f = Object(t.a)(h, 2)[1],
					N = Object(d.a)(s.E),
					k = Object(t.a)(N, 1)[0],
					C = [{
						title: null === e || void 0 === e ? void 0 : e.corporate_housing_easy,
						desc: null === e || void 0 === e ? void 0 : e.corporate_housing_our
					}, {
						title: null === e || void 0 === e ? void 0 : e.corporate_housing_flexible,
						desc: null === e || void 0 === e ? void 0 : e.corporate_housing_from
					}, {
						title: null === e || void 0 === e ? void 0 : e.corporate_housing_dedicated,
						desc: null === e || void 0 === e ? void 0 : e.corporate_housing_our_professional
					}],
					I = [null === n || void 0 === n ? void 0 : n.corporate_housing_american_ex_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_apple_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_amazon_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_black_sheep_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_dbs_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_facebook_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_grab_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_google_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_marine_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_insead_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_kpmg_logo, null === n || void 0 === n ? void 0 : n.corporate_housing_shopee_logo],
					q = function () {
						u(!m)
					};
				return [T("div", {
					key: "corporate-housing-top-section"
				}, T(S.a, {
					img: null === n || void 0 === n ? void 0 : n.corporate_housing_stamp,
					className: p.a.stamp
				}), T(W.a, {
					img: null === n || void 0 === n ? void 0 : n.corporate_housing_main,
					imgAlt: "corporate_housing_main",
					imgClassName: "".concat(p.a.corporateHousingImg, " fit-image"),
					containerClassName: "".concat(p.a.corporateHousing),
					rightColumnClassName: "".concat(p.a.corporateHousingRight, " pr-0"),
					leftColumnClassName: "".concat(p.a.corporateHousingLeft)
				}, T("div", {
					className: "".concat(p.a.corporateHousingWrapper)
				}, T("h1", {
					className: "mb-20",
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_corporate
					}
				}), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_make_the_most
					}
				})))), T(_.a, {
					key: "page-description-section"
				}, T("div", {
					className: "offset-md-3 col-md-6 col-12 text-center mt-80 m-mt-60 m-pb-60 border-bottom pb-64 pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_the_last_thing
					}
				}))), T(_.a, {
					key: "accommodation-options-section"
				}, T("div", {
					className: "offset-md-3 col-md-6 col-12 text-center m-mt-60 mt-64 pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, T("h2", {
					className: "mb-20"
				}, null === e || void 0 === e ? void 0 : e.corporate_housing_accomodation), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_whether
					}
				}))), T(_.a, {
					key: "accommodation-options-section"
				}, T("div", {
					className: "container pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, T("div", {
					className: "row"
				}, T("div", {
					className: "col-10 ml-auto mr-auto"
				}, T("div", {
					className: "row"
				}, T("div", {
					className: "col-md-4 col-12 mt-80 m-mt-60 ".concat(p.a.accommodationBlock)
				}, T("img", {
					"data-src": null === n || void 0 === n ? void 0 : n.corporate_housing_studio,
					className: "lazyload"
				}), T("h3", {
					className: "mb-20"
				}, null === e || void 0 === e ? void 0 : e.corporate_housing_private), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_choose_from
					}
				})), T("div", {
					className: "col-md-4 col-12 mt-80 m-mt-60 ".concat(p.a.accommodationBlock)
				}, T("img", {
					src: null === n || void 0 === n ? void 0 : n.corporate_housing_private_room,
					className: "lazyload"
				}), T("h3", {
					className: "mb-20"
				}, null === e || void 0 === e ? void 0 : e.corporate_housing_studio), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_ideal_for
					}
				})), T("div", {
					className: "col-md-4 col-12 mt-80 m-mt-60 ".concat(p.a.accommodationBlock)
				}, T("img", {
					"data-src": null === n || void 0 === n ? void 0 : n.corporate_housing_2_3_rooms,
					className: "lazyload"
				}), T("h3", {
					className: "mb-20"
				}, null === e || void 0 === e ? void 0 : e.corporate_housing_2_or_3), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_room_for
					}
				})))))), T("div", {
					className: "container"
				}, T(v.a, {
					sectionTitle: null === e || void 0 === e ? void 0 : e.corporate_housing_included,
					snippets: i,
					images: c
				}))), T("div", {
					key: "facilities-section"
				}, T(_.a, {
					containerClassName: "pl-xs-sm-only-5 pr-xs-sm-only-5 container"
				}, T("div", {
					className: "col-12 text-center mt-3 m-mt-60 ".concat(p.a.pb60, " pl-xs-sm-only-0 pr-xs-sm-only-0")
				}, T("h2", {
					className: "mb-20"
				}, null === e || void 0 === e ? void 0 : e.corporate_housing_facilities), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_our_locations
					}
				})), T(x, {
					images: n
				}))), T("div", {
					className: "my-80 ml-0 mr-0",
					key: "why-hmlet-section "
				}, T(g.a, {
					title: null === e || void 0 === e ? void 0 : e.corporate_housing_why,
					columnClass: "col-md-4 col-12",
					snippetsArray: C,
					sectionTitleClass: p.a.whyHmletTitle
				})), T(_.a, {
					key: "clientele-section"
				}, T("div", {
					className: "offset-md-3 col-md-6 col-12 text-center mt-80 m-mt-60 pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, T("h2", {
					className: "mb-20"
				}, null === e || void 0 === e ? void 0 : e.corporate_housing_clientele), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === e || void 0 === e ? void 0 : e.corporate_housing_when_it
					}
				})), T("div", {
					className: "container pl-xs-sm-only-0 pr-xs-sm-only-0"
				}, T(b, {
					logoArray: I
				}))), T("div", {
					className: "overflow-hidden m-pb-60 ".concat(p.a.feedback),
					key: "clientele-slider-section"
				}, T(w.a, {
					snippets: e,
					images: n,
					userHandle: "corporate_housing_clientele_",
					feedbackHandle: "corporate_housing_clientele_",
					imageFirst: !1
				})), T(y.a, {
					key: "interested-section",
					title: null === e || void 0 === e ? void 0 : e.corporate_housing_interested,
					subtitle: null === e || void 0 === e ? void 0 : e.corporate_housing_lets,
					buttonText: null === e || void 0 === e ? void 0 : e.corporate_housing_get,
					onClick: q
				}), T("div", {
					key: "getintouch"
				}, m && T(H.a, {
					title: null === e || void 0 === e ? void 0 : e.corporate_housing_form_title_get_in_touch,
					description: null === e || void 0 === e ? void 0 : e.corporate_housing_form_description_reach_out,
					label_first_name: null === e || void 0 === e ? void 0 : e.corporate_housing_form_first_name,
					label_last_name: null === e || void 0 === e ? void 0 : e.corporate_housing_form_last_name,
					label_email: null === e || void 0 === e ? void 0 : e.corporate_housing_form_email,
					label_company: null === e || void 0 === e ? void 0 : e.corporate_housing_form_company_name,
					label_message: null === e || void 0 === e ? void 0 : e.corporate_housing_form_message,
					label_message_hint: null === e || void 0 === e ? void 0 : e.corporate_housing_form_message_example,
					submit_btn: null === e || void 0 === e ? void 0 : e.corporate_housing_form_button_submit,
					onSubmit: function (a) {
						f({
							payload: a
						})
					},
					closeBtn: q,
					errorMessges: null === k || void 0 === k || null === (o = k.data) || void 0 === o ? void 0 : o.snippets
				}))]
			}
			var B = c.a.createElement;
			var O = !0;
			o.default = function () {
				var a, o, e, n, l = Object(d.a)(s.A),
					c = Object(t.a)(l, 1)[0],
					_ = null === c || void 0 === c || null === (a = c.data) || void 0 === a ? void 0 : a.snippets,
					u = null === c || void 0 === c || null === (o = c.data) || void 0 === o ? void 0 : o.images,
					p = Object(d.a)(s.l),
					v = Object(t.a)(p, 1)[0],
					g = null === v || void 0 === v || null === (e = v.data) || void 0 === e ? void 0 : e.snippets,
					h = null === v || void 0 === v || null === (n = v.data) || void 0 === n ? void 0 : n.images;
				return B(m.a, null, B(i.a, null, B("title", null, r.a.CORPORATE)), B("main", null, B(q, {
					snippets: _,
					images: u,
					amenitiesSnippets: g,
					amenitiesImages: h
				})))
			}
		},
		W2oC: function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				n = e.n(t),
				i = e("2v50"),
				l = e("1+QS"),
				c = e("30Jy"),
				s = e("rHMZ"),
				r = e.n(s),
				m = e("GmWV"),
				d = e("ipDU"),
				_ = n.a.createElement,
				u = function (a) {
					var o = a.className,
						e = a.style,
						t = a.onClick;
					return _(m.a, {
						onClick: t,
						position: "right",
						style: e,
						className: "".concat(o, " d-none d-sm-none d-md-block"),
						src: Object(i.a)({
							version: "v1592890058",
							name: "arrow-w3.svg"
						})
					})
				},
				p = function (a) {
					var o = a.className,
						e = a.style,
						t = a.onClick;
					return _(m.a, {
						onClick: t,
						position: "left",
						style: e,
						className: "".concat(o, " d-none d-sm-none d-md-block"),
						src: Object(i.a)({
							version: "v1592890058",
							name: "arrow-w3.svg"
						})
					})
				};
			o.a = function (a) {
				for (var o = a.snippets, e = a.images, s = a.userHandle, m = a.feedbackHandle, v = a.imageFirst, g = void 0 === v || v, h = a.anim, f = Object(t.useState)(0), N = f[0], b = f[1], y = [], w = 1; w <= 3; w++) {
					var k = null === e || void 0 === e ? void 0 : e[s + w],
						C = null === o || void 0 === o ? void 0 : o[s + "name_" + w],
						I = null === o || void 0 === o ? void 0 : o[s + "designation_" + w],
						x = null === o || void 0 === o ? void 0 : o[m + w];
					y.push(_(c.a, {
						key: w,
						className: "".concat(r.a.card, " ").concat(w === N ? r.a.activeSlide : null),
						"data-aos": h ? "fade-up" : null,
						"data-aos-duration": h ? "1500" : null,
						"data-aos-delay": h ? "500" : null
					}, g && _("img", {
						className: "".concat(r.a.avtar, " lazyload"),
						"data-src": k
					}), _("p", {
						dangerouslySetInnerHTML: {
							__html: x
						}
					}), _("div", {
						className: r.a.name
					}, C), _("div", {
						className: r.a.designation
					}, I), !g && _(n.a.Fragment, null, _("div", {
						className: "".concat(r.a.whiteSpace)
					}), _("img", {
						className: "".concat(r.a.logo, " lazyload"),
						"data-src": k
					}))))
				}
				return _("div", {
					className: "container"
				}, (null === o || void 0 === o ? void 0 : o.homepage_what_living_title) && _("h2", {
					className: "".concat(r.a.feedbackTitle, " mobile-space text-center")
				}, null === o || void 0 === o ? void 0 : o.homepage_what_living_title), _("div", {
					className: "mb-64 ".concat(r.a.feedbackWrapper, " text-center")
				}, _("div", {
					className: "".concat(r.a.quote, " ").concat(r.a.quoteUp, " d-none d-sm-none d-md-flex"),
					style: {
						backgroundImage: "url(".concat(Object(i.a)({
							version: "v1593160071",
							name: "quote-open-w3.svg"
						}), "\n                )")
					}
				}), _("div", {
					className: "".concat(r.a.quote, " ").concat(r.a.quoteDown, " d-none d-sm-none d-md-flex"),
					style: {
						backgroundImage: "url(".concat(Object(i.a)({
							version: "v1587010481",
							name: "quote-close-w3.svg"
						}), "\n                )")
					}
				}), _(l.a, {
					beforeChange: function (a) {
						b(a)
					},
					leftButton: _(p, null),
					rightButton: _(u, null),
					showDots: !0,
					renderDotsOutside: !0,
					dots: _(d.a, {
						className: r.a.dot,
						activeClassName: r.a.active
					}),
					dotListClass: r.a.dotList,
					infinite: !1
				}, y)))
			}
		},
		XfR6: function (a, o, e) {
			a.exports = {
				stamp: "Corporate_stamp__12b-C",
				corporateHousing: "Corporate_corporateHousing__3Yg5J",
				corporateHousingImg: "Corporate_corporateHousingImg__sgRoX",
				corporateHousingLeft: "Corporate_corporateHousingLeft__35_Si",
				corporateHousingWrapper: "Corporate_corporateHousingWrapper__FDGOW",
				corporateHousingRight: "Corporate_corporateHousingRight__3l8TE",
				accommodationBlock: "Corporate_accommodationBlock__3PbiK",
				whyHmletTitle: "Corporate_whyHmletTitle__2Cl8P",
				pb60: "Corporate_pb60__2wzB9",
				feedback: "Corporate_feedback__3yJgd"
			}
		},
		cRvF: function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				n = e.n(t).a.createElement;
			o.a = function (a) {
				var o = a.img,
					e = a.imgAlt,
					t = a.imgClassName,
					i = a.containerClassName,
					l = a.leftColumnClassName,
					c = void 0 === l ? "" : l,
					s = a.rightColumnClassName,
					r = void 0 === s ? "" : s,
					m = a.children,
					d = a.anim,
					_ = a.noLazyload,
					u = "string" === typeof o ? n("img", void 0 !== _ && _ ? {
						src: o,
						alt: e,
						className: "".concat(t),
						"data-aos": d ? "fade-in" : null,
						"data-aos-duration": d ? "1300" : null,
						"data-aos-delay": d ? "500" : null
					} : {
						"data-src": o,
						alt: e,
						className: "".concat(t, " lazyload"),
						"data-aos": d ? "fade-in" : null,
						"data-aos-duration": d ? "1300" : null,
						"data-aos-delay": d ? "500" : null
					}) : o;
				return n("div", {
					className: "container-fluid position-relative ".concat(i)
				}, n("div", {
					className: "row"
				}, n("div", {
					className: "col-12 col-md-6 offset-0 offset-md-6 ".concat(r)
				}, u), n("div", {
					className: "container billboardHero"
				}, n("div", {
					className: "col-12 col-md-6 ".concat(c)
				}, m))))
			}
		},
		gDgw: function (a, o, e) {
			"use strict";
			e.d(o, "a", (function () {
				return r
			}));
			var t = e("KQm4"),
				n = e("q1tI"),
				i = e.n(n),
				l = e("SjI2"),
				c = e.n(l),
				s = i.a.createElement;

			function r(a) {
				var o = a.sectionTitle,
					e = a.snippets,
					n = a.images,
					i = a.anim;
				return s("div", {
					className: "".concat(c.a.wrapper, " row mt-64 pb-64 mb-0 ").concat(c.a.pb50),
					"data-aos": i ? "fade-in" : null,
					"data-aos-duration": i ? "1300" : null,
					"data-aos-delay": i ? "500" : null
				}, s("div", {
					className: "col-md-3"
				}, s("h2", {
					className: "".concat(c.a.title, " background-highlight-green")
				}, o)), s("div", {
					className: "col-md-9"
				}, s("div", {
					className: "row mt-md-0 mt-4"
				}, Object(t.a)(Array(8).keys()).map((function (a) {
					var o = "amenities_" + (a + 1);
					return s("div", {
						key: a,
						className: "row align-items-center no-margin col-md-4 col-6"
					}, s("div", {
						className: c.a.imgContainer
					}, s("img", {
						"data-src": null === n || void 0 === n ? void 0 : n[o],
						alt: "",
						className: "lazyload ".concat(c.a["img" + (a + 1)])
					})), s("p", {
						className: "col"
					}, null === e || void 0 === e ? void 0 : e[o]))
				})))))
			}
		},
		m2sD: function (a, o, e) {
			a.exports = {
				stamp: "Stamp_stamp__21ZiJ"
			}
		},
		m6Xz: function (a, o, e) {
			a.exports = {
				touchBaseWrapper: "TouchBase_touchBaseWrapper__1eA26",
				containerColor: "TouchBase_containerColor__2JDoF",
				subtitle: "TouchBase_subtitle__2vNnF",
				noGutter: "TouchBase_noGutter__2d03w"
			}
		},
		rHMZ: function (a, o, e) {
			a.exports = {
				feedbackWrapper: "Feedback_feedbackWrapper__Cizat",
				dotList: "Feedback_dotList__2XbCm",
				dot: "Feedback_dot__31Jsr",
				active: "Feedback_active__V0Xda",
				card: "Feedback_card__V8M-h",
				activeSlide: "Feedback_activeSlide__DHSMq",
				avtar: "Feedback_avtar__2jXbi",
				logo: "Feedback_logo__1JYJU",
				whiteSpace: "Feedback_whiteSpace__3v2eh",
				name: "Feedback_name__2cT3B",
				designation: "Feedback_designation__qOqyB",
				quote: "Feedback_quote__J7k5s",
				quoteUp: "Feedback_quoteUp__1YYcG",
				quoteDown: "Feedback_quoteDown__1XiCO",
				feedbackTitle: "Feedback_feedbackTitle__lHGwP"
			}
		},
		"rN/A": function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				n = e.n(t),
				i = e("m2sD"),
				l = e.n(i),
				c = n.a.createElement;
			o.a = function (a) {
				var o = a.img,
					e = a.className;
				return c("div", {
					className: "position-absolute ".concat(l.a.stamp, " ").concat(e)
				}, c("img", {
					"data-src": o,
					className: "lazyload fit-image"
				}))
			}
		},
		ss1v: function (a, o, e) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[lang]/corporate", function () {
				return e("TuNj")
			}])
		},
		z4UT: function (a, o, e) {
			a.exports = {
				sqrBtn: "SquareButton_sqrBtn__YjNBb",
				right: "SquareButton_right__3HJOu",
				left: "SquareButton_left__d-BDU"
			}
		}
	},
	[
		["ss1v", 1, 2, 3, 5, 0, 4, 6, 7, 8, 11, 10]
	]
]);