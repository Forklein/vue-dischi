console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'test',
    },
    methods: {

    }
})