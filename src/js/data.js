import cardIcon from '../assets/icons/card.svg'
import cryptoIcon from '../assets/icons/crypto.svg'
import rosselhozIcon from '../assets/icons/rosselhoz.svg'
import sberIcon from '../assets/icons/sber.svg'
import sbpIcon from '../assets/icons/sbp.svg'
import tbankIcon from '../assets/icons/t-bank.svg'
import umoneyIcon from '../assets/icons/umoney.svg'

export function useInitData() {
	const paymentMethodOptions = [
		{
			value: 'crypto',
			label: 'Крипто-кошелек',
			icon: cryptoIcon,
		},
		{
			value: 'card',
			label: 'Банковская карта',
			icon: cardIcon,
		},
		{
			value: 'sbp',
			label: 'СБП',
			icon: sbpIcon,
		},
		{
			value: 'umoney',
			label: 'Юmoney',
			icon: umoneyIcon,
		},
	]

	const paymentBanks = [
		{
			value: 't-bank',
			label: 'Т-банк',
			icon: tbankIcon,
		},
		{
			value: 'rosselhoz',
			label: 'Россельхоз',
			icon: rosselhozIcon,
		},
		{
			value: 'sber',
			label: 'СБЕР',
			icon: sberIcon,
		},
		{
			value: 'rosselhoz',
			label: 'Россельхоз',
			icon: tbankIcon,
		},
	]

	const faqItems = [
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
	]

	return {
		paymentBanks,
		paymentMethodOptions,
		faqItems,
	}
}
