_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[26], {
		"/06W": function (a, o, e) {
			"use strict";
			e.d(o, "a", (function () {
				return v
			}));
			var t = e("q1tI"),
				l = e.n(t),
				n = e("co3k"),
				s = e("htVU"),
				i = e.n(s),
				c = e("YFqc"),
				u = e.n(c),
				m = e("wyBh"),
				d = e("bhxT"),
				r = e("nOHt"),
				_ = l.a.createElement;

			function v(a) {
				var o = a.backgroundColor,
					e = a.backgroundImage,
					t = a.text,
					l = a.description,
					s = a.buttonText,
					c = a.horizontal,
					v = a.leftColumnClassName,
					p = a.rightColumnClassName,
					b = a.titleClassName,
					g = a.descriptionClassName,
					f = a.buttonLink,
					N = a.lang,
					y = a.buttonClick,
					h = Object(r.useRouter)();
				return _("div", {
					className: "".concat(i.a.wrapper, " row ").concat(c ? "" : "flex-row flex-md-column", " align-items-center"),
					style: {
						backgroundImage: "url(".concat(e, ")"),
						backgroundColor: o
					}
				}, _("div", {
					className: "col-12 col-md ".concat(v)
				}, _("h1", {
					className: "".concat(i.a.text, " ").concat(b),
					dangerouslySetInnerHTML: {
						__html: t
					}
				}), l && _("p", {
					className: "".concat(g, " ").concat(i.a.description, " mt-20")
				}, l)), _(u.a, {
					href: f || "/".concat(N).concat(m.b.HOME_PAGE)
				}, _("a", {
					onClick: function () {
						return d.a.ctaNavigation(h, s, f)
					}
				}, _(n.a, {
					onClick: y,
					btnClass: "".concat(i.a.buttonStyle, " ").concat(p, " col"),
					text: s
				}))))
			}
		},
		"/jBp": function (a, o, e) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[lang]/about-us", function () {
				return e("gDJL")
			}])
		},
		"1/lC": function (a, o, e) {
			a.exports = {
				news: "News_news__ZpgCG",
				pencil: "News_pencil__35J3e",
				title: "News_title__JjR3-",
				source: "News_source__3uFQo",
				time: "News_time__WdUAD"
			}
		},
		"7bXc": function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				l = e.n(t).a.createElement;
			o.a = function (a) {
				var o = a.img,
					e = a.imgAlt,
					t = a.imgClassName,
					n = a.position,
					s = void 0 === n ? "left" : n,
					i = a.containerClassName,
					c = a.leftColumnClassName,
					u = void 0 === c ? "" : c,
					m = a.rightColumnClassName,
					d = void 0 === m ? "" : m,
					r = a.children,
					_ = a.video,
					v = a.videoWidth,
					p = a.videoHeight,
					b = a.videoClass,
					g = a.fullWidth,
					f = void 0 !== g && g,
					N = a.ignoreDefaultLeftColumn,
					y = void 0 !== N && N,
					h = a.ignoreDefaultRightColumn,
					C = void 0 !== h && h,
					x = a.anim,
					w = a.noLazyload,
					k = void 0 !== w && w;
				if (!o && !_) return l("div", {
					className: f ? "full-width" : "container-fluid"
				}, l("div", {
					className: "".concat(i)
				}, r));
				var j = _ && l("iframe", {
						width: v,
						height: p,
						src: _,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0,
						className: b
					}),
					I = "string" === typeof o ? l("img", k ? {
						src: o,
						alt: e,
						className: "".concat(t),
						"data-aos": x ? "fade-in" : null,
						"data-aos-duration": x ? "1300" : null,
						"data-aos-delay": x ? "500" : null
					} : {
						"data-src": o,
						alt: e,
						className: "".concat(t, " lazyload"),
						"data-aos": x ? "fade-in" : null,
						"data-aos-duration": x ? "1300" : null,
						"data-aos-delay": x ? "500" : null
					}) : o,
					B = _ ? j : I;
				return l("div", {
					className: f ? "full-width" : "container-fluid"
				}, l("div", {
					className: "row ".concat(i)
				}, l("div", {
					className: "".concat(y ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(u)
				}, "left" === s ? r : B), l("div", {
					className: "".concat(C ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(d)
				}, "left" === s ? B : r), l("div", {
					className: "d-sm-flex d-md-none ".concat(y ? "" : "col", " ").concat(u)
				}, B, r)))
			}
		},
		b1vo: function (a, o, e) {
			a.exports = {
				journey: "HmletJourney_journey__WNv0Q",
				storyImg: "HmletJourney_storyImg__2GhVc",
				year: "HmletJourney_year__1eWg8",
				milestone: "HmletJourney_milestone__1pUBr",
				journeyBorderVertical: "HmletJourney_journeyBorderVertical__16Hgs",
				noGutter: "HmletJourney_noGutter__2RRbl"
			}
		},
		cRvF: function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				l = e.n(t).a.createElement;
			o.a = function (a) {
				var o = a.img,
					e = a.imgAlt,
					t = a.imgClassName,
					n = a.containerClassName,
					s = a.leftColumnClassName,
					i = void 0 === s ? "" : s,
					c = a.rightColumnClassName,
					u = void 0 === c ? "" : c,
					m = a.children,
					d = a.anim,
					r = a.noLazyload,
					_ = "string" === typeof o ? l("img", void 0 !== r && r ? {
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
				return l("div", {
					className: "container-fluid position-relative ".concat(n)
				}, l("div", {
					className: "row"
				}, l("div", {
					className: "col-12 col-md-6 offset-0 offset-md-6 ".concat(u)
				}, _), l("div", {
					className: "container billboardHero"
				}, l("div", {
					className: "col-12 col-md-6 ".concat(i)
				}, m))))
			}
		},
		gDJL: function (a, o, e) {
			"use strict";
			e.r(o), e.d(o, "__N_SSG", (function () {
				return M
			}));
			var t = e("ODXe"),
				l = e("8Kt/"),
				n = e.n(l),
				s = e("q1tI"),
				i = e.n(s),
				c = e("TxL0"),
				u = e("wyBh"),
				m = e("5Yp1"),
				d = e("jobX"),
				r = e("KQm4"),
				_ = e("ozrn"),
				v = e.n(_),
				p = e("2v50"),
				b = e("7bXc"),
				g = e("b1vo"),
				f = e.n(g),
				N = i.a.createElement;

			function y(a) {
				var o = a.about_us_journey_so_far,
					e = a.about_us_journey_so_far_description,
					t = a.hmlet_journey,
					l = void 0 === t ? [] : t;
				return N("div", {
					className: "baby-powder-bg text-center pt-64 pb-0 pb-md-64 mobile-space ".concat(f.a.journey)
				}, N("h2", {
					className: "mb-3 mobile-space"
				}, o), N("p", {
					className: "col-md-6 offset-md-3 mt-1 mb-64 mobile-space"
				}, e), N("div", {
					className: "row flex-column flex-md-row mr-md-0"
				}, N("div", {
					className: "col-md-1 col-lg-2 d-none d-sm-none d-md-block"
				}, N("div", {
					className: "row flex-md-column"
				}, N("div", {
					className: "col ".concat(f.a.storyImg)
				}), N("div", {
					className: "col"
				}, N("p", {
					className: "".concat(f.a.year)
				}, "\xa0")), N("p", {
					className: "col ".concat(f.a.milestone)
				}))), l.map((function (a, o) {
					return N("div", {
						className: "col",
						key: o
					}, N("div", {
						className: "row flex-row flex-md-column"
					}, N("div", {
						className: "col ".concat(f.a.storyImg)
					}, N("img", {
						"data-src": null === a || void 0 === a ? void 0 : a.img,
						alt: null === a || void 0 === a ? void 0 : a.year,
						className: "lazyload"
					})), N("div", {
						className: "col ".concat(f.a.noGutter)
					}, N("p", {
						style: {
							backgroundImage: "url(".concat(Object(p.a)({
								version: "v1595390769",
								name: "oval-w3.jpg"
							}), "\n                      )")
						},
						className: "".concat(f.a.year)
					}, null === a || void 0 === a ? void 0 : a.year), N("div", {
						className: f.a.journeyBorderVertical
					})), N("p", {
						dangerouslySetInnerHTML: {
							__html: null === a || void 0 === a ? void 0 : a.description
						},
						className: "col ".concat(f.a.milestone)
					})))
				})), N("div", {
					className: "col-md-1 col-lg-2 d-none d-sm-none d-md-block"
				}, N("div", {
					className: "row flex-md-column"
				}, N("div", {
					className: "col ".concat(f.a.storyImg)
				}), N("div", {
					className: "col"
				}, N("p", {
					className: "".concat(f.a.year)
				}, "\xa0")), N("p", {
					className: "col ".concat(f.a.milestone)
				})))))
			}
			var h = e("uuzT"),
				C = e.n(h),
				x = i.a.createElement;

			function w(a) {
				var o = a.about_us_popularity_value,
					e = a.about_us_properties_value,
					t = a.about_us_occupancy_value,
					l = a.about_us_populatiry,
					n = a.about_us_properties,
					s = a.about_us_occupancy;
				return x("div", {
					className: "container"
				}, x("div", {
					className: "row ".concat(C.a.popularity)
				}, x("img", {
					className: "lazyload d-none d-sm-none d-md-block col-7 offset-5 ".concat(C.a.plusSignBackground),
					"data-src": "https://res.cloudinary.com/hmlet/image/upload/v1594890491/Website%20Statics/plus-army-light.svg"
				}), x("div", {
					className: "col-7 offset-5 ".concat(C.a.plusSignBackground)
				}), x("div", {
					className: "col-md-2"
				}), x("div", {
					className: "col-12 col-md-8 row"
				}, x("h2", {
					className: "col-6 col-md-4 text-center order-1 order-md-1"
				}, o), x("h2", {
					className: "col-6 col-md-4 text-center order-3 order-md-2"
				}, e), x("h2", {
					className: "col-6 col-md-4 text-center order-5 order-md-3"
				}, t), x("div", {
					className: "col-6 col-md-4 text-md-center order-2 order-md-4 align-self-center"
				}, l), x("div", {
					className: "col-6 col-md-4 text-md-center order-4 order-md-5 align-self-center"
				}, n), x("div", {
					className: "col-6 col-md-4 text-md-center order-6 order-md-6 align-self-center"
				}, s)), x("div", {
					className: "col-md-2"
				})))
			}
			var k = e("1/lC"),
				j = e.n(k),
				I = i.a.createElement;

			function B(a) {
				var o = a.news,
					e = void 0 === o ? [] : o;
				return I("div", {
					className: j.a.news
				}, I("div", {
					className: "".concat(j.a.pencil, " d-none d-sm-none d-md-block"),
					style: {
						backgroundImage: "url(".concat(Object(p.a)({
							version: "v1594891706",
							name: "pencil-w3.jpg",
							config: "c_fit,q_auto,w_356"
						}), ")")
					}
				}), I("div", {
					className: "container"
				}, I("h2", {
					className: "text-center mb-64"
				}, "Hmlet in the news"), I("div", {
					className: "row flex-nowrap flex-md-wrap overflow-auto pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, I("div", {
					className: "col-1 d-none d-sm-none d-md-block"
				}), e.map((function (a, o) {
					return I("div", {
						className: "col-9 col-md",
						key: o
					}, I("img", {
						"data-src": a.img,
						alt: a.title,
						className: "lazyload fit-image"
					}), I("a", {
						className: j.a.title,
						target: "_blank",
						rel: "noopener noreferrer",
						href: a.link
					}, a.title), I("div", null, I("span", {
						className: j.a.source
					}, a.source), "\xa0", I("span", {
						className: j.a.time
					}, a.time)))
				})), I("div", {
					className: "col-1 d-none d-sm-none d-md-block"
				}))))
			}
			var A = e("/06W"),
				U = e("cRvF"),
				z = e("rN/A"),
				L = e("kovb"),
				S = e.n(L),
				H = e("rvYz"),
				V = e("1+QS"),
				E = e("ipDU"),
				T = i.a.createElement;

			function O(a) {
				var o = a.snippets,
					e = a.coreValues,
					t = function (a) {
						return (null === e || void 0 === e ? void 0 : e.map((function (o, e) {
							var t;
							return T("div", {
								className: "col-12 col-md-6 ".concat(S.a.parent, " ").concat(e % 2 === 0 ? "pr-md-0" : "pl-md-0"),
								key: e + 1
							}, T(H.a, {
								title: null === o || void 0 === o ? void 0 : o.Text,
								description: null === o || void 0 === o || null === (t = o.Description) || void 0 === t ? void 0 : t.Text,
								index: e + 1,
								colBreak: a,
								className: S.a.childBox
							}))
						}))) || []
					};
				return T("div", {
					className: S.a.container
				}, T("h2", {
					className: "mt-64 text-center"
				}, null === o || void 0 === o ? void 0 : o.core_values_header), T(V.a, {
					showDots: !0,
					dots: T(E.a, {
						className: S.a.dot,
						activeClassName: S.a.active
					}),
					dotListClass: S.a.dotList,
					infinite: !1,
					partialVisibilityMobile: !0,
					containerClass: "d-md-none"
				}, t()), T("div", {
					className: "row d-none d-md-flex"
				}, t(2)))
			}
			var D = i.a.createElement;

			function W(a) {
				var o = a.snippets,
					e = a.images,
					t = a.links,
					l = a.lang,
					n = a.coreValues;
				return [D(z.a, {
					img: null === e || void 0 === e ? void 0 : e.about_us_stamp,
					className: v.a.stamp,
					key: "stamp"
				}), D(U.a, {
					key: "about-us",
					img: [D("img", {
						"data-src": null === e || void 0 === e ? void 0 : e.about_us_picture,
						alt: null === o || void 0 === o ? void 0 : o.about_us_title,
						className: "".concat(v.a.aboutUsImg, " fit-image lazyload d-none d-sm-none d-md-block"),
						key: "desktop"
					}), D("img", {
						"data-src": null === e || void 0 === e ? void 0 : e.about_us_picture_for_mobile,
						alt: null === o || void 0 === o ? void 0 : o.about_us_title,
						className: "".concat(v.a.aboutUsImg, " fit-image img-fluid lazyload d-sm-block d-md-none"),
						key: "mobile"
					})],
					rightColumnClassName: "pr-md-0",
					containerClassName: "baby-powder-bg ".concat(v.a.aboutUsTitleContainer)
				}, D("h1", {
					className: "mb-3 mobile-space"
				}, null === o || void 0 === o ? void 0 : o.about_us_title), D("p", {
					dangerouslySetInnerHTML: {
						__html: null === o || void 0 === o ? void 0 : o.about_us_subtitle
					},
					className: "mt-1 mb-0 mobile-space"
				})), D("div", {
					className: "container",
					key: "humble-beginning"
				}, D(b.a, {
					img: null === e || void 0 === e ? void 0 : e.about_us_from_humble,
					imgAlt: null === o || void 0 === o ? void 0 : o.about_us_from_humble_title,
					imgClassName: "fit-image lazyload",
					position: "right",
					fullWidth: !0,
					leftColumnClassName: "offset-md-1 flex-column",
					rightColumnClassName: "flex-column col-md-5",
					containerClassName: "my-80 text-center text-md-left"
				}, D("h2", {
					dangerouslySetInnerHTML: {
						__html: null === o || void 0 === o ? void 0 : o.about_us_from_humble_title
					},
					className: "mt-20 mb-3 mobile-space"
				}), D("p", {
					dangerouslySetInnerHTML: {
						__html: null === o || void 0 === o ? void 0 : o.about_us_from_humble_subtitle
					},
					className: "mt-1 pl-xs-sm-only-5 pr-xs-sm-only-5"
				}))), D("div", {
					className: "container",
					key: "ceo-says"
				}, D(b.a, {
					img: null === e || void 0 === e ? void 0 : e.about_us_ceo,
					imgAlt: "What ceo says",
					imgClassName: "fit-image lazyload",
					position: "left",
					fullWidth: !0,
					leftColumnClassName: "flex-column text-center ".concat(v.a.ceoImg),
					containerClassName: "baby-powder-bg"
				}, D("p", {
					className: "".concat(v.a.whatCeoSays, " mt-3 mobile-space"),
					dangerouslySetInnerHTML: {
						__html: null === o || void 0 === o ? void 0 : o.about_us_ceo_telling
					}
				}), D("p", {
					className: "".concat(v.a.ceoName, " mobile-space")
				}, null === o || void 0 === o ? void 0 : o.about_us_ceo_name), D("p", {
					className: "".concat(v.a.ceoPosition, " mobile-space")
				}, null === o || void 0 === o ? void 0 : o.about_us_ceo_title))), D("div", {
					className: "container",
					key: "our-mission"
				}, D(b.a, {
					img: null === e || void 0 === e ? void 0 : e.about_us_our_mission,
					imgAlt: null === o || void 0 === o ? void 0 : o.about_us_our_mission,
					imgClassName: "fit-image lazyload d-none d-sm-none d-md-block",
					position: "right",
					fullWidth: !0,
					leftColumnClassName: "offset-md-2 col-md-3 col",
					ignoreDefaultLeftColumn: !0,
					rightColumnClassName: "flex-column col-7",
					ignoreDefaultRightColumn: !0,
					containerClassName: "mt-80 mb-64 ".concat(v.a.mt60, " ").concat(v.a.mb0)
				}, D("h4", {
					style: {
						backgroundImage: "url(".concat(Object(p.a)({
							version: "v1587010481",
							name: "text-highlight-red-w3.svg"
						}), ")")
					},
					className: "brownish-title m-mt-20 mb-3 mobile-space"
				}, null === o || void 0 === o ? void 0 : o.about_us_our_mission), D("p", {
					dangerouslySetInnerHTML: {
						__html: null === o || void 0 === o ? void 0 : o.about_us_our_mission_description
					},
					className: "mt-1 mobile-space"
				}), D("div", {
					className: "d-sm-flex d-md-none pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, D("div", {
					className: "row"
				}, D("img", {
					"data-src": null === e || void 0 === e ? void 0 : e.about_us_our_mission,
					alt: null === o || void 0 === o ? void 0 : o.about_us_our_mission,
					className: "fit-image lazyload col-6 ".concat(v.a.pr7, " ").concat(v.a.h160)
				}), D("img", {
					"data-src": null === e || void 0 === e ? void 0 : e.about_us_philosophy,
					alt: null === o || void 0 === o ? void 0 : o.about_us_philosophy,
					className: "fit-image lazyload col-6 ".concat(v.a.pl7, " ").concat(v.a.h160)
				}))))), D("div", {
					className: "container",
					key: "phillosophy"
				}, D(b.a, {
					img: null === e || void 0 === e ? void 0 : e.about_us_philosophy,
					imgAlt: null === o || void 0 === o ? void 0 : o.about_us_philosophy,
					imgClassName: "fit-image lazyload d-none d-sm-none d-md-block",
					position: "left",
					fullWidth: !0,
					leftColumnClassName: "flex-column col-md-5 offset-md-2 col",
					ignoreDefaultLeftColumn: !0,
					rightColumnClassName: "col-md-3",
					ignoreDefaultRightColumn: !0,
					containerClassName: "".concat(v.a.mb18, " ").concat(v.a.mt40, " mb-80 mt-64")
				}, D("h4", {
					style: {
						backgroundImage: "url(".concat(Object(p.a)({
							version: "v1587010481",
							name: "text-highlight-red-w3.svg"
						}), "\n            )")
					},
					className: "brownish-title m-mt-20 mb-3 mobile-space"
				}, null === o || void 0 === o ? void 0 : o.about_us_philosophy), D("p", {
					dangerouslySetInnerHTML: {
						__html: null === o || void 0 === o ? void 0 : o.about_us_philosophy_description
					},
					className: "mt-1 mobile-space"
				}))), D("div", {
					className: "container",
					key: "core-values"
				}, D(O, {
					snippets: null === n || void 0 === n ? void 0 : n.snippets,
					coreValues: null === n || void 0 === n ? void 0 : n.formatted
				})), D(y, {
					key: "hmlet-journey",
					about_us_journey_so_far: null === o || void 0 === o ? void 0 : o.about_us_journey_so_far,
					about_us_journey_so_far_description: null === o || void 0 === o ? void 0 : o.about_us_journey_so_far_description,
					hmlet_journey: Object(r.a)(Array(4)).map((function (a, t) {
						var l = "about_us_journey_year_" + (t + 1),
							n = "about_us_journey_year_" + (t + 1) + "_description";
						return {
							img: null === e || void 0 === e ? void 0 : e["about_us_journey_" + (t + 1)],
							year: null === o || void 0 === o ? void 0 : o[l],
							description: null === o || void 0 === o ? void 0 : o[n]
						}
					}))
				}), D("div", {
					className: "container",
					key: "investment"
				}, D("div", {
					className: "my-80 row mobile-space ".concat(v.a.investment)
				}, D("h4", {
					className: "col-12 text-center mb-64 ".concat(v.a.title)
				}, null === o || void 0 === o ? void 0 : o.about_us_investment), Object(r.a)(Array(3)).map((function (a, t) {
					return D("div", {
						className: "col-12 col-md-4 ".concat(2 !== t ? "mb-4" : "mb-0", " mb-md-0"),
						key: t
					}, D(b.a, {
						img: null === e || void 0 === e ? void 0 : e["about_us_investment_" + (t + 1)],
						imgAlt: null === o || void 0 === o ? void 0 : o.about_us_investment,
						imgClassName: "lazyload",
						position: "right",
						fullWidth: !0,
						leftColumnClassName: "col col-md-auto",
						ignoreDefaultLeftColumn: !0,
						rightColumnClassName: "col",
						ignoreDefaultRightColumn: !0
					}, D("p", null, null === o || void 0 === o ? void 0 : o["about_us_investment_description_" + (t + 1)])))
				})))), D(w, {
					key: "popularity",
					about_us_popularity_value: null === o || void 0 === o ? void 0 : o.about_us_popularity_value,
					about_us_properties_value: null === o || void 0 === o ? void 0 : o.about_us_properties_value,
					about_us_occupancy_value: null === o || void 0 === o ? void 0 : o.about_us_occupancy_value,
					about_us_populatiry: null === o || void 0 === o ? void 0 : o.about_us_populatiry,
					about_us_properties: null === o || void 0 === o ? void 0 : o.about_us_properties,
					about_us_occupancy: null === o || void 0 === o ? void 0 : o.about_us_occupancy
				}), D(B, {
					key: "news",
					news: Object(r.a)(Array(3)).map((function (a, l) {
						var n = "about_us_news_source_" + (l + 1),
							s = "about_us_news_time_" + (l + 1),
							i = "about_us_news_" + (l + 1),
							c = "about_us_news_title_link_" + (l + 1);
						return {
							title: null === o || void 0 === o ? void 0 : o["about_us_news_title_" + (l + 1)],
							source: null === o || void 0 === o ? void 0 : o[n],
							time: null === o || void 0 === o ? void 0 : o[s],
							img: null === e || void 0 === e ? void 0 : e[i],
							link: null === t || void 0 === t ? void 0 : t[c]
						}
					}))
				}), D(A.a, {
					key: "opportunity",
					backgroundColor: "#8E9788",
					backgroundImage: Object(p.a)({
						version: "v1587010481",
						name: "smile-face.svg"
					}),
					text: null === o || void 0 === o ? void 0 : o.about_us_spot_opportunity,
					description: null === o || void 0 === o ? void 0 : o.about_us_hear_from_you,
					buttonText: null === o || void 0 === o ? void 0 : o.about_us_get_in_touch,
					horizontal: !0,
					leftColumnClassName: "col-12 offset-0 offset-md-3 col-md-auto",
					rightColumnClassName: "offset-0 offset-md-1 col-auto ".concat(v.a.bannerBtn),
					buttonLink: "/".concat(l).concat(u.b.FAQ_PAGE)
				})]
			}
			var J = i.a.createElement;
			var M = !0;
			o.default = function () {
				var a, o, e, l, s = Object(d.a)(c.i),
					i = Object(t.a)(s, 1)[0],
					r = null === i || void 0 === i || null === (a = i.data) || void 0 === a ? void 0 : a.snippets,
					_ = null === i || void 0 === i || null === (o = i.data) || void 0 === o ? void 0 : o.images,
					v = null === i || void 0 === i || null === (e = i.data) || void 0 === e ? void 0 : e.links,
					p = null === i || void 0 === i || null === (l = i.data) || void 0 === l ? void 0 : l.lang,
					b = Object(d.a)(c.z),
					g = Object(t.a)(b, 1)[0];
				return J(m.a, null, J(n.a, null, J("title", null, u.a.ABOUT_US)), J("main", null, J(W, {
					snippets: r,
					images: _,
					links: v,
					lang: p,
					coreValues: null === g || void 0 === g ? void 0 : g.data
				})))
			}
		},
		htVU: function (a, o, e) {
			a.exports = {
				wrapper: "BannerButton_wrapper__1Ulfg",
				text: "BannerButton_text__QIGHu",
				description: "BannerButton_description__12Cqh",
				buttonStyle: "BannerButton_buttonStyle__2OZFq"
			}
		},
		kovb: function (a, o, e) {
			a.exports = {
				container: "CoreValues_container__2FKki",
				dotList: "CoreValues_dotList__1W8Ml",
				dot: "CoreValues_dot__1EGqy",
				active: "CoreValues_active__KeZ7D",
				childBox: "CoreValues_childBox__3lRZA",
				parent: "CoreValues_parent__12Nsv"
			}
		},
		m2sD: function (a, o, e) {
			a.exports = {
				stamp: "Stamp_stamp__21ZiJ"
			}
		},
		oYko: function (a, o, e) {
			a.exports = {
				boxContainer: "CoreValueBox_boxContainer__LXSMk",
				title: "CoreValueBox_title__pV8U9",
				odd: "CoreValueBox_odd__1Yc0U",
				even: "CoreValueBox_even__1dHhB"
			}
		},
		ozrn: function (a, o, e) {
			a.exports = {
				stamp: "AboutUs_stamp__3Ok5x",
				aboutUsImg: "AboutUs_aboutUsImg__M589q",
				aboutUsTitleContainer: "AboutUs_aboutUsTitleContainer__1BkrG",
				whatCeoSays: "AboutUs_whatCeoSays__1nF7R",
				ceoImg: "AboutUs_ceoImg__1Wa5g",
				ceoName: "AboutUs_ceoName__2uoJH",
				ceoPosition: "AboutUs_ceoPosition__26Nu3",
				investment: "AboutUs_investment__21N_j",
				title: "AboutUs_title__3gMIF",
				mb18: "AboutUs_mb18__3E1Y2",
				pl7: "AboutUs_pl7__1YJol",
				pr7: "AboutUs_pr7__3HqJa",
				mt60: "AboutUs_mt60__243Dp",
				mt40: "AboutUs_mt40__L0dQl",
				mb0: "AboutUs_mb0__3Yfeb",
				h160: "AboutUs_h160__bV2Q_",
				bannerBtn: "AboutUs_bannerBtn__13e04"
			}
		},
		"rN/A": function (a, o, e) {
			"use strict";
			var t = e("q1tI"),
				l = e.n(t),
				n = e("m2sD"),
				s = e.n(n),
				i = l.a.createElement;
			o.a = function (a) {
				var o = a.img,
					e = a.className;
				return i("div", {
					className: "position-absolute ".concat(s.a.stamp, " ").concat(e)
				}, i("img", {
					"data-src": o,
					className: "lazyload fit-image"
				}))
			}
		},
		rvYz: function (a, o, e) {
			"use strict";
			e.d(o, "a", (function () {
				return u
			}));
			var t = e("q1tI"),
				l = e.n(t),
				n = e("oYko"),
				s = e.n(n),
				i = e("2v50"),
				c = l.a.createElement;

			function u(a) {
				var o = a.title,
					e = a.description,
					t = a.index,
					l = a.colBreak,
					n = void 0 === l ? 0 : l,
					u = a.className,
					m = a.children,
					d = n && t / n > 1 ? t - 1 : t;
				return c("div", {
					className: "".concat(s.a.boxContainer, " ").concat(d % 2 === 0 ? s.a.even : s.a.odd, " ").concat(u),
					style: {
						backgroundImage: "url(".concat(Object(i.a)({
							name: t + ".svg"
						}), ")")
					}
				}, c("div", {
					className: s.a.title
				}, o), c("p", null, e), m)
			}
		},
		uuzT: function (a, o, e) {
			a.exports = {
				popularity: "Popularity_popularity__1ILWn",
				plusSignBackground: "Popularity_plusSignBackground__3N9yf"
			}
		}
	},
	[
		["/jBp", 1, 2, 3, 5, 0, 4, 6, 7, 8]
	]
]);