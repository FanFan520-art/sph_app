//Vue插件一定暴露一个对象
let myPlugins = {}

myPlugins.install = function(Vue, options){
    //options是use时传的配置对象
    Vue.directive(options.name, (element, params) => {
        element.innerHTML = params.value.toLowerCase();
        //console.log(options.name);
    })
}

export default myPlugins;