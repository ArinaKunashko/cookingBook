<template>
    <div>
        <h1> Это страница поста с ID = {{ $route.params.id }}</h1>
        <h2>{{ post.title }}</h2>
        <h3>{{ post.body }}</h3>
    </div>
</template>

<script>
import {  mapGetters  } from 'vuex'


export default {
    computed: {
        ...mapGetters({
            getPostById: 'post/getPostById'
        }),
        post: function() {
            return this.getPostById(this.$route.params.id)
        }
    },
}
</script>

<style scoped>

</style>