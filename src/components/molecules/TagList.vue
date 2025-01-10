<template>
	<div class="tag-list">
		<Tag
			v-for="(tag, index) in tags"
			:key="`tags-${index}`"
			:value="tag"
		></Tag>
	</div>
</template>

<script>
import Tag from "primevue/tag"

export default {
	name: "TagList",
	props: {
		tags: {
			default: () => [],
			type: Array
		}
	},
	components: {
		Tag
	}
}
</script>

<style lang="scss" scoped>
	.tag-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 5px;
	}
</style>
