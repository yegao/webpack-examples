const utils = require('loader-utils');

module.exports = function(source) {
    const url = utils.interpolateName(this, '[hash].[ext]', { content: source })
    console.log(url)
    this.emitFile(url, source) // 将内容写入到指定的位置
    const path = `__webpack_public_path__+${JSON.stringify(url)}`
    return `export default ${path}`
}