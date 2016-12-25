webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _about = __webpack_require__(3);
	
	var _about2 = _interopRequireDefault(_about);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from 'react';
	// import {render} from 'react-dom';
	
	// import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
	
	// import styles from './about.css';
	
	// //import About from './About.js'
	
	// let a = 101;
	
	// console.log(a);
	
	// class Container extends React.Component {
	// 	constructor(props) {
	// 		super(props);
	// 		// this.state = {
	// 		// 	data: ''
	// 		// };
	// 	}
	// 	componentWillMount() {
	// 		console.log('componentWillMount');
	// 	}
	// 	componentDidMount() {
	// 		console.log('componentDidMount');
	// 		// this.fetchData();
	// 	}
	// 	fetchData() {
	// 		var url = "/api/test";
	// 		fetch(url)
	// 			.then( response => response.text() )
	// 			.then((responseData) => {
	// 				console.log(responseData);
	// 				this.setState({
	// 					data: responseData
	// 				});
	// 			});
	// 	}
	// 	render () {
	// 		return (
	// 			<div className="content">
	// 				<header>
	// 					<div>no change content</div>
	// 					<h1>title</h1>
	// 					<nav>nav</nav>
	// 					<div>img</div>
	// 				</header>
	// 				<div>
	// 					<article>
	// 						change content
	// 						<Link to="/">home</Link>
	// 						<Link to="/about">about</Link>
	// 						<Link to="/test">test</Link>
	// 						{this.props.children}
	// 					</article>
	// 					<aside>aside</aside>
	// 				</div>
	// 				<footer>
	// 					<div>no change content</div>
	// 				</footer>
	// 			</div>
	// 		);
	// 	}
	// }
	
	// class Home extends React.Component {
	// 	constructor(props) {
	// 		super(props);
	// 	}
	// 	render() {
	// 		return (
	// 			<h1>The Home content</h1>
	// 		)
	// 	}
	// }
	
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
	
	// class Test extends React.Component {
	// 	constructor(props) {
	// 		super(props);
	// 	}
	// 	render() {
	// 		return (
	// 			<h1>The Test content</h1>
	// 		)
	// 	}
	// }
	
	
	// render((
	// 	<Router history={browserHistory}>
	// 		<Route path="/" component={Container}>
	// 			<IndexRoute component={Home}/>
	// 			<Route path="/about" component={About}/>
	// 			<Route path="/test" component={Test}/>
	// 		</Route>
	// 	</Router>
	// ), document.querySelector('#container'));
	
	
	console.log(_about2.default);
	
	var Container = function (_React$Component) {
		_inherits(Container, _React$Component);
	
		function Container() {
			_classCallCheck(this, Container);
	
			return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
		}
	
		_createClass(Container, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: _about2.default.test },
					'test'
				);
			}
		}]);
	
		return Container;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(Container, null), document.querySelector('#container'));

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

	// removed by extract-text-webpack-plugin
	module.exports = {"search_container":"_1yXcHCc2vIsU2T4Ouu6ZvV","search_box":"_2YThysAhckloedhzId08Dl","search_button":"jB4yaaxByCJu5Z7wic4R6","test":"_1c46rorvCjy7Ll2IbWD3de"};

/***/ }
]);
//# sourceMappingURL=app.js.map