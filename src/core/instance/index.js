import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 这一堆的mixin是用来声明vue实例属性和方法
// ! initMixin ===> _init()
initMixin(Vue)
// ! stateMixin ===> $data, $props, $set, $get, $watch
stateMixin(Vue)
// ! eventsMixin ===> $on(), $once(), $off(), $emit()
eventsMixin(Vue)
// ! lifecycleMixin ===> _update(), $forceUpdate(), $destroy()
lifecycleMixin(Vue)
// ! renderMixin ===> $nextTick(), _render()
renderMixin(Vue)

export default Vue
