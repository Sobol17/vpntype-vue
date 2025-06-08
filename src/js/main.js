import { AccordionComponent } from './components/accordionComponent'
import { SelectComponent } from './components/selectComponent'
import { useBurger } from './components/useBurger'
import { useDropdown } from './components/useDropdown'
import { useFaq } from './components/useFaq'
import { useLocale } from './components/useLocale'
import { usePayment } from './components/usePayment'
import { usePopup } from './components/usePopup'
import { localeMessages } from './locale'
import '/scss/main.scss'

const { createApp, ref } = Vue

const savedLocale = localStorage.getItem('locale') || 'ru'

const i18n = VueI18n.createI18n({
	legacy: false,
	locale: savedLocale,
	fallbackLocale: 'ru',
	messages: localeMessages,
})

createApp({
	components: {
		'custom-select': SelectComponent,
		'custom-accordion': AccordionComponent,
	},

	setup() {
		const dropdown = useDropdown(Vue)
		const burger = useBurger(Vue)
		const popup = usePopup(Vue)
		const payment = usePayment(Vue)
		const faq = useFaq()
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
			{
				question: 'Замедлит ли VPN мое интернет-соединение?',
				answer:
					'Платите как вам удобно: зарубежной картой, картой из России, через SberPay, Tinkoff Pay или ЮMoney.',
			},
			{
				question: 'Замедлит ли VPN мое интернет-соединение?',
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

		return {
			paymentMethodOptions,
			paymentBanks,
			faqItems,
			setLocale,
			...dropdown,
			...burger,
			...payment,
			...faq,
			...popup,
			...localeHook,
		}
	},
})
	.use(i18n)
	.mount('#app')
