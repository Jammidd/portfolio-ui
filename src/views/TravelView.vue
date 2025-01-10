<template>
	<div class="content">
		<div class="hero-image">
			<img :src="heroImage" />
		</div>

		<div class="page-content">
			<h1 class="heading-md pb-3">{{ $t('menu.travels') }}</h1>

			<div id="travel-map">
				<GMapMap
					id="travel-map"
					:center="mapCenter"
					:zoom="2"
					:options="mapOptions"
					style="width: 100%; height: 500px;" 
				>
					<GMapMarker
						v-for="(m, index) in trips"
						:key="index"
						:position="m.position"
						:clickable="true"
						@click="onLocationSelect(m.id)"
					>
						<GMapInfoWindow
							:opened="openedMarkerId === m.id"
						>
							<MapCard v-bind="m"></MapCard>
						</GMapInfoWindow>
					</GMapMarker>
				</GMapMap>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroImage from "@/assets/images/main.png"

import MapCard from '@/components/molecules/MapCard.vue'

export default {
    name: "TravelView",
    mounted() {
        this.fetchTrips();
    },
    computed: {
        ...mapGetters("AppState", ["locale"])
    },
    data() {
        return {
            heroImage: HeroImage,
            openedMarkerId: null,
            mapCenter: {
                lat: 20.532,
                lng: -11.679
            },
            trips: [],
            mapOptions: {
                mapId: "903624b7819905f",
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                scaleControl: false,
                rotateControl: false,
                fullscreenControl: false
            },
        };
    },
    methods: {
        onLocationSelect(locationId) {
            console.log("test");
            this.openedMarkerId = locationId;
        },
        async fetchTrips() {
            try {
                const result = await this.$http.get(`trips/${this.locale}/`);
                this.trips = result.data;
            }
            catch (e) {
                console.log(e);
            }
        }
    },
    watch: {
        locale() {
            this.fetchTrips();
        }
    },
    components: { MapCard }
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
		
		#travel-map {
			width: 100%;
			padding-bottom: 80px;
		}
	}

	@include for-desktop-up {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 40px;
		.hero-image {
			display: block;
		}

		.page-content {
			max-width: 850px;
			width: 100%;
			overflow-y: auto;
			height: calc(100vh - 80px);
			align-self: flex-start;

			#travel-map {
				width: 100%;
				padding-bottom: 80px;
			}
		}
	}
}
</style>
