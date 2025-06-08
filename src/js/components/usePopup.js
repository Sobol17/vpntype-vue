export function usePopup(Vue) {
	const { ref } = Vue
	const isPopupShow = ref(false)

	const togglePopup = () => {
		isPopupShow.value = !isPopupShow.value
	}

	return {
		isPopupShow,
		togglePopup,
	}
}
