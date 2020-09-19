<template>
    <nav class="main-menu" aria-labelledby="main-menu-title">
        <!-- <h1 id="main-menu-title">Sander Moolin</h1> -->

        <ul>
            <li v-for="(page, i) in cmpPages" v-if="page.title != 'Home'">
                <router-link class="old-button" :to="page.path">{{
                    page.title
                }}</router-link>
            </li>
            <li>
                <a
                    class="old-button"
                    href="//gist.github.com/SaFrMo/29a6fbd90047233ec9bf124acba2044b"
                    >Sites</a
                >
            </li>
            <li>
                <a class="old-button" href="//three-examples.netlify.com"
                    >3D Examples</a
                >
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        cmpPages() {
            return this.$site.pages.filter(
                page => page.title.toLowerCase() != 'static'
            )
        }
    }
}
</script>

<style lang="scss">
@import '.vuepress/styles/vars';

.main-menu {
    font-size: 21px;
    margin-left: 0;
    font-weight: 500;
    position: fixed;
    right: 20px;
    bottom: 20px;

    h1 {
        border-bottom: 2px solid $color2;
        color: $color1;
    }
    ul {
        padding: 0;
        list-style-type: none;
        margin: 0;

        display: grid;
        grid-gap: 10px;
        grid-auto-flow: column;

        @media (max-width: 750px) {
            grid-auto-flow: initial;
            justify-content: flex-end;
            text-align: right;
        }
    }
}

@media (max-width: 750px) {
    // .main-menu {
    //     right: 10px;
    //     bottom: 10px;
    //     left: 10px;
    //     width: initial;
    // }
}
</style>
