<template>
    <main>
        <transition name="fade" appear>
            <component :is="cmpComponent" />
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
                this.$page.frontmatter.component ||
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

.old-button {
    border: 2px solid black;
    padding: 5px 8px;
    box-shadow: 3px 3px black;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    display: block;
    background: white;
    display: inline-block;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;

    &:hover,
    &:focus {
        box-shadow: 5px 5px var(--black);
        background: var(--gray);
    }

    &:active {
        transform: translate(3px, 3px);
        box-shadow: 0 0 var(--black);
        transition: transform 0.05s, box-shadow 0.05s;
        outline: none;
    }
}

a {
    text-decoration: none;
    color: $color1;
    transition: color 0.2s;

    svg.icon.outbound {
        display: none;
    }

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
