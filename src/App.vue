<template>

    <navbar-page> </navbar-page>
    <div class="app">

        <router-view> </router-view>

    </div>


</template>

<script>
import NavbarPage from '@/components/UI/NavbarPage';

export default {
    components: {
        NavbarPage
    }
}
</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>