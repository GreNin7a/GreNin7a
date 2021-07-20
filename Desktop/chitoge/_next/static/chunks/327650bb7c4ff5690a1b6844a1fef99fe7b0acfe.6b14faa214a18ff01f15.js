(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
	[10], {
		"+my6": function (e, a, l) {
			e.exports = {
				inputGroup: "TextField_inputGroup__2wkVk",
				error: "TextField_error__139g6",
				valid: "TextField_valid__WSDkj",
				helperText: "TextField_helperText__3zMLz",
				icon: "TextField_icon__ApK3X",
				left: "TextField_left__aCaPz",
				right: "TextField_right__sJBaf",
				small: "TextField_small__17yLC",
				large: "TextField_large__31FGm",
				hiddenVisually: "TextField_hiddenVisually__Bsf_J"
			}
		},
		"7bXc": function (e, a, l) {
			"use strict";
			var t = l("q1tI"),
				n = l.n(t).a.createElement;
			a.a = function (e) {
				var a = e.img,
					l = e.imgAlt,
					t = e.imgClassName,
					o = e.position,
					i = void 0 === o ? "left" : o,
					r = e.containerClassName,
					c = e.leftColumnClassName,
					s = void 0 === c ? "" : c,
					d = e.rightColumnClassName,
					u = void 0 === d ? "" : d,
					m = e.children,
					v = e.video,
					_ = e.videoWidth,
					p = e.videoHeight,
					f = e.videoClass,
					b = e.fullWidth,
					h = void 0 !== b && b,
					g = e.ignoreDefaultLeftColumn,
					y = void 0 !== g && g,
					N = e.ignoreDefaultRightColumn,
					x = void 0 !== N && N,
					F = e.anim,
					C = e.noLazyload,
					O = void 0 !== C && C;
				if (!a && !v) return n("div", {
					className: h ? "full-width" : "container-fluid"
				}, n("div", {
					className: "".concat(r)
				}, m));
				var j = v && n("iframe", {
						width: _,
						height: p,
						src: v,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0,
						className: f
					}),
					S = "string" === typeof a ? n("img", O ? {
						src: a,
						alt: l,
						className: "".concat(t),
						"data-aos": F ? "fade-in" : null,
						"data-aos-duration": F ? "1300" : null,
						"data-aos-delay": F ? "500" : null
					} : {
						"data-src": a,
						alt: l,
						className: "".concat(t, " lazyload"),
						"data-aos": F ? "fade-in" : null,
						"data-aos-duration": F ? "1300" : null,
						"data-aos-delay": F ? "500" : null
					}) : a,
					w = v ? j : S;
				return n("div", {
					className: h ? "full-width" : "container-fluid"
				}, n("div", {
					className: "row ".concat(r)
				}, n("div", {
					className: "".concat(y ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(s)
				}, "left" === i ? m : w), n("div", {
					className: "".concat(x ? "" : "col-6", " d-none d-sm-none d-md-flex ").concat(u)
				}, "left" === i ? w : m), n("div", {
					className: "d-sm-flex d-md-none ".concat(y ? "" : "col", " ").concat(s)
				}, w, m)))
			}
		},
		WHkz: function (e, a, l) {
			"use strict";
			l.d(a, "b", (function () {
				return t
			})), l.d(a, "a", (function () {
				return n
			}));
			var t = function (e) {
					return null === e || void 0 === e ? void 0 : e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
				},
				n = function (e) {
					return e.match(/^[0-9]+$/)
				}
		},
		iZN9: function (e, a, l) {
			"use strict";
			l.d(a, "a", (function () {
				return C
			}));
			var t = l("q1tI"),
				n = l.n(t),
				o = l("u6xC"),
				i = l.n(o),
				r = l("z5Aq"),
				c = l("uxY6"),
				s = l.n(c),
				d = n.a.createElement,
				u = n.a.forwardRef((function (e, a) {
					var l = e.label,
						t = e.value,
						n = void 0 === t ? "" : t,
						o = e.name,
						i = e.items,
						r = e.display,
						c = e.onChange,
						u = e.className,
						m = e.error,
						v = e.helperText,
						_ = null === i || void 0 === i ? void 0 : i.map((function (e) {
							return "string" === typeof e ? d("option", {
								value: e,
								key: e
							}, e) : d("option", {
								value: e[null === r || void 0 === r ? void 0 : r.id],
								key: e[null === r || void 0 === r ? void 0 : r.id]
							}, e[null === r || void 0 === r ? void 0 : r.name])
						}));
					return d("div", {
						className: "".concat(s.a.inputGroup, " ").concat(m ? s.a.error : null, " ").concat(!m && v ? s.a.helperText : null, " ").concat(u)
					}, d("select", {
						ref: a,
						value: n,
						name: o,
						id: o,
						onChange: c
					}, d("option", {
						value: ""
					}), _), d("label", {
						htmlFor: o,
						className: "".concat(n ? s.a.small : s.a.large),
						"data-content": l
					}, d("span", {
						className: "".concat(s.a.hiddenVisually)
					}, l)), d("div", null, m || v))
				}));
			u.displayName = "SelectField";
			var m = u,
				v = l("co3k"),
				_ = l("l4F9"),
				p = l("zxQn"),
				f = l.n(p),
				b = n.a.createElement,
				h = n.a.forwardRef((function (e, a) {
					var l = e.label,
						t = e.value,
						n = e.name,
						o = e.autoFocus,
						i = void 0 !== o && o,
						r = e.onChange,
						c = e.className,
						s = e.error,
						d = e.placeholder;
					return b("div", {
						className: "".concat(f.a.inputGroup, " ").concat(s ? f.a.error : null, " ").concat(c)
					}, b("label", {
						htmlFor: n,
						className: f.a.large,
						"data-content": l
					}, l), b("textarea", {
						ref: a,
						name: n,
						id: n,
						value: t,
						placeholder: d,
						onChange: r,
						autoFocus: i
					}), b("div", null, s))
				}));
			h.displayName = "TextAreaField";
			var g = h,
				y = l("2v50"),
				N = l("WHkz"),
				x = function (e) {
					var a, l, t, n, o, i = e.values,
						r = e.errorSnippets,
						c = e.skipList,
						s = {};
					((null === i || void 0 === i ? void 0 : i.firstName) ? (null === i || void 0 === i || null === (a = i.firstName) || void 0 === a ? void 0 : a.length) > 100 && (s.firstName = null === r || void 0 === r ? void 0 : r.errors_max_char_100) : s.firstName = null === r || void 0 === r ? void 0 : r.errors_required, (null === i || void 0 === i ? void 0 : i.lastName) ? (null === i || void 0 === i || null === (l = i.lastName) || void 0 === l ? void 0 : l.length) > 100 && (s.lastName = null === r || void 0 === r ? void 0 : r.errors_max_char_100) : s.lastName = null === r || void 0 === r ? void 0 : r.errors_required, (null === i || void 0 === i ? void 0 : i.email) ? Object(N.b)(null === i || void 0 === i ? void 0 : i.email) ? (null === i || void 0 === i || null === (t = i.email) || void 0 === t ? void 0 : t.length) > 100 && (s.email = null === r || void 0 === r ? void 0 : r.errors_max_char_100) : s.email = null === r || void 0 === r ? void 0 : r.errors_invalid_email : s.email = null === r || void 0 === r ? void 0 : r.errors_required, (null === c || void 0 === c ? void 0 : c.label_country) && ((null === i || void 0 === i ? void 0 : i.country) || (s.country = null === r || void 0 === r ? void 0 : r.errors_required)), null === c || void 0 === c ? void 0 : c.label_company) && ((null === i || void 0 === i ? void 0 : i.company) ? (null === i || void 0 === i || null === (o = i.company) || void 0 === o ? void 0 : o.length) > 300 && (s.company = null === r || void 0 === r ? void 0 : r.errors_max_char_100) : s.company = null === r || void 0 === r ? void 0 : r.errors_required);
					return (null === i || void 0 === i ? void 0 : i.message) ? (null === i || void 0 === i || null === (n = i.company) || void 0 === n ? void 0 : n.length) > 300 && (s.message = null === r || void 0 === r ? void 0 : r.errors_max_char_100) : s.message = null === r || void 0 === r ? void 0 : r.errors_required, s
				},
				F = n.a.createElement;

			function C(e) {
				var a = e.title,
					l = e.description,
					n = e.label_first_name,
					o = e.label_last_name,
					c = e.label_email,
					s = e.label_country,
					d = e.label_company,
					u = e.label_message,
					p = e.label_message_hint,
					f = e.submit_btn,
					b = e.closeBtn,
					h = e.onSubmit,
					N = e.errorMessages,
					C = Object(t.useState)(!1),
					O = C[0],
					j = C[1],
					S = Object(_.a)({
						callback: function (e) {
							h && h(e), j(!0)
						},
						initialState: {
							firstName: "",
							lastName: "",
							email: "",
							country: "",
							company: "",
							message: ""
						},
						validate: function (e) {
							return x({
								values: e,
								errorSnippets: N,
								skipList: {
									label_country: s,
									label_company: d
								}
							})
						}
					}),
					w = S.handleSubmit,
					T = S.values,
					k = S.handleChange,
					B = S.handleBlur,
					q = S.errors;
				return Object(t.useEffect)((function () {
					var e;
					return O && (e = setTimeout((function () {
							b && b()
						}), 2500)),
						function () {
							return clearTimeout(e)
						}
				}), [O]), F("div", {
					className: "".concat(i.a.formWrapper, "  w-100"),
					style: {
						backgroundImage: "url(".concat(Object(y.a)({
							version: "v1592396802",
							name: "smile-bg-w3.svg"
						}), ")")
					}
				}, F("div", {
					className: "container"
				}, F("div", {
					className: "".concat(i.a.formContent, " w-50")
				}, !O && [F("h3", {
					className: "text-center",
					key: "title"
				}, a), F("p", {
					className: "mb-64",
					dangerouslySetInnerHTML: {
						__html: l
					},
					key: "description"
				})], !O && F("form", {
					onSubmit: w
				}, F("div", {
					className: "row text-left"
				}, F(r.a, {
					className: "col-12 col-md-6 ".concat(i.a.mtMobile50),
					name: "firstName",
					value: null === T || void 0 === T ? void 0 : T.firstName,
					label: n,
					error: null === q || void 0 === q ? void 0 : q.firstName,
					onChange: k
				}), F(r.a, {
					className: "col-12 col-md-6 ".concat(i.a.mtMobile50),
					name: "lastName",
					value: null === T || void 0 === T ? void 0 : T.lastName,
					label: o,
					error: null === q || void 0 === q ? void 0 : q.lastName,
					onChange: k
				}), F(r.a, {
					className: "col-12 ".concat(i.a.mt50),
					name: "email",
					value: null === T || void 0 === T ? void 0 : T.email,
					label: c,
					error: null === q || void 0 === q ? void 0 : q.email,
					onChange: k,
					onBlur: B
				}), s && F(m, {
					className: "col-12 ".concat(i.a.mt50),
					name: "country",
					value: null === T || void 0 === T ? void 0 : T.country,
					label: s,
					items: ["Singapore", "Japan", "Hongkong"],
					error: null === q || void 0 === q ? void 0 : q.country,
					onChange: k
				}), d && F(r.a, {
					className: "col-12 ".concat(i.a.mt50),
					name: "company",
					value: null === T || void 0 === T ? void 0 : T.company,
					label: d,
					error: null === q || void 0 === q ? void 0 : q.company,
					onChange: k
				}), F(g, {
					className: "col-12 ".concat(i.a.mt50, " ").concat(i.a.messageWrapper),
					name: "message",
					value: null === T || void 0 === T ? void 0 : T.message,
					label: u,
					error: null === q || void 0 === q ? void 0 : q.message,
					placeholder: p || "Tell us your question",
					onChange: k
				})), F(v.a, {
					text: f,
					btnClass: "".concat(i.a.mt50, " ").concat(i.a.submitBtn),
					isSubmit: !0
				})), F("span", {
					className: i.a.crossBtn,
					onClick: b
				}, F("img", {
					src: Object(y.a)({
						version: "v1592396802",
						name: "cross-close-btn-w3.svg"
					}),
					alt: "cross-btn"
				})), O && F("div", {
					className: i.a.success
				}, F("h2", null, "Form submitted"), F("p", null, "We'll get back to you via email within 2 working days. Hang tight!", " ")))))
			}
		},
		l4F9: function (e, a, l) {
			"use strict";
			var t = l("rePB"),
				n = l("q1tI");

			function o(e, a) {
				var l = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var t = Object.getOwnPropertySymbols(e);
					a && (t = t.filter((function (a) {
						return Object.getOwnPropertyDescriptor(e, a).enumerable
					}))), l.push.apply(l, t)
				}
				return l
			}

			function i(e) {
				for (var a = 1; a < arguments.length; a++) {
					var l = null != arguments[a] ? arguments[a] : {};
					a % 2 ? o(Object(l), !0).forEach((function (a) {
						Object(t.a)(e, a, l[a])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : o(Object(l)).forEach((function (a) {
						Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(l, a))
					}))
				}
				return e
			}
			a.a = function (e) {
				var a = e.callback,
					l = e.initialState,
					o = e.validate,
					r = Object(n.useState)(i({}, l)),
					c = r[0],
					s = r[1],
					d = Object(n.useState)({}),
					u = d[0],
					m = d[1],
					v = Object(n.useState)(!1),
					_ = v[0],
					p = v[1],
					f = Object(n.useState)(!1),
					b = f[0],
					h = f[1],
					g = function (e) {
						var a = e.target,
							l = a.name,
							n = a.value,
							r = i(i({}, c), {}, Object(t.a)({}, l, n)),
							d = u,
							v = o(r);
						if (s(r), _) {
							var p = {};
							v[l] ? p = Object(t.a)({}, l, v[l]) : delete d[l], m(i(i({}, d), p))
						} else {
							var f = {};
							v[l] ? f = Object(t.a)({}, l, v[l]) : delete d[l], m(i(i({}, d), f))
						}
					};
				return Object(n.useEffect)((function () {
					u && 0 !== (null === Object || void 0 === Object ? void 0 : Object.keys(u).length) ? (p(!1), h(!1)) : (h(!0), _ && (a(c), p(!1)))
				}), [u]), {
					handleChange: g,
					handleBlur: function (e) {
						g(e)
					},
					handleDate: function (e) {
						var a = e.name,
							l = e.value,
							n = i(i({}, c), {}, Object(t.a)({}, a, l));
						s(n)
					},
					handleMultipleCheckboxes: function (e) {
						var a, l = e.name,
							n = e.stateHandle,
							o = i({}, null === c || void 0 === c ? void 0 : c[n]);
						(null === c || void 0 === c || null === (a = c[n]) || void 0 === a ? void 0 : a[l]) ? delete o[l]: o[l] = !0;
						var r = i(i({}, c), {}, Object(t.a)({}, n, o));
						s(r)
					},
					handleRadioButton: function (e) {
						var a = e.name,
							l = e.value,
							n = i(i({}, c), {}, Object(t.a)({}, a, l));
						s(n)
					},
					handleSubmit: function (e) {
						e.preventDefault(), m(o(c)), p(!0)
					},
					values: c,
					errors: u,
					setErrors: m,
					isSubmitting: _,
					setValues: s,
					isValidForm: b
				}
			}
		},
		u6xC: function (e, a, l) {
			e.exports = {
				formWrapper: "ContactForm_formWrapper__2lq6T",
				formContent: "ContactForm_formContent__GMqVT",
				success: "ContactForm_success__2YaS4",
				mt50: "ContactForm_mt50__3PoLI",
				mtMobile50: "ContactForm_mtMobile50__2abrc",
				messageWrapper: "ContactForm_messageWrapper__3y8Pz",
				crossBtn: "ContactForm_crossBtn__35eau",
				submitBtn: "ContactForm_submitBtn__18ZaM"
			}
		},
		uxY6: function (e, a, l) {
			e.exports = {
				inputGroup: "SelectField_inputGroup__2AnJU",
				error: "SelectField_error__3ug_7",
				valid: "SelectField_valid__2UwIb",
				helperText: "SelectField_helperText__344vO",
				icon: "SelectField_icon__2CXoi",
				left: "SelectField_left__1ulYV",
				right: "SelectField_right__2DJ8W",
				small: "SelectField_small__25CDT",
				large: "SelectField_large__1t-CB",
				hiddenVisually: "SelectField_hiddenVisually__3ksdF"
			}
		},
		z5Aq: function (e, a, l) {
			"use strict";
			var t = l("q1tI"),
				n = l.n(t),
				o = l("+my6"),
				i = l.n(o),
				r = n.a.createElement,
				c = n.a.forwardRef((function (e, a) {
					var l = e.type,
						n = void 0 === l ? "text" : l,
						o = e.label,
						c = e.value,
						s = e.name,
						d = e.autoFocus,
						u = void 0 !== d && d,
						m = e.onChange,
						v = e.onBlur,
						_ = e.className,
						p = e.error,
						f = e.helperText,
						b = e.icon,
						h = e.iconPosition,
						g = e.iconClassName,
						y = e.textClassName,
						N = e.readOnly,
						x = e.labelFloat,
						F = void 0 === x || x,
						C = e.valid,
						O = e.validationMessage,
						j = e.size,
						S = Object(t.useState)("text"),
						w = S[0],
						T = S[1],
						k = {
							text: "password",
							password: "text"
						};
					return Object(t.useEffect)((function () {
						T(n)
					}), [n]), r("div", {
						className: "".concat(i.a.inputGroup, " ").concat(p || "invalid" === C ? i.a.error : "valid" === C ? i.a.valid : null, " ").concat(!p && f ? i.a.helperText : null, " ").concat(b ? i.a.icon : null, " ").concat(h ? i.a[h] : null, " ").concat(_)
					}, r("input", {
						ref: a,
						type: w,
						name: s,
						id: s,
						value: c,
						placeholder: o,
						onChange: m,
						onBlur: v,
						autoFocus: u,
						className: y,
						readOnly: N,
						size: j
					}), r("label", {
						htmlFor: s,
						className: "".concat(c && F ? i.a.small : i.a.large),
						"data-content": o
					}, r("span", {
						className: "".concat(i.a.hiddenVisually)
					}, o)), b && r("img", {
						"data-src": b,
						className: "".concat(g, " lazyload"),
						onClick: function () {
							"password" === n && T(k[w])
						}
					}), p ? r("div", null, p || f) : O ? r("div", {
						className: i.a.valid
					}, O) : "")
				}));
			c.displayName = "TextField", a.a = c
		},
		zxQn: function (e, a, l) {
			e.exports = {
				inputGroup: "TextAreaField_inputGroup__1Jh3y",
				error: "TextAreaField_error__1XLaY"
			}
		}
	}
]);