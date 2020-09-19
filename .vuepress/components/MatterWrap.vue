<template>
    <div class="matter-wrap"></div>
</template>

<script>
import matter from './mixins/matter'
import { Bodies } from 'matter-js'
// import FullCanvas from '@fuzzco/full-canvas'

export default {
    mixins: [matter],
    async mounted(canvas) {
        await this.$nextTick()
        // create a matter world and add walls to it
        this.matterInit({
            render: {
                element: this.$el,
                options: {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight
                }
            },
            clear: false
        })
        this.matterWalls()

        const body = Bodies.rectangle(
            // width and height are computed props that return matterInit's created canvas's width and height
            this.width / 2,
            this.height / 2,
            50,
            50
        )
        this.matterAdd(body)
    }
}
</script>

<style lang="scss">
.matter-wrap {
    position: relative;
    width: 100%;
    height: 100%;

    canvas {
        background: transparent !important;
    }
}
</style>
