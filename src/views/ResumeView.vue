<template>
	<div class="content">
		<div class="hero-image">
			<img :src="heroImage" />
		</div>

		<div class="page-content">
			<h1 class="heading-md pb-3">{{ $t('menu.resume') }}</h1>

			<div class="job-grid">
				<job-card
					v-for="job in jobs"
					:key="`jobs-${job.id}`"
					v-bind="job"
				></job-card>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroImage from "@/assets/images/main.png"

import JobCard from "@/components/molecules/JobCard.vue"

export default {
	name: "ResumeView",
	mounted () {
		this.fetchJobs()
	},
	computed: {
		...mapGetters('AppState', ['locale'])
	},
	data () {
		return {
			heroImage: HeroImage,
			jobs: []
		}
	},
	methods: {
		async fetchJobs () {
			try {
				const locale = (this.locale) ? this.locale : 'en';
				const result = await this.$http.get(`jobs/${locale}/`)
				
				this.jobs = result.data
			} catch (e) {
				console.log(e)
			}
		}
	},
	components: {
		JobCard
	},
	watch: {
		locale () {
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
		
		.job-grid {
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
