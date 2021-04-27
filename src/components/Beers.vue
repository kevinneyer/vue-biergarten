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
            Loading....
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
            originalBeers: [],
            beers: [],
            loading: true,
            filter: 'null',
            sort: null
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
            console.log(this.sort)
            if(sort === 'a-z'){
                this.beers.sort((a,b) => (a.name < b.name ? -1 : 1) )
            } else if
                (sort === 'z-a'){
                this.beers.sort((a,b) => (a.name < b.name ? 1 : -1) )
            } else if
                (sort === 'abv-asc'){
                    this.beers.sort((a,b) => (a.abv < b.abv ? -1 : 1) )
            } else if
                (sort === 'abv-desc'){
                    this.beers.sort((a,b) => (a.abv < b.abv ? 1 : -1) )
            } 
        }
    },
    mounted() {
        this.getBeers()
    },
    computed: {
        letsFilter(){
            // return [...this.beers]
            let spread = [...this.beers]

            if(this.filter === 'null'){
                return spread
            } else
                return spread.filter(beer => beer.style.includes(this.filter))
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