webpackJsonp([0,1],[
/* 0 */
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 2);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 3);
	
	var _About = __webpack_require__(/*! ./About.js */ 4);
	
	var _About2 = _interopRequireDefault(_About);
	
	var _container = __webpack_require__(/*! ./home/container */ 9);
	
	var _container2 = _interopRequireDefault(_container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var a = 101;
	
	console.log(a);
	
	/*class Container extends React.Component {
		constructor(props) {
			super(props);
			// this.state = {
			// 	data: ''
			// };
		}
		componentWillMount() {
			console.log('componentWillMount');
		}
		componentDidMount() {
			console.log('componentDidMount');
			// this.fetchData();
		}
		fetchData() {
			var url = "/api/test";
			fetch(url)
				.then( response => response.text() )
				.then((responseData) => {
					console.log(responseData);
					this.setState({
						data: responseData
					});
				});
		}
		render () {
			return (
				<div className="content">
					<header>
						<div>no change content</div>
						<h1>title</h1>
						<nav>nav</nav>
						<div>img</div>
					</header>
					<div>
						<article>
							change content
							<Link to="/">home</Link>
							<Link to="/about">about</Link>
							<Link to="/test">test</Link>
							{this.props.children}
						</article>
						<aside>aside</aside>
					</div>
					<footer>
						<div>no change content</div>
					</footer>
				</div>
			);
		}
	}*/
	
	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);
	
		function Home(props) {
			_classCallCheck(this, Home);
	
			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
		}
	
		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					null,
					'The Home content'
				);
			}
		}]);
	
		return Home;
	}(_react2.default.Component);
	
	// class About extends React.Component {
	// 	constructor(props) {
	// 		super(props);
	// 	}
	// 	render() {
	// 		return (
	// 			<h1>The About content</h1>
	// 		)
	// 	}
	// }
	
	var Test = function (_React$Component2) {
		_inherits(Test, _React$Component2);
	
		function Test(props) {
			_classCallCheck(this, Test);
	
			return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));
		}
	
		_createClass(Test, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					null,
					'The Test content'
				);
			}
		}]);
	
		return Test;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _container2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: Home }),
			_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: '/test', component: Test })
		)
	), document.querySelector('#container'));
	
	/*import React from 'react';
	import {render} from 'react-dom';


	import styles from './about.css'

	console.log(styles);

	class Container extends React.Component {
		render() {
			return (
				<div className={styles.test}>test</div>
			)
		}
	}

	render(<Container />, document.querySelector('#container'));*/

/***/ },
/* 1 */
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 2 */
/*!**********************************!*\
  !*** external "window.ReactDOM" ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = window.ReactDOM;

/***/ },
/* 3 */
/*!*************************************!*\
  !*** external "window.ReactRouter" ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = window.ReactRouter;

/***/ },
/* 4 */
/*!*************************!*\
  !*** ./client/About.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _about = __webpack_require__(/*! ./about.css */ 5);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//console.log(styles);
	
	var About = function (_React$Component) {
		_inherits(About, _React$Component);
	
		function About(props) {
			_classCallCheck(this, About);
	
			return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
		}
	
		_createClass(About, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					{ className: _about2.default.test },
					'The About content'
				);
			}
		}]);
	
		return About;
	}(_react2.default.Component);
	
	exports.default = About;

