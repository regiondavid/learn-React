# **回到最初的起点——继续react的探索**
##react组件的探索

###1. 创建一个react组件
	
创建方法一：使用React.createClass方法，传入一个对象，对象内必需定义一个render方法，render的返回值为要渲染(这也是为什么方法名字叫render的原因)的组件结构(也可以理解为调用的是React.createElement的工厂方法的返回值)，但是只能渲染一个组件结构，要是不想渲染的话，就返回false或null，当返回的是false或null时，渲染出来的结构就是<noscript></noscript>
``` js
//创建一个react组件
var MyComponent = React.createClass({
		render:function(){
		<p>Hello,I'm back!</p>
	}
})
```
***切记，组件名首字母必须大写 ***
		
创建方法二：直接创建无状态组件
		直接用function定义，返回要渲染的结构，拥有属性props，没有状态，所以组件内部不会维护状态，React内部也不会有组件的对应实例，并且没有生命周期hook，所以性能好。
```js
//创建一个无状态组件
function StatelessComponent(){
		return <div> HAHA{props.name} </div>
}
```
