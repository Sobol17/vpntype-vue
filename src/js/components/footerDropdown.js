export const FooterDropdown = {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	template: `
		<div class="footer-col__dropdown">
          <div class="footer-col__head" @click="toggleDrop">
            <span>{{ title }}</span>
            <svg
              class="footer-col__head__icon"
              :class="{ rotate: !openDrop }"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path d="M4.5 11L9 6.5L13.5 11L12.45 12.05L9 8.6L5.55 12.05L4.5 11Z" fill="white" />
            </svg>
          </div>
          <transition name="accordion">
						<div class="footer-col__list" v-if="openDrop">
							<slot></slot>
						</div>
					</transition>
        </div>
	`,
	setup(props, { slots }) {
		const { ref } = Vue

		const openDrop = ref(false)
		const toggleDrop = () => {
			openDrop.value = !openDrop.value
		}

		return {
			title: props.title,
			openDrop,
			toggleDrop,
			slots,
		}
	},
}
