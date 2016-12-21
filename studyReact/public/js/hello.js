webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var a = 10;
	
	console.log(a);
	
	a += 10;
	
	console.log(a);
	
	var Hello = function (_React$Component) {
	  _inherits(Hello, _React$Component);
	
	  function Hello() {
	    _classCallCheck(this, Hello);
	
	    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
	  }
	
	  _createClass(Hello, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          '11123'
	        )
	      );
	    }
	  }]);
	
	  return Hello;
	}(_react2.default.Component);
	
	(0, _reactDom.render)(_react2.default.createElement(Hello, null), document.querySelector('#container'));
	
	/*var React = require('react');
	var ReactDOM = require('react-dom');

	var CommentBox = React.createClass({
	  render: function() {
	    return (
	      <div className="commentBox">
	        Hello, world! I am a CommentBox.
	      </div>
	    );
	  }
	});
	ReactDOM.render(
	  <CommentBox />,
	  document.getElementById('container')
	);*/

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.ReactDOM;

/***/ }
]);
//# sourceMappingURL=hello.js.map