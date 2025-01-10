<template>
	<div class="content">
		<div class="hero-image">
			<img :src="heroImage" />
		</div>

		<div class="page-content">
			<h1 class="heading-md pb-3">{{ $t('menu.contact') }}</h1>

			<form class="contact-form" @submit="sendMessage">
				<div class="flex flex-column gap-2">
					<label for="name">{{ $t('contact.name') }}</label>
					<InputText id="name" v-model="name" />
				</div>

				<div class="flex flex-column gap-2">
					<label for="email">{{ $t('contact.email') }}</label>
					<InputText id="email" v-model="email" />
				</div>

				<div class="flex flex-column gap-2">
					<label for="message">{{ $t('contact.message') }}</label>
					<Textarea id="message" rows="8" v-model="message" />
				</div>

				<div class="flex flex-row justify-content-end">
					<Button :label="$t('contact.send')" type="submit"></Button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroImage from "@/assets/images/main.png"

import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Textarea from 'primevue/textarea'

export default {
	name: "ContactView",
	computed: {
		...mapGetters('AppState', ['locale'])
	},
	data() {
		return {
			heroImage: HeroImage,
			name: null,
			email: null,
			message: null
		}
	},
	methods: {
		async sendMessage () {
			try {
				const result = await this.$http.post('contacts/', {
					name: this.name,
					email: this.email,
					message: this.message
				})

				if (result.status == 200) {
					// TODO: toast
				}
			} catch (e) {
				console.error(e)
			}
		}
	},
	components: {
		Button,
		InputText,
		Textarea
	},
	watch: {
		locale() {
			this.fetchJobs()
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scheme/screens";

.content {
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	position: relative;

	.hero-image {
		display: none;

		img {
			width: 350px;
		}
	}

	.page-content {
		padding-top: 20px;
		height: calc(100vh - 170px);

		.contact-form {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding-bottom: 80px;
		}
	}

	@include for-tablet-up {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 40px;

		.hero-image {
			display: block;
		}

		.page-content {
			width: 850px;
			overflow-y: auto;
			height: calc(100vh - 80px);
			align-self: flex-start;
		}
	}
}
</style>
