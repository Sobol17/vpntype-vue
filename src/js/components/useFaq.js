export function useFaq() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return {
		scrollToTop,
	}
}
