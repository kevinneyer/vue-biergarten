<template>
    <div>
        All Beers
        <div v-if="loaded">
            <div v-for="beer in beers" :key="beer.id">
                {{ beer.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Beers',
    data(){
        return{
            beers: [],
            loaded: false
        }
    },
    methods: {
        getBeers(){
            const axios = require('axios');
            axios.get('http://localhost:3001/api/v1/beers/')
            .then((res) => {
                this.beers = res.data;
                this.loaded = true
            })
        }
    },
    mounted() {
        this.getBeers()
    }
}
</script>