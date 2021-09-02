console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'test',
        data: '',
    },
    methods: {
    },
    created() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((res) => {
                const obj = res.data.response;
                console.log(obj);
                this.data = obj;
            })
    }
})