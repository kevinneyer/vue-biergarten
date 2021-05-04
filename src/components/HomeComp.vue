<template>
    <div>
        Vue Biergarten
        <Beers />
    </div>
</template>

<script>
// import axios from 'axios';
import Beers from './Beers';

export default {
   name: 'HomeComp',
   components: {
       Beers
   },
   data() {
       return{
           currentUser: null
       }
   },
   methods: {
        getUser() {
            const token = localStorage.token

            if(token){
                fetch('http://localhost:3001/api/v1/auto_login', {
                    headers: {
                        "Authorization": token
                    }
                })
                .then(res => res.json())
                .then(data => {
                    if (data.errors){
                        alert(data.errors)
                    } 
                    else
                        this.currentUserUser = data 
                })
            } 
       }
   },
   mounted() {
       this.getUser
   }
}
</script>