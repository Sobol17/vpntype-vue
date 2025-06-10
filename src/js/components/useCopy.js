export function useCopyToClipBoard(Vue) {
	const { ref } = Vue

	const isCopied = ref(false)

	const copy = async text => {
		try {
			await navigator.clipboard.writeText(text)
			isCopied.value = true
			setTimeout(() => {
				isCopied.value = false
			}, 2000)
		} catch (error) {
			console.error('Ошибка при копировании в буфер обмена:', error)
			isCopied.value = false
		}
	}

	return {
		isCopied,
		copy,
	}
}
