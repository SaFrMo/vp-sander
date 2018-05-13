<template>

    <main>

        <transition name="fade">
            <component :is="cmpComponent"/>
        </transition>

    </main>

</template>

<script>
import { kebab } from 'case'
import { autoBlur } from 'auto-blur'
import Vue from 'vue'

// register global components
Vue.component('a-div', require('fh-components/src/a-div/ADiv.vue'))

// register directives
import fullHeight from 'fh-components/v-full-height'
Vue.directive('full-height', fullHeight)

export default {
    mounted() {
        autoBlur()
    },
    computed: {
        cmpComponent() {
            const title =
                this.$page.frontmatter.layout ||
                this.$page.frontmatter.title ||
                'default'
            return kebab(title)
        }
    }
}
</script>

<style lang="scss">
@import '.vuepress/styles/vars';
@import '.vuepress/styles/animations';

body {
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

a {
    text-decoration: none;
    color: $color1;
    // transition: color 0.4s;

    &:hover,
    &:focus {
        color: $color2;
    }
}

// transitions
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
</style>
