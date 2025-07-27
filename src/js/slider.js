export function useSwiper(Vue) {
	const { ref, onMounted } = Vue

	let heroSwiper = null
	let bannerSwiper = null

	onMounted(() => {
		if (document.querySelector('.hero-swiper')) {
			heroSwiper = new Swiper('.hero-swiper', {
				loop: true,
				autoplay: {
					delay: 4800,
				},
				speed: 1200,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				spaceBetween: 12,
			})
		}

		if (document.querySelector('.banner-swiper')) {
			bannerSwiper = new Swiper('.banner-swiper', {
				loop: true,
				autoplay: {
					delay: 3600,
				},
				speed: 1200,
				pagination: {
					el: '.banner-pagination',
					clickable: true,
				},
				spaceBetween: 12,
			})
		}
	})

	return { heroSwiper, bannerSwiper }
}
