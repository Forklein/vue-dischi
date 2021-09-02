console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        test: 'test',
        data: '',
        filterValue: '',
        genre: []
    },
    methods: {
        getData() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((res) => {
                    const obj = res.data.response;
                    this.data = obj;
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        getGenre() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((res) => {
                    const obj = res.data.response;
                    const tempArr = [];
                    obj.forEach((element, index) => {
                        if (!tempArr.includes(element.genre)) {
                            tempArr.push(element.genre)
                        }
                    })
                    this.genre = tempArr;
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    created() {
        this.getData();
        this.getGenre();
    }
})