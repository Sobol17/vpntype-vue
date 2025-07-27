export function useCopyToClipBoard(Vue) {
	const { ref } = Vue

	const isCopied = ref(false)

	const copy = async text => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text)
				isCopied.value = true
				setTimeout(() => {
					isCopied.value = false
				}, 2000)
			} else {
				const textarea = document.createElement('textarea')
				textarea.value = text
				textarea.style.position = 'fixed'
				textarea.style.opacity = '0'
				document.body.appendChild(textarea)
				textarea.focus()
				textarea.select()

				try {
					const successful = document.execCommand('copy')
					if (successful) {
						isCopied.value = true
						setTimeout(() => {
							isCopied.value = false
						}, 2000)
					} else {
						throw new Error('Копирование не удалось')
					}
				} catch (err) {
					console.error('Ошибка при легаси-копировании:', err)
					isCopied.value = false
				} finally {
					document.body.removeChild(textarea)
				}
			}
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
