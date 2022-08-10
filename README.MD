# 插件说明

package.json

用于指定插件最基础的配置，一个最基础的配置信息如下：

核心字段说明：

name： 插件 npm 包名称，必填

pluginName： 插件显示名称，用于展示给使用者 必填

description： 插件描述，描述这个插件的作用 必填

author： 插件作者

entry： 入口文件，一般为 index.js

logo： 尺寸建议 200 * 200, 插件的 logo

version： 插件的版本 必填

homePage: 插件 readme raw 地址

pluginType: 插件类型，枚举：ui, system. 当前选 system 必填

