<template>
    <div class="square-of-squares">
        <!-- vue-three-wrap will stretch to fit its container by default -->
        <vue-three-wrap :start="start" :update="update" />
    </div>
</template>

<script>
import VueThreeWrap from 'vue-three-wrap'
import * as THREE from 'three'

export default {
    components: {
        'vue-three-wrap': VueThreeWrap
    },
    methods: {
        // called once when the scene is created
        start({ scene, camera, renderer }) {},
        // called once per frame
        update({ scene, camera, renderer }) {}
    }
}
</script>

<style lang="scss">
.square-of-squares {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
