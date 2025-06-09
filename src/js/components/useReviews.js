export function useReviews(Vue) {
	const { ref } = Vue

	const isHiddenReviewsVisible = ref(false)

	const showMoreReviews = () => {
		isHiddenReviewsVisible.value = true
	}

	return {
		isHiddenReviewsVisible,
		showMoreReviews,
	}
}
