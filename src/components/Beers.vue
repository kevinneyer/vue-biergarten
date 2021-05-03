<template>
    <div>
        <h1 class='header'>All Beers</h1>
          <FilterBeers 
          @style-handler='filterStyles'
          @sort-handler='sortHandler' />
        <div class='beers' v-if="!loading">
            <div class='beer-cards' v-for="beer in letsFilter" :key="beer.id">
                <div>
                    <img class='image' :src="beer.img_url"  :alt="beer.name" />
                </div>
                <div class='card-info'>
                    <h4>{{ beer.name }}</h4>
                    <h5>{{ beer.brewery}}</h5>
                    <p>{{ beer.style }} - {{ beer.abv }}%</p>        
                    <router-link :to="{ name: 'ShowPage', params: { id: beer.id } }"> 
                        <button>More Info</button>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
import FilterBeers from './FilterBeers'
import axios from 'axios';

export default {
    name: 'Beers',
    components: {
        FilterBeers
    },
    data() {
        return{
            beers: [],
            loading: true,
            filter: 'null',
            sort: 'null'
        }
    },
    methods: {
        getBeers(){
            axios.get('http://localhost:3001/api/v1/beers/')
            .then((res) => {
                this.beers = res.data;
                this.loading = false
            })
        },
        filterStyles(style){
            this.filter = style
        },
        sortHandler(sort){
            this.sort = sort
        }
    },
    mounted() {
        this.getBeers()
    },
    computed: {
        letsFilter(){
            let spread = [...this.beers];
            // Begin Sort and Filter Logic
            if(this.filter !== 'null' && this.sort === 'null'){
                return spread.filter(beer => beer.style.includes(this.filter))
            } else if (this.filter !== 'null' && this.sort === 'a-z'){
                return spread.filter(beer => beer.style.includes(this.filter)).sort((a,b) => (a.name < b.name ? -1 : 1))
            } else if(this.filter !== 'null' && this.sort === 'z-a'){
                return spread.filter(beer => beer.style.includes(this.filter)).sort((a,b) => (a.name > b.name ? -1 : 1))
            } else if(this.filter !== 'null' && this.sort === 'abv-asc'){
                return spread.filter(beer => beer.style.includes(this.filter)).sort((a,b) => (a.abv < b.abv ? -1 : 1))
            } else if(this.filter !== 'null' && this.sort === 'abv-desc'){
                return spread.filter(beer => beer.style.includes(this.filter)).sort((a,b) => (a.abv > b.abv ? -1 : 1))
            } 
            // If No Filter Selected
            else if (this.filter === 'null' && this.sort === 'a-z'){
                return spread.sort((a,b) => (a.name < b.name ? -1 : 1))
            } else if(this.filter === 'null' && this.sort === 'z-a'){
                return spread.sort((a,b) => (a.name > b.name ? -1 : 1))
            } else if(this.filter === 'null' && this.sort === 'abv-asc'){
                return spread.sort((a,b) => (a.abv < b.abv ? -1 : 1))
            } else if(this.filter === 'null' && this.sort === 'abv-desc'){
                return spread.sort((a,b) => (a.abv > b.abv ? -1 : 1))
            } else
                return spread 
        }
    }
}
</script>

<style>
    .beers{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .header{
        text-align: center;
        margin-bottom: 10px;
    }
    .beer-cards{
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          height: 350px;
          width: 300px;
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