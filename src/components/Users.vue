<template>
    <div>
        All Users
        <div class='users' v-if="!loading">
            <div class='user-cards' v-for="user in users" :key="user.id">
                <div>
                    <img class='image' :src="user.image"  :alt="user.username" />
                </div>
                <div class='card-info'>
                    <h4>{{ user.username }}</h4>
                    <router-link :to="{ name: 'UserShow', params: { id: user.id } }"> 
                        <button>See User</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; 

export default {
    name: 'Users',
    data() {
        return{
            users: [],
            loading: true
        }
    },
    methods: {
        getUsers() {
            axios.get('http://localhost:3001/api/v1/users')
            .then((res) => {
                this.users = res.data
                this.loading = false
            })
        }
    },
    mounted() {
        this.getUsers()
    }
}
</script>

<style>
    .users{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .user-cards{
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          height: 250px;
          width: 250px;
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