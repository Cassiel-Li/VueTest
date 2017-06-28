
(function (window) {
    // 定义
    let MyPlugin ={};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('myGlobalMethod()');
        };
        // 2. 添加全局资源
        Vue.directive('my-directive', { // 指令
            bind (el, binding, vnode, oldVnode) {
                el.innerHTML = 'my-directive指令' + binding.value;
            }
        });
        // 3. 注入组件
       /* Vue.mixin({
            created: function () {
                // 逻辑...
            }
            ...
        });*/
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (options) {
            console.log('Vue实例对象方法：$myMethod()');
        }
    }

    // 暴露
    window.MyPlugin = MyPlugin;
})(window);
