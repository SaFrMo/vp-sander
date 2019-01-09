<template>
    <main class="main">
        <square-of-squares/>

        <article>
            <Content/>
        </article>
    </main>
</template>

<script>
import Vue from 'vue'
Vue.directive('full-height', require('fh-components/v-full-height'))

export default {}
</script>

<style lang="scss">
.main {
}
</style>
