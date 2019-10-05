<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>|
			<router-link to="/signup">Signup</router-link>|
			<router-link to="/login">Login</router-link>
		</div>
		<v-footer height="auto" class="grey darken-3">
			<v-layout row wrap justify-center>
				<v-btn>Home</v-btn>
				<v-btn>About Us</v-btn>
				<v-btn>Team</v-btn>
				<v-btn>Services</v-btn>
				<v-btn>Blog</v-btn>
				<v-btn>Contact Us</v-btn>
				<v-flex xs12 py-3 text-xs-center white--text>
					&copy;2018 —
					<strong>Vuetify</strong>
				</v-flex>
			</v-layout>
		</v-footer>
	</div>
</template>