<template>

    <div>
        <h1> Страница с постами </h1>
        <h1> {{ $store.state.likes }}</h1>

        <my-input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск...." v-focus />

        <div class="app__btns">
            <my-button @click="showDialog"> Создать пост</my-button>

            <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" @close="closeDialog" />

        </my-dialog>

        <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />

        <div v-else> Идет загрузка... </div>

        <div v-intersection="loadMorePosts" class="observer"> </div>

        <!-- <div class="page__wrapper"> 
            <div 
            :key="pageNumber" 
            v-for="pageNumber in totalPages"
            class="page"
            :class="{
                'currunt__page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            > {{ pageNumber }} </div>
        </div> -->


    </div>


</template>

<script>

import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import MyButton from "@/components/UI/MyButton"
import MySelect from "@/components/UI/MySelect"
import MyInput from "@/components/UI/MyInput"
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {

    components: {
        PostForm, PostList, MyButton, MySelect, MyInput
    },

    data() {
        return {
            dialogVisible: false,
        }
    },


    methods: {

        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        closeDialog() {
            this.dialogVisible = false
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber
        //     this.fetchPosts()
        // },



    },
    mounted() {
        this.fetchPosts();
        console.log(this.$refs.observer)
    },
    computed: {
        ...mapState({
            posts: state => state.post.post,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
        }),

        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
            // singlePost: 'post/singlePost'
        })
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }

    }
}
</script>

<style >
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.currunt__page {
    border: 2px solid teal;
}

.observer {
    height: 30px;

}
</style>
