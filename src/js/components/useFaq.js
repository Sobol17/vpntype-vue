export function useFaq(Vue) {
	const { ref } = Vue
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const isHiddenItemsVisible = ref(false)

	const showMore = () => {
		isHiddenItemsVisible.value = true
	}

	return {
		scrollToTop,
		isHiddenItemsVisible,
		showMore,
	}
}
