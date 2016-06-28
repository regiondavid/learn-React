// alert("Hello Webpack");
var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
	render: function render(){
		return <div>Hello React123 And {this.props.name}</div>;
	}
});

//创建一个react组件(1)
var MyComponent = React.createClass({
	render:function(){
		<p>Hello,I'm back!</p>
	}
})

//创建一个无状态组件
function StatelessComponent(){
	return <div> HAHA{props.name} </div>
}

//创建子组件
// MyComponent.SubComponent = React.createClass({
// 	render:function(){
// 		<p>i'm 子组件</p>
// 	}
// })

//创建孙子组件
// MyComponent.SubComponent.Sub = React.createClass({
// 	render:function(){
// 		<p>i'm 孙子</p>
// 	}
// })
ReactDOM.render(
	<Hello name="Webpack122" />,
	document.getElementById('AppRoot')
);