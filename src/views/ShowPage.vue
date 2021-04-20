<template>
  <div class="home">
    <BeerPage />
  </div>
</template>

<script>
// @ is an alias to /src
import BeerPage from '@/components/BeerPage'

export default {
  name: 'ShowPage',
  components: {
    BeerPage
  }
}
</script>