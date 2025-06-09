export function useChangePayment(Vue) {
	const { ref, computed } = Vue
	const isChangePaymentPopupShow = ref(false)
	const selectedValue = ref(null)
	const changeSuccess = ref(false)
	const changeInput = ref('')

	const toggleChangePaymentPopup = initialVal => {
		isChangePaymentPopupShow.value = !isChangePaymentPopupShow.value
		selectedValue.value = initialVal
	}

	const isChangeFormValid = computed(() => {
		return selectedValue.value !== null && changeInput.value !== ''
	})

	return {
		selectedValue,
		isChangePaymentPopupShow,
		toggleChangePaymentPopup,
		isChangeFormValid,
		changeInput,
		changeSuccess,
	}
}
