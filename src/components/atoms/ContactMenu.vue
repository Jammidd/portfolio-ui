<template>
	<div class="contact-menu">
		<a
			v-for="contact, index in contactMethods"
			:key="`contact-${index}`"
			:href="contact.link"
		>
			<img :src="getImage(contact.contactType)" />
		</a>
	</div>
</template>

<script>
export default {
	name: "ContactMenu",
	mounted () {
		this.fetchContactMethods()
	},
	data () {
		return {
			contactMethods: []
		}
	},
	methods: {
		async fetchContactMethods () {
			try {
				const result = await this.$http.get(`/contacts/`)
				
				this.contactMethods = result.data
			} catch (e) {
				console.log(e)
			}
		},
		getImage (brandName) {
			return require(`@/assets/images/brands/${brandName}.svg`)
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scheme/colors";

	.contact-menu {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		background-color: $white-color;
		box-shadow: -3px 0 6px rgba(0,0,0, 0.16);
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;

		a, i {
			display: block;
			padding: 10px;
			img {
				width: 25px;
			}

			&:hover {
				background-color: darken($white-color, 10%);
			}
		}
	}
</style>
