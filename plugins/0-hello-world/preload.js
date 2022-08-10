/**
 * 这里为提前加载的代码，可以使用node和electron相关API
 */
const os = require("os")

window.getPlatform = function () {
  return os.platform();
}