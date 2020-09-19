<template>
    <transition :css="false" appear>
        <span class="aberration-wrapper">
            <span :style="{ '--y': `${top}px` }" class="top" aria-hidden="true"
                ><slot /></span
            ><span
                :style="{ '--y': `${bottom}px` }"
                class="bottom"
                aria-hidden="true"
                ><slot
            /></span>
        </span>
    </transition>
</template>

<script>
import { tween, easing } from 'popmotion'

export default {
    mounted() {
        this.animation = tween({
            from: 20,
            to: 0,
            duration: 800,
            ease: easing.circIn
        }).start({
            update: v => {
                this.top = -v
                this.bottom = v
            },
            complete: () => {
                this.$emit('shake')
            }
        })
    },
    data() {
        return {
            top: -20,
            bottom: 20,
            animation: null
        }
    },
    beforeDestroy() {
        // clearInterval(this.update)
    }
}
</script>

<style lang="scss">
.aberration-wrapper {
    position: relative;
    white-space: nowrap;

    .top {
        display: inline-block;
        transform: translateY(var(--y));
        clip-path: polygon(
            51% 40%,
            68% 50%,
            85% 40%,
            100% 51%,
            100% 0,
            0 0,
            0 50%,
            17% 40%,
            34% 50%
        );
    }
    .bottom {
        transform: translateY(var(--y));
        display: inline-block;
        clip-path: polygon(
            51% 40%,
            68% 50%,
            85% 40%,
            100% 51%,
            100% 100%,
            0 100%,
            0 50%,
            17% 40%,
            34% 50%
        );
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
