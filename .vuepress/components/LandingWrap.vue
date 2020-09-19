<template>
    <section class="landing-wrap">
        <!-- Salutation -->
        <h1 class="title">
            <transition name="fade">
                <div class="salutation" v-if="mainText === 'Sander Moolin'">
                    Hi! I'm
                </div>
            </transition>
            <input v-model="mainText" type="text" class="text-input" />
        </h1>

        <!-- Current Form -->
        <component :is="`landing-form-${cmpForm}`" :key="lastReload" />

        <!-- Buttons -->
        <div class="buttons">
            <!-- Form toggles -->

            <button
                class="button-reset form-toggle"
                @click="
                    selectedFormIndex = i
                    lastReload = Date.now()
                "
            >
                {{ startCase(form) }} It
            </button>

            
        </div>
    </section>
</template>

<script>
import { startCase, get } from 'lodash'
import { styler, tween, stagger, easing } from 'popmotion'
import { wait } from './libs/utils'

export default {
    data() {
        return {
            mainText: 'Sander Moolin',
            forms: ['animate', '3d'],
            selectedFormIndex: 0,
            lastReload: 0
        }
    },
    mounted() {
        this.animateButtons()
    },
    computed: {
        cmpForm() {
            const output = this.forms[this.selectedFormIndex]
            return output === '3d' ? '3-d' : output
        }
    },
    methods: {
        startCase,
        async animateButtons() {
            await wait(1000)

            // stylers
            const stylers = Array.from(
                this.$el.querySelectorAll('.button-animate')
            ).map(styler)

            // tweens
            const startVal = { opacity: 0, y: 10 }
            const tweens = stylers.map(s => {
                return tween({
                    from: startVal,
                    to: { opacity: 1, y: 0 },
                    duration: 800,
                    ease: easing.backInOut
                })
            })

            // stagger
            stagger(tweens, 40).start(values => {
                values.forEach((v = startVal, i) => {
                    stylers[i].set(v)
                })
            })
        }
    },
    watch: {
        mainText(newVal) {
            this.$store.commit('SET_HERO_TEXT', newVal)
        }
    }
}
</script>

<style lang="scss">
.landing-wrap {
    height: 100vh;
    min-height: 700px;
    padding: 50px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content 1fr auto;
    color: black;

    .title {
        margin: 0;
        position: relative;
        z-index: 5;

        .salutation {
            overflow: hidden;
        }
    }
    .text-input {
        opacity: 0;
    }

    .buttons {
        display: grid;
        grid-row-gap: 20px;
        position: relative;

        .toggle-wrap,
        .nav-wrap {
            display: flex;

            .button-animate {
                opacity: 0;
            }

            li:not(:first-child) {
                margin-left: 10px;
            }
            // button,
            // a {
            //     @include old-style-button;
            // }
        }
    }
}
</style>
