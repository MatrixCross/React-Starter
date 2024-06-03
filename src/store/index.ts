import resso from 'resso'
import i18n from 'i18next'

// 创建一个响应式对象,
const store = resso({
  count: 0,
  text: 'hello',
  language: 'en',
  inc() {
    const { count } = store // 须在顶层解构（若在方法中用到）
    store.count = count + 1
  },
  toggleLanguage() {
    store.language = store.language === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(store.language)
  },
})

export default store
