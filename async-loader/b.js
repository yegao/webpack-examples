
module.exports = function (source) {
    console.log(source)
    console.log('start b ...')
    const callback = this.async()
    setTimeout(() => {
        callback(null, 'export default \'b\'')
    }, 3000);
}