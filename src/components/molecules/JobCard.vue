<template>
	<div class="job-card">
		<a :href="company.url" class="body-link pb-2">{{ company.name }}</a>

		<div class="row">
			<p class="heading-md">{{ title }}</p>

			<p class="italic">{{ dateRange }}</p>
		</div>

		<p class="body-md pt-3 job-card__description" v-html="parsedDescription"></p>
	</div>
</template>

<script>
import { format } from 'date-fns'

export default {
	name: "JobCard",
	props: [
		'company',
		'title',
		'startDate',
		'endDate',
		'description'
	],
	computed: {
		dateRange () {
			let dateStr = format(new Date(this.startDate), 'MMM yyyy')

			if (this.endDate) {
				dateStr += " - " + format(new Date(this.endDate), 'MMM yyyy')
			} else {
				dateStr += " - present"
			}

			return dateStr
		},
		parsedDescription () {
			// const searchRegEx = new RegExp("\\r\\n", "<br />")
			const descParts = this.description.split("\r\n")

			const elements = descParts.map((elem) => 
				`<li>${elem.replace("- ", "")}</li>`
			)
			
			return `<ul class="description">${elements.join("")}</ul>`
		}
	},
	data () {
		return {
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/scss/scheme/colors";
@import "@/assets/scss/scheme/screens";

.job-card {
	display: flex;
	flex-direction: column;
	background-color: $white-color;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16);
	border-radius: 4px;
	align-items: flex-start;
	padding: 20px;

	.row {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;

		@include for-tablet-up {
			flex-direction: row;
			align-items: center;
		}
	}

	&__description {
		.description {
			display: flex;
			flex-direction: column;
			gap: 10px;
			list-style: circle;
			li {
				margin-left: 16px;
			}
		}
	}
}
</style>
