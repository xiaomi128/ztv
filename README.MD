# 猿如意插件

猿如意插件仓库，欢迎大家贡献代码。

开发文档：https://rubickcenter.github.io/rubick/dev/#%E6%8F%92%E4%BB%B6%E8%AF%B4%E6%98%8E

参考模版：plugins/0-hello-word
### 公共资源
- jquery: http://cdn-static-devbit.csdn.net/devbit-static/js/jquery-3.3.1.min.js

- vue: http://cdn-static-devbit.csdn.net/devbit-static/js/vue.min.js

- tailwind.css: http://cdn-static-devbit.csdn.net/devbit-static/css/tailwind.min.css


#### package.json

用于指定插件最基础的配置，一个最基础的配置信息如下：

核心字段说明：

name： 插件 npm 包名称，必填 同文件名保持一致

pluginName： 插件显示名称，用于展示给使用者 必填

description： 插件描述，描述这个插件的作用 必填

author： 插件作者

main： 入口文件，一般为 index.html

logo： 尺寸建议 200 * 200, 插件的 logo

version： 插件的版本 必填

homePage: 插件 readme raw 地址

pluginType: 插件类型，枚举：ui, system. 当前选 ui 必填 ( ui 为需要运行界面的插件 system 为系统插件 )

preload: 预加载文件。可以直接node、electron相关代码；

### 开发调试

1. 打开 “猿如意” 客户端。在搜索框输入 "adddevmenu", 回车；
2. 回到首页，点击左侧菜单 “开发者”。
3. 把插件的package.json上传后，进入我的下载点击运行即可；
4. 修改代码，重新点击运行即可看到更新

