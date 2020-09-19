<template>
    <div class="matter-wrap"><full-canvas @canvas-ready="init" /></div>
</template>

<script>
import matter from '../mixins/matter'
import { Bodies } from 'matter-js'
import FullCanvas from '@fuzzco/full-canvas'

export default {
    components: { FullCanvas },
    mixins: [matter],
    methods: {
        init(canvas) {
            // create a matter world and add walls to it
            this.matterInit({ render: canvas })
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
}
</script>

<style lang="scss">
.matter-wrap {
    position: relative;
}
</style>
