<template>
    <span class="path-text-transition">
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="text-path"
                fill="none"
                stroke="var(--purple)"
                :d="`M-1,50 q50,${qy} 102,0`"
            />

            <text class="path-text" font-family="Easley">
                <textPath href="#text-path" startOffset="50%">
                    <slot />
                </textPath>
            </text>
        </svg>
    </span>
</template>

<script>
import { pointer, transform, physics } from 'popmotion'
const { interpolate } = transform
import { clamp } from 'lodash'
import { wait } from './libs/utils'

export default {
    data() {
        return {
            pointer: null,
            physics: null,
            qx: 0,
            qy: 0
        }
    },
    async mounted() {
        await wait(400)

        this.pointer = pointer().start(this.updateMouse)
        this.physics = physics({
            from: { qx: -1, qy: -1 },
            to: { qx: 0, qy: 0 },
            springStrength: 400,
            friction: 0.8,
            restSpeed: 0
        }).start(({ qx, qy }) => {
            this.qx = qx
            this.qy = qy
        })
    },
    computed: {
        interpolateX() {
            return interpolate([0, 1], [0, 100])
        },
        interpolateY() {
            return interpolate([0, 1], [5, 20])
        }
    },
    methods: {
        updateMouse(newVal) {
            // TODO: `value` to first position so we don't get jumps on load?
            const rect = this.$el.getBoundingClientRect()
            const mid = {
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
            }
            const delta = {
                x: newVal.x / window.innerWidth,
                y: newVal.y / window.innerHeight
            }

            this.physics.setSpringTarget({
                qx: this.interpolateX(delta.x),
                qy: this.interpolateY(delta.y)
            })
        }
    },
    beforeDestroy() {
        if (this.pointer) {
            this.pointer.stop()
            this.pointer = null
        }
    }
}
</script>

<style lang="scss">
.path-text-transition {
    pointer-events: none;

    svg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
 
        .path-text {
            font-famly: 'Easley';
            font-size: 10px;
            alignment-baseline: middle;
            text-anchor: middle;
        }
    }
}
</style>
