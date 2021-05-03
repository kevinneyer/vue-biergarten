<template>
  <div>
    <User />
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User'

export default {
  name: 'UsersPage',
  components: {
    User
  }
}
</script>