import { AccordionComponent } from './components/accordionComponent'
import { DatePicker } from './components/datePicker'
import { FooterDropdown } from './components/footerDropdown'
import { SelectComponent } from './components/selectComponent'
import { useAddPayment } from './components/useAddPayment'
import { useBurger } from './components/useBurger'
import { useChangePayment } from './components/useChangePayment'
import { useCopyToClipBoard } from './components/useCopy'
import { useDatePicker } from './components/useDatePIcker'
import { useDropdown } from './components/useDropdown'
import { useEmailPopup } from './components/useEmailPopup'
import { useFaq } from './components/useFaq'
import { useLocale } from './components/useLocale'
import { useMenu } from './components/useMenu'
import { usePayment } from './components/usePayment'
import { usePopup } from './components/usePopup'
import { useReviews } from './components/useReviews'
import { useStatistics } from './components/useStatistics'
import { useInitData } from './data'
import { localeMessages } from './locale'
import { useSwiper } from './slider'
import '/scss/main.scss'

const { createApp, ref, useTemplateRef } = Vue

const savedLocale = localStorage.getItem('locale') || 'ru'

const i18n = VueI18n.createI18n({
	legacy: true,
	locale: savedLocale,
	fallbackLocale: 'ru',
	messages: localeMessages,
})

createApp({
	components: {
		'custom-select': SelectComponent,
		'custom-accordion': AccordionComponent,
		'date-picker': DatePicker,
		'footer-dropdown': FooterDropdown,
	},

	setup() {
		const dropdown = useDropdown(Vue)
		const burger = useBurger(Vue)
		const menu = useMenu(Vue)
		const popup = usePopup(Vue)
		const emailPopup = useEmailPopup(Vue)
		const payment = usePayment(Vue)
		const changePayment = useChangePayment(Vue)
		const addPayment = useAddPayment(Vue)
		const faq = useFaq(Vue)
		const reviews = useReviews(Vue)
		const statistics = useStatistics(Vue)
		const localeHook = useLocale(Vue, i18n)
		const initData = useInitData()
		const copyClipBoard = useCopyToClipBoard(Vue)
		const sliders = useSwiper(Vue)

		const setLocale = locale => {
			i18n.global.locale = locale
		}

		const datePicker = useDatePicker(Vue)

		return {
			setLocale,
			...dropdown,
			...menu,
			...burger,
			...payment,
			...faq,
			...reviews,
			...popup,
			...emailPopup,
			...localeHook,
			...changePayment,
			...addPayment,
			...statistics,
			...datePicker,
			...initData,
			...copyClipBoard,
			...sliders,
		}
	},
})
	.use(i18n)
	.mount('#app')
