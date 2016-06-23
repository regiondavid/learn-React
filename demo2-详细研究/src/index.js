// alert("Hello Webpack");
var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
	render: function render(){
		return <div>Hello React And {this.props.name}</div>;
	}
});

ReactDOM.render(
	<Hello name="Webpack" />,
	document.getElementById('AppRoot')
);