const { createApp } = Vue;

createApp({
    data() {
        return {
            discListJoin: [],
            apiUrlmusicphp: 'index.php',
            activeDisc: 0,
            clickedcd: false,
        }
    },

    created() {
        axios.get(this.apiUrlmusicphp).then((resp) => {
            this.discListJoin = resp.data;
            console.log(resp.data);
        })
    },

    methods: {
        handlePreview(index) {
            this.activeDisc = index;
            this.clickedcd = true;
        }
    },
}).mount('#app');