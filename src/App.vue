<template>
	<!-- App.vue -->
	<v-app app>
    <!-- If using vue-router -->
    <router-view></router-view>
		<!-- theme setting -->
		<v-btn
			small
			fab
			dark
			falt
			fixed
			bottom="bottom"
			right="right"
			class="setting-fab"
			color="red"
			@click="openThemeSettings"
		>
			<v-icon>mdi-settings</v-icon>
		</v-btn>
    
		<!-- setting drawer -->
		<v-navigation-drawer
			class="setting-drawer"
			temporary
			right
			v-model="rightDrawer"
			hide-overlay
			fixed
		>
			<theme-settings></theme-settings>
		</v-navigation-drawer>
	</v-app>
</template>

<script>
import ThemeSettings from "@/components/ThemeSettings";
export default {
	components: {
		ThemeSettings
	},
	data: () => ({
		drawer: false,
		group: null,
		rightDrawer: false
	}),
	methods: {
		openThemeSettings() {
			this.$vuetify.goTo(0);
			this.rightDrawer = !this.rightDrawer;
		}
	},
	watch: {
		group() {
			this.drawer = false;
		}
	}
};
</script>
