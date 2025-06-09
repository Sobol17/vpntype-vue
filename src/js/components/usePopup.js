export function usePopup(Vue) {
	const { ref } = Vue
	const isPopupShow = ref(false)
	const isEmailPopupShow = ref(false)
	const isDeletePopupShow = ref(false)
	const isDeletePaymentPopupShow = ref(false)

	const togglePopup = () => {
		isPopupShow.value = !isPopupShow.value
	}

	const toggleEmailPopup = () => {
		isEmailPopupShow.value = !isEmailPopupShow.value
	}

	const toggleDeletePopup = () => {
		isDeletePopupShow.value = !isDeletePopupShow.value
	}

	const toggleDeletePaymentPopup = () => {
		isDeletePaymentPopupShow.value = !isDeletePaymentPopupShow.value
	}

	return {
		isPopupShow,
		isEmailPopupShow,
		togglePopup,
		toggleEmailPopup,
		isDeletePopupShow,
		toggleDeletePopup,
		toggleDeletePaymentPopup,
		isDeletePaymentPopupShow,
	}
}
