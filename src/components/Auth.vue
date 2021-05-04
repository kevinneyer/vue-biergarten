<template>
    <div>
        Auth Page
    <div>
        <h3>Sign Up</h3>
        <form class='signup'>
            <input v-model="username" type="text" placeholder="username"/><br />
            <input v-model="email" type="text" placeholder="email"/><br />
            <input v-model="password" type="password" placeholder="password" /><br />
            <input v-model="confirmPassword" type="password" placeholder="confirm password" /><br />
            <input v-model="image" type="text" placeholder="IMG url"/><br />
            <input type="submit" />
        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Auth',
    data() {
        return{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            image: ''
        }
    }
}
</script>

<style>

</style>