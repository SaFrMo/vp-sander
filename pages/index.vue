<template>
    <main class="home">
        <!-- <button class="title-wrap" @click="expanded = !expanded"> -->
            <h1 :class="['title', { expanded }]">Sander Moolin</h1>
        <!-- </button> -->

        <nav class="list">

            <nuxt-link to="/programming">Programming</nuxt-link>,
            <nuxt-link to="/games">games</nuxt-link>,
            <nuxt-link to="/blog">blog</nuxt-link>

        </nav>

    </main>
</template>

<script>
import Vue from 'vue'

export default {
    data() {
        return {
            expanded: false
        }
    }
}
</script>

<style lang="scss">
.home {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // title
    .title {
        background: $black;
        display: inline-block;
        color: $white;
        padding: 10px;
    }
}
</style>
