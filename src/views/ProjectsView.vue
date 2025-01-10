<template>
	<div class="content">
		<div class="hero-image">
			<img :src="heroImage" />
		</div>

		<div class="page-content">
			<h1 class="heading-md pb-3">{{ $t('menu.projects') }}</h1>

			<div class="project-grid">
				<project-card
					v-for="project in projects"
					:key="`projects-${project.id}`"
					v-bind="project"
				></project-card>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroImage from "@/assets/images/main.png"

import ProjectCard from "@/components/molecules/ProjectCard.vue"

export default {
	name: "ProjectsView",
	mounted () {
		this.fetchProjects()
	},
	computed: {
		...mapGetters('AppState', ['locale'])
	},
	data () {
		return {
			heroImage: HeroImage,
			projects: []
		}
	},
	methods: {
		async fetchProjects () {
			try {
				const locale = (this.locale) ? this.locale : 'en';
				const result = await this.$http.get(`projects/${locale}/`)
				
				this.projects = result.data
			} catch (e) {
				console.log(e)
			}
		}
	},
	components: {
		ProjectCard
	},
	watch: {
		locale () {
			this.fetchProjects()
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
		
		.project-grid {
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
			max-width: 850px;
			overflow-y: auto;
			height: calc(100vh - 80px);
			align-self: flex-start;
		}
	}
}
</style>
