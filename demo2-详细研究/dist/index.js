webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// alert("Hello Webpack");
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(38);

	var Hello = React.createClass({
		displayName: "Hello",

		render: function render() {
			return React.createElement(
				"div",
				null,
				"Hello React And ",
				this.props.name
			);
		}
	});

	ReactDOM.render(React.createElement(Hello, { name: "Webpack" }), document.getElementById('AppRoot'));

/***/ }
]);