/***/ },
/* 5 */
/*!**************************!*\
  !*** ./client/about.css ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader?modules&sourceMap!./about.css */ 6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !./../~/css-loader?modules&sourceMap!./about.css */ 6, function() {
				var newContent = __webpack_require__(/*! !./../~/css-loader?modules&sourceMap!./about.css */ 6);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/*!***********************************************************!*\
  !*** ./~/css-loader?modules&sourceMap!./client/about.css ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "  ._1yXcHCc2vIsU2T4Ouu6ZvV {\n    text-align: center;\n  }        \n  ._2YThysAhckloedhzId08Dl {\n    background-color: #d8d8d8;\n    border: 0;\n    border-radius: 10px;\n    height: 50px;\n    padding: 0 20px;\n  }\n  .jB4yaaxByCJu5Z7wic4R6 {\n    height: 35px;\n    width: 100px;\n    border: 0;\n    margin-left: 20px;\n    border-radius: 10px;\n    background-color: #ccffcc;\n  }\n\n\n  ._1c46rorvCjy7Ll2IbWD3de {\n  \tcolor:  green;\n  }", "", {"version":3,"sources":["/./client/about.css"],"names":[],"mappings":"EAAE;IACE,mBAAmB;GACpB;EACD;IACE,0BAA0B;IAC1B,UAAU;IACV,oBAAoB;IACpB,aAAa;IACb,gBAAgB;GACjB;EACD;IACE,aAAa;IACb,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,0BAA0B;GAC3B;;;EAGD;GACC,cAAc;GACd","file":"about.css","sourcesContent":["  .search_container {\n    text-align: center;\n  }        \n  .search_box {\n    background-color: #d8d8d8;\n    border: 0;\n    border-radius: 10px;\n    height: 50px;\n    padding: 0 20px;\n  }\n  .search_button {\n    height: 35px;\n    width: 100px;\n    border: 0;\n    margin-left: 20px;\n    border-radius: 10px;\n    background-color: #ccffcc;\n  }\n\n\n  .test {\n  \tcolor:  green;\n  }"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"search_container": "_1yXcHCc2vIsU2T4Ouu6ZvV",
		"search_box": "_2YThysAhckloedhzId08Dl",
		"search_button": "jB4yaaxByCJu5Z7wic4R6",
		"test": "_1c46rorvCjy7Ll2IbWD3de"
	};

/***/ },
/* 7 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
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
/* 8 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
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
		if(true) {
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
/* 9 */
/*!**********************************!*\
  !*** ./client/home/container.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 3);
	
	var _nav = __webpack_require__(/*! ./nav */ 10);
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _container = __webpack_require__(/*! ./container.css */ 11);
	
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
			// this.state = {
			// 	data: ''
			// };
		}
	
		_createClass(Container, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log('componentWillMount');
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log('componentDidMount');
				// this.fetchData();
			}
		}, {
			key: 'fetchData',
			value: function fetchData() {
				var _this2 = this;
	
				var url = "/api/test";
				fetch(url).then(function (response) {
					return response.text();
				}).then(function (responseData) {
					console.log(responseData);
					_this2.setState({
						data: responseData
					});
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: _container2.default.content },
					_react2.default.createElement(_nav2.default, null),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'article',
							null,
							'change content',
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/' },
								'home'
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/about' },
								'about'
							),
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/test' },
								'test'
							),
							this.props.children
						),
						_react2.default.createElement(
							'aside',
							null,
							'aside'
						)
					),
					_react2.default.createElement(
						'footer',
						null,
						_react2.default.createElement(
							'div',
							null,
							'no change content'
						)
					)
				);
			}
		}]);
	
		return Container;
	}(_react2.default.Component);
	
	/*
	<Nav />
	<div>
		<article>
			change content
			<Link to="/">home</Link>
			<Link to="/about">about</Link>
			<Link to="/test">test</Link>
			{this.props.children}
		</article>
		<aside>aside</aside>
	</div>
	<footer>
		<div>no change content</div>
	</footer>*/
	
	// <header>
	// 	<div>no change content</div>
	// 	<h1>title</h1>
	// 	<nav>nav</nav>
	// 	<div>img</div>
	// </header>
	
	
	exports.default = Container;

/***/ },
/* 10 */
/*!****************************!*\
  !*** ./client/home/nav.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nav = function (_React$Component) {
		_inherits(Nav, _React$Component);
	
		function Nav(props) {
			_classCallCheck(this, Nav);
	
			return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
		}
	
		_createClass(Nav, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'header',
					null,
					_react2.default.createElement(
						'nav',
						null,
						_react2.default.createElement(
							'ul',
							null,
							_react2.default.createElement(
								'li',
								null,
								'Home'
							),
							_react2.default.createElement(
								'li',
								null,
								'Artical'
							),
							_react2.default.createElement(
								'li',
								null,
								'About'
							)
						)
					)
				);
			}
		}]);
	
		return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;

/***/ },
/* 11 */
/*!***********************************!*\
  !*** ./client/home/container.css ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader?modules&sourceMap!./container.css */ 12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !./../../~/css-loader?modules&sourceMap!./container.css */ 12, function() {
				var newContent = __webpack_require__(/*! !./../../~/css-loader?modules&sourceMap!./container.css */ 12);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/*!********************************************************************!*\
  !*** ./~/css-loader?modules&sourceMap!./client/home/container.css ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\theight: 100%;\n\twidth: 100%; \n}\n\n\n.aVY-OoMjrozWEr-AIl65o {\n\tborder: 1px solid black;\n\tpadding: 0;\n\tmargin: 0;\n}", "", {"version":3,"sources":["/./client/home/container.css"],"names":[],"mappings":"AAAA;CACC,UAAU;CACV,WAAW;CACX;;AAED;CACC,aAAa;CACb,YAAY;CACZ;;;AAGD;CACC,wBAAwB;CACxB,WAAW;CACX,UAAU;CACV","file":"container.css","sourcesContent":["body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\theight: 100%;\n\twidth: 100%; \n}\n\n\n.content {\n\tborder: 1px solid black;\n\tpadding: 0;\n\tmargin: 0;\n}"],"sourceRoot":"webpack://"}]);
	
	// exports
	exports.locals = {
		"content": "aVY-OoMjrozWEr-AIl65o"
	};

/***/ }
]);
//# sourceMappingURL=app.js.map