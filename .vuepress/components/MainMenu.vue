<template>

    <nav class="main-menu" aria-labelledby="main-menu-title">
        <h1 id="main-menu-title">Sander Moolin</h1>

        <ul>
            <li
                v-for="(page, i) in $site.pages"
                v-if="isMenuItem(page)">
                <router-link :to="page.path">{{ page.title }}</router-link>
            </li>
        </ul>
    </nav>

</template>

<script>
import { isMenuItem } from '../utils'

export default {
    methods: {
        isMenuItem
    }
}
</script>

<style lang="scss">
@import '.vuepress/styles/vars';

.main-menu {
    font-size: 21px;
    text-align: left;
    display: inline-block;
    width: 350px;
    margin-left: 0;
    border: 4px solid #000;
    padding: 0 30px;
    background-color: #fff;

    position: absolute;
    right: $body-padding;
    bottom: $body-padding;

    h1 {
        border-bottom: 2px solid $color2;
        color: $color1;
    }
    ul {
        padding: 0;
        list-style-type: none;
    }
}

@media (max-width: 750px) {
    .main-menu {
        right: 10px;
        bottom: 10px;
        left: 10px;
        width: initial;
    }
}
</style>
