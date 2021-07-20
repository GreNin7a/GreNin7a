(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[18], {
		"Bl+U": function (t, e, o) {
			"use strict";
			o.d(e, "a", (function () {
				return O
			}));
			var n = o("rePB"),
				r = o("q1tI"),
				i = o.n(r),
				a = o("bSuW"),
				s = o.n(a),
				l = o("OBjl"),
				c = o("2v50"),
				p = o("ODXe"),
				u = o("qMIl"),
				d = o.n(u),
				h = o("YFqc"),
				m = o.n(h),
				f = o("bhxT"),
				g = o("nOHt"),
				v = o("jobX"),
				_ = o("TxL0"),
				y = o("wyBh"),
				b = i.a.createElement;

			function C(t) {
				var e, o, r, i, a = t.slug,
					s = t.picture,
					l = t.title,
					u = t.address,
					h = t.areaSlug,
					C = t.citySlug,
					w = t.vacant,
					L = t.capacity,
					S = t.lat,
					O = t.lng,
					j = t.priceHigher,
					x = t.priceLower,
					k = t.usesAvailability,
					T = t.currency,
					P = t.pricePeriod,
					N = void 0 === P ? "month" : P,
					E = Object(v.a)(_.W),
					U = Object(p.a)(E, 1)[0],
					D = Object(g.useRouter)().query.lang,
					M = Object(c.c)(w, L, k),
					A = x !== j ? null === U || void 0 === U || null === (e = U.data) || void 0 === e || null === (o = e.snippets) || void 0 === o ? void 0 : o.units_listing_price_line : null === U || void 0 === U || null === (r = U.data) || void 0 === r || null === (i = r.snippets) || void 0 === i ? void 0 : i.units_listing_price_line_singular,
					I = Object(c.b)(A, x, j, N.toLowerCase(), T);
				return b("div", {
					className: "".concat(d.a.container)
				}, b("img", {
					src: s
				}), b(m.a, {
					href: y.b.BUILDING(D, C, h, a)
				}, b("a", {
					className: d.a.unitCardLink,
					onClick: function () {
						var t;
						return f.a.track({
							eventName: f.t.buildingName,
							props: (t = {}, Object(n.a)(t, f.t.props.Property, l), Object(n.a)(t, f.t.props.Slug, a), Object(n.a)(t, f.t.props.Lat, S), Object(n.a)(t, f.t.props.Long, O), t)
						})
					}
				}, b("div", {
					className: "".concat(d.a.body)
				}, b("p", {
					className: "".concat(d.a.available, " m-0 p-0")
				}, M), b("p", {
					className: "".concat(d.a.title, " m-0 p-0")
				}, l), b("p", {
					className: "".concat(d.a.address, "  m-0 p-0")
				}, u), b("div", {
					className: "".concat(d.a.break)
				}), b("p", {
					className: "".concat(d.a.price, "  m-0 p-0")
				}, I)))))
			}
			var w = i.a.createElement;

			function L(t, e) {
				var o = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(t);
					e && (n = n.filter((function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable
					}))), o.push.apply(o, n)
				}
				return o
			}

			function S(t) {
				for (var e = 1; e < arguments.length; e++) {
					var o = null != arguments[e] ? arguments[e] : {};
					e % 2 ? L(Object(o), !0).forEach((function (e) {
						Object(n.a)(t, e, o[e])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach((function (e) {
						Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
					}))
				}
				return t
			}

			function O(t) {
				var e, o, i, a, p, u, d = t.buildings,
					h = t.lat,
					m = t.lng,
					g = t.className,
					v = t.highlight,
					_ = t.flyTo,
					y = t.markerClickable,
					b = t.language,
					L = t.city,
					O = Object(r.useState)({
						latitude: h,
						longitude: m,
						zoom: 14
					}),
					j = O[0],
					x = O[1],
					k = Object(r.useState)(),
					T = k[0],
					P = k[1],
					N = Object(r.useRef)();
				return Object(r.useEffect)((function () {
					return (null === _ || void 0 === _ ? void 0 : _[0]) && (N.current = setTimeout((function () {
							x(S(S({}, j), {}, {
								latitude: _[0],
								longitude: _[1]
							})), P(null)
						}), 1e3)),
						function () {
							return clearTimeout(N.current)
						}
				}), [_]), w(l.f, {
					mapStyle: "mapbox://styles/boonhmlet/cjhbor55o04zm2rnnecjaw70h",
					accessToken: "pk.eyJ1IjoiYm9vbmhtbGV0IiwiYSI6ImNqZ2Z5cjE0NTAyZTMyeHFndGRpbGE5aDUifQ.XuHc6aj_L5IXHMZJDQim7Q",
					latitude: j.latitude,
					longitude: j.longitude,
					zoom: j.zoom,
					onViewportChange: x,
					className: g || s.a.map,
					scrollZoom: !1,
					viewportChangeMethod: "flyTo"
				}, w(l.a, {
					language: b,
					defaultLanguage: "en"
				}), w(l.d, {
					showCompass: !0,
					showZoom: !0,
					position: "top-right"
				}), w(l.b.Consumer, null, (function (t) {
					var e, o;
					null === (e = t.getStyle()) || void 0 === e || null === (o = e.layers) || void 0 === o || o.map((function (e) {
						var o;
						(null === e || void 0 === e || null === (o = e.id) || void 0 === o ? void 0 : o.indexOf("-label")) > 0 && t.setLayoutProperty(e.id, "text-field", ["get", "name_" + b])
					}))
				})), d.map((function (t) {
					var e;
					return e = v === (null === t || void 0 === t ? void 0 : t.Slug) ? Object(c.a)({
						version: "v1598519065",
						name: "map-pin-active.svg"
					}) : Object(c.d)(t.Vacant, t.Capacity) ? Object(c.a)({
						version: "v1598519138",
						name: "map-pin-booked.svg"
					}) : Object(c.a)({
						version: "v1598518975",
						name: "map-pin-available.svg"
					}), w(l.c, {
						key: t.Slug,
						longitude: t.LNG,
						latitude: t.LAT,
						className: s.a.marker
					}, w("img", {
						className: s.a.pin,
						src: e,
						onClick: function () {
							var e;
							y && P(t), y && x(S(S({}, j), {}, {
								latitude: t.LAT,
								longitude: t.LNG
							})), y && f.a.track({
								eventName: f.t.pinName,
								props: (e = {}, Object(n.a)(e, f.t.props.Property, null === t || void 0 === t ? void 0 : t.FullTitle), Object(n.a)(e, f.t.props.Slug, null === t || void 0 === t ? void 0 : t.Slug), Object(n.a)(e, f.t.props.Lat, t.LAT), Object(n.a)(e, f.t.props.Long, t.LNG), e)
							})
						}
					}))
				})), T && w(l.c, {
					key: T.Slug,
					longitude: T.LNG,
					latitude: T.LAT
				}, w("img", {
					className: s.a.pin,
					src: Object(c.a)({
						version: "v1598519065",
						name: "map-pin-active.svg"
					})
				}), w(l.e, {
					longitude: T.LNG,
					latitude: T.LAT,
					anchor: "top",
					onClose: function () {
						return P(null)
					},
					className: s.a.popup
				}, w(C, {
					key: null === T || void 0 === T ? void 0 : T.Slug,
					slug: null === T || void 0 === T ? void 0 : T.Slug,
					title: null === T || void 0 === T ? void 0 : T.FullTitle,
					address: null === T || void 0 === T ? void 0 : T.Address,
					areaName: null === T || void 0 === T || null === (e = T.Area) || void 0 === e ? void 0 : e.Name,
					areaSlug: null === T || void 0 === T ? void 0 : T.AreaSlug,
					citySlug: null === T || void 0 === T ? void 0 : T.CitySlug,
					picture: null === T || void 0 === T || null === (o = T.Pictures) || void 0 === o || null === (i = o.Building) || void 0 === i ? void 0 : i[0],
					capacity: null !== (a = T.Capacity) && void 0 !== a ? a : 0,
					vacant: null !== (p = T.Vacant) && void 0 !== p ? p : 0,
					priceHigher: null === T || void 0 === T ? void 0 : T.PriceHigher,
					priceLower: null === T || void 0 === T ? void 0 : T.PriceLower,
					usesAvailability: null === L || void 0 === L ? void 0 : L.UsesAvailability,
					currency: null === L || void 0 === L || null === (u = L.Country) || void 0 === u ? void 0 : u.Currency,
					pricePeriod: null === T || void 0 === T ? void 0 : T.PricePeriod,
					lat: null === T || void 0 === T ? void 0 : T.LAT,
					lng: null === T || void 0 === T ? void 0 : T.LNG,
					onClose: function () {
						return P(null)
					}
				}))))
			}
		},
		Itla: function (t, e, o) {
			t.exports = {
				tag: "Tag_tag__1e831",
				blue: "Tag_blue__2Nif9",
				green: "Tag_green__9S6W2",
				bgwhite: "Tag_bgwhite__2bXfd",
				bggrey: "Tag_bggrey__3neP5"
			}
		},
		MTRj: function (t, e, o) {
			"use strict";
			var n = o("q1tI"),
				r = o.n(n),
				i = o("Itla"),
				a = o.n(i),
				s = r.a.createElement;
			e.a = function (t) {
				var e = t.className,
					o = t.children,
					n = t.color,
					r = void 0 === n ? "blue" : n,
					i = t.bgColor,
					l = void 0 === i ? "white" : i;
				return s("div", {
					className: "".concat(a.a.tag, " ").concat(a.a[r], " ").concat(a.a["bg" + l], " ").concat(e)
				}, o)
			}
		},
		OBjl: function (t, e, o) {
			"use strict";
			(function (t) {
				o.d(e, "a", (function () {
					return I
				})), o.d(e, "b", (function () {
					return d
				})), o.d(e, "c", (function () {
					return k
				})), o.d(e, "d", (function () {
					return U
				})), o.d(e, "e", (function () {
					return x
				}));
				var n = o("q1tI"),
					r = o("i8i4");

				function i(t, e, o) {
					return e in t ? Object.defineProperty(t, e, {
						value: o,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : t[e] = o, t
				}

				function a() {
					return (a = Object.assign || function (t) {
						for (var e = 1; e < arguments.length; e++) {
							var o = arguments[e];
							for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
						}
						return t
					}).apply(this, arguments)
				}

				function s(t, e) {
					t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
				}

				function l(t, e) {
					if (null == t) return {};
					var o, n, r = {},
						i = Object.keys(t);
					for (n = 0; n < i.length; n++) o = i[n], e.indexOf(o) >= 0 || (r[o] = t[o]);
					return r
				}

				function c(t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}

				function p(t) {
					return function (t) {
						if (Array.isArray(t)) return u(t)
					}(t) || function (t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
					}(t) || function (t, e) {
						if (t) {
							if ("string" == typeof t) return u(t, e);
							var o = Object.prototype.toString.call(t).slice(8, -1);
							return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? u(t, e) : void 0
						}
					}(t) || function () {
						throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function u(t, e) {
					(null == e || e > t.length) && (e = t.length);
					for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
					return n
				}
				var d = Object(n.createContext)(null),
					h = "[object process]" !== Object.prototype.toString.call(t.process) || t.process.browser ? o("4ZJM") : null,
					m = ["resize", "remove", "mousedown", "mouseup", "mouseover", "mousemove", "click", "dblclick", "mouseenter", "mouseleave", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove", "touchcancel", "movestart", "move", "moveend", "dragstart", "drag", "dragend", "zoomstart", "zoom", "zoomend", "rotatestart", "rotate", "rotateend", "pitchstart", "pitch", "pitchend", "boxzoomstart", "boxzoomend", "boxzoomcancel", "webglcontextlost", "webglcontextrestored", "load", "error", "data", "styledata", "sourcedata", "dataloading", "styledataloading", "sourcedataloading"],
					f = function (t, e) {
						void 0 === t && (t = {}), void 0 === e && (e = {});
						var o = new Set([].concat(p(Object.keys(t)), p(Object.keys(e))));
						return p(o).reduce((function (o, n) {
							var r = t[n];
							return r !== e[n] && o.push([n, r]), o
						}), [])
					},
					g = function (t, e, o, n) {
						var r = {
							layers: [e]
						};
						if (n) {
							var i = [
								[o[0] - n, o[1] - n],
								[o[0] + n, o[1] + n]
							];
							return t.queryRenderedFeatures(i, r)
						}
						return t.queryRenderedFeatures(o, r)
					},
					v = [
						["onClick", "click"],
						["onHover", "mousemove"],
						["onEnter", "mouseenter"],
						["onLeave", "mouseleave"]
					],
					_ = function (t) {
						function e(e) {
							var o;
							return i(c(o = t.call(this, e) || this), "$key", void 0), i(c(o), "$value", void 0), i(c(o), "_id", void 0), i(c(o), "_map", void 0), i(c(o), "_onClick", void 0), i(c(o), "_onHover", void 0), i(c(o), "_onEnter", void 0), i(c(o), "_onLeave", void 0), i(c(o), "_addLayer", (function (t) {
								var e = o._map,
									n = t.before,
									r = (t.radius, t.onClick, t.onHover, t.onEnter, t.onLeave, l(t, ["before", "radius", "onClick", "onHover", "onEnter", "onLeave"]));
								n && e.getLayer(n) ? e.addLayer(r, n) : e.addLayer(r), o._addEventListeners(t)
							})), i(c(o), "_addEventListeners", (function (t) {
								v.forEach((function (e) {
									var n = e[0],
										r = e[1],
										i = "_" + n;
									t[n] && o._map.on(r, o._id, o[i])
								}))
							})), i(c(o), "_updateEventListeners", (function (t, e) {
								v.forEach((function (n) {
									var r = n[0],
										i = n[1],
										a = "_" + r;
									!e[r] && t[r] && o._map.off(i, o._id, o[a]), e[r] && !t[r] && o._map.on(i, o._id, o[a])
								}))
							})), i(c(o), "_removeEventListeners", (function (t) {
								v.forEach((function (e) {
									var n = e[0],
										r = e[1],
										i = "_" + n;
									t[n] && o._map.off(r, o._id, o[i])
								}))
							})), i(c(o), "_onClick", (function (t) {
								var e = [t.point.x, t.point.y],
									n = g(o._map, o._id, e, o.props.radius);
								o.props.onClick(a({}, t, {
									features: n
								}))
							})), i(c(o), "_onHover", (function (t) {
								var e = [t.point.x, t.point.y],
									n = g(o._map, o._id, e, o.props.radius);
								o.props.onHover(a({}, t, {
									features: n
								}))
							})), i(c(o), "_onEnter", (function (t) {
								var e = [t.point.x, t.point.y],
									n = g(o._map, o._id, e, o.props.radius);
								o.props.onEnter(a({}, t, {
									features: n
								}))
							})), i(c(o), "_onLeave", (function (t) {
								var e = [t.point.x, t.point.y],
									n = g(o._map, o._id, e, o.props.radius);
								o.props.onLeave(a({}, t, {
									features: n
								}))
							})), o._id = e.id, o
						}
						s(e, t);
						var o = e.prototype;
						return o.componentDidMount = function () {
							this._addLayer(this.props)
						}, o.componentDidUpdate = function (t) {
							var e = this,
								o = this._map,
								n = this.props,
								r = n.id,
								i = n.before,
								a = (n.onClick, l(n, ["id", "before", "onClick"]));
							if (r !== t.id || this.props.type !== t.type || "background" !== t.type && (this.props.source !== t.source || this.props["source-layer"] !== t["source-layer"])) return this._id = r, this._map.removeLayer(t.id), void this._addLayer(this.props);
							i !== t.before && i && o.getLayer(i) && o.moveLayer(this._id, i), a.paint !== t.paint && f(a.paint, t.paint).forEach((function (t) {
								var n = t[0],
									r = t[1];
								o.setPaintProperty(e._id, n, r)
							})), a.layout !== t.layout && f(a.layout, t.layout).forEach((function (t) {
								var n = t[0],
									r = t[1];
								o.setLayoutProperty(e._id, n, r)
							})), a.filter !== t.filter && (a.filter ? o.setFilter(this._id, a.filter) : o.setFilter(this._id, void 0)), this._updateEventListeners(t, this.props)
						}, o.componentWillUnmount = function () {
							this._map && this._map.getStyle() && (this._removeEventListeners(this.props), this._map.getLayer(this._id) && this._map.removeLayer(this._id))
						}, o.render = function () {
							var t = this;
							return Object(n.createElement)(d.Consumer, {}, (function (e) {
								return e && (t._map = e), null
							}))
						}, e
					}(n.PureComponent);
				i(_, "displayName", "Layer"), i(_, "defaultProps", {
					radius: 0
				});
				var y = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_id", void 0), i(c(e), "_map", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this.props,
							e = t.layer,
							o = t.before;
						o && this._map.getLayer(o) ? this._map.addLayer(e, o) : this._map.addLayer(e), this._id = e.id
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.getLayer(this._id) && this._map.removeLayer(this._id)
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(y, "displayName", "CustomLayer");
				var b = [_, y],
					C = function (t) {
						return b.includes(t.type)
					},
					w = function (t) {
						var e = [];
						return function t(e, o) {
							n.Children.forEach(o, (function (o) {
								o && (C(o) && e(o), o.props && o.props.children && t(e, o.props.children))
							}))
						}((function (t) {
							t.props.before || e.push(function (t) {
								return t.props.id || t.props.layer.id
							}(t))
						}), t), e
					},
					L = function (t) {
						function e(e) {
							var o;
							return i(c(o = t.call(this, e) || this), "_map", void 0), i(c(o), "_container", void 0), i(c(o), "state", {
								loaded: !1
							}), i(c(o), "_onViewportChange", (function (t) {
								if (t.originalEvent) {
									var e = o._map,
										n = e.getCenter(),
										r = n.lng,
										i = {
											latitude: n.lat,
											longitude: r,
											zoom: e.getZoom(),
											pitch: e.getPitch(),
											bearing: e.getBearing()
										};
									o.props.onViewportChange(i)
								}
							})), h && (h.accessToken = e.accessToken), o._container = Object(n.createRef)(), o
						}
						s(e, t);
						var o = e.prototype;
						return o.componentDidMount = function () {
							var t = this;
							if (h) {
								var e = this._container.current,
									o = new h.Map({
										container: e,
										style: this.props.mapStyle,
										interactive: !!this.props.onViewportChange,
										center: [this.props.longitude, this.props.latitude],
										zoom: this.props.zoom,
										pitch: this.props.pitch,
										bearing: this.props.bearing,
										minZoom: this.props.minZoom,
										maxZoom: this.props.maxZoom,
										hash: this.props.hash,
										bearingSnap: this.props.bearingSnap,
										pitchWithRotate: this.props.pitchWithRotate,
										attributionControl: this.props.attributionControl,
										logoPosition: this.props.logoPosition,
										failIfMajorPerformanceCaveat: this.props.failIfMajorPerformanceCaveat,
										preserveDrawingBuffer: this.props.preserveDrawingBuffer,
										antialias: this.props.antialias,
										refreshExpiredTiles: this.props.refreshExpiredTiles,
										maxBounds: this.props.maxBounds,
										bounds: this.props.bounds,
										scrollZoom: this.props.scrollZoom,
										boxZoom: this.props.boxZoom,
										dragRotate: this.props.dragRotate,
										dragPan: this.props.dragPan,
										keyboard: this.props.keyboard,
										doubleClickZoom: this.props.doubleClickZoom,
										trackResize: this.props.trackResize,
										renderWorldCopies: this.props.renderWorldCopies,
										maxTileCacheSize: this.props.maxTileCacheSize,
										localIdeographFontFamily: this.props.localIdeographFontFamily,
										transformRequest: this.props.transformRequest,
										collectResourceTiming: this.props.collectResourceTiming,
										fadeDuration: this.props.fadeDuration,
										crossSourceCollisions: this.props.crossSourceCollisions,
										locale: this.props.locale
									});
								this._map = o, o.once("load", (function () {
									t.setState({
										loaded: !0
									}, t.props.onLoad)
								})), this.props.onViewportChange && (o.on("dragend", this._onViewportChange), o.on("zoomend", this._onViewportChange), o.on("rotateend", this._onViewportChange), o.on("pitchend", this._onViewportChange), o.on("boxzoomend", this._onViewportChange)), m.forEach((function (e) {
									var n = "on" + function (t) {
											return t.charAt(0).toUpperCase() + t.slice(1)
										}(e),
										r = t.props[n];
									r && (Array.isArray(r) ? o.on.apply(o, [e].concat(p(r))) : o.on(e, r))
								})), this.props.cursorStyle && (o.getCanvas().style.cursor = this.props.cursorStyle), this.props.showTileBoundaries && (this._map.showTileBoundaries = this.props.showTileBoundaries)
							}
						}, o.componentDidUpdate = function (t) {
							this._updateMapViewport(t, this.props), this._updateMapStyle(t, this.props), this._updateMapSize(t, this.props), !t.cursorStyle !== this.props.cursorStyle && (this._map.getCanvas().style.cursor = this.props.cursorStyle), t.showTileBoundaries !== this.props.showTileBoundaries && (this._map.showTileBoundaries = !!this.props.showTileBoundaries)
						}, o.componentWillUnmount = function () {
							this._map && this._map.remove()
						}, o.getMap = function () {
							return this._map
						}, o._updateMapStyle = function (t, e) {
							var o = this,
								n = e.mapStyle,
								r = t.mapStyle;
							n !== r && this.setState({
								loaded: !1
							}, (function () {
								o._map.setStyle(n), o._map.once("style.load", (function () {
									return o.setState({
										loaded: !0
									})
								}))
							}))
						}, o._updateMapViewport = function (t, e) {
							var o = this._map,
								n = o.getCenter();
							if (e.latitude !== t.latitude && e.latitude !== n.lat || e.longitude !== t.longitude && e.longitude !== n.lng || e.zoom !== t.zoom && e.zoom !== o.getZoom() || e.pitch !== t.pitch && e.pitch !== o.getPitch() || e.bearing !== t.bearing && e.bearing !== o.getBearing()) {
								var r = {
										center: [e.longitude, e.latitude],
										zoom: e.zoom,
										pitch: e.pitch,
										bearing: e.bearing
									},
									i = this.props,
									s = i.viewportChangeMethod,
									l = a({}, i.viewportChangeOptions, r);
								switch (s) {
									case "flyTo":
										o.flyTo(l);
										break;
									case "jumpTo":
										o.jumpTo(l);
										break;
									case "easeTo":
										o.easeTo(l);
										break;
									default:
										throw new Error("Unknown viewport change method")
								}
							}
						}, o._updateMapSize = function (t, e) {
							((t.style && t.style.height) !== (e.style && e.style.height) || (t.style && t.style.width) !== (e.style && e.style.width)) && this._map.resize()
						}, o.render = function () {
							var t = this.state.loaded,
								e = this.props,
								o = e.className,
								r = e.style,
								i = this.props.children ? function (t) {
									var e = w(t);
									return e.shift(),
										function t(o) {
											return "function" == typeof o ? o : n.Children.map(o, (function (o) {
												if (!o) return o;
												if (C(o)) {
													var r = o.props.before || e.shift();
													return Object(n.cloneElement)(o, {
														before: r
													})
												}
												return o.props && o.props.children ? Object(n.cloneElement)(o, {
													children: t(o.props.children)
												}) : o
											}))
										}(t)
								}(this.props.children) : null;
							return Object(n.createElement)(d.Provider, {
								value: this._map
							}, Object(n.createElement)("div", {
								ref: this._container,
								style: r,
								className: o
							}, t && i))
						}, e
					}(n.PureComponent);
				i(L, "displayName", "MapGL"), i(L, "defaultProps", {
					children: null,
					className: null,
					style: null,
					mapStyle: "mapbox://styles/mapbox/light-v8",
					accessToken: null,
					bearing: 0,
					pitch: 0,
					minZoom: 0,
					maxZoom: 22,
					maxBounds: null,
					bounds: null,
					hash: !1,
					bearingSnap: 7,
					pitchWithRotate: !0,
					attributionControl: !0,
					logoPosition: "bottom-left",
					failIfMajorPerformanceCaveat: !1,
					preserveDrawingBuffer: !1,
					antialias: !1,
					refreshExpiredTiles: !0,
					boxZoom: !0,
					scrollZoom: !0,
					dragRotate: !0,
					dragPan: !0,
					keyboard: !0,
					doubleClickZoom: !0,
					trackResize: !0,
					renderWorldCopies: !0,
					maxTileCacheSize: null,
					onViewportChange: null,
					onLoad: null,
					localIdeographFontFamily: null,
					transformRequest: null,
					collectResourceTiming: !1,
					fadeDuration: 300,
					crossSourceCollisions: !0,
					locale: null,
					cursorStyle: null,
					viewportChangeMethod: "jumpTo",
					viewportChangeOptions: null
				});
				var S = function (t, e) {
						if (void 0 === t && (t = []), void 0 === e && (e = []), t.length !== e.length) return !1;
						for (var o = 0; o < t.length; o += 1)
							if (t[o] !== e[o]) return !1;
						return !0
					},
					O = function (t) {
						switch (t.type) {
							case "vector":
								return a({
									type: "vector"
								}, t);
							case "raster":
								return a({
									type: "raster"
								}, t);
							case "raster-dem":
								return a({
									type: "raster-dem"
								}, t);
							case "geojson":
								return a({
									type: "geojson"
								}, t);
							case "video":
								return a({
									type: "video"
								}, t);
							case "image":
								return a({
									type: "image"
								}, t);
							default:
								throw new Error("Unknown type for '" + t.id + "' Source")
						}
					},
					j = function (t) {
						function e() {
							for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
							return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "state", {
								loaded: !1
							}), i(c(e), "_onSourceData", (function () {
								e._map.isSourceLoaded(e.props.id) && (e._map.off("sourcedata", e._onSourceData), e.setState({
									loaded: !0
								}))
							})), i(c(e), "_updateGeoJSONSource", (function (t, o, n) {
								if (n.data !== o.data) {
									var r = e._map.getSource(t);
									void 0 !== r && r.setData(n.data)
								}
							})), i(c(e), "_updateImageSource", (function (t, o, n) {
								if (n.url !== o.url || n.coordinates !== o.coordinates) {
									var r = e._map.getSource(t);
									void 0 !== r && r.updateImage(n)
								}
							})), i(c(e), "_updateTileSource", (function (t, o, n) {
								if (n.url !== o.url || !S(n.tiles, o.tiles)) {
									var r = e._map.getSource(t);
									r._tileJSONRequest && r._tileJSONRequest.cancel(), r.url = n.url, r.scheme = n.scheme, r._options = a({}, r._options, n);
									var i = e._map.style.sourceCaches[t];
									i && i.clearTiles(), r.load()
								}
							})), i(c(e), "_removeSource", (function () {
								var t = e.props.id;
								if (e._map.getSource(t)) {
									var o = e._map.getStyle().layers;
									o && o.forEach((function (o) {
										o.source === t && e._map.removeLayer(o.id)
									})), e._map.removeSource(t)
								}
							})), e
						}
						s(e, t);
						var o = e.prototype;
						return o.componentDidMount = function () {
							var t = this.props,
								e = t.id,
								o = (t.children, l(t, ["id", "children"])),
								n = O(o);
							this._map.addSource(e, n), this._map.on("sourcedata", this._onSourceData)
						}, o.componentDidUpdate = function (t) {
							var e = t.id,
								o = (t.children, l(t, ["id", "children"])),
								n = O(o),
								r = this.props,
								i = r.id,
								a = (r.children, l(r, ["id", "children"])),
								s = O(a);
							if (i !== e || s.type !== n.type) return this._map.removeSource(e), void this._map.addSource(i, s);
							"geojson" !== s.type || "geojson" !== n.type ? "image" !== s.type || "image" !== n.type ? "vector" !== s.type || "vector" !== n.type ? "raster" === s.type && "raster" === n.type && this._updateTileSource(i, n, s) : this._updateTileSource(i, n, s) : this._updateImageSource(i, n, s) : this._updateGeoJSONSource(i, n, s)
						}, o.componentWillUnmount = function () {
							this._map && this._map.getStyle() && this._removeSource()
						}, o.render = function () {
							var t = this,
								e = this.state.loaded,
								o = this.props.children;
							return Object(n.createElement)(d.Consumer, {}, (function (n) {
								return n && (t._map = n), e && o
							}))
						}, e
					}(n.PureComponent);
				i(j, "displayName", "Source");
				var x = function (t) {
					function e(e) {
						var o;
						return i(c(o = t.call(this, e) || this), "_map", void 0), i(c(o), "_el", void 0), i(c(o), "_popup", void 0), o._el = document.createElement("div"), o
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this.props,
							e = t.longitude,
							o = t.latitude,
							n = t.offset,
							r = t.closeButton,
							i = t.closeOnClick,
							a = t.onClose,
							s = t.anchor,
							l = t.className,
							c = t.maxWidth;
						this._popup = new h.Popup({
							offset: n,
							closeButton: r,
							closeOnClick: i,
							anchor: s,
							className: l,
							maxWidth: c
						}), this._popup.setDOMContent(this._el), this._popup.setLngLat([e, o]).addTo(this._map), a && this._popup.on("close", a)
					}, o.componentDidUpdate = function (t) {
						(t.latitude !== this.props.latitude || t.longitude !== this.props.longitude) && this._popup.setLngLat([this.props.longitude, this.props.latitude])
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._popup.remove()
					}, o.getPopup = function () {
						return this._popup
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), Object(r.createPortal)(t.props.children, t._el)
						}))
					}, e
				}(n.PureComponent);
				i(x, "displayName", "Popup"), i(x, "defaultProps", {
					closeButton: !0,
					closeOnClick: !0,
					onClose: null,
					anchor: null,
					offset: null,
					className: null,
					maxWidth: "240px"
				});
				var k = function (t) {
					function e(e) {
						var o;
						return i(c(o = t.call(this, e) || this), "_map", void 0), i(c(o), "_el", void 0), i(c(o), "_marker", void 0), i(c(o), "_onDragEnd", (function () {
							o.props.onDragEnd(o._marker.getLngLat())
						})), i(c(o), "_onDragStart", (function () {
							o.props.onDragStart(o._marker.getLngLat())
						})), i(c(o), "_onDrag", (function () {
							o.props.onDrag(o._marker.getLngLat())
						})), o._el = document.createElement("div"), o
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this.props,
							e = t.longitude,
							o = t.latitude,
							n = t.onClick,
							r = t.onDragEnd,
							i = t.onDragStart,
							a = t.onDrag;
						this._marker = new h.Marker({
							element: this._el,
							anchor: this.props.anchor,
							draggable: this.props.draggable,
							offset: this.props.offset,
							rotation: this.props.rotation,
							pitchAlignment: this.props.pitchAlignment,
							rotationAlignment: this.props.rotationAlignment
						}), this._marker.setLngLat([e, o]).addTo(this._map), n && this._el.addEventListener("click", n), r && this._marker.on("dragend", this._onDragEnd), i && this._marker.on("dragstart", this._onDragStart), a && this._marker.on("drag", this._onDrag)
					}, o.componentDidUpdate = function (t) {
						(t.latitude !== this.props.latitude || t.longitude !== this.props.longitude) && this._marker.setLngLat([this.props.longitude, this.props.latitude])
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && (this.props.onClick && this._el.removeEventListener("click", this.props.onClick), this._marker.remove())
					}, o.getMarker = function () {
						return this._marker
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), Object(r.createPortal)(t.props.children, t._el)
						}))
					}, e
				}(n.PureComponent);
				i(k, "displayName", "Marker"), i(k, "defaultProps", {
					anchor: "center",
					offset: null,
					draggable: !1,
					rotation: 0,
					pitchAlignment: "auto",
					rotationAlignment: "auto"
				});
				! function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					o.componentDidMount = function () {
						var t = this._map,
							e = this.props,
							o = e.id,
							n = e.source,
							r = e.sourceLayer,
							i = e.state;
						t.setFeatureState({
							id: o,
							source: n,
							sourceLayer: r
						}, i)
					}, o.componentDidUpdate = function (t) {
						var e = this._map,
							o = this.props,
							n = o.id,
							r = o.source,
							i = o.sourceLayer,
							a = o.state;
						n === t.id && r === t.source && i === t.sourceLayer && a === t.state || (e.removeFeatureState({
							id: t.id,
							source: t.source,
							sourceLayer: t.sourceLayer
						}), e.setFeatureState({
							id: n,
							source: r,
							sourceLayer: i
						}, a))
					}, o.componentWillUnmount = function () {
						if (this._map && this._map.getStyle()) {
							var t = this.props,
								e = t.id,
								o = t.source,
								n = t.sourceLayer;
							this._map.removeFeatureState({
								id: e,
								source: o,
								sourceLayer: n
							})
						}
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}
				}(n.PureComponent);
				var T = function (t) {
					function e(e) {
						var o;
						return i(c(o = t.call(this, e) || this), "_map", void 0), i(c(o), "_id", void 0), i(c(o), "_loadImage", (function (t, e) {
							"string" != typeof t ? e(t) : o._map.loadImage(t, (function (t, o) {
								if (t) throw t;
								e(o)
							}))
						})), o._id = e.id, o
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this,
							e = this.props,
							o = e.image,
							n = e.pixelRatio,
							r = e.sdf;
						this._loadImage(o, (function (e) {
							return t._map.addImage(t._id, e, {
								pixelRatio: n,
								sdf: r
							})
						}))
					}, o.componentDidUpdate = function (t) {
						var e = this,
							o = this.props,
							n = o.id,
							r = o.image,
							i = o.pixelRatio,
							a = o.sdf;
						if (n !== t.id || a !== t.sdf || i !== t.pixelRatio) return this._id = n, this._map.removeImage(t.id), void this._loadImage(r, (function (t) {
							return e._map.addImage(e._id, t, {
								pixelRatio: i,
								sdf: a
							})
						}));
						r !== t.image && this._loadImage(r, (function (t) {
							return e._map.updateImage(e._id, t)
						}))
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.hasImage(this._id) && this._map.removeImage(this._id)
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(T, "defaultProps", {
					pixelRatio: 1,
					sdf: !1
				});
				var P = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this._map,
							e = this.props,
							o = e.compact,
							n = e.customAttribution,
							r = e.position,
							i = new h.AttributionControl({
								compact: o,
								customAttribution: n
							});
						t.addControl(i, r), this._control = i
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.removeControl(this._control)
					}, o.getControl = function () {
						return this._control
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(P, "defaultProps", {
					position: "bottom-right"
				});
				var N = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this._map,
							e = this.props,
							o = e.container,
							n = e.position,
							r = new h.FullscreenControl({
								container: o
							});
						t.addControl(r, n), this._control = r
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.removeControl(this._control)
					}, o.getControl = function () {
						return this._control
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(N, "defaultProps", {
					position: "top-right"
				});
				var E = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this._map,
							e = this.props,
							o = e.positionOptions,
							n = e.fitBoundsOptions,
							r = e.trackUserLocation,
							i = e.showUserLocation,
							a = e.position,
							s = e.onTrackUserLocationEnd,
							l = e.onTrackUserLocationStart,
							c = e.onError,
							p = e.onGeolocate,
							u = new h.GeolocateControl({
								positionOptions: o,
								fitBoundsOptions: n,
								trackUserLocation: r,
								showUserLocation: i
							});
						s && u.on("trackuserlocationend", s), l && u.on("trackuserlocationstart", l), c && u.on("error", c), p && u.on("geolocate", p), t.addControl(u, a), this._control = u
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.removeControl(this._control)
					}, o.getControl = function () {
						return this._control
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(E, "defaultProps", {
					positionOptions: {
						enableHighAccuracy: !1,
						timeout: 6e3
					},
					fitBoundsOptions: {
						maxZoom: 15
					},
					trackUserLocation: !1,
					showUserLocation: !0
				});
				var U = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this._map,
							e = this.props,
							o = e.showCompass,
							n = e.showZoom,
							r = e.position,
							i = new h.NavigationControl({
								showCompass: o,
								showZoom: n
							});
						t.addControl(i, r), this._control = i
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.removeControl(this._control)
					}, o.getControl = function () {
						return this._control
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(U, "defaultProps", {
					position: "top-right"
				});
				var D = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						var t = this._map,
							e = this.props,
							o = e.maxWidth,
							n = e.unit,
							r = e.position,
							i = new h.ScaleControl({
								maxWidth: o,
								unit: n
							});
						t.addControl(i, r), this._control = i
					}, o.componentWillUnmount = function () {
						this._map && this._map.getStyle() && this._map.removeControl(this._control)
					}, o.getControl = function () {
						return this._control
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);

				function M(t, e) {
					return t(e = {
						exports: {}
					}, e.exports), e.exports
				}
				i(D, "defaultProps", {
					position: "bottom-right",
					unit: "metric"
				});
				var A = M((function (t) {
						function e(t) {
							if (t = Object.assign({}, t), !(this instanceof e)) throw new Error("MapboxLanguage needs to be called with the new keyword");
							this.setLanguage = this.setLanguage.bind(this), this._initialStyleUpdate = this._initialStyleUpdate.bind(this), this._defaultLanguage = t.defaultLanguage, this._isLanguageField = t.languageField || /^\{name/, this._getLanguageField = t.getLanguageField || function (t) {
								return "mul" === t ? "{name}" : "{name_" + t + "}"
							}, this._languageSource = t.languageSource || null, this._languageTransform = t.languageTransform || function (t, e) {
								return "ar" === e ? function (t) {
									var e = t.layers.map((function (t) {
										if (!(t.layout || {})["text-field"]) return t;
										return Object.assign({}, t, {
											layout: Object.assign({}, t.layout, {
												"text-letter-spacing": 0
											})
										})
									}));
									return Object.assign({}, t, {
										layers: e
									})
								}(t) : function (t) {
									var e = t.layers.map((function (t) {
										if (!(t.layout || {})["text-field"]) return t;
										var e = 0;
										return "state_label" === t["source-layer"] && (e = .15), "marine_label" === t["source-layer"] && (/-lg/.test(t.id) && (e = .25), /-md/.test(t.id) && (e = .15), /-sm/.test(t.id) && (e = .1)), "place_label" === t["source-layer"] && (/-suburb/.test(t.id) && (e = .15), /-neighbour/.test(t.id) && (e = .1), /-islet/.test(t.id) && (e = .01)), "airport_label" === t["source-layer"] && (e = .01), "rail_station_label" === t["source-layer"] && (e = .01), "poi_label" === t["source-layer"] && /-scalerank/.test(t.id) && (e = .01), "road_label" === t["source-layer"] && (/-label-/.test(t.id) && (e = .01), /-shields/.test(t.id) && (e = .05)), Object.assign({}, t, {
											layout: Object.assign({}, t.layout, {
												"text-letter-spacing": e
											})
										})
									}));
									return Object.assign({}, t, {
										layers: e
									})
								}(t)
							}, this._excludedLayerIds = t.excludedLayerIds || [], this.supportedLanguages = t.supportedLanguages || ["ar", "en", "es", "fr", "de", "ja", "ko", "mul", "pt", "ru", "zh"]
						}

						function o(t, e, o) {
							if (function (t, e) {
									return "string" == typeof e && t.test(e)
								}(t, e)) return o;
							if (function (t, e) {
									return e.stops && e.stops.filter((function (e) {
										return t.test(e[1])
									})).length > 0
								}(t, e)) {
								var n = e.stops.map((function (e) {
									return t.test(e[1]) ? [e[0], o] : e
								}));
								return Object.assign({}, e, {
									stops: n
								})
							}
							return e
						}
						e.prototype.setLanguage = function (t, e) {
							if (this.supportedLanguages.indexOf(e) < 0) throw new Error("Language " + e + " is not supported");
							var n = this._languageSource || function (t) {
								return Object.keys(t.sources).filter((function (e) {
									var o = t.sources[e];
									return /mapbox-streets-v\d/.test(o.url)
								}))[0]
							}(t);
							if (!n) return t;
							var r = this._getLanguageField(e),
								i = this._isLanguageField,
								a = this._excludedLayerIds,
								s = t.layers.map((function (t) {
									return t.source === n ? function (t, e, n, r) {
										return e.layout && e.layout["text-field"] && -1 === r.indexOf(e.id) ? Object.assign({}, e, {
											layout: Object.assign({}, e.layout, {
												"text-field": o(t, e.layout["text-field"], n)
											})
										}) : e
									}(i, t, r, a) : t
								})),
								l = Object.assign({}, t, {
									layers: s
								});
							return this._languageTransform(l, e)
						}, e.prototype._initialStyleUpdate = function () {
							var t = this._map.getStyle(),
								e = this._defaultLanguage || function (t) {
									var e = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage,
										o = e.split("-"),
										n = e;
									return o.length > 1 && (n = o[0]), t.indexOf(n) > -1 ? n : null
								}(this.supportedLanguages);
							this._map.off("styledata", this._initialStyleUpdate), this._map.setStyle(this.setLanguage(t, e))
						}, e.prototype.onAdd = function (t) {
							return this._map = t, this._map.on("styledata", this._initialStyleUpdate), this._container = document.createElement("div"), this._container
						}, e.prototype.onRemove = function () {
							this._map.off("styledata", this._initialStyleUpdate), this._map = void 0
						}, t.exports = e
					})),
					I = function (t) {
						function e() {
							for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
							return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), i(c(e), "_setLanguage", (function () {
								var t = e.props.language,
									o = e._map,
									n = e._control;
								t && o.setStyle(n.setLanguage(o.getStyle(), t))
							})), e
						}
						s(e, t);
						var o = e.prototype;
						return o.componentDidMount = function () {
							var t = this._map,
								e = this.props,
								o = e.supportedLanguages,
								n = e.languageTransform,
								r = e.languageField,
								i = e.getLanguageField,
								a = e.languageSource,
								s = e.defaultLanguage,
								l = new A({
									supportedLanguages: o,
									languageTransform: n,
									languageField: r,
									getLanguageField: i,
									languageSource: a,
									defaultLanguage: s
								});
							t.addControl(l), this._control = l
						}, o.componentDidUpdate = function (t) {
							t.language !== this.props.language && this._setLanguage()
						}, o.componentWillUnmount = function () {
							this._map && this._map.getStyle() && this._map.removeControl(this._control)
						}, o.getControl = function () {
							return this._control
						}, o.render = function () {
							var t = this;
							return Object(n.createElement)(d.Consumer, {}, (function (e) {
								return e && (t._map = e), null
							}))
						}, e
					}(n.PureComponent);
				i(I, "defaultProps", {});
				var B = M((function (t) {
						var e = [{
							id: "traffic-street-link-bg",
							type: "line",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							source: "mapbox://mapbox.mapbox-traffic-v1",
							"source-layer": "traffic",
							minzoom: 15,
							filter: ["all", ["==", "$type", "LineString"],
								["all", ["has", "congestion"],
									["in", "class", "link", "motorway_link", "service", "street"]
								]
							],
							layout: {
								visibility: "visible",
								"line-join": "round",
								"line-cap": "round"
							},
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[14, 2.5],
										[20, 15.5]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(145, 95%, 30%)"],
										["moderate", "hsl(30, 100%, 42%)"],
										["heavy", "hsl(355, 100%, 37%)"],
										["severe", "hsl(355, 70%, 22%)"]
									]
								},
								"line-offset": {
									base: 1.5,
									stops: [
										[14, 2],
										[20, 18]
									]
								},
								"line-opacity": {
									base: 1,
									stops: [
										[15, 0],
										[16, 1]
									]
								}
							}
						}, {
							id: "traffic-secondary-tertiary-bg",
							type: "line",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							source: "mapbox://mapbox.mapbox-traffic-v1",
							"source-layer": "traffic",
							minzoom: 6,
							filter: ["all", ["==", "$type", "LineString"],
								["all", ["has", "congestion"],
									["in", "class", "secondary", "tertiary"]
								]
							],
							layout: {
								visibility: "visible",
								"line-join": "round",
								"line-cap": "round"
							},
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[9, 1.5],
										[18, 11],
										[20, 16.5]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(145, 95%, 30%)"],
										["moderate", "hsl(30, 100%, 42%)"],
										["heavy", "hsl(355, 100%, 37%)"],
										["severe", "hsl(355, 70%, 22%)"]
									]
								},
								"line-offset": {
									base: 1.5,
									stops: [
										[10, .5],
										[15, 5],
										[18, 11],
										[20, 14.5]
									]
								},
								"line-opacity": {
									base: 1,
									stops: [
										[13, 0],
										[14, 1]
									]
								}
							}
						}, {
							id: "traffic-primary-bg",
							type: "line",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							source: "mapbox://mapbox.mapbox-traffic-v1",
							"source-layer": "traffic",
							minzoom: 6,
							filter: ["all", ["==", "$type", "LineString"],
								["all", ["==", "class", "primary"],
									["has", "congestion"]
								]
							],
							layout: {
								visibility: "visible",
								"line-join": "round",
								"line-cap": "round"
							},
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[10, .75],
										[15, 6],
										[20, 18]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(145, 95%, 30%)"],
										["moderate", "hsl(30, 100%, 42%)"],
										["heavy", "hsl(355, 100%, 37%)"],
										["severe", "hsl(355, 70%, 22%)"]
									]
								},
								"line-offset": {
									base: 1.2,
									stops: [
										[10, 0],
										[12, 1.5],
										[18, 13],
										[20, 16]
									]
								},
								"line-opacity": {
									base: 1,
									stops: [
										[11, 0],
										[12, 1]
									]
								}
							}
						}, {
							id: "traffic-trunk-bg",
							type: "line",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							source: "mapbox://mapbox.mapbox-traffic-v1",
							"source-layer": "traffic",
							minzoom: 6,
							filter: ["all", ["==", "$type", "LineString"],
								["all", ["==", "class", "trunk"],
									["has", "congestion"]
								]
							],
							layout: {
								visibility: "visible",
								"line-join": "round",
								"line-cap": "round"
							},
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[8, .5],
										[9, 2.25],
										[18, 13],
										[20, 17.5]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(145, 95%, 30%)"],
										["moderate", "hsl(30, 100%, 42%)"],
										["heavy", "hsl(355, 100%, 37%)"],
										["severe", "hsl(355, 70%, 22%)"]
									]
								},
								"line-offset": {
									base: 1.5,
									stops: [
										[7, 0],
										[9, 1],
										[18, 13],
										[20, 18]
									]
								},
								"line-opacity": 1
							}
						}, {
							id: "traffic-motorway-bg",
							type: "line",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							source: "mapbox://mapbox.mapbox-traffic-v1",
							"source-layer": "traffic",
							minzoom: 6,
							filter: ["all", ["==", "$type", "LineString"],
								["all", ["==", "class", "motorway"],
									["has", "congestion"]
								]
							],
							layout: {
								visibility: "visible",
								"line-join": "round",
								"line-cap": "round"
							},
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[6, .5],
										[9, 3],
										[18, 16],
										[20, 20]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(145, 95%, 30%)"],
										["moderate", "hsl(30, 100%, 42%)"],
										["heavy", "hsl(355, 100%, 37%)"],
										["severe", "hsl(355, 70%, 22%)"]
									]
								},
								"line-opacity": 1,
								"line-offset": {
									base: 1.5,
									stops: [
										[7, 0],
										[9, 1.2],
										[11, 1.2],
										[18, 10],
										[20, 15.5]
									]
								}
							}
						}, {
							id: "traffic-primary",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							ref: "traffic-primary-bg",
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[10, 1],
										[15, 4],
										[20, 16]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(142, 55%, 50%)"],
										["moderate", "hsl(30, 100%, 55%)"],
										["heavy", "hsl(355, 100%, 50%)"],
										["severe", "hsl(355, 70%, 35%)"]
									]
								},
								"line-offset": {
									base: 1.2,
									stops: [
										[10, 0],
										[12, 1.5],
										[18, 13],
										[20, 16]
									]
								},
								"line-opacity": 1
							}
						}, {
							id: "traffic-secondary-tertiary",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							ref: "traffic-secondary-tertiary-bg",
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[9, .5],
										[18, 9],
										[20, 14]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(142, 55%, 50%)"],
										["moderate", "hsl(30, 100%, 55%)"],
										["heavy", "hsl(355, 100%, 50%)"],
										["severe", "hsl(355, 70%, 35%)"]
									]
								},
								"line-offset": {
									base: 1.5,
									stops: [
										[10, .5],
										[15, 5],
										[18, 11],
										[20, 14.5]
									]
								},
								"line-opacity": 1
							}
						}, {
							id: "traffic-street-link",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							ref: "traffic-street-link-bg",
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[14, 1.5],
										[20, 13.5]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(142, 55%, 50%)"],
										["moderate", "hsl(30, 100%, 55%)"],
										["heavy", "hsl(355, 100%, 50%)"],
										["severe", "hsl(355, 70%, 35%)"]
									]
								},
								"line-offset": {
									base: 1.5,
									stops: [
										[14, 2],
										[20, 18]
									]
								},
								"line-opacity": 1
							}
						}, {
							id: "traffic-trunk",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							ref: "traffic-trunk-bg",
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[8, .75],
										[18, 11],
										[20, 15]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(142, 55%, 50%)"],
										["moderate", "hsl(30, 100%, 55%)"],
										["heavy", "hsl(355, 100%, 50%)"],
										["severe", "hsl(355, 70%, 35%)"]
									]
								},
								"line-offset": {
									base: 1.5,
									stops: [
										[7, 0],
										[9, 1],
										[18, 13],
										[20, 18]
									]
								},
								"line-opacity": 1
							}
						}, {
							id: "traffic-motorway",
							metadata: {
								"mapbox:group": "4053de47c16e55481b10fd748eaa994c"
							},
							ref: "traffic-motorway-bg",
							paint: {
								"line-width": {
									base: 1.5,
									stops: [
										[6, .5],
										[9, 1.5],
										[18, 14],
										[20, 18]
									]
								},
								"line-color": {
									base: 1,
									type: "categorical",
									property: "congestion",
									stops: [
										["low", "hsl(142, 55%, 50%)"],
										["moderate", "hsl(30, 100%, 55%)"],
										["heavy", "hsl(355, 100%, 50%)"],
										["severe", "hsl(355, 70%, 35%)"]
									]
								},
								"line-opacity": 1,
								"line-offset": {
									base: 1.5,
									stops: [
										[7, 0],
										[9, 1.2],
										[11, 1.2],
										[18, 10],
										[20, 15.5]
									]
								}
							}
						}];

						function o(t) {
							if (!(this instanceof o)) throw new Error("MapboxTraffic needs to be called with the new keyword");
							this.options = Object.assign({
								showTraffic: !1,
								showTrafficButton: !0,
								trafficSource: /mapbox-traffic-v\d/
							}, t), this.render = this.render.bind(this), this.toggleTraffic = this.toggleTraffic.bind(this), this._hideTraffic = this._hideTraffic.bind(this), this._showTraffic = this._showTraffic.bind(this), this._hasTraffic = this._hasTraffic.bind(this), this._toggle = new n({
								show: this.options.showTrafficButton,
								onToggle: this.toggleTraffic.bind(this)
							})
						}

						function n(t) {
							var e;
							t = Object.assign({
								show: !0,
								onToggle: function () {}
							}, t), this._btn = ((e = document.createElement("button")).className = "mapboxgl-ctrl-icon mapboxgl-ctrl-traffic", e.type = "button", e["aria-label"] = "Inspect", e), this._btn.onclick = t.onToggle, this.elem = function (t, e) {
								var o = document.createElement("div");
								return o.className = "mapboxgl-ctrl mapboxgl-ctrl-group", o.appendChild(t), e || (o.style.display = "none"), o
							}(this._btn, t.show)
						}
						o.prototype._hasTraffic = function () {
							var t = this._map.getStyle(),
								e = this.options.trafficSource;
							return Object.keys(t.sources).filter((function (t) {
								return e.test(t)
							})).length > 0
						}, o.prototype.toggleTraffic = function () {
							this.options.showTraffic = !this.options.showTraffic, this.render()
						}, o.prototype.render = function () {
							if (!this._hasTraffic()) {
								this._map.addSource("mapbox://mapbox.mapbox-traffic-v1", {
									type: "vector",
									url: "mapbox://mapbox.mapbox-traffic-v1"
								});
								var t = this._map.getStyle().layers.filter((function (t) {
										return "road" === t["source-layer"]
									})),
									o = t[t.length - 1].id,
									n = function (t, e, o) {
										for (var n = 0; n < t.layers.length; n++)
											if (o === t.layers[n].id) {
												var r = t.layers.slice(0, n).concat(e).concat(t.layers.slice(n));
												return Object.assign({}, t, {
													layers: r
												})
											}
										return t
									}(this._map.getStyle(), e, o);
								this._map.setStyle(n)
							}
							this.options.showTraffic ? (this._showTraffic(), this._toggle.setMapIcon()) : (this._hideTraffic(), this._toggle.setTrafficIcon())
						}, o.prototype._hideTraffic = function () {
							var t = this._map.getStyle(),
								e = this.options.trafficSource;
							t.layers.forEach((function (t) {
								e.test(t.source) && (t.layout = t.layout || {}, t.layout.visibility = "none")
							})), this._map.setStyle(t)
						}, o.prototype._showTraffic = function () {
							var t = this._map.getStyle(),
								e = this.options.trafficSource;
							t.layers.forEach((function (t) {
								e.test(t.source) && (t.layout = t.layout || {}, t.layout.visibility = "visible")
							})), this._map.setStyle(t)
						}, o.prototype.onAdd = function (t) {
							return this._map = t, t.on("load", this.render), this._toggle.elem
						}, o.prototype.onRemove = function () {
							this._map.off("load", this.render);
							var t = this._toggle.elem;
							t.parentNode.removeChild(t), this._map = void 0
						}, n.prototype.setTrafficIcon = function () {
							this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-traffic"
						}, n.prototype.setMapIcon = function () {
							this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-map"
						}, t.exports = o
					})),
					z = function (t) {
						function e() {
							for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
							return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), i(c(e), "_control", void 0), i(c(e), "_addControl", (function () {
								var t = e.props,
									o = t.showTraffic,
									n = t.showTrafficButton,
									r = t.trafficSource,
									i = new B({
										showTraffic: o,
										showTrafficButton: n,
										trafficSource: r
									});
								e._map.addControl(i), e._control = i
							})), e
						}
						s(e, t);
						var o = e.prototype;
						return o.componentDidMount = function () {
							this._addControl()
						}, o.componentDidUpdate = function (t) {
							t.showTraffic !== this.props.showTraffic && this._control.toggleTraffic(), (t.showTrafficButton !== this.props.showTrafficButton || t.trafficSource !== this.props.trafficSource) && (this._map.removeControl(this._control), this._addControl())
						}, o.componentWillUnmount = function () {
							this._map && this._map.getStyle() && this._map.removeControl(this._control)
						}, o.getControl = function () {
							return this._control
						}, o.render = function () {
							var t = this;
							return Object(n.createElement)(d.Consumer, {}, (function (e) {
								return e && (t._map = e), null
							}))
						}, e
					}(n.PureComponent);
				i(z, "defaultProps", {
					showTraffic: !1,
					showTrafficButton: !0,
					trafficSource: /mapbox-traffic-v\d/
				});
				var F = function (t) {
					function e() {
						for (var e, o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
						return i(c(e = t.call.apply(t, [this].concat(n)) || this), "_map", void 0), e
					}
					s(e, t);
					var o = e.prototype;
					return o.componentDidMount = function () {
						this._setFilter()
					}, o.componentDidUpdate = function (t) {
						var e = t.filter,
							o = t.validate,
							n = this.props,
							r = n.filter,
							i = n.validate;
						(!S(e, r) || o !== i) && this._setFilter()
					}, o.componentWillUnmount = function () {
						if (this._map && this._map.getStyle()) {
							var t = this.props.layerId;
							void 0 !== this._map.getLayer(t) && this._map.setFilter(t, void 0)
						}
					}, o._setFilter = function () {
						var t = this.props,
							e = t.layerId,
							o = t.filter,
							n = t.validate;
						void 0 !== this._map.getLayer(e) && (Array.isArray(o) ? this._map.setFilter(e, o, {
							validate: n
						}) : this._map.setFilter(e, void 0))
					}, o.render = function () {
						var t = this;
						return Object(n.createElement)(d.Consumer, {}, (function (e) {
							return e && (t._map = e), null
						}))
					}, e
				}(n.PureComponent);
				i(F, "defaultProps", {
					validate: !0
				}), e.f = L
			}).call(this, o("yLpj"))
		},
		YRVN: function (t, e, o) {
			"use strict";
			o.d(e, "a", (function () {
				return b
			}));
			var n = o("rePB"),
				r = o("ODXe"),
				i = o("q1tI"),
				a = o.n(i),
				s = o("kY8+"),
				l = o.n(s),
				c = o("MTRj"),
				p = o("1+QS"),
				u = o("ipDU"),
				d = o("2v50"),
				h = o("YFqc"),
				m = o.n(h),
				f = o("TxL0"),
				g = o("jobX"),
				v = o("bhxT"),
				_ = o("wyBh"),
				y = a.a.createElement;

			function b(t) {
				var e, o, i, a, s, h = t.areaName,
					b = t.title,
					C = t.address,
					w = t.areaSlug,
					L = t.citySlug,
					S = t.className,
					O = t.pictures,
					j = t.slug,
					x = t.capacity,
					k = t.vacant,
					T = t.priceHigher,
					P = t.priceLower,
					N = t.index,
					E = t.mouseOnUnit,
					U = t.isOtherHome,
					D = t.usesAvailability,
					M = t.currency,
					A = t.pricePeriod,
					I = void 0 === A ? "month" : A,
					B = t.LinkOverride,
					z = t.petFriendly,
					F = t.lang,
					W = void 0 === F ? "en" : F,
					R = Object(g.a)(f.W),
					Z = Object(r.a)(R, 1)[0],
					H = Object(g.a)(f.t),
					q = Object(r.a)(H, 1)[0],
					V = Object(g.a)(f.c),
					G = Object(r.a)(V, 2)[1],
					Y = Object(d.c)(k, x, D),
					J = P !== T ? null === Z || void 0 === Z || null === (e = Z.data) || void 0 === e || null === (o = e.snippets) || void 0 === o ? void 0 : o.units_listing_price_line : null === Z || void 0 === Z || null === (i = Z.data) || void 0 === i || null === (a = i.snippets) || void 0 === a ? void 0 : a.units_listing_price_line_singular,
					X = Object(d.b)(J, P, T, I.toLowerCase(), M),
					$ = null === q || void 0 === q || null === (s = q.data) || void 0 === s ? void 0 : s.snippets,
					Q = function () {
						return y("div", {
							className: "row ".concat(l.a.unitCardBottom)
						}, Y ? [y("div", {
							className: "col-7 p-3 text-left ".concat(l.a.subheading),
							key: "availableLine"
						}, Y), y("div", {
							className: "col-5 p-3 text-right ".concat(l.a.subheading, " ").concat(l.a.unitArea),
							key: "areaName"
						}, y("a", {
							onClick: function (t) {
								t.preventDefault(), G({
									payload: h
								})
							}
						}, h))] : y("div", {
							className: "col-12 text-left p-3 ".concat(l.a.subheading, " ").concat(l.a.unitArea),
							key: "areaName"
						}, y("a", {
							onClick: function (t) {
								t.preventDefault(), G({
									payload: h
								})
							}
						}, h)), y("div", {
							className: "col-12"
						}, y("p", {
							className: "".concat(l.a.title, " mb-1")
						}, b), y("div", {
							className: "row ".concat(l.a.mb12)
						}, y("div", {
							className: "".concat(l.a.addressLine, " col")
						}, C), y("div", {
							className: "col-3"
						}, z && y("img", {
							src: Object(d.a)({
								version: "v1612420126",
								name: "pet_friendly.svg"
							}),
							className: "lazyload"
						})))), y("hr", {
							className: l.a.priceDivider
						}), y("div", {
							className: "col-12 ".concat(l.a.priceLine)
						}, X))
					};
				return y("div", {
					className: "".concat(S || "col-12 col-sm-6 col-xl-4 mt-4")
				}, y("div", {
					className: "row"
				}, y("div", {
					className: "col-12 px-4 py-2",
					onMouseEnter: function () {
						E && E(N, !0)
					},
					onMouseLeave: function () {
						E && E(N, !1)
					}
				}, y("div", {
					className: "row ".concat(l.a.unitCardTop)
				}, y(p.a, {
					showDots: !0,
					dots: y(u.a, null),
					itemsOnSuperLargeDesktop: 1,
					itemsOnDesktop: 1,
					itemsOnTablet: 1,
					itemsOnMobile: 1,
					autoPlay: !1,
					containerClass: "col-12 ".concat(l.a.carousel),
					beforeChange: function () {
						v.a.track({
							eventName: v.i.name,
							props: Object(n.a)({}, v.i.props.building, b)
						})
					}
				}, O.map((function (t, e) {
					return y("img", {
						className: l.a.unitPicture,
						key: e,
						src: t
					})
				}))), y("div", {
					className: l.a.statusContainer
				}, y(c.a, {
					className: l.a.status,
					color: "green",
					bgColor: "white"
				}, Object(d.e)({
					vacant: k,
					capacity: x,
					text: {
						available: null === $ || void 0 === $ ? void 0 : $.building_detail_status_available,
						full: null === $ || void 0 === $ ? void 0 : $.building_detail_status_waitlist
					}
				})))), B ? y("a", {
					href: B,
					className: l.a.unitCardLink,
					onClick: function () {
						var t;
						return v.a.track({
							eventName: v.g[U ? "otherHome" : "name"],
							props: (t = {}, Object(n.a)(t, v.g.props.Property, b), Object(n.a)(t, v.g.props.Slug, j), Object(n.a)(t, v.g.props.highPrice, T), Object(n.a)(t, v.g.props.lowPrice, P), t)
						})
					}
				}, y(Q, null)) : y(m.a, {
					href: _.b.BUILDING(W, L, w, j)
				}, y("a", {
					className: l.a.unitCardLink,
					onClick: function () {
						var t;
						return v.a.track({
							eventName: v.g[U ? "otherHome" : "name"],
							props: (t = {}, Object(n.a)(t, v.g.props.Property, b), Object(n.a)(t, v.g.props.Slug, j), Object(n.a)(t, v.g.props.highPrice, T), Object(n.a)(t, v.g.props.lowPrice, P), t)
						})
					}
				}, y(Q, null))))))
			}
		},
		bSuW: function (t, e, o) {
			t.exports = {
				map: "Map_map__1avik",
				pin: "Map_pin__VtDH3",
				popup: "Map_popup__1b-C6"
			}
		},
		"kY8+": function (t, e, o) {
			t.exports = {
				unitCardTop: "UnitCard_unitCardTop__1GpBm",
				statusContainer: "UnitCard_statusContainer__wYbEP",
				unitCardBottom: "UnitCard_unitCardBottom__1f2zk",
				title: "UnitCard_title__PriCp",
				unitCardLink: "UnitCard_unitCardLink__sijqU",
				subheading: "UnitCard_subheading__PwpWr",
				addressLine: "UnitCard_addressLine__2FiIh",
				mb12: "UnitCard_mb12__309sZ",
				priceDivider: "UnitCard_priceDivider__2L_P0",
				priceLine: "UnitCard_priceLine__3MDrU",
				star: "UnitCard_star__2ix4j",
				carousel: "UnitCard_carousel__352_o",
				unitPicture: "UnitCard_unitPicture__1_9By",
				unitArea: "UnitCard_unitArea__3s33X"
			}
		},
		qMIl: function (t, e, o) {
			t.exports = {
				container: "UnitCard_container__WyZrL",
				title: "UnitCard_title__1tLlz",
				body: "UnitCard_body__2-ZWf",
				available: "UnitCard_available__3zCZW",
				address: "UnitCard_address__25Lgh",
				break: "UnitCard_break__2sY_z",
				price: "UnitCard_price__1Yie9"
			}
		}
	}
]);