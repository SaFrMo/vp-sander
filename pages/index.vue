<template>
    <main class="main">
        <h1>Sander Moolin</h1>
        <box-of-boxes/>
    </main>
</template>

<script>
import Vue from 'vue'

export default {
    mounted() {
        Vue.component('vue-three-wrap', require('vue-three-wrap').default)
    }
}
</script>

<style lang="scss">
h1 {
    color: $red;
}
</style>
