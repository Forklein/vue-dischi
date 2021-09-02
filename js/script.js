console.log('Vue is activated', Vue);
Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data: {
        data: [],
        filterValue: 'All',
        genre: []
    },
    computed: {
        dataSort() {
            return this.data.sort((a, b) => {
                return (a.year - b.year);
            });
        },
        filteredValue() {
            const currentList = this.dataSort;
            if (this.filterValue == 'All') {
                return currentList;
            }
            return currentList.filter(element => (element.genre == this.filterValue));
        }
    },
    methods: {
        getData() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((res) => {
                    const obj = res.data.response;
                    this.data = obj;
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
        },
    },
    created() {
        this.getData();
    }
})