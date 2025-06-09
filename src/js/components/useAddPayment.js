export function useAddPayment(Vue) {
	const { ref, computed } = Vue
	const isAddPaymentPopupShow = ref(false)
	const selectedAddValue = ref(null)
	const addInput = ref('')

	const toggleAddPaymentPopup = () => {
		isAddPaymentPopupShow.value = !isAddPaymentPopupShow.value
	}

	const isAddFormValid = computed(() => {
		return selectedAddValue.value !== null && addInput.value !== ''
	})

	return {
		selectedAddValue,
		isAddPaymentPopupShow,
		toggleAddPaymentPopup,
		isAddFormValid,
		addInput,
	}
}
