export function useEmailPopup(Vue) {
	const { ref, computed } = Vue
	const oldEmail = ref('')
	const newEmail = ref('')
	const formPending = ref(false)
	const formSuccess = ref(false)

	const isEmailFormValid = computed(() => {
		return oldEmail.value !== '' && newEmail.value !== ''
	})

	return {
		isEmailFormValid,
		oldEmail,
		newEmail,
		formPending,
		formSuccess,
	}
}
