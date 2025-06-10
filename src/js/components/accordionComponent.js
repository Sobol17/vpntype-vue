export const AccordionComponent = {
	props: {
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: String,
			required: true,
		},
	},
	template: `<div class="faq-accordion" :class="{active: showContent}">
		<div @click="toggleContentVisibility" class="faq-accordion__header">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="20" cy="20" r="20" fill="#B3BAEA" fill-opacity="0.2"/>
			<circle cx="20" cy="20" r="12" fill="#5C75C9"/>
			<path d="M18.8224 22.318C18.7477 21.8047 18.7539 21.3696 18.8411 21.0126C18.9408 20.6444 19.0779 20.3208 19.2523 20.0418C19.4268 19.7629 19.6262 19.523 19.8505 19.3222C20.0748 19.1102 20.2804 18.9038 20.4673 18.7029C20.6667 18.5021 20.8349 18.2957 20.972 18.0837C21.109 17.8717 21.1776 17.6262 21.1776 17.3473C21.1776 16.9902 21.0654 16.7113 20.8411 16.5105C20.6293 16.3096 20.3427 16.2092 19.9813 16.2092C19.5078 16.2092 19.1464 16.3654 18.8972 16.6778C18.6604 16.9902 18.5171 17.3752 18.4673 17.8326H16V17.2971C16.0374 16.8173 16.162 16.3766 16.3738 15.9749C16.5857 15.5732 16.8723 15.2273 17.2336 14.9372C17.595 14.636 18.0249 14.4073 18.5234 14.251C19.0218 14.0837 19.5826 14 20.2056 14C20.7414 14 21.2399 14.0725 21.7009 14.2176C22.162 14.3626 22.5607 14.569 22.8972 14.8368C23.2461 15.1046 23.514 15.4282 23.7009 15.8075C23.9003 16.1757 24 16.5886 24 17.046C24 17.537 23.9252 17.9554 23.7757 18.3013C23.6262 18.636 23.4393 18.9317 23.215 19.1883C22.9907 19.4449 22.7414 19.6792 22.4673 19.8912C22.2056 20.0921 21.9626 20.3096 21.7383 20.5439C21.514 20.7671 21.3209 21.0181 21.1589 21.2971C21.0093 21.576 20.9346 21.9163 20.9346 22.318H18.8224ZM19.9065 26C19.433 26 19.0717 25.8773 18.8224 25.6318C18.5732 25.3863 18.4486 25.0851 18.4486 24.728C18.4486 24.3598 18.567 24.053 18.8037 23.8075C19.053 23.5509 19.4206 23.4226 19.9065 23.4226C20.3801 23.4226 20.7477 23.5509 21.0093 23.8075C21.271 24.053 21.4019 24.3598 21.4019 24.728C21.4019 25.0851 21.271 25.3863 21.0093 25.6318C20.7477 25.8773 20.3801 26 19.9065 26Z" fill="white"/>
			</svg>

			<div class="faq-accordion__title">{{question}}</div>
			<svg class="faq-accordion__arrow" :class="{rotate: showContent}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M19 9.51351L12 16L5 9.51351L6.63333 8L12 12.973L17.3667 8L19 9.51351Z" fill="#5C75C9"/>
			</svg>

		</div>
		
		<transition name="accordion">
        <div v-show="showContent" class="faq-accordion__content">
          {{ answer }}
        </div>
      </transition>
	</div`,
	setup(props) {
		const { ref } = Vue
		const showContent = ref(false)

		const toggleContentVisibility = () => {
			showContent.value = !showContent.value
		}

		return {
			question: props.question,
			answer: props.answer,
			showContent,
			toggleContentVisibility,
		}
	},
}
