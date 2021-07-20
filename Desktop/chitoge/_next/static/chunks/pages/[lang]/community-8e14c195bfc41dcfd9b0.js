_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[29], {
		"7bXc": function (a, e, o) {
			"use strict";
			var t = o("q1tI"),
				l = o.n(t).a.createElement;
			e.a = function (a) {
				var e = a.img,
					o = a.imgAlt,
					t = a.imgClassName,
					n = a.position,
					i = void 0 === n ? "left" : n,
					m = a.containerClassName,
					s = a.leftColumnClassName,
					c = void 0 === s ? "" : s,
					d = a.rightColumnClassName,
					r = void 0 === d ? "" : d,
					u = a.children,
					v = a.video,
					_ = a.videoWidth,
					p = a.videoHeight,
					g = a.videoClass,
					y = a.fullWidth,
					f = void 0 !== y && y,
					N = a.ignoreDefaultLeftColumn,
					h = void 0 !== N && N,
					C = a.ignoreDefaultRightColumn,
					b = void 0 !== C && C,
					w = a.anim,
					I = a.noLazyload,
					x = void 0 !== I && I;
				if (!e && !v) return l("div", {
					className: f ? "full-width" : "container-fluid"
				}, l("div", {
					className: "".concat(m)
				}, u));
				var S = v && l("iframe", {
						width: _,
						height: p,
						src: v,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0,
						className: g
					}),
					W = "string" === typeof e ? l("img", x ? {
						src: e,
						alt: o,
						className: "".concat(t),
						"data-aos": w ? "fade-in" : null,
						"data-aos-duration": w ? "1300" : null,
						"data-aos-delay": w ? "500" : null
					} : {
						"data-src": e,
						alt: o,
						className: "".concat(t, " lazyload"),
						"data-aos": w ? "fade-in" : null,
						"data-aos-duration": w ? "1300" : null,
						"data-aos-delay": w ? "500" : null
					}) : e,
					k = v ? S : W;
				return l("div", {
					className: f ? "full-width" : "container-fluid"
				}, l("div", {
					className: "row ".concat(m)
				}, l("div", {
					className: "".concat(h ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(c)
				}, "left" === i ? u : k), l("div", {
					className: "".concat(b ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(r)
				}, "left" === i ? k : u), l("div", {
					className: "d-sm-flex d-md-none ".concat(h ? "" : "col", " ").concat(c)
				}, k, u)))
			}
		},
		GnOK: function (a, e, o) {
			"use strict";
			o.r(e), o.d(e, "__N_SSG", (function () {
				return L
			}));
			var t = o("ODXe"),
				l = o("8Kt/"),
				n = o.n(l),
				i = o("q1tI"),
				m = o.n(i),
				s = o("TxL0"),
				c = o("KQm4"),
				d = o("bhlB"),
				r = o.n(d),
				u = o("7bXc"),
				v = o("2v50"),
				_ = o("co3k"),
				p = o("RL/f"),
				g = o.n(p),
				y = m.a.createElement;

			function f(a) {
				var e = a.title,
					o = a.description,
					t = a.image;
				return y("div", {
					className: "".concat(g.a.togetherAlwaysWrapper),
					style: {
						backgroundImage: "url('".concat(t, "')")
					}
				}, y("div", {
					className: "container pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, y("div", {
					className: "".concat(g.a.contentWrapper, " text-center")
				}, y("h2", {
					className: "text-center"
				}, e), y("p", {
					className: "text-center"
				}, o))))
			}
			var N = o("1+QS"),
				h = o("ipDU"),
				C = o("YFqc"),
				b = o.n(C),
				w = o("wyBh"),
				I = o("nOHt"),
				x = o("bhxT"),
				S = o("cRvF"),
				W = o("rN/A"),
				k = o("S68s"),
				T = m.a.createElement;

			function A(a) {
				var e, o, t, l, n = null === a || void 0 === a || null === (e = a.data) || void 0 === e ? void 0 : e.snippets,
					i = null === a || void 0 === a || null === (o = a.data) || void 0 === o ? void 0 : o.images,
					m = Object(I.useRouter)(),
					s = null === n || void 0 === n ? void 0 : n.community_get_yourself_connected_description;
				if ("en" === (null === m || void 0 === m || null === (t = m.query) || void 0 === t ? void 0 : t.lang) && s) {
					var d = s.indexOf("</a>") + 4,
						p = s.substring(0, d),
						g = s.substring(d);
					s = (null === p || void 0 === p ? void 0 : p.trim()) + "<br />" + (null === g || void 0 === g ? void 0 : g.trim())
				}
				return T("div", null, T(W.a, {
					img: null === i || void 0 === i ? void 0 : i.community_stamp,
					className: r.a.stamp
				}), T(S.a, {
					img: null === i || void 0 === i ? void 0 : i.community_kinder_community,
					imgSrc: "home",
					imgClassName: "img-fluid md-p-0 ".concat(r.a.kindredComImg),
					imgAlt: "homepage-faces",
					containerClassName: r.a.topRowWrapper,
					rightColumnClassName: "pr-0 pl-0",
					leftColumnClassName: r.a.titleContainer
				}, T("div", {
					className: ""
				}, T("h1", {
					className: "".concat(r.a.title, " m-0"),
					dangerouslySetInnerHTML: {
						__html: null === n || void 0 === n ? void 0 : n.community_tagline
					}
				}), T("p", {
					className: r.a.subtitle
				}, null === n || void 0 === n ? void 0 : n.community_sub_tagline))), T("div", {
					className: "home-for-all-section"
				}, T("div", {
					className: "container"
				}, T(u.a, {
					imgAlt: "homepage-faces",
					position: "right",
					containerClassName: "my-50 p-0",
					leftColumnClassName: "p-md-0 flex-column justify-content-around pl-xs-sm-only-5 pr-xs-sm-only-5",
					video: "https://www.youtube.com/embed/".concat((null === n || void 0 === n ? void 0 : n.community_video) || "", "?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1"),
					videoHeight: "354",
					videoClass: r.a.homeForAllVideo
				}, T("div", {
					className: "md-pl-5 md-p-0 py-4 pl-md-4 pr-md-4 pl-xs-sm-only-5 pr-xs-sm-only-5"
				}, T("h2", {
					className: "my-50",
					dangerouslySetInnerHTML: {
						__html: null === n || void 0 === n ? void 0 : n.community_home_for_all_title
					}
				}), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === n || void 0 === n ? void 0 : n.community_home_for_all_description
					}
				})))), T("div", {
					className: "container d-none d-sm-none d-md-block"
				}, T("img", {
					className: "".concat(r.a.yogaBg, " lazyload"),
					alt: "yoga",
					"data-src": null === i || void 0 === i ? void 0 : i.community_yoga
				}), T("div", {
					className: "row"
				}, T("div", {
					className: "col-md-4"
				}), T("div", {
					className: "col-md-8"
				}, T("img", {
					className: "".concat(r.a.homeForAllImg, " lazyload"),
					alt: "",
					"data-src": null === i || void 0 === i ? void 0 : i.community_home_for_all
				})))), T("div", {
					className: "from-charts-section container my-50"
				}, T("div", {
					className: "row "
				}, T("div", {
					className: "p-md-0 col-md-10 col-12 ml-md-auto mr-md-auto"
				}, T("div", {
					className: "row"
				}, T("div", {
					className: "col-md-6 md-pl-5 md-p-0 pt-4 pr-4 pl-4 pb-0"
				}, T("h4", {
					className: r.a.titleWithBg,
					style: {
						backgroundImage: "url(".concat(Object(v.a)({
							version: "v1587010481",
							name: "text-highlight-red-w3.svg"
						}), "\n                )")
					}
				}, null === n || void 0 === n ? void 0 : n.community_from_chat), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === n || void 0 === n ? void 0 : n.community_form_chat_para_01
					}
				})), T("div", {
					className: "col-md-6 pl-4 pl-md-5 ".concat(r.a.fromChatsRight)
				}, T("p", {
					dangerouslySetInnerHTML: {
						__html: null === n || void 0 === n ? void 0 : n.community_form_chat_para_02
					}
				})))))), T("div", {
					className: "exclusiveEvent-section"
				}, T("div", {
					className: "container pl-xs-sm-only-0 pr-xs-sm-only-0"
				}, T("div", {
					className: "row "
				}, T("div", {
					className: "my-50 p-0 col-10 ml-auto mr-auto"
				}, T("div", {
					className: "row"
				}, T("div", {
					className: "".concat(r.a.exclusiveEvent, " col-md-6 col-12")
				}, T("h4", {
					className: r.a.titleWithBg,
					style: {
						backgroundImage: "url(".concat(Object(v.a)({
							version: "v1587010481",
							name: "text-highlight-red-w3.svg"
						}), ")")
					}
				}, null === n || void 0 === n ? void 0 : n.community_exclusive_events_title), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === n || void 0 === n ? void 0 : n.community_exclusive_events_description
					}
				})), T("div", {
					className: "p-0 col-md-6 col-12"
				}, T(N.a, {
					showDots: !0,
					dots: T(h.a, null),
					containerClass: r.a.carousel,
					itemsOnSuperLargeDesktop: 1,
					itemsOnDesktop: 1,
					itemsOnTablet: 1,
					itemsOnMobile: 1,
					removeArrowOnDeviceType: ["superLargeDesktop", "desktop", "tablet", "mobile"],
					autoPlay: !0,
					autoPlaySpeed: 5e3
				}, Object(c.a)(Array(7)).map((function (a, e) {
					return T("img", {
						src: null === i || void 0 === i ? void 0 : i["community_exclusive_events_" + (e + 1)],
						alt: "Hmlet Cantonment",
						className: "".concat(r.a.eventCarouselImg),
						key: e
					})
				}))))))))), T("div", {
					className: "image-section container d-none d-sm-none d-md-block"
				}, T("div", {
					className: "row"
				}, T("div", {
					className: "col-md-4"
				}, T("img", {
					"data-src": null === i || void 0 === i ? void 0 : i.community_pic_1,
					alt: "",
					className: "".concat(r.a.imageSectionImg, " lazyload")
				})), T("div", {
					className: "col-md-4"
				}, T("img", {
					"data-src": null === i || void 0 === i ? void 0 : i.community_pic_2,
					alt: "",
					className: "".concat(r.a.imageSectionImg, " lazyload")
				})), T("div", {
					className: "col-md-4"
				}, T("img", {
					"data-src": null === i || void 0 === i ? void 0 : i.community_pic_3,
					alt: "",
					className: "".concat(r.a.imageSectionImg, " lazyload")
				})))), T("div", {
					className: "together-always-section container-fluid mt-5"
				}, T(f, {
					title: null === n || void 0 === n ? void 0 : n.community_together_always_title,
					description: null === n || void 0 === n ? void 0 : n.community_together_always_description,
					image: null === i || void 0 === i ? void 0 : i.community_flowers
				})), T("div", {
					className: "getYourself-section"
				}, T(u.a, {
					img: null === i || void 0 === i ? void 0 : i.community_connected,
					imgAlt: "homepage-faces",
					imgClassName: "".concat(r.a.getYourselfImg, " img-fluid p-0 "),
					position: "left",
					containerClassName: "".concat(r.a.getYourself, " p-0"),
					leftColumnClassName: "my-50 md-pl-5 pl-0 flex-column pr-0",
					rightColumnClassName: "p-0"
				}, T("div", {
					className: "".concat(r.a.getYourselfContentWrapper, " md-p-0 p-4 offset-sm-1 offset-md-2")
				}, T("h2", null, null === n || void 0 === n ? void 0 : n.community_get_yourself_connected_title), T("p", {
					dangerouslySetInnerHTML: {
						__html: null === (l = s) || void 0 === l ? void 0 : l.trim()
					}
				})))), T("div", {
					className: "ready-to-find-section"
				}, T("div", {
					className: "".concat(r.a.readyToFindWrapper, " container-fluid text-center"),
					style: {
						backgroundImage: "url('" + (null === i || void 0 === i ? void 0 : i.community_arrow_bg) + "')"
					}
				}, T("h2", null, null === n || void 0 === n ? void 0 : n.community_ready_to_find_title), T(b.a, {
					href: w.b.CITIES
				}, T("a", {
					onClick: function () {
						Object(k.b)(), x.a.ctaNavigation(m, null === n || void 0 === n ? void 0 : n.community_find_a_home_btn, w.a.CITIES)
					}
				}, T(_.a, {
					text: null === n || void 0 === n ? void 0 : n.community_find_a_home_btn,
					btnClass: "align-self-start ".concat(r.a.btn)
				})))))))
			}
			var O = o("5Yp1"),
				E = o("jobX"),
				Y = m.a.createElement;
			var L = !0;
			e.default = function () {
				var a = Object(E.a)(s.y),
					e = Object(t.a)(a, 1)[0];
				return Y(O.a, null, Y(n.a, null, Y("title", null, w.a.COMMUNITY)), Y("main", null, Y(A, e)))
			}
		},
		"RL/f": function (a, e, o) {
			a.exports = {
				togetherAlwaysWrapper: "TogetherAlways_togetherAlwaysWrapper__YG0QS",
				contentWrapper: "TogetherAlways_contentWrapper__2eeps"
			}
		},
		YkTK: function (a, e, o) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[lang]/community", function () {
				return o("GnOK")
			}])
		},
		bhlB: function (a, e, o) {
			a.exports = {
				topRowWrapper: "Community_topRowWrapper__1ElR6",
				titleContainer: "Community_titleContainer__333dl",
				title: "Community_title__ydy4k",
				stamp: "Community_stamp__1vSbW",
				kindredComImg: "Community_kindredComImg__wIznO",
				carousel: "Community_carousel__3KkL-",
				eventCarouselImg: "Community_eventCarouselImg__2lDMv",
				dotWrapper: "Community_dotWrapper__edfWr",
				readyToFindWrapper: "Community_readyToFindWrapper__1NZG6",
				btn: "Community_btn__2z7a_",
				exclusiveEvent: "Community_exclusiveEvent__3AjuA",
				exclusiveEventImg: "Community_exclusiveEventImg__WzKxa",
				getYourself: "Community_getYourself__1UvsX",
				getYourselfContentWrapper: "Community_getYourselfContentWrapper__5PcCx",
				yogaBg: "Community_yogaBg__2xRPx",
				titleWithBg: "Community_titleWithBg__3O5HD",
				homeForAllImg: "Community_homeForAllImg__ykHtc",
				imageSectionImg: "Community_imageSectionImg__15dOn",
				getYourselfImg: "Community_getYourselfImg___Y_-y",
				homeForAllVideo: "Community_homeForAllVideo__1YcJR",
				fromChatsRight: "Community_fromChatsRight__5va3S"
			}
		},
		cRvF: function (a, e, o) {
			"use strict";
			var t = o("q1tI"),
				l = o.n(t).a.createElement;
			e.a = function (a) {
				var e = a.img,
					o = a.imgAlt,
					t = a.imgClassName,
					n = a.containerClassName,
					i = a.leftColumnClassName,
					m = void 0 === i ? "" : i,
					s = a.rightColumnClassName,
					c = void 0 === s ? "" : s,
					d = a.children,
					r = a.anim,
					u = a.noLazyload,
					v = "string" === typeof e ? l("img", void 0 !== u && u ? {
						src: e,
						alt: o,
						className: "".concat(t),
						"data-aos": r ? "fade-in" : null,
						"data-aos-duration": r ? "1300" : null,
						"data-aos-delay": r ? "500" : null
					} : {
						"data-src": e,
						alt: o,
						className: "".concat(t, " lazyload"),
						"data-aos": r ? "fade-in" : null,
						"data-aos-duration": r ? "1300" : null,
						"data-aos-delay": r ? "500" : null
					}) : e;
				return l("div", {
					className: "container-fluid position-relative ".concat(n)
				}, l("div", {
					className: "row"
				}, l("div", {
					className: "col-12 col-md-6 offset-0 offset-md-6 ".concat(c)
				}, v), l("div", {
					className: "container billboardHero"
				}, l("div", {
					className: "col-12 col-md-6 ".concat(m)
				}, d))))
			}
		},
		m2sD: function (a, e, o) {
			a.exports = {
				stamp: "Stamp_stamp__21ZiJ"
			}
		},
		"rN/A": function (a, e, o) {
			"use strict";
			var t = o("q1tI"),
				l = o.n(t),
				n = o("m2sD"),
				i = o.n(n),
				m = l.a.createElement;
			e.a = function (a) {
				var e = a.img,
					o = a.className;
				return m("div", {
					className: "position-absolute ".concat(i.a.stamp, " ").concat(o)
				}, m("img", {
					"data-src": e,
					className: "lazyload fit-image"
				}))
			}
		}
	},
	[
		["YkTK", 1, 2, 3, 5, 0, 4, 6, 7, 8]
	]
]);