<template>
    <div class="matter-wrap"></div>
</template>

<script>
import matter from './mixins/matter'
import { Bodies } from 'matter-js'
// import FullCanvas from '@fuzzco/full-canvas'
import { wait } from './libs/utils'

export default {
    mixins: [matter],
    async mounted(canvas) {
        await this.$nextTick()

        const width = this.$el.offsetWidth
        const height = this.$el.offsetHeight

        // create a matter world and add walls to it
        this.matterInit({
            render: {
                element: this.$el,
                options: {
                    width,
                    height,
                    wireframe: false
                }
            },
            clear: false
        })
        this.matterWalls()
        this.matterMouse()

        for (let i = 0; i < 100; i++) {
            const dice = Math.random() * 2
            let body
            if (dice <= 1) {
                body = Bodies.circle(
                    Math.random() * width,
                    height * 0.2 * Math.random(),
                    Math.random() * 20 + 10,
                    {
                        restitution: Math.random(),
                        render: {
                            fillStyle: 'red',
                            strokeStyle: 'blue',
                            lineWidth: 3
                        }
                    }
                )
            } else if (dice <= 2) {
                body = Bodies.rectangle(
                    Math.random() * width,
                    height * 0.2 * Math.random(),
                    Math.random() * 20 + 10,
                    Math.random() * 20 + 10,
                    {
                        restitution: Math.random(),
                        render: {
                            fillStyle: 'red',
                            strokeStyle: 'blue',
                            lineWidth: 3
                        }
                    }
                )
            }
            this.matterAdd(body)
            await wait(Math.random() * 2000)
        }
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
