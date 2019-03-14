import LoadingMask from './LoadingMask'
import DefaultSpinner from './DefaultSpinner'

const CLASS_NAME = 'sync-loading-mask'

export default {
  install (Vue) {
    Vue.prototype.$sync = async (
      asyncAction,
      {
        spinner = DefaultSpinner,
        backgroundColor = 'transparent'
      } = {}
    ) => {
      if (document.querySelector(`.${CLASS_NAME}`)) {
        return
      }

      const mask = document.createElement('div')
      const tempDiv = document.createElement('div')

      mask.className = CLASS_NAME
      let Component = Vue.extend({
        template: '<loading-mask :spinner="spinner" :backgroundColor="backgroundColor"></loading-mask>',
        components: {
          LoadingMask
        },
        data() {
          return {
            spinner,
            backgroundColor
          }
        }
      })

      mask.appendChild(tempDiv)
      new Component().$mount(tempDiv)

      try {
        document.body.appendChild(mask)
        let promise = asyncAction()

        if (!promise || typeof promise.then !== 'function') {
          throw new Error('The params should be a function that return a promise.')
        }

        await promise
        document.body.removeChild(mask)
      } catch (e) {
        document.body.removeChild(mask)
      }
    }
  }
}
