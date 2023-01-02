<template>
    <form @submit.prevent>
        <h4> Создание поста</h4>
        <my-input v-focus v-model="post.title" type="text" placeholder="Название" />

        <my-input v-model="post.body" type="text" placeholder="Описание" />

        <my-button @click="createPost" style="align-self: flex-end; margin-top: 15px;"> Создать </my-button>

        <my-button @click="closeDialog" style="align-self: flex-end; margin-top: 15px;"> Закрыть </my-button>

    </form>
</template>

<script>
export default {

    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        },
        closeDialog() {
            this.$emit('close')
        }
    },
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
}
</style>
