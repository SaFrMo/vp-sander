<template>
    <div class="landing-form-animate" :style="{ '--opacity': opacity }">
        <div :class="['content', cmpTransition]" :style="cmpStyle">
            <template v-if="splitText">
                <client-only>
                    <span v-for="(char, i) in finalText" :key="i">
                        <component
                            v-if="transitions && transitions.length > i"
                            :is="`transition-${transitions[i]}`"
                            :char="char"
                            @shake="shake"
                        >
                            <span
                                class="char"
                                v-html="
                                    char.trim() ? char : '&nbsp;'
                                "/></component></span
                    ><!--<span class="cursor">|</span>-->
                </client-only>
            </template>

            <template v-else-if="cmpTransition !== 'undefined'">
                <component :is="`transition-${cmpTransition}`">
                    {{ finalText }}
                </component>
            </template>
        </div>
    </div>
</template>

<script>
import { sample } from 'lodash'
import { tween, easing } from 'popmotion'

export default {
    props: { transitionIndex: { type: Number, default: 0 } },
    data() {
        return {
            // should match the names of all elements in `components/transition`
            transitionPool: [
                'clip',
                'spring-up',
                'aberration',
                'negative-shadow'
                // 'path-text'
            ],
            transitions: [],
            opacity: 0,
            interval: null,
            letterCount: 0,

            // shake
            shakeAmount: { x: 0, y: 0 },
            shakeInterval: null,
            shakeIntensity: 0,
            shakeIntensityFunc: null
        }
    },
    mounted() {
        this.mountEnter()

        this.fadeInAnimation()
        this.interval = setInterval(() => {
            if (this.letterCount < this.cmpText.length) {
                this.letterCount++
            } else {
                clearInterval(this.interval)
            }
        }, 100)

        this.shakeInterval = setInterval(() => {
            this.shakeAmount = {
                x: Math.random() * 10,
                y: Math.random() * 10
            }
        }, 80)
    },
    computed: {
        cmpText() {
            return 'Sander Moolin'
        },
        finalText() {
            return this.cmpText.slice(0, this.letterCount + 1)
        },
        cmpTransition() {
            return this.transitions[this.transitionIndex]
        },
        splitText() {
            return this.cmpTransition !== 'path-text'
        },
        cmpStyle() {
            return {
                '--x': this.shakeIntensity * this.shakeAmount.x + 'px',
                '--y': this.shakeIntensity * this.shakeAmount.y + 'px'
            }
        }
    },
    methods: {
        fadeInAnimation() {
            this.opacity = 1
            // tween({ duration: 4000 }).start(v => (this.opacity = v))
        },
        updateTransitions() {
            const length = this.cmpText.heroText.length
            while (length > this.transitions.length) {
                this.transitions.push(sample(this.transitionPool))
            }
            while (length < this.transitions.length) {
                this.transitions.pop()
            }
        },
        mountEnter() {
            // let index = Math.floor(Math.random() * this.transitionPool.length)
            //
            // this.transitionIndex = index
            const randomTransition = this.transitionPool[this.transitionIndex]

            const startText = 'Sander Moolin'
            let i = 0

            const time = randomTransition === 'clip' ? 60 : 75
            this.interval = setInterval(() => {
                this.transitions.push(randomTransition)
                if (i === startText.length) {
                    clearInterval(this.interval)
                }
            }, time)
        },
        shake() {
            if (this.shakeIntensityFunc) {
                this.shakeIntensityFunc.stop()
            }

            this.shakeIntensityFunc = tween({
                from: 1,
                to: 0,
                duration: 300,
                ease: easing.easeOut
            }).start(v => {
                this.shakeIntensity = v
            })
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    },
    watch: {
        transitionIndex(n) {
            this.fadeInAnimation()
        }
    }
}
</script>

<style lang="scss">
.landing-form-animate {
    align-content: center;
    height: min-content;
    margin: auto 0;
    text-align: left;
    opacity: var(--opacity);

    .content {
        font-family: 'Easley';
        font-size: 92px;
        font-size: 10vmin;

        &.clip {
            transform: translate(var(--x), var(--y));
        }

        .char {
            display: inline-block;
        }
    }
    .cursor {
        animation: blink 1.5s infinite step-start;
    }
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
