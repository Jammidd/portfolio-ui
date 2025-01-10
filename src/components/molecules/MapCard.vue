<template>
	<div class="map-card">
		<div v-if="image" class="map-card__image">
			<img :src="image" />
		</div>

		<div class="map-card__details">
			<p class="heading-sm">{{ title }}</p>

			<p class="body-sm italic">{{ tripDates }}</p>

			<p class="body-md pt-2">{{ description }}</p>
		</div>
	</div>
</template>

<script>
import { format } from "date-fns"

export default {
	name: "MapCard",
	props: {
		image: {
			default: null,
			type: String
		},
		title: {
			default: null,
			type: String
		},
		description: {
			default: null,
			type: String
		},
		startDate: {
			default: null,
			type: String
		},
		endDate: {
			default: null,
			type: String
		}
	},
	computed: {
		tripDates () {
			let dates = ""
			if (this.startDate) {
				dates += format(new Date(this.startDate), 'MMM d, yyyy')
			}

			if (this.endDate) {
				dates += " - " + format(new Date(this.endDate), 'MMM d, yyyy')
			}

			return dates
		}
	}
}
</script>

<style lang="scss" scoped>
	.map-card {
		display: flex;
		max-width: 250px;
		flex-direction: column;

		&__image {
			height: 175px;
			overflow: hidden;
			width: 100%;

			img {
				width: 100%;
				object-fit: cover;
				object-position: bottom;
			}
		}
	}
</style>
