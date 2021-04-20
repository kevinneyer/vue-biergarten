<template>
    <div v-if="!loading">
        <div class='beer-cards' >
            <div>
                <img class='image' :src="showBeer.img_url"  :alt="showBeer.name" />
            </div>
            <div class='card-info'>
                <h4>{{ showBeer.name }}</h4>
                <h5>{{ showBeer.brewery}}</h5>
                <p>{{ showBeer.style }} - {{ showBeer.abv }}%</p>
                <p>{{ showBeer.description }}</p>
                <p>{{ showBeer.tasting_notes }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BeerPage',
    props: ['id'],
    data() {
        return{
            showBeer: [],
            loading: true
        }
    },
    methods: {
        getShowBeer() {
            const axios = require('axios');
            axios.get(`http://localhost:3001/api/v1/beers/${this.$route.params.id}`)
            .then((res) => {
                this.showBeer = res.data
                this.loading = false
            })
        }
    },
    mounted() {
        this.getShowBeer()
    }
}
</script>

<style>
    .beer-cards{
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          height: auto;
          width: 50%;
          margin-top: 5px;
          margin-right: 5px;
          margin-bottom: 5px;
    }
    .image{
        display: block;
        margin: auto;
        text-align: center;
        width: 115px;
    }
    .card-info{
        text-align: center;
    }
</style>