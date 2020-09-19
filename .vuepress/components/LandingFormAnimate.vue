<template>
    <div class="landing-form-animate">
        <div
            :class="['content', cmpTransition]"
            @click="focusInput"
            :style="cmpStyle"
        >
            <template v-if="splitText">
                <client-only>
                    <span v-for="(char, i) in cmpText" :key="i">
                        <component
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
                    {{ cmpText }}
                </component>
            </template>
        </div>
    </div>
</template>

<script>
import { sample } from 'lodash'
import { tween, easing } from 'popmotion'

export default {
    data() {
        return {
            // should match the names of all elements in `components/transition`
            transitionPool: [
                'clip',
                'spring-up',
                'aberration',
                'negative-shadow',
                // 'path-text'
            ],
            transitions: [],
            transitionIndex: 0,
            interval: null,

            // shake
            shakeAmount: { x: 0, y: 0 },
            shakeInterval: null,
            shakeIntensity: 0,
            shakeIntensityFunc: null
        }
    },
    mounted() {
        this.mountEnter()

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
        focusInput() {
            document.body.querySelector('.title .text-input').focus()
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
            let index = Math.floor(Math.random() * this.transitionPool.length)
            // while (index === this.$store.state.transitionIndex) {
            //     index = Math.floor(Math.random() * this.transitionPool.length)
            // }

            this.transitionIndex = index
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
    watch: {
        '$store.state.heroText'() {
            this.updateTransitions()
        }
    },
    beforeDestroy() {
        clearInterval(this.interval)
    }
}
</script>

<style lang="scss">
.landing-form-animate {
    align-content: center;
    height: min-content;
    margin: auto 0;
    text-align: left;

    .content {
        font-family: 'Easley';
        font-size: 92px;

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
