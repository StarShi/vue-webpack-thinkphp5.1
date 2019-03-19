const path = require("path");
module.exports = {
	dev:{
		mode:'development',
		assetsPublicPath: '/',
		assetsRoot:path.join(__dirname, "../public"),
		htmlOutPath:'../public/',
		assetsSubDirectory:'../static',
		staticPath:"../public/static"
	},
	build:{
		mode:'production',
		assetsPublicPath: '/web',//打包资源文件映射路径
		assetsRoot:path.join(__dirname, "../tp5/public/web"),//打包的js文件输出路径
		htmlOutPath:'../tp5/application/index/view/',//打包的html文件输出路径
		assetsSubDirectory:'../static',//静态资源文件夹路径
		staticPath:"../tp5/public/static",//静态资源复制路径
		clearRoot:path.resolve(__dirname, '../tp5'),//需要删除文件的根目录
		clearFiles:['public/static','public/web','application/index/view'],//需要删除的文件
	}
}