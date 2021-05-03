<template>
    <div>
        <h1>{{ showUser.username }}</h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'User',
    data(){
        return{
            showUser: []
        }
    },
    methods: {
        getUser() {
            axios.get(`http://localhost:3001/api/v1/users/${this.$route.params.id}`)
            .then((res) => {
                this.showUser = res.data
            })
        }
    }, 
    mounted() {
        this.getUser()
    }
}
</script>