webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _container = __webpack_require__(4);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _signIn = __webpack_require__(15);
	
	var _signIn2 = _interopRequireDefault(_signIn);
	
	var _postArticle = __webpack_require__(18);
	
	var _postArticle2 = _interopRequireDefault(_postArticle);
	
	var _auth = __webpack_require__(21);
	
	var _auth2 = _interopRequireDefault(_auth);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loaded = false; //记录是否已经登陆页面
	
	//If callback is listed as a 3rd argument, this hook will run asynchronously, and the transition will block until callback is called.
	/*import React from 'react';
	import {render} from 'react-dom';
	
	import { Router, Route, IndexRoute, browserHistory } from 'react-router';
	
	import Container from './container';
	
	import SignIn from './signIn';
	
	import PostArtical from './postArticle';
	
	import auth from '../controller/auth.js';
	
	
	function requireAuth(nextState, replace, cb) {
		console.log(arguments);
	console.log(cb);
	// replace('/backstage/sign');
	// replace({
	// 	pathname: '/backstage/sign',
	// 	state: {nextPathname: nextState.location.pathname}
	// })
		// var promise = auth.checkLogin();
		// promise.then(function (response) {
		// 	console.log('login');
		// 	cb();
		// }).catch(function (err) {
		// 	console.log('noLogin');
		// 	replace('/backstage/sign');
		// })
	
		if (1 == 1) {
			replace({
				pathname: '/backstage/sign',
				state: {nextPathname: nextState.location.pathname}
			})
		}
	}
	
	
	render((
		<Router history={browserHistory}>
			<Route path="/backstage/sign" component={SignIn} />
			<Route path="/backstage" component={Container} onEnter={requireAuth}>
				<IndexRoute component={PostArtical} />
				
			</Route>
		</Router>
	), document.querySelector('#container'));*/
	
	function requireAuth(nextState, replace, cb) {
		if (!loaded) {
			var promise = _auth2.default.checkLogin();
			promise.then(function (response) {
				if (response == 'success') {
					console.log(loaded);
					loaded = true;
					console.log(loaded);
				} else if (response == 'error') {
					replace({
						pathname: '/backstage/sign',
						state: { nextPathname: nextState.location.pathname }
					});
				}
				cb();
			}).catch(function (err) {
				console.log(err);
				replace('/backstage/sign');
				cb();
			});
		}
	}
	
	function isLogin(nextState, replace, cb) {
		//若已经登陆，不可再进登陆页面
		var promise = _auth2.default.checkLogin();
		promise.then(function (response) {
			if (response == 'success') {
				replace({
					pathname: '/backstage',
					state: { nextPathname: nextState.location.pathname }
				});
			}
			cb();
		});
	}
	
	(0, _reactDom.render)(_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(_reactRouter.Route, { path: '/backstage/sign', component: _signIn2.default, onEnter: isLogin }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/backstage', component: _container2.default, onEnter: requireAuth },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _postArticle2.default })
		)
	), document.querySelector('#container'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window.ReactRouter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _header = __webpack_require__(5);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _sideBar = __webpack_require__(10);
	
	var _sideBar2 = _interopRequireDefault(_sideBar);
	
	var _container = __webpack_require__(13);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Container = function (_React$Component) {
		_inherits(Container, _React$Component);
	
		function Container(props) {
			_classCallCheck(this, Container);
	
			return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));
		}
	
		_createClass(Container, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				//console.log('componentWillMount');
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				//console.log('componentDidMount');
				// this.fetchData();
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: _container2.default.contentContainer },
					_react2.default.createElement(_header2.default, null),
					_react2.default.createElement(_sideBar2.default, null),
					_react2.default.createElement(
						'section',
						{ className: _container2.default.wrapContainer },
						this.props.children
					)
				);
			}
		}]);
	
		return Container;
	}(_react2.default.Component);
	
	exports.default = Container;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _header = __webpack_require__(6);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
		_inherits(Header, _React$Component);
	
		function Header() {
			_classCallCheck(this, Header);
	
			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}
	
		_createClass(Header, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: _header2.default.backHeader },
					'Admin Panel'
				);
			}
		}]);
	
		return Header;
	}(_react2.default.Component);
	
	exports.default = Header;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules!./header.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules!./header.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "._7l3OgyJaLd9alNyzB6-ub {\r\n\tposition: fixed;\r\n\tbackground: #5E5E5E;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tpadding-left: 30px;\r\n\tfont-size: 18px;\r\n\tcolor: #FFF;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"backHeader": "_7l3OgyJaLd9alNyzB6-ub"
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sideBar = __webpack_require__(11);
	
	var _sideBar2 = _interopRequireDefault(_sideBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideBar = function (_React$Component) {
		_inherits(SideBar, _React$Component);
	
		function SideBar() {
			_classCallCheck(this, SideBar);
	
			return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
		}
	
		_createClass(SideBar, [{
			key: 'render',
			value: function render() {
	
				var sidebarData = [{
					'text': 'User',
					'link': '/'
				}, {
					'text': 'Artical',
					'link': '/'
				}];
	
				var _this = this;
				var node = sidebarData.map(function (item, index) {
					return _react2.default.createElement(
						'li',
						{ className: _sideBar2.default.sidebatItem, key: index },
						'\u6587\u7AE0'
					);
				});
	
				return _react2.default.createElement(
					'div',
					{ className: _sideBar2.default.sideBar },
					_react2.default.createElement(
						'ul',
						null,
						node
					)
				);
			}
		}]);
	
		return SideBar;
	}(_react2.default.Component);
	
	exports.default = SideBar;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules!./sideBar.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules!./sideBar.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "._1FhE6I6q7NGZ5TChzWmcgD {\r\n\tposition: fixed;\r\n\ttop: 40px;\r\n\twidth: 150px;\r\n\theight: 100%;\r\n\tbackground: #D8D8D8;\r\n\theight: 100%;\r\n\tborder-right: 1px solid black;\r\n}\r\n\r\n._3rz7tKJmachTh3XFKZfz7a {\r\n\tfont-size: 20px;\r\n\tborder-bottom: 1px solid black;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\ttext-align: center;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"sideBar": "_1FhE6I6q7NGZ5TChzWmcgD",
		"sidebatItem": "_3rz7tKJmachTh3XFKZfz7a"
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules!./container.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules!./container.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nhtml {\n\theight: 100%;\n}\n\nbody {\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n\tbackground: #F1F1F1;\n}\n\nbody > div {\n\theight: 100%;\n}\n\na {\n\ttext-decoration: none;\n}\n\n._3MnyCKwRNbVfmZW_h2Nwb0 {\n\theight: 100%;\n}\n\n.MRP5kNmQbJ3xGyvx6IZ1b {\n\tmargin-left: 150px;\n\tpadding-top: 40px;\n\theight: calc(100% - 40px);\n}\n\n.MRP5kNmQbJ3xGyvx6IZ1b > div {\n\tbox-sizing: border-box;\n\theight: 100%;\n\toverflow-x: hidden;\n\tpadding: 20px;\n}", ""]);
	
	// exports
	exports.locals = {
		"contentContainer": "_3MnyCKwRNbVfmZW_h2Nwb0",
		"wrapContainer": "MRP5kNmQbJ3xGyvx6IZ1b"
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _sign = __webpack_require__(16);
	
	var _sign2 = _interopRequireDefault(_sign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import $ from 'jquery';
	
	var SignIn = function (_React$Component) {
		_inherits(SignIn, _React$Component);
	
		function SignIn(props) {
			_classCallCheck(this, SignIn);
	
			var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));
	
			_this.state = {
				name: '',
				password: ''
			};
			return _this;
		}
	
		_createClass(SignIn, [{
			key: 'handleSubmit',
			value: function handleSubmit(event) {
				event.preventDefault();
	
				fetch('/api/backstage/sign', {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: this.state.name,
						password: this.state.password
					})
				}).then(function (res) {
					return res.text();
				}).then(function (data) {
					if (data == 'success') {}
				});
			}
			// handleChange(key, event) {
			// 	console.log(event);
			// 	this.setState({[key]: event.target.value})
			// }
	
		}, {
			key: 'hanleChange',
			value: function hanleChange(event, key) {
				this.setState(_defineProperty({}, key, event.target.value));
			}
		}, {
			key: 'handleClick',
			value: function handleClick(event) {
				console.log(document.cookie);
				console.log(document.session);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				return _react2.default.createElement(
					'div',
					{ className: _sign2.default.signContainer },
					_react2.default.createElement(
						'form',
						{ className: _sign2.default.signForm, onSubmit: function onSubmit(event) {
								return _this2.handleSubmit(event);
							} },
						_react2.default.createElement(
							'h1',
							{ className: _sign2.default.signTitle, onClick: function onClick(event) {
									return _this2.handleClick(event);
								} },
							'\u767B\u5F55'
						),
						_react2.default.createElement(
							'div',
							{ className: _sign2.default.formGroup },
							_react2.default.createElement('input', { type: 'text',
								placeholder: '\u7528\u6237\u540D',
								name: 'userName',
								className: _sign2.default.inputControl,
								autoComplete: 'off'
								//onChange={this.handleChange.bind(this, 'name')}
								, onChange: function onChange(event, name) {
									return _this2.hanleChange(event, 'name');
								},
								value: this.state.name })
						),
						_react2.default.createElement(
							'div',
							{ className: _sign2.default.formGroup },
							_react2.default.createElement('input', { type: 'password',
								placeholder: '\u5BC6\u7801',
								name: 'password',
								className: _sign2.default.inputControl,
								onChange: function onChange(event, password) {
									return _this2.hanleChange(event, 'password');
								},
								value: this.state.password })
						),
						_react2.default.createElement(
							'div',
							{ className: _sign2.default.formGroup },
							_react2.default.createElement('input', { type: 'submit',
								className: _sign2.default.success + ' ' + _sign2.default.btn
								//onClick={(event) => this.handleClick(event)}
								, value: '\u767B\u5F55' })
						)
					)
				);
			}
		}]);
	
		return SignIn;
	}(_react2.default.Component);
	
	exports.default = SignIn;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules!./sign.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules!./sign.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "._134qzVPdozOASB6AcHo7Ml {\n\tbackground: #5cb85c;\n}\n\n._2gHgDCmltJ_QbsJ71zTa80 {\n\tbox-sizing: border-box;\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 8px 12px;\n\tfont-size: 16px;\n\tcolor: white;\n\tborder: 1px solid #ccc;\n\tborder-radius: 4px;\n\tbox-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n}\n\n.KnGRaR3iN7rII9WRVhBJV {\n\theight: 100%;\n\twidth: 100%;\n\tpadding-top: 80px;\n}\n\n._2vusW01LY4Iruni4VVyRwP {\n\twidth: 300px;\n\tpadding: 30px 50px;\n\tmargin: 0 auto;\n\tbackground: white;\n\ttext-align: center;\n}\n\n._2vusW01LY4Iruni4VVyRwP ._3oYwIjL5cvSyL2492YgT_5 {\n\tmargin-bottom: 30px;\n}\n\n._27xUDPsTDFsET0Erc6WmzI {\n\tmargin-bottom: 15px;\n}\n\n._3-mjcpBk-y-kK_bTDlnihK {\n\tbox-sizing: border-box;\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 8px 12px;\n\tfont-size:14px;\n\tcolor: #555;\n\tborder: 1px solid #ccc;\n\tborder-radius: 4px;\n\tbox-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n}", ""]);
	
	// exports
	exports.locals = {
		"success": "_134qzVPdozOASB6AcHo7Ml",
		"btn": "_2gHgDCmltJ_QbsJ71zTa80",
		"signContainer": "KnGRaR3iN7rII9WRVhBJV",
		"signForm": "_2vusW01LY4Iruni4VVyRwP",
		"signTitle": "_3oYwIjL5cvSyL2492YgT_5",
		"formGroup": "_27xUDPsTDFsET0Erc6WmzI",
		"inputControl": "_3-mjcpBk-y-kK_bTDlnihK"
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _article = __webpack_require__(19);
	
	var _article2 = _interopRequireDefault(_article);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PostAriticle = function (_React$Component) {
		_inherits(PostAriticle, _React$Component);
	
		function PostAriticle(props) {
			_classCallCheck(this, PostAriticle);
	
			var _this = _possibleConstructorReturn(this, (PostAriticle.__proto__ || Object.getPrototypeOf(PostAriticle)).call(this, props));
	
			_this.state = {
				title: '',
				time: '',
				tag: '',
				content: ''
			};
			return _this;
		}
	
		_createClass(PostAriticle, [{
			key: 'handleClick',
			value: function handleClick() {
				console.log('click');
			}
		}, {
			key: 'handleClic',
			value: function handleClic(event) {
				console.log('yes');
			}
		}, {
			key: 'handleChange',
			value: function handleChange(event, key) {
				this.setState(_defineProperty({}, key, event.target.value));
			}
		}, {
			key: 'handleSubmit',
			value: function handleSubmit(event) {
				event.preventDefault();
	
				console.log('submit');
	
				fetch('/api/backstage/postarticle', {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						title: this.state.title,
						time: this.state.time,
						tag: this.state.tag,
						content: this.state.content
					})
				}).then(function (res) {
					return res.text();
				}).then(function (data) {
					console.log(data);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h1',
						{ className: _article2.default.title },
						'\u6587\u7AE0'
					),
					_react2.default.createElement(
						'form',
						{ onSubmit: function onSubmit(event) {
								return _this2.handleSubmit(event);
							} },
						_react2.default.createElement('input', { type: 'text',
							className: _article2.default.inputContainer + ' ' + _article2.default.inputTitle,
							placeholder: '\u6807\u9898',
							onChange: function onChange(event, name) {
								return _this2.handleChange(event, 'title');
							},
							value: this.state.title }),
						_react2.default.createElement(
							'div',
							{ className: _article2.default.inputGroup, onClick: function onClick(event) {
									_this2.handleClic(event);
								} },
							_react2.default.createElement('input', { type: 'text',
								className: _article2.default.inputContainer + ' ' + _article2.default.inputTime,
								placeholder: '\u65F6\u95F4',
								onChange: function onChange(event, name) {
									return _this2.handleChange(event, 'time');
								},
								value: this.state.time }),
							_react2.default.createElement('input', { type: 'text',
								onFocus: function onFocus(event) {
									return _this2.handleClick(event);
								},
								className: _article2.default.inputContainer + ' ' + _article2.default.inputTag,
								placeholder: '\u6807\u7B7E',
								onChange: function onChange(event, name) {
									return _this2.handleChange(event, 'tag');
								},
								value: this.state.tag })
						),
						_react2.default.createElement('textarea', { type: 'text',
							className: _article2.default.inputContainer + ' ' + _article2.default.inputContent,
							placeholder: '\u5185\u5BB9',
							onChange: function onChange(event, name) {
								return _this2.handleChange(event, 'content');
							},
							value: this.state.content }),
						_react2.default.createElement(
							'button',
							{ className: _article2.default.postButton },
							'\u53D1\u8868'
						)
					),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null),
					_react2.default.createElement('br', null)
				);
			}
		}]);
	
		return PostAriticle;
	}(_react2.default.Component);
	
	exports.default = PostAriticle;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules!./article.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules!./article.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "._3cgsNm2lP2LrE0q12ibBhy {\n\ttext-align: center;\n\tfont-size: 30px;\n\tmargin-bottom: 30px;\n}\n\n.xLzTb4zDQU_MXNsXFe1zJ {\n\tbox-sizing: border-box;\n\tdisplay: inline-block;\n\tpadding: 10px 16px;\n\tfont-size: 18px;\n\tborder: 1px solid #ccc;\n\tbox-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n\theight: 46px;\t\n}\n\n._3ZamO_oG95IDKu6ykW5fI1 {\n\tfloat: left;\n\twidth: 20%;\n}\n\n._2_OZl-3_kR1OwN1Deo7YbX {\n\tfloat: right;\n\twidth: 70%;\n}\n._16nHTtk-2v-IfgMuits5or {\n\tmargin: 16px 0;\n}\n._16nHTtk-2v-IfgMuits5or::after {\n\tdisplay: block;\n\tcontent: '';\n\tclear: both;\n}\n\n._16nHTtk-2v-IfgMuits5or label {\n\tfont-size: 20px;\n\tmargin: 10px 0;\n\tdisplay: block;\n}\n\n._3B5Z6K70XWyr0vSgmg9j3y {\n\twidth: 100%;\n}\n\n._2gsFeiOk77BjQAOWtZSD3_ {\n\twidth: 100%;\n\theight: 200px;\n}\n\n._1t8tapHNkttVHBcUiu4WUW {\n\tcolor: #fff;\n\tbackground: #009a61;\n\tborder: none;\n\tfont-size: 14px;\n\tpadding: 6px 12px;\n\tfloat: right;\n}", ""]);
	
	// exports
	exports.locals = {
		"title": "_3cgsNm2lP2LrE0q12ibBhy",
		"inputContainer": "xLzTb4zDQU_MXNsXFe1zJ",
		"inputTime": "_3ZamO_oG95IDKu6ykW5fI1",
		"inputTag": "_2_OZl-3_kR1OwN1Deo7YbX",
		"inputGroup": "_16nHTtk-2v-IfgMuits5or",
		"inputTitle": "_3B5Z6K70XWyr0vSgmg9j3y",
		"inputContent": "_2gsFeiOk77BjQAOWtZSD3_",
		"postButton": "_1t8tapHNkttVHBcUiu4WUW"
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	var auth = {};
	
	//目前改变量是没有用到，想着后面转练用redux用到
	auth.isLogin = false;
	
	auth.checkLogin = function () {
			return fetch('/api/backstage/checklogin', {
					method: 'GET',
					credentials: 'include'
			}).then(function (response) {
					return response.text();
			});
	};
	
	module.exports = auth;

/***/ }
]);
//# sourceMappingURL=app.js.map