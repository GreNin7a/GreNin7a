_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[23], {
		"/06W": function (e, t, a) {
			"use strict";
			a.d(t, "a", (function () {
				return p
			}));
			var o = a("q1tI"),
				n = a.n(o),
				i = a("co3k"),
				l = a("htVU"),
				c = a.n(l),
				r = a("YFqc"),
				s = a.n(r),
				d = a("wyBh"),
				u = a("bhxT"),
				m = a("nOHt"),
				v = n.a.createElement;

			function p(e) {
				var t = e.backgroundColor,
					a = e.backgroundImage,
					o = e.text,
					n = e.description,
					l = e.buttonText,
					r = e.horizontal,
					p = e.leftColumnClassName,
					_ = e.rightColumnClassName,
					f = e.titleClassName,
					b = e.descriptionClassName,
					g = e.buttonLink,
					h = e.lang,
					y = e.buttonClick,
					w = Object(m.useRouter)();
				return v("div", {
					className: "".concat(c.a.wrapper, " row ").concat(r ? "" : "flex-row flex-md-column", " align-items-center"),
					style: {
						backgroundImage: "url(".concat(a, ")"),
						backgroundColor: t
					}
				}, v("div", {
					className: "col-12 col-md ".concat(p)
				}, v("h1", {
					className: "".concat(c.a.text, " ").concat(f),
					dangerouslySetInnerHTML: {
						__html: o
					}
				}), n && v("p", {
					className: "".concat(b, " ").concat(c.a.description, " mt-20")
				}, n)), v(s.a, {
					href: g || "/".concat(h).concat(d.b.HOME_PAGE)
				}, v("a", {
					onClick: function () {
						return u.a.ctaNavigation(w, l, g)
					}
				}, v(i.a, {
					onClick: y,
					btnClass: "".concat(c.a.buttonStyle, " ").concat(_, " col"),
					text: l
				}))))
			}
		},
		"3Cg/": function (e, t, a) {
			e.exports = {
				wrapper: "YourComfort_wrapper__38_ON",
				title: "YourComfort_title__ei1xn",
				description: "YourComfort_description__3RdXA",
				imageWrapper: "YourComfort_imageWrapper__2OPfh",
				image2Wrapper: "YourComfort_image2Wrapper__2oCYI",
				cactusSection: "YourComfort_cactusSection__2vQ06",
				cactus: "YourComfort_cactus__21LhC"
			}
		},
		"54Q9": function (e, t, a) {
			e.exports = {
				cityBox: "CityBox_cityBox___vJ9D",
				cityBoxP: "CityBox_cityBoxP__8Gyi3",
				overflow: "CityBox_overflow__9BSMk"
			}
		},
		"7bXc": function (e, t, a) {
			"use strict";
			var o = a("q1tI"),
				n = a.n(o).a.createElement;
			t.a = function (e) {
				var t = e.img,
					a = e.imgAlt,
					o = e.imgClassName,
					i = e.position,
					l = void 0 === i ? "left" : i,
					c = e.containerClassName,
					r = e.leftColumnClassName,
					s = void 0 === r ? "" : r,
					d = e.rightColumnClassName,
					u = void 0 === d ? "" : d,
					m = e.children,
					v = e.video,
					p = e.videoWidth,
					_ = e.videoHeight,
					f = e.videoClass,
					b = e.fullWidth,
					g = void 0 !== b && b,
					h = e.ignoreDefaultLeftColumn,
					y = void 0 !== h && h,
					w = e.ignoreDefaultRightColumn,
					N = void 0 !== w && w,
					k = e.anim,
					x = e.noLazyload,
					C = void 0 !== x && x;
				if (!t && !v) return n("div", {
					className: g ? "full-width" : "container-fluid"
				}, n("div", {
					className: "".concat(c)
				}, m));
				var O = v && n("iframe", {
						width: p,
						height: _,
						src: v,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0,
						className: f
					}),
					j = "string" === typeof t ? n("img", C ? {
						src: t,
						alt: a,
						className: "".concat(o),
						"data-aos": k ? "fade-in" : null,
						"data-aos-duration": k ? "1300" : null,
						"data-aos-delay": k ? "500" : null
					} : {
						"data-src": t,
						alt: a,
						className: "".concat(o, " lazyload"),
						"data-aos": k ? "fade-in" : null,
						"data-aos-duration": k ? "1300" : null,
						"data-aos-delay": k ? "500" : null
					}) : t,
					T = v ? O : j;
				return n("div", {
					className: g ? "full-width" : "container-fluid"
				}, n("div", {
					className: "row ".concat(c)
				}, n("div", {
					className: "".concat(y ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(s)
				}, "left" === l ? m : T), n("div", {
					className: "".concat(N ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(u)
				}, "left" === l ? T : m), n("div", {
					className: "d-sm-flex d-md-none ".concat(y ? "" : "col", " ").concat(s)
				}, T, m)))
			}
		},
		"9HNw": function (e, t, a) {
			"use strict";
			var o = a("q1tI"),
				n = a.n(o),
				i = a("m6Xz"),
				l = a.n(i),
				c = a("2v50"),
				r = n.a.createElement,
				s = function (e) {
					return r("span", {
						style: {
							backgroundImage: 'url("'.concat(Object(c.a)({
								version: "v1587010481",
								name: "number-bg-w3.svg"
							}), '")')
						}
					}, e.children)
				};
			t.a = function (e) {
				for (var t = e.title, a = e.subtitle, o = e.snippetsArray, n = e.columnClass, i = void 0 === n ? "col-md-3 col-12" : n, c = e.sectionTitleClass, d = e.titleClassName, u = e.containerClassName, m = e.anim, v = [], p = o.length, _ = 0; _ < p; _++) {
					var f, b, g = null === (f = o[_]) || void 0 === f ? void 0 : f.title,
						h = null === (b = o[_]) || void 0 === b ? void 0 : b.desc;
					v.push(r("div", {
						key: _,
						className: i,
						"data-aos": m ? "fade-up" : null,
						"data-aos-duration": m ? "1000" : null,
						"data-aos-delay": m ? 100 * (_ + 1) : null,
						"data-aos-anchor-placement": m ? "bottom-bottom" : null
					}, r("div", {
						className: "row"
					}, r("h3", {
						className: "".concat(d, " ").concat(l.a.noGutter, " col-auto")
					}, r(s, null, _ + 1)), r("h3", {
						className: "".concat(d, " ").concat(l.a.noGutter, " col")
					}, g)), r("p", null, h)))
				}
				return r("div", {
					className: "".concat(l.a.touchBaseWrapper, " ").concat(u, " row justify-content-center")
				}, r("div", {
					className: "".concat(l.a.containerColor, " col-auto")
				}, r("div", {
					className: "container"
				}, r("h2", {
					className: "text-center ".concat(c)
				}, t), a && r("p", {
					className: l.a.subtitle
				}, a), r("div", {
					className: "row"
				}, v))))
			}
		},
		"9a8T": function (e, t, a) {
			e.exports = function (e) {
				function t(o) {
					if (a[o]) return a[o].exports;
					var n = a[o] = {
						exports: {},
						id: o,
						loaded: !1
					};
					return e[o].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
				}
				var a = {};
				return t.m = e, t.c = a, t.p = "dist/", t(0)
			}([function (e, t, a) {
				"use strict";

				function o(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				var n = Object.assign || function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var a = arguments[t];
							for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o])
						}
						return e
					},
					i = (o(a(1)), a(6)),
					l = o(i),
					c = o(a(7)),
					r = o(a(8)),
					s = o(a(9)),
					d = o(a(10)),
					u = o(a(11)),
					m = o(a(14)),
					v = [],
					p = !1,
					_ = {
						offset: 120,
						delay: 0,
						easing: "ease",
						duration: 400,
						disable: !1,
						once: !1,
						startEvent: "DOMContentLoaded",
						throttleDelay: 99,
						debounceDelay: 50,
						disableMutationObserver: !1
					},
					f = function () {
						if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (p = !0), p) return v = (0, u.default)(v, _), (0, d.default)(v, _.once), v
					},
					b = function () {
						v = (0, m.default)(), f()
					},
					g = function () {
						v.forEach((function (e, t) {
							e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
						}))
					},
					h = function (e) {
						return !0 === e || "mobile" === e && s.default.mobile() || "phone" === e && s.default.phone() || "tablet" === e && s.default.tablet() || "function" == typeof e && !0 === e()
					},
					y = function (e) {
						_ = n(_, e), v = (0, m.default)();
						var t = document.all && !window.atob;
						return h(_.disable) || t ? g() : (_.disableMutationObserver || r.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), _.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", _.easing), document.querySelector("body").setAttribute("data-aos-duration", _.duration), document.querySelector("body").setAttribute("data-aos-delay", _.delay), "DOMContentLoaded" === _.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? f(!0) : "load" === _.startEvent ? window.addEventListener(_.startEvent, (function () {
							f(!0)
						})) : document.addEventListener(_.startEvent, (function () {
							f(!0)
						})), window.addEventListener("resize", (0, c.default)(f, _.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(f, _.debounceDelay, !0)), window.addEventListener("scroll", (0, l.default)((function () {
							(0, d.default)(v, _.once)
						}), _.throttleDelay)), _.disableMutationObserver || r.default.ready("[data-aos]", b), v)
					};
				e.exports = {
					init: y,
					refresh: f,
					refreshHard: b
				}
			}, function (e, t) {}, , , , , function (e, t) {
				(function (t) {
					"use strict";

					function a(e, t, a) {
						function o(t) {
							var a = _,
								o = f;
							return _ = f = void 0, x = t, g = e.apply(o, a)
						}

						function i(e) {
							return x = e, h = setTimeout(d, t), C ? o(e) : g
						}

						function l(e) {
							var a = t - (e - y);
							return O ? N(a, b - (e - x)) : a
						}

						function r(e) {
							var a = e - y;
							return void 0 === y || a >= t || a < 0 || O && e - x >= b
						}

						function d() {
							var e = k();
							return r(e) ? u(e) : void(h = setTimeout(d, l(e)))
						}

						function u(e) {
							return h = void 0, j && _ ? o(e) : (_ = f = void 0, g)
						}

						function m() {
							void 0 !== h && clearTimeout(h), x = 0, _ = y = f = h = void 0
						}

						function v() {
							return void 0 === h ? g : u(k())
						}

						function p() {
							var e = k(),
								a = r(e);
							if (_ = arguments, f = this, y = e, a) {
								if (void 0 === h) return i(y);
								if (O) return h = setTimeout(d, t), o(y)
							}
							return void 0 === h && (h = setTimeout(d, t)), g
						}
						var _, f, b, g, h, y, x = 0,
							C = !1,
							O = !1,
							j = !0;
						if ("function" != typeof e) throw new TypeError(s);
						return t = c(t) || 0, n(a) && (C = !!a.leading, b = (O = "maxWait" in a) ? w(c(a.maxWait) || 0, t) : b, j = "trailing" in a ? !!a.trailing : j), p.cancel = m, p.flush = v, p
					}

					function o(e, t, o) {
						var i = !0,
							l = !0;
						if ("function" != typeof e) throw new TypeError(s);
						return n(o) && (i = "leading" in o ? !!o.leading : i, l = "trailing" in o ? !!o.trailing : l), a(e, t, {
							leading: i,
							maxWait: t,
							trailing: l
						})
					}

					function n(e) {
						var t = "undefined" == typeof e ? "undefined" : r(e);
						return !!e && ("object" == t || "function" == t)
					}

					function i(e) {
						return !!e && "object" == ("undefined" == typeof e ? "undefined" : r(e))
					}

					function l(e) {
						return "symbol" == ("undefined" == typeof e ? "undefined" : r(e)) || i(e) && y.call(e) == u
					}

					function c(e) {
						if ("number" == typeof e) return e;
						if (l(e)) return d;
						if (n(e)) {
							var t = "function" == typeof e.valueOf ? e.valueOf() : e;
							e = n(t) ? t + "" : t
						}
						if ("string" != typeof e) return 0 === e ? e : +e;
						e = e.replace(m, "");
						var a = p.test(e);
						return a || _.test(e) ? f(e.slice(2), a ? 2 : 8) : v.test(e) ? d : +e
					}
					var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
							return typeof e
						} : function (e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
						},
						s = "Expected a function",
						d = NaN,
						u = "[object Symbol]",
						m = /^\s+|\s+$/g,
						v = /^[-+]0x[0-9a-f]+$/i,
						p = /^0b[01]+$/i,
						_ = /^0o[0-7]+$/i,
						f = parseInt,
						b = "object" == ("undefined" == typeof t ? "undefined" : r(t)) && t && t.Object === Object && t,
						g = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
						h = b || g || Function("return this")(),
						y = Object.prototype.toString,
						w = Math.max,
						N = Math.min,
						k = function () {
							return h.Date.now()
						};
					e.exports = o
				}).call(t, function () {
					return this
				}())
			}, function (e, t) {
				(function (t) {
					"use strict";

					function a(e, t, a) {
						function n(t) {
							var a = _,
								o = f;
							return _ = f = void 0, x = t, g = e.apply(o, a)
						}

						function i(e) {
							return x = e, h = setTimeout(d, t), C ? n(e) : g
						}

						function c(e) {
							var a = t - (e - k);
							return O ? w(a, b - (e - x)) : a
						}

						function s(e) {
							var a = e - k;
							return void 0 === k || a >= t || a < 0 || O && e - x >= b
						}

						function d() {
							var e = N();
							return s(e) ? u(e) : void(h = setTimeout(d, c(e)))
						}

						function u(e) {
							return h = void 0, j && _ ? n(e) : (_ = f = void 0, g)
						}

						function m() {
							void 0 !== h && clearTimeout(h), x = 0, _ = k = f = h = void 0
						}

						function v() {
							return void 0 === h ? g : u(N())
						}

						function p() {
							var e = N(),
								a = s(e);
							if (_ = arguments, f = this, k = e, a) {
								if (void 0 === h) return i(k);
								if (O) return h = setTimeout(d, t), n(k)
							}
							return void 0 === h && (h = setTimeout(d, t)), g
						}
						var _, f, b, g, h, k, x = 0,
							C = !1,
							O = !1,
							j = !0;
						if ("function" != typeof e) throw new TypeError(r);
						return t = l(t) || 0, o(a) && (C = !!a.leading, b = (O = "maxWait" in a) ? y(l(a.maxWait) || 0, t) : b, j = "trailing" in a ? !!a.trailing : j), p.cancel = m, p.flush = v, p
					}

					function o(e) {
						var t = "undefined" == typeof e ? "undefined" : c(e);
						return !!e && ("object" == t || "function" == t)
					}

					function n(e) {
						return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
					}

					function i(e) {
						return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || n(e) && h.call(e) == d
					}

					function l(e) {
						if ("number" == typeof e) return e;
						if (i(e)) return s;
						if (o(e)) {
							var t = "function" == typeof e.valueOf ? e.valueOf() : e;
							e = o(t) ? t + "" : t
						}
						if ("string" != typeof e) return 0 === e ? e : +e;
						e = e.replace(u, "");
						var a = v.test(e);
						return a || p.test(e) ? _(e.slice(2), a ? 2 : 8) : m.test(e) ? s : +e
					}
					var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
							return typeof e
						} : function (e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
						},
						r = "Expected a function",
						s = NaN,
						d = "[object Symbol]",
						u = /^\s+|\s+$/g,
						m = /^[-+]0x[0-9a-f]+$/i,
						v = /^0b[01]+$/i,
						p = /^0o[0-7]+$/i,
						_ = parseInt,
						f = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
						b = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
						g = f || b || Function("return this")(),
						h = Object.prototype.toString,
						y = Math.max,
						w = Math.min,
						N = function () {
							return g.Date.now()
						};
					e.exports = a
				}).call(t, function () {
					return this
				}())
			}, function (e, t) {
				"use strict";

				function a(e) {
					var t = void 0,
						o = void 0;
					for (t = 0; t < e.length; t += 1) {
						if ((o = e[t]).dataset && o.dataset.aos) return !0;
						if (o.children && a(o.children)) return !0
					}
					return !1
				}

				function o() {
					return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
				}

				function n() {
					return !!o()
				}

				function i(e, t) {
					var a = window.document,
						n = new(o())(l);
					c = t, n.observe(a.documentElement, {
						childList: !0,
						subtree: !0,
						removedNodes: !0
					})
				}

				function l(e) {
					e && e.forEach((function (e) {
						var t = Array.prototype.slice.call(e.addedNodes),
							o = Array.prototype.slice.call(e.removedNodes);
						if (a(t.concat(o))) return c()
					}))
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var c = function () {};
				t.default = {
					isSupported: n,
					ready: i
				}
			}, function (e, t) {
				"use strict";

				function a(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}

				function o() {
					return navigator.userAgent || navigator.vendor || window.opera || ""
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = function () {
						function e(e, t) {
							for (var a = 0; a < t.length; a++) {
								var o = t[a];
								o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
							}
						}
						return function (t, a, o) {
							return a && e(t.prototype, a), o && e(t, o), t
						}
					}(),
					i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
					l = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					c = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
					r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
					s = function () {
						function e() {
							a(this, e)
						}
						return n(e, [{
							key: "phone",
							value: function () {
								var e = o();
								return !(!i.test(e) && !l.test(e.substr(0, 4)))
							}
						}, {
							key: "mobile",
							value: function () {
								var e = o();
								return !(!c.test(e) && !r.test(e.substr(0, 4)))
							}
						}, {
							key: "tablet",
							value: function () {
								return this.mobile() && !this.phone()
							}
						}]), e
					}();
				t.default = new s
			}, function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function (e, t, a) {
						var o = e.node.getAttribute("data-aos-once");
						t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !a && "true" !== o) && e.node.classList.remove("aos-animate")
					},
					o = function (e, t) {
						var o = window.pageYOffset,
							n = window.innerHeight;
						e.forEach((function (e, i) {
							a(e, n + o, t)
						}))
					};
				t.default = o
			}, function (e, t, a) {
				"use strict";

				function o(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = o(a(12)),
					i = function (e, t) {
						return e.forEach((function (e, a) {
							e.node.classList.add("aos-init"), e.position = (0, n.default)(e.node, t.offset)
						})), e
					};
				t.default = i
			}, function (e, t, a) {
				"use strict";

				function o(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = o(a(13)),
					i = function (e, t) {
						var a = 0,
							o = 0,
							i = window.innerHeight,
							l = {
								offset: e.getAttribute("data-aos-offset"),
								anchor: e.getAttribute("data-aos-anchor"),
								anchorPlacement: e.getAttribute("data-aos-anchor-placement")
							};
						switch (l.offset && !isNaN(l.offset) && (o = parseInt(l.offset)), l.anchor && document.querySelectorAll(l.anchor) && (e = document.querySelectorAll(l.anchor)[0]), a = (0, n.default)(e).top, l.anchorPlacement) {
							case "top-bottom":
								break;
							case "center-bottom":
								a += e.offsetHeight / 2;
								break;
							case "bottom-bottom":
								a += e.offsetHeight;
								break;
							case "top-center":
								a += i / 2;
								break;
							case "bottom-center":
								a += i / 2 + e.offsetHeight;
								break;
							case "center-center":
								a += i / 2 + e.offsetHeight / 2;
								break;
							case "top-top":
								a += i;
								break;
							case "bottom-top":
								a += e.offsetHeight + i;
								break;
							case "center-top":
								a += e.offsetHeight / 2 + i
						}
						return l.anchorPlacement || l.offset || isNaN(t) || (o = t), a + o
					};
				t.default = i
			}, function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function (e) {
					for (var t = 0, a = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), a += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
					return {
						top: a,
						left: t
					}
				};
				t.default = a
			}, function (e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function (e) {
					return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function (e) {
						return {
							node: e
						}
					}))
				};
				t.default = a
			}])
		},
		AuBJ: function (e, t, a) {
			e.exports = {
				navTabs: "Tab_navTabs__2Qsh_",
				navLink: "Tab_navLink__3PcRg",
				vertical: "Tab_vertical__24hs6",
				horizontal: "Tab_horizontal__15RAL",
				active: "Tab_active__1FHnd"
			}
		},
		E2aR: function (e, t, a) {
			e.exports = {
				startTitle: "Rooms_startTitle__2PUHp",
				room: "Rooms_room__1Qlkq",
				card: "Rooms_card__MgR-l",
				title: "Rooms_title__1_Cgs",
				price: "Rooms_price__cl-kT",
				essentials: "Rooms_essentials__3H0UK",
				verticalTab: "Rooms_verticalTab__rV41P",
				mb40: "Rooms_mb40__2SiJ5",
				roomsDescription: "Rooms_roomsDescription__1Ff-X"
			}
		},
		GmWV: function (e, t, a) {
			"use strict";
			var o = a("q1tI"),
				n = a.n(o),
				i = a("z4UT"),
				l = a.n(i),
				c = n.a.createElement;
			t.a = function (e) {
				var t = e.src,
					a = e.position,
					o = e.className,
					n = e.onClick;
				return c("div", {
					className: "".concat(l.a.sqrBtn, " ").concat(l.a[a], " ").concat(o),
					onClick: n
				}, c("img", {
					src: t,
					className: "".concat(l.a.arrow, " ").concat(l.a[a])
				}))
			}
		},
		KsMp: function (e, t, a) {
			e.exports = {
				heroContainer: "Home_heroContainer__3zKUx",
				carousel: "Home_carousel__flVdr",
				dotList: "Home_dotList__3bim_",
				heroRow: "Home_heroRow__1Jo7c",
				backgroundImage: "Home_backgroundImage__20W6X",
				heroLeft: "Home_heroLeft__2J590",
				subTagline: "Home_subTagline__3UJhK",
				navyButton: "Home_navyButton__3u7pM",
				yourKindLeft: "Home_yourKindLeft__psXD3",
				yourKind: "Home_yourKind__2AiP7",
				yourKindWrapper: "Home_yourKindWrapper__w8p1W",
				yourKindTitle: "Home_yourKindTitle__zvVHg",
				yourKindDescription: "Home_yourKindDescription__25pum",
				homepageHowYouGet: "Home_homepageHowYouGet__ICkxW",
				homepageHowYouGetImg: "Home_homepageHowYouGetImg__23yZg",
				homepageHowYouGetLeft: "Home_homepageHowYouGetLeft__313nC",
				howYouGetText: "Home_howYouGetText__1nGMf",
				homepageHowYouGetRight: "Home_homepageHowYouGetRight__n-8sW",
				whereAreWe: "Home_whereAreWe__1_X1T"
			}
		},
		OJk7: function (e, t, a) {
			e.exports = {
				featuredWrapper: "Featured_featuredWrapper__lTXMZ",
				sectionTitle: "Featured_sectionTitle__gXX-0",
				logoRow: "Featured_logoRow__1DeXE",
				logoWrapper: "Featured_logoWrapper__3_reS"
			}
		},
		SjI2: function (e, t, a) {
			e.exports = {
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
		THoP: function (e, t, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/[lang]", function () {
				return a("ssaF")
			}])
		},
		W2oC: function (e, t, a) {
			"use strict";
			var o = a("q1tI"),
				n = a.n(o),
				i = a("2v50"),
				l = a("1+QS"),
				c = a("30Jy"),
				r = a("rHMZ"),
				s = a.n(r),
				d = a("GmWV"),
				u = a("ipDU"),
				m = n.a.createElement,
				v = function (e) {
					var t = e.className,
						a = e.style,
						o = e.onClick;
					return m(d.a, {
						onClick: o,
						position: "right",
						style: a,
						className: "".concat(t, " d-none d-sm-none d-md-block"),
						src: Object(i.a)({
							version: "v1592890058",
							name: "arrow-w3.svg"
						})
					})
				},
				p = function (e) {
					var t = e.className,
						a = e.style,
						o = e.onClick;
					return m(d.a, {
						onClick: o,
						position: "left",
						style: a,
						className: "".concat(t, " d-none d-sm-none d-md-block"),
						src: Object(i.a)({
							version: "v1592890058",
							name: "arrow-w3.svg"
						})
					})
				};
			t.a = function (e) {
				for (var t = e.snippets, a = e.images, r = e.userHandle, d = e.feedbackHandle, _ = e.imageFirst, f = void 0 === _ || _, b = e.anim, g = Object(o.useState)(0), h = g[0], y = g[1], w = [], N = 1; N <= 3; N++) {
					var k = null === a || void 0 === a ? void 0 : a[r + N],
						x = null === t || void 0 === t ? void 0 : t[r + "name_" + N],
						C = null === t || void 0 === t ? void 0 : t[r + "designation_" + N],
						O = null === t || void 0 === t ? void 0 : t[d + N];
					w.push(m(c.a, {
						key: N,
						className: "".concat(s.a.card, " ").concat(N === h ? s.a.activeSlide : null),
						"data-aos": b ? "fade-up" : null,
						"data-aos-duration": b ? "1500" : null,
						"data-aos-delay": b ? "500" : null
					}, f && m("img", {
						className: "".concat(s.a.avtar, " lazyload"),
						"data-src": k
					}), m("p", {
						dangerouslySetInnerHTML: {
							__html: O
						}
					}), m("div", {
						className: s.a.name
					}, x), m("div", {
						className: s.a.designation
					}, C), !f && m(n.a.Fragment, null, m("div", {
						className: "".concat(s.a.whiteSpace)
					}), m("img", {
						className: "".concat(s.a.logo, " lazyload"),
						"data-src": k
					}))))
				}
				return m("div", {
					className: "container"
				}, (null === t || void 0 === t ? void 0 : t.homepage_what_living_title) && m("h2", {
					className: "".concat(s.a.feedbackTitle, " mobile-space text-center")
				}, null === t || void 0 === t ? void 0 : t.homepage_what_living_title), m("div", {
					className: "mb-64 ".concat(s.a.feedbackWrapper, " text-center")
				}, m("div", {
					className: "".concat(s.a.quote, " ").concat(s.a.quoteUp, " d-none d-sm-none d-md-flex"),
					style: {
						backgroundImage: "url(".concat(Object(i.a)({
							version: "v1593160071",
							name: "quote-open-w3.svg"
						}), "\n                )")
					}
				}), m("div", {
					className: "".concat(s.a.quote, " ").concat(s.a.quoteDown, " d-none d-sm-none d-md-flex"),
					style: {
						backgroundImage: "url(".concat(Object(i.a)({
							version: "v1587010481",
							name: "quote-close-w3.svg"
						}), "\n                )")
					}
				}), m(l.a, {
					beforeChange: function (e) {
						y(e)
					},
					leftButton: m(p, null),
					rightButton: m(v, null),
					showDots: !0,
					renderDotsOutside: !0,
					dots: m(u.a, {
						className: s.a.dot,
						activeClassName: s.a.active
					}),
					dotListClass: s.a.dotList,
					infinite: !1
				}, w)))
			}
		},
		gDgw: function (e, t, a) {
			"use strict";
			a.d(t, "a", (function () {
				return s
			}));
			var o = a("KQm4"),
				n = a("q1tI"),
				i = a.n(n),
				l = a("SjI2"),
				c = a.n(l),
				r = i.a.createElement;

			function s(e) {
				var t = e.sectionTitle,
					a = e.snippets,
					n = e.images,
					i = e.anim;
				return r("div", {
					className: "".concat(c.a.wrapper, " row mt-64 pb-64 mb-0 ").concat(c.a.pb50),
					"data-aos": i ? "fade-in" : null,
					"data-aos-duration": i ? "1300" : null,
					"data-aos-delay": i ? "500" : null
				}, r("div", {
					className: "col-md-3"
				}, r("h2", {
					className: "".concat(c.a.title, " background-highlight-green")
				}, t)), r("div", {
					className: "col-md-9"
				}, r("div", {
					className: "row mt-md-0 mt-4"
				}, Object(o.a)(Array(8).keys()).map((function (e) {
					var t = "amenities_" + (e + 1);
					return r("div", {
						key: e,
						className: "row align-items-center no-margin col-md-4 col-6"
					}, r("div", {
						className: c.a.imgContainer
					}, r("img", {
						"data-src": null === n || void 0 === n ? void 0 : n[t],
						alt: "",
						className: "lazyload ".concat(c.a["img" + (e + 1)])
					})), r("p", {
						className: "col"
					}, null === a || void 0 === a ? void 0 : a[t]))
				})))))
			}
		},
		htVU: function (e, t, a) {
			e.exports = {
				wrapper: "BannerButton_wrapper__1Ulfg",
				text: "BannerButton_text__QIGHu",
				description: "BannerButton_description__12Cqh",
				buttonStyle: "BannerButton_buttonStyle__2OZFq"
			}
		},
		jvY3: function (e, t, a) {
			e.exports = {
				tabContent: "Tab_tabContent__2IXi1",
				navBar: "Tab_navBar__1g9Kq",
				title: "Tab_title__pu8uf",
				btn: "Tab_btn__3GEXL",
				tabImageWrapper: "Tab_tabImageWrapper__3mLcu"
			}
		},
		m6Xz: function (e, t, a) {
			e.exports = {
				touchBaseWrapper: "TouchBase_touchBaseWrapper__1eA26",
				containerColor: "TouchBase_containerColor__2JDoF",
				subtitle: "TouchBase_subtitle__2vNnF",
				noGutter: "TouchBase_noGutter__2d03w"
			}
		},
		"o+F/": function (e, t, a) {
			"use strict";
			var o = a("ODXe"),
				n = a("q1tI"),
				i = a.n(n),
				l = a("OJk7"),
				c = a.n(l),
				r = a("jobX"),
				s = a("TxL0"),
				d = i.a.createElement;
			t.a = function (e) {
				var t = e.title,
					a = Object(r.a)(s.C),
					n = Object(o.a)(a, 1)[0],
					i = null === n || void 0 === n ? void 0 : n.data,
					l = null === i || void 0 === i ? void 0 : i.Links,
					u = null === i || void 0 === i ? void 0 : i.Images;
				return d("div", {
					className: "".concat(c.a.featuredWrapper)
				}, d("div", {
					className: "container"
				}, d("h1", {
					className: c.a.sectionTitle
				}, t), d("div", {
					className: "".concat(c.a.logoRow, " row d-flex")
				}, null === l || void 0 === l ? void 0 : l.map((function (e, t) {
					var a;
					return d("a", {
						href: null === e || void 0 === e ? void 0 : e.URL,
						target: "_blank",
						rel: "noreferrer",
						className: "col-md-2 col-4 mb-3 ".concat(c.a.logoWrapper),
						key: t
					}, d("img", {
						"data-src": null === (a = u[t]) || void 0 === a ? void 0 : a.URL,
						className: "lazyload"
					}))
				})))))
			}
		},
		rHMZ: function (e, t, a) {
			e.exports = {
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
		ssaF: function (e, t, a) {
			"use strict";
			a.r(t), a.d(t, "__N_SSP", (function () {
				return oe
			}));
			var o = a("wx14"),
				n = a("ODXe"),
				i = a("q1tI"),
				l = a.n(i),
				c = a("8Kt/"),
				r = a.n(c),
				s = a("wyBh"),
				d = a("5Yp1"),
				u = a("rePB"),
				m = a("KQm4"),
				v = a("7bXc"),
				p = a("co3k"),
				_ = a("30Jy"),
				f = a("E2aR"),
				b = a.n(f),
				g = a("2v50"),
				h = a("AuBJ"),
				y = a.n(h),
				w = a("9a8T"),
				N = a.n(w),
				k = l.a.createElement;
			var x = function (e) {
					var t = e.tabs,
						a = e.className,
						o = e.tabClassName,
						n = e.paneClassName,
						l = e.vertical,
						c = Object(i.useState)(0),
						r = c[0],
						s = c[1],
						d = [],
						u = [],
						m = l ? "vertical" : "horizontal";
					t.map((function (e, t) {
						d.push(k("a", {
							className: "".concat(y.a.navLink, " ").concat(y.a[m], " ").concat(r === t ? y.a.active : null),
							href: "",
							id: e.label + "-tab",
							"data-toggle": "tab",
							role: "tab",
							"aria-controls": e.label,
							"aria-selected": r === t,
							key: t,
							onClick: function (e) {
								e.preventDefault(),
									function (e) {
										s(e), setTimeout((function () {
											N.a.refresh()
										}))
									}(t)
							}
						}, e.label)), u.push(k("div", {
							className: "tab-pane fade ".concat(r === t ? "show active" : null),
							id: e.label,
							role: "tabpanel",
							"aria-labelledby": e.label + "-tab",
							key: t,
							"data-aos": "fade-left",
							"data-aos-duration": "1500",
							"data-aos-offset": 150,
							"data-aos-delay": 200
						}, e.pane))
					}));
					var v = k("div", {
						className: "".concat(n, " tab-content"),
						id: "myTabContent",
						key: "tab-content"
					}, u);
					return l ? k("div", {
						className: "row ".concat(a)
					}, k("nav", {
						className: "nav ".concat(o),
						role: "tablist",
						key: "tab-label"
					}, d), v) : [k("nav", {
						className: "width-100 ".concat(a),
						key: "tab-label"
					}, k("div", {
						className: "nav ".concat(y.a.navTabs, " ").concat(o),
						id: "nav-tab",
						role: "tablist"
					}, d)), v]
				},
				C = l.a.createElement;
			var O = function (e) {
					var t = e.snippets,
						a = e.images,
						o = e.lang,
						n = [{
							label: null === t || void 0 === t ? void 0 : t.homepage_tab_sharing,
							pane: [C("div", {
								key: "tab-1"
							}, C("p", {
								className: "font-weight-bold",
								key: "title"
							}, null === t || void 0 === t ? void 0 : t.homepage_tab_sharing_title), C("p", {
								key: "subtitle"
							}, null === t || void 0 === t ? void 0 : t.homepage_tab_sharing_description), C("div", {
								className: "row flex-nowrap mt-64 no-margin ".concat(b.a.room),
								key: "rooms"
							}, Object(m.a)(Array(3)).map((function (e, o) {
								var n = "homepage_tab_sharing_room_" + (o + 1),
									i = "homepage_tab_sharing_room_" + (o + 1) + "_price",
									l = "homepage_tab_sharing_room_" + (o + 1) + "_bed_set",
									c = "homepage_tab_sharing_room_" + (o + 1);
								return C(_.a, {
									className: "".concat(b.a.card, " col-md col-auto"),
									key: o
								}, C("img", {
									"data-src": null === a || void 0 === a ? void 0 : a[c],
									alt: null === t || void 0 === t ? void 0 : t[n],
									className: "lazyload fit-image"
								}), C("div", {
									className: "title ".concat(b.a.title, " mb-3")
								}, null === t || void 0 === t ? void 0 : t[n]), C("p", {
									className: b.a.price
								}, null === t || void 0 === t ? void 0 : t[i]), C("div", {
									className: "clearfix"
								}, C("img", {
									"data-src": Object(g.a)({
										name: 0 === o ? "single-bed.svg" : "queen-bed.svg",
										version: 0 === o ? "v1592450236" : "v1592546085"
									}),
									alt: null === t || void 0 === t ? void 0 : t[l],
									className: "float-left mr-3 lazyload"
								}), C("p", null, null === t || void 0 === t ? void 0 : t[l])))
							}))))]
						}, {
							label: null === t || void 0 === t ? void 0 : t.homepage_tab_all_for_you,
							pane: [C("div", {
								key: "tab-2"
							}, C("p", {
								className: "font-weight-bold",
								key: "title"
							}, null === t || void 0 === t ? void 0 : t.homepage_tab_all_for_you_title), C("p", {
								key: "subtitle"
							}, null === t || void 0 === t ? void 0 : t.homepage_tab_all_for_you_description), C("div", {
								className: "row flex-nowrap mt-64 no-margin ".concat(b.a.room),
								key: "rooms"
							}, Object(m.a)(Array(3)).map((function (e, o) {
								var n = "homepage_tab_sharing_room_" + (o + 4),
									i = "homepage_tab_sharing_room_" + (o + 4) + "_price",
									l = "homepage_tab_sharing_room_" + (o + 4) + "_bed_set",
									c = "homepage_tab_sharing_room_" + (o + 4);
								return C(_.a, {
									className: "".concat(b.a.card, " col-md col-auto"),
									key: o
								}, C("img", {
									"data-src": null === a || void 0 === a ? void 0 : a[c],
									alt: null === t || void 0 === t ? void 0 : t[n],
									className: "lazyload fit-image"
								}), C("div", {
									className: "title ".concat(b.a.title, " mb-3")
								}, null === t || void 0 === t ? void 0 : t[n]), C("p", {
									className: b.a.price
								}, null === t || void 0 === t ? void 0 : t[i]), C("div", {
									className: "clearfix"
								}, C("img", {
									"data-src": Object(g.a)({
										name: "queen-bed.svg",
										version: "v1592546085"
									}),
									alt: null === t || void 0 === t ? void 0 : t[l],
									className: "float-left mr-3 lazyload"
								}), C("p", null, null === t || void 0 === t ? void 0 : t[l])))
							}))))]
						}];
					return "ja" === o && (n = [n[1]]), C("div", {
						className: "container"
					}, C("div", {
						className: "justify-content-center"
					}, C("h2", {
						className: "mb-20  ".concat(b.a.startTitle, " text-center")
					}, null === t || void 0 === t ? void 0 : t.homepage_start_title), C("p", {
						className: "text-center mb-64 mx-auto ".concat(b.a.roomsDescription, " ").concat(b.a.mb40)
					}, null === t || void 0 === t ? void 0 : t.homepage_start_subtitle), C("div", {
						className: "d-none d-sm-none d-md-block"
					}, C(x, {
						vertical: !0,
						tabClassName: "col-3 align-content-start ".concat(b.a.verticalTab),
						paneClassName: "col-9",
						tabs: n
					})), C("div", {
						className: "d-sm-block d-md-none overflow-auto"
					}, C(x, {
						tabs: n,
						paneClassName: "mt-4"
					}))))
				},
				j = a("jvY3"),
				T = a.n(j),
				H = a("YFqc"),
				S = a.n(H),
				L = l.a.createElement;
			var I = function (e) {
					for (var t, a = e.snippets, o = e.images, n = e.lang, i = void 0 === n ? "en" : n, l = [], c = 1; c <= 4; c++) l.push({
						label: null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_" + c],
						pane: L(v.a, {
							img: null === o || void 0 === o ? void 0 : o["homepage_section_flexibility_tab_b_" + c],
							imgSrc: "home",
							imgClassName: T.a.tabImageWrapper,
							position: "right",
							rightColumnClassName: "pt-md-5 pb-md-5",
							fullWidth: !0,
							noLazyload: !0
						}, L("div", {
							className: "p-md-0 d-md-flex flex-column justify-content-around"
						}, (null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_title_" + c]) && L("div", {
							className: "title ".concat(T.a.title)
						}, null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_title_" + c]), L("p", {
							className: (t = null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_title_" + c], t ? "" : "mt-4")
						}, null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_description_" + c]), -1 !== ((null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_link_" + c]) || "").indexOf("http") ? L("a", {
							href: null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_link_" + c],
							target: "_blank",
							rel: "noreferrer"
						}, L(p.a, {
							btnClass: "align-self-start ".concat(T.a.btn),
							text: null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_button_" + c]
						})) : L(S.a, {
							href: "/" + i + (null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_link_" + c]) || !1
						}, L("a", null, L(p.a, {
							btnClass: "align-self-start ".concat(T.a.btn),
							text: null === a || void 0 === a ? void 0 : a["homepage_section_flexibility_tab_button_" + c]
						})))))
					});
					return L("div", {
						className: "container"
					}, L(x, {
						tabs: l,
						tabClassName: "d-flex justify-content-center",
						paneClassName: "".concat(T.a.tabContent),
						className: T.a.navBar
					}))
				},
				E = a("/06W"),
				M = a("TxL0"),
				B = a("jobX"),
				A = a("S68s"),
				q = l.a.createElement;
			var z = function (e) {
					var t, a = e.snippets,
						o = Object(B.a)(M.F),
						i = Object(n.a)(o, 1)[0],
						l = null === i || void 0 === i || null === (t = i.data) || void 0 === t ? void 0 : t.lang;
					return q("div", {
						className: "container-fluid"
					}, q("div", {
						className: "row"
					}, q("div", {
						className: "col-md-6 p-0 col-sm-12"
					}, q(E.a, {
						backgroundColor: "#525B5A",
						backgroundImage: Object(g.a)({
							version: "v1587010481",
							name: "curved-arrow.svg"
						}),
						text: null === a || void 0 === a ? void 0 : a.homepage_property_owner_title,
						buttonText: null === a || void 0 === a ? void 0 : a.homepage_button_text_lease_to,
						leftColumnClassName: "text-center",
						rightColumnClassName: "col-auto mt-md-5",
						buttonLink: "/".concat(l).concat(s.b.LANDLORDS_PAGE),
						lang: l
					})), q("div", {
						className: "col-md-6 p-0"
					}, q(E.a, {
						backgroundColor: "#8E9788",
						backgroundImage: Object(g.a)({
							version: "v1587010481",
							name: "smile-face.svg"
						}),
						text: null === a || void 0 === a ? void 0 : a.homepage_get_advice_title,
						buttonText: null === a || void 0 === a ? void 0 : a.homepage_button_text_let_us_help,
						leftColumnClassName: "text-center",
						rightColumnClassName: "col-auto mt-md-5",
						buttonLink: s.b.CITIES,
						lang: l,
						buttonClick: function () {
							return Object(A.b)()
						}
					}))))
				},
				W = a("3Cg/"),
				P = a.n(W),
				D = a("bhxT"),
				F = a("nOHt"),
				Y = l.a.createElement;

			function R(e) {
				var t = e.snippets,
					a = e.images,
					o = e.lang,
					n = void 0 === o ? "en" : o,
					i = Object(F.useRouter)();
				return Y("div", {
					className: "".concat(P.a.wrapper, " mb-64")
				}, Y("div", {
					className: "row"
				}, Y("div", {
					className: "col-md-5"
				}, Y("h4", {
					className: "".concat(P.a.title),
					style: {
						backgroundImage: "url(".concat(Object(g.a)({
							version: "v1587010481",
							name: "text-highlight-red-w3.svg"
						}), "\n                )")
					}
				}, null === t || void 0 === t ? void 0 : t.homepage_your_comfort_title), Y("p", {
					className: "".concat(P.a.description)
				}, null === t || void 0 === t ? void 0 : t.homepage_your_comfort_description), Y(S.a, {
					href: "".concat(n).concat(s.b.MEMBERSHIP_PAGE)
				}, Y("a", {
					className: "link",
					onClick: function () {
						var e, a;
						return D.a.track({
							eventName: D.m.secondaryMenu,
							props: (a = {}, Object(u.a)(a, D.m.props.currentPage.title, null === (e = document) || void 0 === e ? void 0 : e.title), Object(u.a)(a, D.m.props.currentPage.slug, i.query), Object(u.a)(a, D.m.props.targetPage.title, s.a.MEMBERSHIP), Object(u.a)(a, D.m.props.position, "home"), Object(u.a)(a, D.m.props.anchorName, null === t || void 0 === t ? void 0 : t.homepage_your_comfort_link), a)
						})
					}
				}, null === t || void 0 === t ? void 0 : t.homepage_your_comfort_link))), Y("div", {
					className: "".concat(P.a.imageWrapper, " col-md-3 col-5"),
					"data-aos": "fade-in",
					"data-aos-duration": "1300",
					"data-aos-delay": "500"
				}, Y("img", {
					alt: "table",
					"data-src": null === a || void 0 === a ? void 0 : a.homepage_your_community_b_1,
					className: "lazyload"
				})), Y("div", {
					className: "".concat(P.a.image2Wrapper, " col-md-4 col-7"),
					"data-aos": "fade-in",
					"data-aos-duration": "1300",
					"data-aos-delay": "500"
				}, Y("img", {
					alt: "chair",
					"data-src": null === a || void 0 === a ? void 0 : a.homepage_your_community_b_2,
					className: "lazyload"
				}))), Y("div", {
					className: "row ".concat(P.a.cactusSection, " mt-64")
				}, Y("div", {
					className: "col-md-5 "
				}, Y("img", {
					alt: "cactus",
					className: "".concat(P.a.cactus, " lazyload"),
					"data-src": Object(g.a)({
						version: "v1587010481",
						name: "cactus-w3-2.png"
					})
				})), Y("div", {
					className: "col-md-6 d-flex"
				}, Y("p", {
					dangerouslySetInnerHTML: {
						__html: null === t || void 0 === t ? void 0 : t.homepage_longing_description
					}
				}))))
			}
			var G = a("gDgw"),
				X = a("o+F/"),
				K = a("KsMp"),
				U = a.n(K),
				J = a("9HNw"),
				Q = a("W2oC"),
				V = a("1+QS"),
				$ = a("ipDU"),
				Z = a("vhj8"),
				ee = l.a.createElement;
			var te = function (e) {
					var t, a, o, l, c = Object(F.useRouter)(),
						r = Object(B.a)(M.w),
						d = Object(n.a)(r, 1)[0].data,
						_ = null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.snippets,
						f = null === e || void 0 === e || null === (a = e.data) || void 0 === a ? void 0 : a.images,
						b = null === e || void 0 === e ? void 0 : e.amenitiesSnippets,
						h = null === e || void 0 === e ? void 0 : e.amenitiesImages,
						y = null === e || void 0 === e || null === (o = e.data) || void 0 === o ? void 0 : o.lang,
						w = [{
							title: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_1,
							desc: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_desc_1
						}, {
							title: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_2,
							desc: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_desc_2
						}, {
							title: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_3,
							desc: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_desc_3
						}, {
							title: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_4,
							desc: null === _ || void 0 === _ ? void 0 : _.homepage_touch_item_desc_4
						}];
					return Object(i.useEffect)((function () {
						N.a.init()
					})), [ee("div", {
						key: "section-1",
						className: U.a.heroContainer
					}, ee("div", {
						className: "container-fluid"
					}, ee("div", {
						className: "row ".concat(U.a.heroRow)
					}, ee("div", {
						className: U.a.heroLeft,
						"data-aos": "fade-right",
						"data-aos-duration": "1500"
					}, ee("h1", {
						className: "",
						dangerouslySetInnerHTML: {
							__html: null === _ || void 0 === _ ? void 0 : _.homepage_tagline
						}
					}), ee("p", {
						className: U.a.subTagline
					}, null === _ || void 0 === _ ? void 0 : _.homepage_sub_tagline), ee(S.a, {
						href: s.b.CITIES
					}, ee("a", {
						onClick: function () {
							Object(A.b)(), D.a.ctaNavigation(c, null === _ || void 0 === _ ? void 0 : _.homepage_button_text_interested, s.a.MAIN_FORM, s.f.SINGAPORE.SLUG)
						}
					}, ee(p.a, {
						btnClass: U.a.navyButton,
						text: null === _ || void 0 === _ ? void 0 : _.homepage_button_text_interested
					})))), ee("div", {
						className: "offset-lg-3 col-lg-9 col-12 p-0 "
					}, ee(V.a, {
						showDots: !0,
						dots: ee($.a, null),
						dotListClass: U.a.dotList,
						containerClass: U.a.carousel,
						itemsOnSuperLargeDesktop: 1,
						itemsOnDesktop: 1,
						itemsOnTablet: 1,
						itemsOnMobile: 1,
						removeArrowOnDeviceType: ["superLargeDesktop", "desktop", "tablet", "mobile"],
						autoPlay: !0,
						autoPlaySpeed: 5e3
					}, Object(m.a)(Array(5)).map((function (e, t) {
						return ee("img", {
							src: null === f || void 0 === f ? void 0 : f["homepage_cantonment_b_" + (t + 1)],
							alt: "Hmlet Cantonment",
							className: "".concat(U.a.backgroundImage),
							key: t
						})
					})))))), ee("div", {
						className: "".concat(U.a.dotsContainer)
					}, ee("span", {
						className: "".concat(U.a.active)
					}), ee("span", null), ee("span", null))), ee(v.a, {
						key: "how-this-works-section",
						containerClassName: "my-80 pl-xs-sm-only-5 pr-xs-sm-only-5"
					}, ee("div", {
						className: "offset-md-3 col-md-6 col-12 pl-xs-sm-only-0 pr-xs-sm-only-0 text-center"
					}, ee("h2", {
						className: "mb-20"
					}, null === _ || void 0 === _ ? void 0 : _.homepage_how_title), ee("p", {
						dangerouslySetInnerHTML: {
							__html: null === _ || void 0 === _ ? void 0 : _.homepage_how_subtitle
						}
					})), ee("div", {
						className: "container mt-64"
					}, ee("div", {
						className: "row flex-md-row flex-md-nowrap flex-wrap"
					}, ee("div", {
						className: "col-md-3 col-xl-2 offset-0 offset-xl-1 col-12 text-md-left text-center mb-md-0 mb-3"
					}, ee("h2", {
						className: "".concat(U.a.whereAreWe, " mx-md-0 mx-sm-auto")
					}, null === _ || void 0 === _ ? void 0 : _.homepage_where_title)), ee(Z.a, {
						cities: d,
						lang: y,
						fromHome: !0
					})))), ee(v.a, {
						key: "tell-us-section",
						containerClassName: "justify-content-center  mobile-space ".concat(U.a.heroContainer, " ").concat(U.a["no-margin"]),
						fullWidth: !0
					}, ee(O, {
						key: "home-rooms-section",
						snippets: _,
						images: f,
						lang: y
					}), ee("div", {
						key: "your-essentials-section",
						className: "container"
					}, ee(G.a, {
						sectionTitle: null === _ || void 0 === _ ? void 0 : _.homepage_flex_essentials_title,
						snippets: b,
						images: h,
						anim: !0
					}))), ee(v.a, {
						key: "your-flexibility-section",
						containerClassName: "justify-content-center my-80 pt-0 pb-0"
					}, ee("h2", {
						className: "text-center mb-20"
					}, null === _ || void 0 === _ ? void 0 : _.homepage_flex_title), ee(I, {
						snippets: _,
						images: f,
						lang: null === e || void 0 === e || null === (l = e.data) || void 0 === l ? void 0 : l.lang
					})), ee(J.a, {
						key: "touch-base-section",
						title: null === _ || void 0 === _ ? void 0 : _.homepage_touch_title,
						subtitle: null === _ || void 0 === _ ? void 0 : _.homepage_touch_subtitle,
						snippetsArray: w,
						anim: !0
					}), ee("div", {
						key: "how-you-get-section"
					}, ee(v.a, {
						img: null === f || void 0 === f ? void 0 : f.homepage_how_you_get_to_b,
						imgAlt: "homepageHowYouGet",
						imgClassName: "".concat(U.a.homepageHowYouGetImg),
						position: "left",
						containerClassName: "".concat(U.a.homepageHowYouGet),
						rightColumnClassName: "".concat(U.a.homepageHowYouGetRight),
						leftColumnClassName: "".concat(U.a.homepageHowYouGetLeft)
					}, ee("h2", {
						className: "".concat(U.a.howYouGetText, " offset-md-1"),
						dangerouslySetInnerHTML: {
							__html: null === _ || void 0 === _ ? void 0 : _.homepage_here_title
						}
					}))), ee("div", {
						key: "community-section",
						className: "container"
					}, ee(v.a, {
						img: null === f || void 0 === f ? void 0 : f.homepage_your_kind_b,
						imgAlt: "homepage-faces",
						imgClassName: U.a.yourKind,
						position: "right",
						containerClassName: "mt-64 mb-64",
						leftColumnClassName: U.a.yourKindLeft,
						fullWidth: !0,
						anim: !0
					}, ee("div", {
						className: "".concat(U.a.yourKindWrapper)
					}, ee("h4", {
						className: "".concat(U.a.yourKindTitle, " mt-20 mb-20"),
						style: {
							backgroundImage: "url(".concat(Object(g.a)({
								version: "v1587010481",
								name: "text-highlight-red-w3.svg"
							}), "\n                )")
						}
					}, null === _ || void 0 === _ ? void 0 : _.homepage_your_kind_title), ee("p", {
						className: "".concat(U.a.yourKindDescription)
					}, null === _ || void 0 === _ ? void 0 : _.homepage_your_kind_description), ee(S.a, {
						href: "".concat(y).concat(s.b.COMMUNITY_PAGE)
					}, ee("a", {
						className: "link",
						onClick: function () {
							var e, t;
							D.a.track({
								eventName: D.m.secondaryMenu,
								props: (t = {}, Object(u.a)(t, D.m.props.currentPage.title, null === (e = document) || void 0 === e ? void 0 : e.title), Object(u.a)(t, D.m.props.currentPage.slug, c.query), Object(u.a)(t, D.m.props.targetPage.title, s.a.COMMUNITY), Object(u.a)(t, D.m.props.position, "home"), Object(u.a)(t, D.m.props.anchorName, null === _ || void 0 === _ ? void 0 : _.homepage_your_kind_link), t)
							})
						}
					}, null === _ || void 0 === _ ? void 0 : _.homepage_your_kind_link))))), ee("div", {
						key: "your-comfort-section",
						className: "container"
					}, ee(R, {
						snippets: _,
						images: f,
						lang: y
					})), ee(v.a, {
						key: "what-living-with-section",
						containerClassName: "justify-content-center",
						fullWidth: !0
					}, ee("div", {
						className: "baby-powder-bg container-fluid overflow-hidden"
					}, ee(Q.a, {
						key: "what-living-section",
						snippets: _,
						images: f,
						userHandle: "homepage_feedback_given_by_",
						feedbackHandle: "homepage_feedback_description_",
						anim: !0
					}), ee(X.a, {
						key: "featured-in-section",
						title: null === _ || void 0 === _ ? void 0 : _.homepage_featured_title
					}))), ee(z, {
						key: "leave-lease-section",
						snippets: _
					})]
				},
				ae = l.a.createElement,
				oe = !0;
			t.default = function () {
				var e, t, a, i = Object(B.a)(M.F),
					l = Object(n.a)(i, 1)[0],
					c = Object(B.a)(M.l),
					u = Object(n.a)(c, 1)[0],
					m = null === u || void 0 === u || null === (e = u.data) || void 0 === e ? void 0 : e.snippets,
					v = null === u || void 0 === u || null === (t = u.data) || void 0 === t ? void 0 : t.images,
					p = null === l || void 0 === l || null === (a = l.data) || void 0 === a ? void 0 : a.lang;
				return ae(d.a, null, ae(r.a, null, ae("title", null, s.a.HOME), ae("title", null, "ja" === p ? "\u30cf\u30e0\u30ec\u30c3\u30c8" : "Hmlet")), ae("main", null, ae(te, Object(o.a)({}, l, {
					amenitiesSnippets: m,
					amenitiesImages: v
				}))))
			}
		},
		vhj8: function (e, t, a) {
			"use strict";
			var o = a("rePB"),
				n = a("q1tI"),
				i = a.n(n),
				l = a("54Q9"),
				c = a.n(l),
				r = a("YFqc"),
				s = a.n(r),
				d = a("wyBh"),
				u = a("bhxT"),
				m = i.a.createElement;
			t.a = function (e) {
				var t, a = e.cities,
					n = e.fromHome,
					i = e.lang;
				return m("div", {
					className: "row flex-wrap flex-md-nowrap ".concat(c.a.overflow)
				}, null === a || void 0 === a || null === (t = a.inOrder) || void 0 === t ? void 0 : t.map((function (e, t) {
					var a;
					return m("div", {
						className: "col-6 col-md-auto mt-md-0 mt-3 ".concat(c.a.cityBox),
						key: null === e || void 0 === e ? void 0 : e.Slug
					}, m("div", {
						"data-aos": "fade-up",
						"data-aos-duration": "1000",
						"data-aos-delay": 100 * (t + 1),
						"data-aos-anchor-placement": "bottom-bottom"
					}, m(s.a, {
						href: n ? "".concat(i).concat(d.b.UNIT_LISTING_PAGES).concat(null === e || void 0 === e ? void 0 : e.Slug) : d.b.MAIN_FORM + (null === e || void 0 === e ? void 0 : e.Slug)
					}, m("a", {
						onClick: function () {
							var t;
							n ? u.a.track({
								eventName: u.j.name,
								props: (t = {}, Object(o.a)(t, u.j.props.cityName, null === e || void 0 === e ? void 0 : e.Name), Object(o.a)(t, u.j.props.menu, "cityBox"), t)
							}) : (u.a.track({
								eventName: u.l.name,
								props: Object(o.a)({}, u.l.props.city, null === e || void 0 === e ? void 0 : e.Name)
							}), u.a.setProfile(Object(o.a)({}, u.l.props.profileCity, null === e || void 0 === e ? void 0 : e.Name)))
						}
					}, m("p", {
						className: c.a.cityBoxP
					}, null === e || void 0 === e ? void 0 : e.Name), m("img", {
						src: null === e || void 0 === e || null === (a = e.Image) || void 0 === a ? void 0 : a.URL,
						className: "fit-image"
					})))))
				})))
			}
		},
		z4UT: function (e, t, a) {
			e.exports = {
				sqrBtn: "SquareButton_sqrBtn__YjNBb",
				right: "SquareButton_right__3HJOu",
				left: "SquareButton_left__d-BDU"
			}
		}
	},
	[
		["THoP", 1, 2, 3, 5, 0, 4, 6, 7, 8]
	]
]);