<template>
    <span class="negative-shadow-transition" :style="cmpStyle">
        <slot />
    </span>
</template>

<script>
import { pointer, transform } from 'popmotion'
const { interpolate } = transform
import { clamp } from 'lodash'

const maxShadow = 5

export default {
    data() {
        return {
            x: 3,
            y: 3,
            mouse: null,
            pointer: null,
            maxShadow
        }
    },
    mounted() {
        this.pointer = pointer().start(this.updateMouse)
    },
    computed: {
        cmpStyle() {
            return {
                '--x': `${this.x}px`,
                '--y': `${this.y}px`
            }
        }
    },
    methods: {
        updateMouse(newVal) {
            const rect = this.$el.getBoundingClientRect()
            const mid = {
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
            }
            const delta = { x: newVal.x - mid.x, y: newVal.y - mid.y }

            this.x = clamp(
                this.interpolate(delta.x),
                this.maxShadow * -1,
                this.maxShadow
            )
            this.y = clamp(
                this.interpolate(delta.y),
                this.maxShadow * -1,
                this.maxShadow
            )
        },
        interpolate: interpolate([-350, 350], [maxShadow, maxShadow * -1])
    },
    beforeDestroy() {
        this.pointer.stop()
        this.pointer = null
    }
}
</script>

<style lang="scss">
.negative-shadow-transition {
    color: var(--white);
    filter: drop-shadow(var(--x) var(--y) 0 var(--black));
    -webkit-text-stroke: 1px var(--black);

    transition: filter 0.1s ease-out;
}
</style>
