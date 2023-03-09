import { createI18n } from 'vue-i18n'
import EN from './locales/en.json'
import ZH from './locales/zh.json'

const i18n = createI18n({
	globalInjection: true,
	legacy: false,
	locale: 'zh',
	messages: {
		zh: ZH,
		en: EN
	}
})

export default i18n
