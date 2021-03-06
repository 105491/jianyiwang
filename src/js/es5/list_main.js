"use strict";

//主入口
//配置
require.config({
	//配置段路径（别名）
	paths: {
		"jq": "jquery-1.10.1.min",
		"common": "Common",
		"list": "list"
	},
	shim: {
		'list': ['jq', 'common']
	}
});
requirejs(['jq', 'common', 'list'], function ($) {
	console.log('列表页成功');
});