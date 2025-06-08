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
			<img src="./assets/icons/question.svg" alt="" />
			<div class="faq-accordion__title">{{question}}</div>
			<img class="faq-accordion__arrow" :class="{rotate: showContent}" src="./assets/icons/icon_arrow_accordion.svg" alt="" />
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
