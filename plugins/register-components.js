import Vue from 'vue'
import _ from 'lodash'

// register all components in @/components
const components = require.context('@/components', false, /[A-Z]\w+\.(vue)$/)
_.forEach(components.keys(), fileName => {
    const componentConfig = components(fileName)
    const componentName = fileName
        .split('/')
        .pop()
        .split('.')[0]
    Vue.component(componentName, componentConfig.default || componentConfig)
})

// register vue-three-wrap
import VueThreeWrap from 'vue-three-wrap'
Vue.component('vue-three-wrap', VueThreeWrap)

// register directives
const FullHeight = {
    inserted(el, binding) {
        const property = binding.modifiers.min ? 'min-height' : 'height'

        el.style[property] = `${window.innerHeight}px`
        window.addEventListener('resize', () => {
            el.style[property] = `${window.innerHeight}px`
        })
    }
}
Vue.directive('full-height', FullHeight)
