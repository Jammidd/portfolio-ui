<template>
	<div class="project-card">
		<div class="project-card__image">
			<img :src="imageLink" />
		</div>

		<div class="project-card__body">
			<p class="project-card__body-title">{{ title }}</p>

			<tag-list :tags="tags"></tag-list>

			<p class="project-card__body-description">
				{{ description }}
			</p>

			<div class="actions">
				<a
					v-if="demoLink"
					:href="demoLink"
					class="btn btn-primary"
				>{{ $t('demo') }}</a>

				<a
					v-if="codeLink"
					:href="codeLink"
					class="btn btn-primary"
				>{{ $t('code') }}</a>
			</div>
		</div>
	</div>
</template>

<script>
import Placeholder from "@/assets/images/project_placeholder.png"
import TagList from './TagList.vue'
export default {
	name: "ProjectCard",
	props: {
		title: {
			default: "TEST",
			type: String
		},
		description: {
			default: null,
			type: String
		},
		image: {
			default: null,
			type: String
		},
		tags: {
			default: () => [],
			type: Array
		},
		demoLink: {
			default: null,
			type: String
		},
		codeLink: {
			default: null,
			type: String
		}
	},
	computed: {
		imageLink () {
			return this.image ? this.image : Placeholder
		}
	},
	components: {
		TagList
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scheme/colors";
@import "@/assets/scss/scheme/screens";

.project-card {
	display: flex;
	flex-direction: column;
	background-color: $white-color;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16);
	border-radius: 4px;
	max-width: 335px;
	align-items: center;

	&__image {
		flex: auto;
		max-width: 350px;

		img {
			width: 100%;
			height: 220px;
			object-fit: cover;
		}
	}

	&__body {
		padding: 20px;
		display: flex;
		line-height: 22px;
		flex-direction: column;
		gap: 16px;

		&-title {
			font-size: 22px;
			font-weight: 500;
		}

		&-description {

		}
	}

	@include for-desktop-up {
		max-height: 275px;
		flex-direction: row;
		max-width: fit-content;

		&__image {
			width: 250px;
			img {
				width: 250px;
				height: 275px;
			}
		}
	}
}

</style>
