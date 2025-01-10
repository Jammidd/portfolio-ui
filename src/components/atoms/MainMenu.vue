<template>
	<div class="main-navigation">
		<div class="logo">
			<img :src="logoImg" />
		</div>

		<div>
			<button class="menu-toggle" @click="menuOpen = !menuOpen">
				<i class="icon icon-menu-8" />
			</button>
			<ul class="menu-container" :class="{open: menuOpen}">
				<li class="language">
					<div class="language-toggle">
						<button :class="{active: locale === 'en'}" @click="setLocale('en')">EN</button> | 
						<button :class="{active: locale === 'es'}"  @click="setLocale('es')">ES</button>
					</div>
				</li>
				<li>
					<a :class="{active: activePage === 'home'}" href="/">{{ $t("menu.home") }}</a>
				</li>
				<li>
					<a :class="{active: activePage === 'projects'}" href="/projects">{{ $t("menu.projects") }}</a>
				</li>
				<li>
					<a :class="{active: activePage === 'resume'}" href="/resume">{{ $t("menu.resume") }}</a>
				</li>
				<li>
					<a :class="{active: activePage === 'travels'}" href="/travels">{{ $t("menu.travels") }}</a>
				</li>
				<li>
					<a :class="{active: activePage === 'contact'}" href="/contact">{{ $t("menu.contact") }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex"

import Logo from "@/assets/images/logo.png"

export default {
	name: "MainMenu",
	computed: {
		...mapGetters('AppState', ['locale']),
		activePage () {
			return this.$route.name
		}
	},
	data () {
		return {
			menuOpen: false,
			logoImg: Logo
		}
	},
	methods: {
		setLocale (locale) {
			this.$store.commit("AppState/SET_LOCALE", locale)
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/scheme/colors";
@import "@/assets/scss/scheme/screens";

.main-navigation {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	min-height: 40px;
	padding: 10px 20px;
	.menu-toggle {
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
	}
	.menu-container {
		display: none;
		text-align: center;

		a {
			display: block;
			width: 100%;
			padding: 20px;
			color: $font-color;
			text-decoration: none;

			&:hover, &:active {
				background-color: darken($bg-color, 10%);
			}
		}

		&.open {
			display: block;
			position: absolute;
			padding-top: 40px;
			top: 60px;
			right: 0;
			left: 0;
			z-index: 1000;
			background-color: $bg-color;
			box-shadow: 0 3px 6px rgba(0,0,0,0.16);
		}
	}

	@include for-tablet-up {
		.language-toggle {
			margin-top: 15px;
		}
		.menu-toggle {
			display: none;
		}
		.menu-container {
			padding-top: 10px;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 35px;

			a {
				display: block;
				padding: 16px 0;
				color: $font-color;
				text-decoration: none;
				font-size: 16px;
				font-weight: 400;

				&:hover,
				&.active {
					border-bottom: 2px solid $font-color;
				}
			}
		}
	}
}

.language-toggle {
	button {
		background: none;
		border: none;

		&.active {
			color: $primary-color;
		}
	}
}
</style>
