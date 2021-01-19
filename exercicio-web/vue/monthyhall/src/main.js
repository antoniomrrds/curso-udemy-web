import Vue from 'vue'
import App from './App'

//outra forma de renderizar a pagina sem ser o padrao vue js
// new Vue({
//     el:'#app',
//     render(createElement) { 
//         return createElement(App) 
//     }
// })

new Vue({
    render :h => h(App)

}).$mount("#app")
