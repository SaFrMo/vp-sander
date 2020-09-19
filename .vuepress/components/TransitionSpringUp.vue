<template>
    <transition :css="false" appear @enter="enter">
        <slot class="spring-up-transition" />
    </transition>
</template>

<script>
import { styler, spring } from 'popmotion'

export default {
    methods: {
        enter(el, done) {
            const st = styler(el)

            spring({
                from: Math.random() * 20 + 20,
                to: 0,
                stiffness: Math.random() * 300 + 100
            }).start(v => {
                st.set('y', v)
            })

            done()
        }
    }
}
</script>
