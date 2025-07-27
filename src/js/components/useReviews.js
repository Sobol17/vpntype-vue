export function useReviews(Vue) {
	const { ref } = Vue

	const isHiddenReviewsVisible = ref(false)
	const isHiddenBlogArticles = ref(false)
	const isHiddenBlogArticlesSecond = ref(false)

	const showMoreReviews = () => {
		isHiddenReviewsVisible.value = true
	}

	const showMoreArticles = () => {
		isHiddenBlogArticles.value = true
	}

	const showMoreArticlesSecond = () => {
		isHiddenBlogArticlesSecond.value = true
	}

	return {
		isHiddenReviewsVisible,
		isHiddenBlogArticles,
		isHiddenBlogArticlesSecond,
		showMoreReviews,
		showMoreArticles,
		showMoreArticlesSecond,
	}
}
