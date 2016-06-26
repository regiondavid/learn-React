# **继续2.2 --Webpack**
---
##**配置文件**

	* 入口文件
	* 
		* entry
		* 
			* 单一出口：
			* 
				1. entry : 'url'
				2. entry : ['url']
				3. entry : {index: 'url', } 

			* 多入口文件： entry: ['url-1','url-2']


	* 打包输出
	* 
		* output：{ path : 'url',
					filename : [name -entry对应的名称][hash --webpack对应的hash][chunkhash --chunk的hash值]，
					others 
				  }


##**webpack中重要元素之一——loader**
loader能将所有东西转化成js模块，**但是loader仍属于module的一种，所以在config.js里依然把他放在module下，但是plugins已经独立到module同层了**
所以在我此时间点看来Babel虽然重要，但他还是众多loaders里的一种，但是能够提供类似解析React，ES6，JSX等语法的功能，转化为普及的更适合普通浏览器的ES5或ES3。
> loader 功能

>	1. loader 管道：在同一种类型的源文件上，可以同时执行多个 loader ， loader 的执行方式可以类似管道的方式，管道执行的方式是从右到左的方式loader 可以支持同步和异步

>	2. loader 可以接收配置参数

>	3. loader 可以通过正则表达式或者文件后缀指定特定类型的源文件

>	4. 插件可以提供给 loader 更多功能

>	5. loader 除了做文件转换以外，还可以创建额外的文件




>	作者：陈学家
	链接：https://zhuanlan.zhihu.com/p/21287263
	来源：知乎
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
#
> ** *不懂的地方：  显示的调用 require 会增加模块的耦合度，应尽量避免这种方式* **

用法： 
```	js
		module: {
		     loaders: [
		          {
		              test: /\xx.xx$/, //正则识别对应要使用loader的文件
		              exclude : /node_modules/, //不去匹配哪些元素，节约打包的时间
		              loaders: ["xx","xx"], //要使用的loader ，另一种写法 loader: "aa!bb" 
		              query : {}//配置loader参数
		          }
		     ]
		}
```
css-loader|style-loader都是把css编译成js添加到html中，直接显示在head中，生成的js名字看entry里是如何定义的，如果把它跟别的入口文件定义在同一个name下，那么最后会编译到同一个js中，反之就是各自的输出规则下的js中。
##**插件**——2.2.8~2.2.9（留坑待填）
感觉此节内容讲解不足，只是单纯列举了两个插件的用法，对于作用和普遍用法说的不够清楚。。。等之后从别的地方学学补充到此处

##**用webpack起个服务器——webpack-dev-server** ——2.2.10
按照教程所说，安装webpack-dev-server -g时会报错
> npm WARN webpack-dev-server@1.14.1 requires a peer of webpack@>=1.3.0 <3 but none was installed.
查询了package.json版本也没啥问题，估计问题是出在当时安装webpack时没有全局安装，所以会报错。
在 -dev安装后果然没问题了。

+ ***小tip***： **`webpack-dev-server --content-base ./`**可以设置在该目录下启动服务器（我又想起了被Apache的htdocs目录支配下的恐怖）

+ ###实时监控
类似gulp下的一个叫browser-sync的插件，实时更新，不过作用原理好像有些不一样
***注意的是：***需要在config.js中添加output.publicPath，这样才能访问在webpack-dev-server打包在内存中的东西,在publicPath下添加的url是相对于刚才起服务器的地址的相对地址
+ ###自动刷新
终于想出是哪里不同了。对！就是自动刷新！这个才是我最开始接触并学习前端自动化构建的目的——去他丫的F5！
	1. iframe模式
			用法：只需要将原来的地址localhost:8080/index.html ——> localhost:8080/webpack-dev-server/index.html 即可
		特点：  	
		*				 不需要额外配置
		*				 应用被嵌入到一个iframe内部，其顶部可以显示打包进度信息
		*			 因为iframe关系，如果应用有多个页面，是无法看到当前应用的URL信息（~~虽然没搞懂有什么用~~）
	2. inline模式
	 	命令行启动时需要添加 --inline
+ ###热加载 (Hot module replacement)
	好处就是不用刷新浏览器，只是更新内容(感觉跟react的virtul-dom原理有点像，当然virtul-dom还没看，纯属瞎扯)
	为了简化，我在package.json中把这行命令简化成了 webpack-dev-server **或者**是在config.js中的plugins中添加devServer，并设置
``` js
		devServer: {
			inline: true,
			hot:true
		}
```
	只需要在"scrips"下添加一行 **`"webpack-dev-server": "webpack-dev-server --content-base ./ --inline --hot"`** 即可
+ 其他功能——没咋懂，教程也没细讲，so,跳过！
	1. 配置 proxy 
	2. 访问node.js的API
	3. 和现有的node服务集成