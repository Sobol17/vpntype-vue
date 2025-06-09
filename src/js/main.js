import { AccordionComponent } from './components/accordionComponent'
import { DatePicker } from './components/datePicker'
import { SelectComponent } from './components/selectComponent'
import { useAddPayment } from './components/useAddPayment'
import { useBurger } from './components/useBurger'
import { useChangePayment } from './components/useChangePayment'
import { useClickOutside } from './components/useClickOutside'
import { useDropdown } from './components/useDropdown'
import { useEmailPopup } from './components/useEmailPopup'
import { useFaq } from './components/useFaq'
import { useLocale } from './components/useLocale'
import { useMenu } from './components/useMenu'
import { usePayment } from './components/usePayment'
import { usePopup } from './components/usePopup'
import { useReviews } from './components/useReviews'
import { useStatistics } from './components/useStatistics'
import { localeMessages } from './locale'
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

		const paymentMethodOptions = ref([
			{
				value: 'crypto',
				label: 'Крипто-кошелек',
				icon: './assets/icons/crypto.svg',
			},
			{
				value: 'card',
				label: 'Банковская карта',
				icon: './assets/icons/card.svg',
			},
			{
				value: 'sbp',
				label: 'СБП',
				icon: './assets/icons/sbp.svg',
			},
			{
				value: 'umoney',
				label: 'Юmoney',
				icon: './assets/icons/umoney.svg',
			},
		])

		const paymentBanks = ref([
			{
				value: 't-bank',
				label: 'Т-банк',
				icon: './assets/icons/t-bank.svg',
			},
			{
				value: 'rosselhoz',
				label: 'Россельхоз',
				icon: './assets/icons/rosselhoz.svg',
			},
			{
				value: 'sber',
				label: 'СБЕР',
				icon: './assets/icons/sber.svg',
			},
			{
				value: 'rosselhoz',
				label: 'Россельхоз',
				icon: './assets/icons/t-bank.svg',
			},
		])

		const faqItems = ref([
			{
				question: 'Какие варианты оплаты у нас есть?',
				answer:
					'Платите как вам удобно: зарубежной картой, картой из России, через SberPay, Tinkoff Pay или ЮMoney.',
			},
			{
				question: 'Как мне использовать промокод?',
				answer:
					'Платите как вам удобно: зарубежной картой, картой из России, через SberPay, Tinkoff Pay или ЮMoney.',
			},
			{
				question: 'Как часто нужно оплачивать подписку VPNTYPE?',
				answer:
					'Платите как вам удобно: зарубежной картой, картой из России, через SberPay, Tinkoff Pay или ЮMoney.',
			},
			{
				question: 'Как мне отменить подписку?',
				answer:
					'Платите как вам удобно: зарубежной картой, картой из России, через SberPay, Tinkoff Pay или ЮMoney.',
			},
			{
				question: 'Замедлит ли VPN мое интернет-соединение?',
				answer:
					'Платите как вам удобно: зарубежной картой, картой из России, через SberPay, Tinkoff Pay или ЮMoney.',
			},
		])

		const setLocale = locale => {
			i18n.global.locale = locale
		}

		const isDatePickerVisible = ref(false)

		const datePickerRef = useTemplateRef('date-picker')

		const showDatePicker = () => {
			isDatePickerVisible.value = !isDatePickerVisible.value
		}

		const hideDatePicker = () => {
			isDatePickerVisible.value = false
		}

		useClickOutside(Vue, datePickerRef, hideDatePicker)

		return {
			paymentMethodOptions,
			paymentBanks,
			faqItems,
			setLocale,
			showDatePicker,
			datePickerRef,
			isDatePickerVisible,
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
		}
	},
})
	.use(i18n)
	.mount('#app')
