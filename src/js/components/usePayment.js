export function usePayment(Vue, selectedOptionRef) {
	const { useTemplateRef, ref, onMounted, watch, computed } = Vue
	const activePaymentIcon = ref(false)
	const paymentBalance = useTemplateRef('payment-balance')

	const cryptoWallet = ref('')
	const sum = ref('')
	const recipientName = ref('')
	const selectedMethod = ref(null)
	const selectedBank = ref(null)

	const successForm = ref(false)
	const partialPayment = ref(false)

	const getSelectedMethod = method => {
		selectedMethod.value = method
	}

	const getSelectedBank = bank => {
		selectedBank.value = bank
	}

	const isFormValid = computed(() => {
		return (
			selectedMethod.value !== null &&
			(cryptoWallet.value.trim() !== '' || recipientName.value.trim() !== '') &&
			sum.value !== ''
		)
	})

	onMounted(() => {
		if (paymentBalance.value) {
			activePaymentIcon.value = paymentBalance.value.textContent > 0
		}
	})

	return {
		activePaymentIcon,
		paymentBalance,
		isFormValid,
		cryptoWallet,
		sum,
		recipientName,
		selectedMethod,
		selectedBank,
		getSelectedMethod,
		successForm,
		getSelectedBank,
		partialPayment,
	}
}
