<template>
	<div class="content">
		<div class="hero-image">
			<img :src="heroImage" />
		</div>
		<div class="hero-lines">
			<p class="hero-title fade-bottom">{{ $t("heroTitle") }}</p>
			<p class="hero-subtitle">{{ $t("heroSubtitle") }}</p>
			<p>{{ $t("tagline1") }}</p>
			<p>{{ $t("tagline2") }}</p>
			<p>{{ $t("tagline3") }}</p>
		</div>
	</div>
</template>

<script>
import HeroImage from "@/assets/images/main.png"
export default {
	name: 'HomeView',
	data () {
		return {
			heroImage: HeroImage
		}
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scheme/screens";

.content {
	position: relative;
	padding: 20px;
	.hero-image {
		img {
			position: relative;
			height: calc(100vh - 100px);
			width: 350px;
		}
	}
	.hero-lines {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		gap: 60px;

		p {
			font-size: 26px;
			font-weight: 300;
		}
		.hero-title {
			font-size: 60px;
			font-weight: 700;
		}

		.hero-subtitle {
			font-size: 40px;
			font-weight: 400;
		}

	}

	@include for-tablet-up {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		padding: 20px;
		gap: 68px;

		.hero-image {
			img {
				width: 100%;
			}
		}

		.hero-lines {
			position: relative;
			transform: none;
			display: flex;
			flex-direction: column;
			gap: 60px;

			p {
				font-size: 30px;
				font-weight: 300;
			}
			.hero-title {
				font-size: 60px;
				font-weight: 700;
			}

			.hero-subtitle {
				font-size: 40px;
				font-weight: 400;
			}
			.fade-bottom {
				position: relative;
				max-height: 404px;

				&:after {
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					right: 0;
					left: 0;
					background: linear-gradient(180deg, rgba(245,245,245,0) 0%, rgba(245,245,245,0.96) 90%, rgba(245,245,245,1) 100%);;
				}
			}
		}
	}
}
</style>
