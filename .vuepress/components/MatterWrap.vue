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

        await wait(3000)

        const width = this.$el.offsetWidth
        const height = this.$el.offsetHeight

        // create a matter world and add walls to it
        this.matterInit({
            render: {
                element: this.$el,
                options: {
                    width,
                    height,
                    wireframes: false
                }
            },
            clear: false
        })
        this.matterWalls()
        this.matterMouse()

        for (let i = 0; i < 100; i++) {
            const dice = Math.random() * 2
            let body
            const fillOptions = ['#327786', '#429EB3', '#97CCD8', '#225059'] //['#F15152', '#084C61', '#D1BECF']
            const accents = ['#F7E08D', '#F29195', '#BEE5BF', '#A989A8']
            const period = 7
            const fillStyle =
                i % period || i === 0
                    ? fillOptions[
                          Math.floor(fillOptions.length * Math.random())
                      ]
                    : accents[(i / period - 1) % accents.length]
            if (dice <= 1) {
                body = Bodies.circle(
                    Math.random() * width,
                    height * -0.2 * Math.random(),
                    Math.random() * 20 + 10,
                    {
                        restitution: Math.random() * 0.6 + 0.4,
                        render: {
                            fillStyle
                        }
                    }
                )
            } else if (dice <= 2) {
                body = Bodies.rectangle(
                    Math.random() * width,
                    height * -0.2 * Math.random(),
                    Math.random() * 20 + 10,
                    Math.random() * 20 + 10,
                    {
                        restitution: Math.random() * 0.6 + 0.4,
                        render: {
                            fillStyle
                        }
                    }
                )
            }
            this.matterAdd(body)
            await wait(Math.random() * 800)
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
