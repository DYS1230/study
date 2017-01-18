webpackHotUpdate(0,{

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _nav = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./nav\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _nav2 = _interopRequireDefault(_nav);
	
	var _container = __webpack_require__(14);
	
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

/***/ }

})
//# sourceMappingURL=0.d2d2597cab5cded138a3.hot-update.js.map