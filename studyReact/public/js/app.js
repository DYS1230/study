webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactRouter = __webpack_require__(3);
	
	var _About = __webpack_require__(4);
	
	var _About2 = _interopRequireDefault(_About);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var a = 101;
	
	console.log(a);
	
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
					{ className: 'content' },
					_react2.default.createElement(
						'header',
						null,
						_react2.default.createElement(
							'div',
							null,
							'no change content'
						),
						_react2.default.createElement(
							'h1',
							null,
							'title'
						),
						_react2.default.createElement(
							'nav',
							null,
							'nav'
						),
						_react2.default.createElement(
							'div',
							null,
							'img'
						)
					),
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
	
	var Home = function (_React$Component2) {
		_inherits(Home, _React$Component2);
	
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
	
	var Test = function (_React$Component3) {
		_inherits(Test, _React$Component3);
	
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
			{ path: '/', component: Container },
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
	
	var _about = __webpack_require__(5);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	console.log(_about2.default);
	
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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"search_container":"_1yXcHCc2vIsU2T4Ouu6ZvV","search_box":"_2YThysAhckloedhzId08Dl","search_button":"jB4yaaxByCJu5Z7wic4R6","test":"_1c46rorvCjy7Ll2IbWD3de"};

/***/ }
]);
//# sourceMappingURL=app.js.map