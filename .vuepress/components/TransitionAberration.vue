<template>
    <transition :css="false" appear>
        <span class="aberration-wrapper">
            <span
                :style="{ '--x': `${r.x}px`, '--y': `${r.y}px` }"
                class="r"
                aria-hidden="true"
                ><slot /></span
            ><span class="g"><slot /></span
            ><span
                :style="{ '--x': `${b.x}px`, '--y': `${b.y}px` }"
                class="b"
                aria-hidden="true"
                ><slot
            /></span>
        </span>
    </transition>
</template>

<script>
const rand = (range = 5) => {
    return Math.random() * range - range / 2
}

export default {
    mounted() {
        this.update = setInterval(() => {
            this.r.x = rand()
            this.r.y = rand()
            this.b.x = rand()
            this.b.y = rand()
        }, 1000 / this.changePerSecond)
    },
    data() {
        return {
            r: { x: 0, y: 0 },
            b: { x: 0, y: 0 },
            update: null,
            changePerSecond: 10
        }
    },
    beforeDestroy() {
        clearInterval(this.update)
    }
}
</script>

<style lang="scss">
.aberration-wrapper {
    position: relative;
    white-space: nowrap;

    .r,
    .g,
    .b {
        mix-blend-mode: darken;
    }
    .r,
    .b {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .r {
        color: #f00;
        transform: translate(var(--x), var(--y));
    }
    .g {
        color: #0f0;
    }
    .b {
        color: #00f;
        transform: translate(var(--x), var(--y));
    }
}
</style>
