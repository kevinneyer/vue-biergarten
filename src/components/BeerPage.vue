<template>
    <div v-if="!loading">
        <div class='show-beer'>
            <div>
                <img class='show-image' :src="showBeer.img_url"  :alt="showBeer.name" />
            </div>
            <div>
                <h4>{{ showBeer.name }}</h4>
                <h5>{{ showBeer.brewery}}</h5>
                <p>{{ showBeer.style }} - {{ showBeer.abv }}%</p>
                <p>{{ showBeer.description }}</p>
                <p>{{ showBeer.tasting_notes }}</p>
            </div>
        </div>
        <Reviews :reviews="showBeer.reviews" />
        <!-- <div class='add-review'>
            <form v-on:submit='reviewHandler'>
                <input v-model="review" type='text' placeholder="Review Here..."/>
                <input v-model="rating" type='text' placeholder="Rating Here..."/>
                <input type='submit'/>
            </form>
            
        </div> -->
    </div>
</template>

<script>
import Reviews from './Reviews'
// import axios from 'axios';

export default {
    name: 'BeerPage',
    components: {
        Reviews
    },
    data() {
        return{
            showBeer: [],
            loading: true,
            review: '',
            rating: 0
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
    .show-beer{
        width: 50%;
        height: 50%;
    }
    .show-image{
        width: 25%
    }
    .add-review{
        display: block;
        margin: auto;
    }
</style>