﻿if(!window.jq || typeof jq !== "function") {
	var jq = function(g) {
		function u(a, c, b) {
			var e = h.createDocumentFragment();
			if(b) {
				for(b = a.length - 1; b >= 0; b--) e.insertBefore(a[b], e.firstChild);
				c.insertBefore(e, c.firstChild)
			} else {
				for(b = 0; b < a.length; b++) e.appendChild(a[b]);
				c.appendChild(e)
			}
		}

		function v(a) {
			return a in s ? s[a] : s[a] = RegExp("(^|\\s)" + a + "(\\s|$)")
		}

		function o(a) {
			for(var c = 0; c < a.length; c++) a.indexOf(a[c]) != c && (a.splice(c, 1), c--);
			return a
		}

		function w(a, c) {
			var b = [];
			if(a == f) return b;
			for(; a; a = a.nextSibling) a.nodeType ==
				1 && a !== c && b.push(a);
			return b
		}

		function n() {}

		function x(a, c) {
			a.os = {};
			a.os.webkit = c.match(/WebKit\/([\d.]+)/) ? !0 : !1;
			a.os.android = c.match(/(Android)\s+([\d.]+)/) || c.match(/Silk-Accelerated/) ? !0 : !1;
			a.os.ipad = c.match(/(iPad).*OS\s([\d_]+)/) ? !0 : !1;
			a.os.iphone = !a.os.ipad && c.match(/(iPhone\sOS)\s([\d_]+)/) ? !0 : !1;
			a.os.webos = c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/) ? !0 : !1;
			a.os.touchpad = a.os.webos && c.match(/TouchPad/) ? !0 : !1;
			a.os.ios = a.os.ipad || a.os.iphone;
			a.os.blackberry = c.match(/BlackBerry/) || c.match(/PlayBook/) ?
				!0 : !1;
			a.os.opera = c.match(/Opera Mobi/) ? !0 : !1;
			a.os.fennec = c.match(/fennec/i) ? !0 : !1;
			a.os.desktop = !(a.os.ios || a.os.android || a.os.blackberry || a.os.opera || a.os.fennec)
		}

		function B(a, c, b, e) {
			c = y(c);
			if(c.ns) var d = RegExp("(?:^| )" + c.ns.replace(" ", " .* ?") + "(?: |$)");
			return(p[a._jqmid || (a._jqmid = t++)] || []).filter(function(a) {
				return a && (!c.e || a.e == c.e) && (!c.ns || d.test(a.ns)) && (!b || a.fn == b || typeof a.fn === "function" && typeof b === "function" && "" + a.fn === "" + b) && (!e || a.sel == e)
			})
		}

		function y(a) {
			a = ("" + a).split(".");
			return {
				e: a[0],
				ns: a.slice(1).sort().join(" ")
			}
		}

		function z(a, c, b) {
			d.isObject(a) ? d.each(a, b) : a.split(/\s/).forEach(function(a) {
				b(a, c)
			})
		}

		function q(a, c, b, e, f) {
			var i = a._jqmid || (a._jqmid = t++),
				g = p[i] || (p[i] = []);
			z(c, b, function(b, c) {
				var i = f && f(c, b),
					h = i || c,
					j = function(b) {
						var c = h.apply(a, [b].concat(b.data));
						c === !1 && b.preventDefault();
						return c
					},
					i = d.extend(y(b), {
						fn: c,
						proxy: j,
						sel: e,
						del: i,
						i: g.length
					});
				g.push(i);
				a.addEventListener(i.e, j, !1)
			})
		}

		function r(a, c, b, e) {
			var d = a._jqmid || (a._jqmid = t++);
			z(c || "", b, function(b, c) {
				B(a, b, c, e).forEach(function(b) {
					delete p[d][b.i];
					a.removeEventListener(b.e, b.proxy, !1)
				})
			})
		}

		function C(a) {
			var c = d.extend({
				originalEvent: a
			}, a);
			d.each(D, function(b, e) {
				c[b] = function() {
					this[e] = E;
					return a[b].apply(a, arguments)
				};
				c[e] = F
			});
			return c
		}
		var f, h = g.document,
			l = [],
			G = l.slice,
			s = [],
			H = 1,
			I = /^\s*<(\w+)[^>]*>/,
			j = {},
			m = function(a, c) {
				this.length = 0;
				if(a)
					if(a instanceof m && c == f) return a;
					else if(d.isFunction(a)) return d(h).ready(a);
				else if(d.isArray(a) && a.length != f) {
					for(var b = 0; b < a.length; b++) this[this.length++] = a[b];
					return this
				} else if(d.isObject(a) && d.isObject(c)) {
					if(a.length ==
						f) a.parentNode == c && (this[this.length++] = a);
					else
						for(b = 0; b < a.length; b++) a[b].parentNode == c && (this[this.length++] = a[b]);
					return this
				} else if(d.isObject(a) && c == f) return this[this.length++] = a, this;
				else if(c !== f) {
					if(c instanceof m) return c.find(a)
				} else c = h;
				else return this;
				if(b = this.selector(a, c))
					if(d.isArray(b))
						for(var e = 0; e < b.length; e++) this[this.length++] = b[e];
					else this[this.length++] = b;
				return this
			},
			d = function(a, c) {
				return new m(a, c)
			};
		d.map = function(a, c) {
			var b, e = [],
				k;
			if(d.isArray(a))
				for(k = 0; k < a.length; k++) b =
					c(a[k], k), b !== f && e.push(b);
			else if(d.isObject(a))
				for(k in a) a.hasOwnProperty(k) && (b = c(a[k], k), b !== f && e.push(b));
			return d([e])
		};
		d.each = function(a, c) {
			var b;
			if(d.isArray(a))
				for(b = 0; b < a.length; b++) {
					if(c(b, a[b]) === !1) break
				} else if(d.isObject(a))
					for(b in a)
						if(a.hasOwnProperty(b) && c(b, a[b]) === !1) break;
			return a
		};
		d.extend = function(a) {
			a == f && (a = this);
			if(arguments.length === 1) {
				for(var c in a) this[c] = a[c];
				return this
			} else G.call(arguments, 1).forEach(function(b) {
				for(var c in b) a[c] = b[c]
			});
			return a
		};
		d.isArray = function(a) {
			return a instanceof
			Array && a.push != f
		};
		d.isFunction = function(a) {
			return typeof a === "function"
		};
		d.isObject = function(a) {
			return typeof a === "object"
		};
		d.fn = m.prototype = {
			constructor: m,
			forEach: l.forEach,
			reduce: l.reduce,
			push: l.push,
			indexOf: l.indexOf,
			concat: l.concat,
			selector: function(a, c) {
				var b;
				if(a[0] === "#" && a.indexOf(" ") === -1 && a.indexOf(">") === -1) return b = c == h ? c.getElementById(a.replace("#", "")) : [].slice.call(c.querySelectorAll(a));
				a = a.trim();
				a[0] === "<" && a[a.length - 1] === ">" ? (b = h.createElement("div"), b.innerHTML = a.trim(), b = [].slice.call(b.childNodes)) :
					b = [].slice.call(c.querySelectorAll(a));
				return b
			},
			oldElement: f,
			slice: l.slice,
			setupOld: function(a) {
				if(a == f) return d();
				a.oldElement = this;
				return a
			},
			map: function(a) {
				return d.map(this, function(c, b) {
					return a.call(c, b, c)
				})
			},
			each: function(a) {
				this.forEach(function(c, b) {
					a.call(c, b, c)
				});
				return this
			},
			ready: function(a) {
				(h.readyState === "complete" || h.readyState === "loaded") && a();
				h.addEventListener("DOMContentLoaded", a, !1);
				return this
			},
			find: function(a) {
				if(this.length === 0) return f;
				for(var c = [], b, e = 0; e < this.length; e++) {
					b =
						d(a, this[e]);
					for(var k = 0; k < b.length; k++) c.push(b[k])
				}
				return d(o(c))
			},
			html: function(a) {
				if(this.length === 0) return f;
				if(a === f) return this[0].innerHTML;
				for(var c = 0; c < this.length; c++) this[c].innerHTML = a;
				return this
			},
			text: function(a) {
				if(this.length === 0) return f;
				if(a === f) return this[0].textContent;
				for(var c = 0; c < this.length; c++) this[c].textContent = a;
				return this
			},
			css: function(a, c, b) {
				b = b != f ? b : this[0];
				if(this.length === 0) return f;
				if(c == f && typeof a === "string") return g.getComputedStyle(b), b.style[a] ? b.style[a] :
					g.getComputedStyle(b)[a];
				for(b = 0; b < this.length; b++)
					if(d.isObject(a))
						for(var e in a) this[b].style[e] = a[e];
					else this[b].style[a] = c;
				return this
			},
			empty: function() {
				for(var a = 0; a < this.length; a++) this[a].innerHTML = "";
				return this
			},
			hide: function() {
				if(this.length === 0) return this;
				for(var a = 0; a < this.length; a++)
					if(this.css("display", null, this[a]) != "none") this[a].setAttribute("jqmOldStyle", this.css("display", null, this[a])), this[a].style.display = "none";
				return this
			},
			show: function() {
				if(this.length === 0) return this;
				for(var a = 0; a < this.length; a++)
					if(this.css("display", null, this[a]) == "none") this[a].style.display = this[a].getAttribute("jqmOldStyle") ? this[a].getAttribute("jqmOldStyle") : "block", this[a].removeAttribute("jqmOldStyle");
				return this
			},
			toggle: function(a) {
				for(var c = a === !0 ? !0 : !1, b = 0; b < this.length; b++) g.getComputedStyle(this[b]).display !== "none" || a !== f && c === !1 ? (this[b].setAttribute("jqmOldStyle", this[b].style.display), this[b].style.display = "none") : (this[b].style.display = this[b].getAttribute("jqmOldStyle") !=
					f ? this[b].getAttribute("jqmOldStyle") : "block", this[b].removeAttribute("jqmOldStyle"));
				return this
			},
			val: function(a) {
				if(this.length === 0) return f;
				if(a == f) return this[0].value;
				for(var c = 0; c < this.length; c++) this[c].value = a;
				return this
			},
			attr: function(a, c) {
				if(this.length === 0) return f;
				if(c === f && !d.isObject(a)) return this[0].jqmCacheId && j[this[0].jqmCacheId][a] ? this[0].jqmCacheId && j[this[0].jqmCacheId][a] : this[0].getAttribute(a);
				for(var b = 0; b < this.length; b++)
					if(d.isObject(a))
						for(var e in a) d(this[b]).attr(e,
							a[e]);
					else if(d.isArray(c) || d.isObject(c) || d.isFunction(c)) {
					if(!this[b].jqmCacheId) this[b].jqmCacheId = d.uuid();
					j[this[b].jqmCacheId] || (j[this[b].jqmCacheId] = {});
					j[this[b].jqmCacheId][a] = c
				} else c == null && c !== f ? (this[b].removeAttribute(a), this[b].jqmCacheId && j[this[b].jqmCacheId][a] && delete j[this[b].jqmCacheId][a]) : this[b].setAttribute(a, c);
				return this
			},
			removeAttr: function(a) {
				for(var c = this, b = 0; b < this.length; b++) a.split(/\s+/g).forEach(function(e) {
					c[b].removeAttribute(e);
					c[b].jqmCacheId && j[c[b].jqmCacheId][a] &&
						delete j[c[b].jqmCacheId][a]
				});
				return this
			},
			remove: function(a) {
				a = d(this).filter(a);
				if(a == f) return this;
				for(var c = 0; c < a.length; c++) a[c].parentNode.removeChild(a[c]);
				return this
			},
			addClass: function(a) {
				for(var c = 0; c < this.length; c++) {
					var b = this[c].className,
						e = [],
						d = this;
					a.split(/\s+/g).forEach(function(a) {
						d.hasClass(a, d[c]) || e.push(a)
					});
					this[c].className += (b ? " " : "") + e.join(" ");
					this[c].className = this[c].className.trim()
				}
				return this
			},
			removeClass: function(a) {
				for(var c = 0; c < this.length; c++) {
					if(a == f) {
						this[c].className =
							"";
						break
					}
					var b = this[c].className;
					a.split(/\s+/g).forEach(function(a) {
						b = b.replace(v(a), " ")
					});
					this[c].className = b.length > 0 ? b.trim() : ""
				}
				return this
			},
			hasClass: function(a, c) {
				if(this.length === 0) return !1;
				c || (c = this[0]);
				return v(a).test(c.className)
			},
			append: function(a, c) {
				if(a && a.length != f && a.length === 0) return this;
				if(d.isArray(a) || d.isObject(a)) a = d(a);
				var b;
				for(b = 0; b < this.length; b++)
					if(a.length && typeof a != "string") a = d(a), u(a, this[b], c);
					else {
						var e = I.test(a) ? d(a) : f;
						if(e == f || e.length == 0) e = h.createTextNode(a);
						e.nodeName != f && e.nodeName.toLowerCase() == "script" && (!e.type || e.type.toLowerCase() === "text/javascript") ? g.eval(e.innerHTML) : e instanceof m ? u(e, this[b], c) : c != f ? this[b].insertBefore(e, this[b].firstChild) : this[b].appendChild(e)
					}
				return this
			},
			prepend: function(a) {
				return this.append(a, 1)
			},
			insertBefore: function(a, c) {
				if(this.length == 0) return this;
				a = d(a).get(0);
				if(!a || a.length == 0) return this;
				for(var b = 0; b < this.length; b++) c ? a.parentNode.insertBefore(this[b], a.nextSibling) : a.parentNode.insertBefore(this[b], a);
				return this
			},
			insertAfter: function(a) {
				this.insertBefore(a, !0)
			},
			get: function(a) {
				a = a == f ? 0 : a;
				a < 0 && (a += this.length);
				return this[a] ? this[a] : f
			},
			offset: function() {
				if(this.length === 0) return f;
				var a = this[0].getBoundingClientRect();
				return {
					left: a.left + g.pageXOffset,
					top: a.top + g.pageYOffset,
					width: parseInt(a.width),
					height: parseInt(a.height)
				}
			},
			parent: function(a) {
				if(this.length == 0) return f;
				for(var c = [], b = 0; b < this.length; b++) this[b].parentNode && c.push(this[b].parentNode);
				return this.setupOld(d(o(c)).filter(a))
			},
			children: function(a) {
				if(this.length ==
					0) return f;
				for(var c = [], b = 0; b < this.length; b++) c = c.concat(w(this[b].firstChild));
				return this.setupOld(d(c).filter(a))
			},
			siblings: function(a) {
				if(this.length == 0) return f;
				for(var c = [], b = 0; b < this.length; b++) this[b].parentNode && (c = c.concat(w(this[b].parentNode.firstChild, this[b])));
				return this.setupOld(d(c).filter(a))
			},
			closest: function(a, c) {
				if(this.length == 0) return f;
				var b = this[0],
					e = d(a, c);
				if(e.length == 0) return d();
				for(; b && e.indexOf(b) == -1;) b = b !== c && b !== h && b.parentNode;
				return d(b)
			},
			filter: function(a) {
				if(this.length ==
					0) return f;
				if(a == f) return this;
				for(var c = [], b = 0; b < this.length; b++) {
					var e = this[b];
					e.parentNode && d(a, e.parentNode).indexOf(e) >= 0 && c.push(e)
				}
				return this.setupOld(d(o(c)))
			},
			not: function(a) {
				if(this.length == 0) return f;
				for(var c = [], b = 0; b < this.length; b++) {
					var e = this[b];
					e.parentNode && d(a, e.parentNode).indexOf(e) == -1 && c.push(e)
				}
				return this.setupOld(d(o(c)))
			},
			data: function(a, c) {
				return this.attr("data-" + a, c)
			},
			end: function() {
				return this.oldElement != f ? this.oldElement : d()
			},
			clone: function(a) {
				a = a === !1 ? !1 : !0;
				if(this.length ==
					0) return f;
				for(var c = [], b = 0; b < this.length; b++) c.push(this[b].cloneNode(a));
				return d(c)
			},
			size: function() {
				return this.length
			},
			serialize: function(a) {
				if(this.length == 0) return "";
				for(var c = {}, b = 0; b < this.length; b++) this.slice.call(this[b].elements).forEach(function(a) {
					var b = a.getAttribute("type");
					if(a.nodeName.toLowerCase() != "fieldset" && !a.disabled && b != "submit" && b != "reset" && b != "button" && (b != "radio" && b != "checkbox" || a.checked)) c[a.getAttribute("name")] = a.value
				});
				return d.param(c, a)
			}
		};
		var A = {
			type: "GET",
			beforeSend: n,
			success: n,
			error: n,
			complete: n,
			context: f,
			timeout: 0,
			crossDomain: !1
		};
		d.jsonP = function(a) {
			var c = "jsonp_callback" + ++H,
				b = "",
				e = h.createElement("script");
			g[c] = function(f) {
				clearTimeout(b);
				d(e).remove();
				delete g[c];
				a.success.call(void 0, f)
			};
			e.src = a.url.replace(/=\?/, "=" + c);
			if(a.error) e.onerror = function() {
				clearTimeout(b);
				a.error.call(void 0, "", "error")
			};
			d("head").append(e);
			a.timeout > 0 && (b = setTimeout(function() {
				a.error.call(void 0, "", "timeout")
			}, a.timeout));
			return {}
		};
		d.ajax = function(a) {
			var c;
			try {
				c = new g.XMLHttpRequest;
				var b = a || {},
					e;
				for(e in A) b[e] || (b[e] = A[e]);
				if(!b.url) b.url = g.location;
				if(!b.contentType) b.contentType = "application/x-www-form-urlencoded";
				if(!b.headers) b.headers = {};
				if(!("async" in b) || b.async !== !1) b.async = !0;
				if(b.dataType) switch(b.dataType) {
					case "script":
						b.dataType = "text/javascript, application/javascript";
						break;
					case "json":
						b.dataType = "application/json";
						break;
					case "xml":
						b.dataType = "application/xml, text/xml";
						break;
					case "html":
						b.dataType = "text/html";
						break;
					case "text":
						b.dataType = "text/plain";
						break;
					default:
						b.dataType = "text/html";
						break;
					case "jsonp":
						return d.jsonP(a)
				} else b.dataType = "text/html";
				if(d.isObject(b.data)) b.data = d.param(b.data);
				b.type.toLowerCase() === "get" && b.data && (b.url += b.url.indexOf("?") === -1 ? "?" + b.data : "&" + b.data);
				if(/=\?/.test(b.url)) return d.jsonP(b);
				if(!b.crossDomain) b.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(b.url) && RegExp.$2 != g.location.host;
				if(!b.crossDomain) b.headers = d.extend({
					"X-Requested-With": "XMLHttpRequest"
				}, b.headers);
				var f, i = b.context,
					h = /^([\w-]+:)\/\//.test(b.url) ?
					RegExp.$1 : g.location.protocol;
				c.onreadystatechange = function() {
					var a = b.dataType;
					if(c.readyState === 4) {
						clearTimeout(f);
						var d, e = !1;
						if(c.status >= 200 && c.status < 300 || c.status === 0 && h == "file:") {
							if(a === "application/json" && !/^\s*$/.test(c.responseText)) try {
								d = JSON.parse(c.responseText)
							} catch(g) {
								e = g
							} else d = c.responseText;
							c.status === 0 && d.length === 0 && (e = !0);
							e ? b.error.call(i, c, "parsererror", e) : b.success.call(i, d, "success", c)
						} else e = !0, b.error.call(i, c, "error");
						b.complete.call(i, c, e ? "error" : "success")
					}
				};
				c.open(b.type,
					b.url, b.async);
				if(b.contentType) b.headers["Content-Type"] = b.contentType;
				for(var j in b.headers) c.setRequestHeader(j, b.headers[j]);
				if(b.beforeSend.call(i, c, b) === !1) return c.abort(), !1;
				b.timeout > 0 && (f = setTimeout(function() {
					c.onreadystatechange = n;
					c.abort();
					b.error.call(i, c, "timeout")
				}, b.timeout));
				c.send(b.data)
			} catch(l) {
				console.log(l)
			}
			return c
		};
		d.get = function(a, c) {
			return this.ajax({
				url: a,
				success: c
			})
		};
		d.post = function(a, c, b, d) {
			typeof c === "function" && (b = c, c = {});
			d === f && (d = "html");
			return this.ajax({
				url: a,
				type: "POST",
				data: c,
				dataType: d,
				success: b
			})
		};
		d.getJSON = function(a, c, b) {
			typeof c === "function" && (b = c, c = {});
			return this.ajax({
				url: a,
				data: c,
				success: b,
				dataType: "json"
			})
		};
		d.param = function(a, c) {
			var b = [];
			if(a instanceof m) a.each(function() {
				b.push((c ? c + "[]" : this.id) + "=" + encodeURIComponent(this.value))
			});
			else
				for(var e in a) {
					var f = c ? c + "[" + e + "]" : e,
						g = a[e];
					b.push(d.isObject(g) ? d.param(g, f) : f + "=" + encodeURIComponent(g))
				}
			return b.join("&")
		};
		d.parseJSON = function(a) {
			return JSON.parse(a)
		};
		d.parseXML = function(a) {
			return(new DOMParser).parseFromString(a,
				"text/xml")
		};
		x(d, navigator.userAgent);
		d.__detectUA = x;
		if(typeof String.prototype.trim !== "function") String.prototype.trim = function() {
			this.replace(/(\r\n|\n|\r)/gm, "").replace(/^\s+|\s+$/, "");
			return this
		};
		d.uuid = function() {
			var a = function() {
				return((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
			};
			return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
		};
		var p = {},
			t = 1,
			J = {};
		d.event = {
			add: q,
			remove: r
		};
		d.fn.bind = function(a, c) {
			for(var b = 0; b < this.length; b++) q(this[b], a, c);
			return this
		};
		d.fn.unbind = function(a,
			c) {
			for(var b = 0; b < this.length; b++) r(this[b], a, c);
			return this
		};
		d.fn.one = function(a, c) {
			return this.each(function(b, d) {
				q(this, a, c, null, function(a, b) {
					return function() {
						var c = a.apply(d, arguments);
						r(d, b, a);
						return c
					}
				})
			})
		};
		var E = function() {
				return !0
			},
			F = function() {
				return !1
			},
			D = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
		d.fn.delegate = function(a, c, b) {
			for(var e = 0; e < this.length; e++) {
				var f = this[e];
				q(f, c, b, a, function(b) {
					return function(c) {
						var e,
							g = d(c.target).closest(a, f).get(0);
						if(g) return e = d.extend(C(c), {
							currentTarget: g,
							liveFired: f
						}), b.apply(g, [e].concat([].slice.call(arguments, 1)))
					}
				})
			}
			return this
		};
		d.fn.undelegate = function(a, c, b) {
			for(var d = 0; d < this.length; d++) r(this[d], c, b, a);
			return this
		};
		d.fn.on = function(a, c, b) {
			return c === f || d.isFunction(c) ? this.bind(a, c) : this.delegate(c, a, b)
		};
		d.fn.off = function(a, c, b) {
			return c === f || d.isFunction(c) ? this.unbind(a, c) : this.undelegate(c, a, b)
		};
		d.fn.trigger = function(a, c) {
			typeof a == "string" && (a = d.Event(a));
			a.data =
				c;
			for(var b = 0; b < this.length; b++) this[b].dispatchEvent(a);
			return this
		};
		d.Event = function(a, c) {
			var b = h.createEvent(J[a] || "Events"),
				d = !0;
			if(c)
				for(var f in c) f == "bubbles" ? d = !!c[f] : b[f] = c[f];
			b.initEvent(a, d, !0, null, null, null, null, null, null, null, null, null, null, null, null);
			return b
		};
		d.proxy = function(a, c) {
			return function(b) {
				return a.call(c, b)
			}
		};
		return d
	}(window);
	"$" in window || (window.$ = jq);
	if(!window.numOnly) window.numOnly = function(g) {
		isNaN(parseFloat(g)) && (g = g.replace(/[^0-9.-]/, ""));
		return parseFloat(g)
	}
};