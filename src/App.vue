<template>
	<main-menu></main-menu>
	<router-view/>
	<contact-menu></contact-menu>
	<Toast />
</template>

<script>
import { mapGetters } from 'vuex'
import Toast from 'primevue/toast'

import ContactMenu from './components/atoms/ContactMenu.vue'
import MainMenu from './components/atoms/MainMenu.vue'

export default {
	mounted () {
		this.$i18n.locale = this.locale
		this.setPageTitle(this.$route.meta.pageTitle)
	},
	computed: {
		...mapGetters('AppState', ['locale'])
	},
	methods: {
		setPageTitle (newTitle) {
			if (newTitle) {
				const translatedTitle = this.$t(newTitle)
				document.title = translatedTitle
			}
		}
	},
	components: {
		ContactMenu,
		MainMenu,
		Toast
	},
	watch: {
		locale (newValue) {
			this.$i18n.locale = newValue
			this.setPageTitle(this.$route.meta.pageTitle)
		},
		"$route.name" () {
			this.setPageTitle(this.$route.meta.pageTitle)
		}
	}
}
</script>
