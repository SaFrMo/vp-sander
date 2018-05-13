<template>

    <section class="archive">

        <ul>
            <li
                v-for="(page, i) in $site.pages"
                v-if="isPost(page)">
                <router-link :to="page.path">{{ page.title }}</router-link>
            </li>
        </ul>

    </section>

</template>

<script>
import { isPost } from '../utils'

export default {
    methods: {
        isPost
    }
}
</script>
