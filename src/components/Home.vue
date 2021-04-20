<template>
    <div>
        Vue Biergarten
        <Beers />
    </div>
</template>

<script>
import Beers from './Beers';

export default {
   name: 'Home',
   components: {
       Beers
   }
}
</script>