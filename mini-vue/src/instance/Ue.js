/**
 * Ue构造器
 * @param {[type]} options [description]
 */
function Ue(options) {
    this._init(options)
}


Ue.prototype._init = function(options) {
    options = options || {}
    this.$el = null;
    //初始化空数据
    //通过_initScope方法填充
    this._data = {}

    this._initState()
}


Object.defineProperty(Ue.prototype, '$data', {
    get: function() {
        return this._data
    },
    set: function(newData) {
        if (newData !== this._data) {
            this._setData(newData)
        }
    }
})


/**
 * 构建实例的作用域
 * 包含
 * 观察 data
 * @return {[type]} [description]
 */
Ue.prototype._initState = function() {
    this._initProps()
}


/**
 * 初始化props属性
 * @return {[type]} [description]
 */
Ue.prototype._initProps = function() {
    var options = this.$options
    var el = options.el
    var props = options.props
}




export default Ue
