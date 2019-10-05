<template>
	<v-card class="elevation-1 pa-3 login-card">
		<v-card-text>
			<div class="layout column align-center">
				<img src="@/assets/logo.svg" alt="Vue Material Admin" width="120" height="120" />
				<h1 class="flex my-4 primary--text">Material Admin Template</h1>
			</div>
			<form>
				<v-text-field
					v-model="name"
					v-validate="'required|max:10'"
					:counter="10"
					:error-messages="errors.collect('name')"
					label="Name"
					data-vv-name="name"
					required
				></v-text-field>
				<v-text-field
					v-model="email"
					v-validate="'required|email'"
					:error-messages="errors.collect('email')"
					label="E-mail"
					data-vv-name="email"
					required
				></v-text-field>
				<v-select
					v-model="select"
					v-validate="'required'"
					:items="items"
					:error-messages="errors.collect('select')"
					label="Select"
					data-vv-name="select"
					required
				></v-select>
				<v-checkbox
					v-model="checkbox"
					v-validate="'required'"
					:error-messages="errors.collect('checkbox')"
					value="1"
					label="Option"
					data-vv-name="checkbox"
					type="checkbox"
					required
				></v-checkbox>

				<v-btn class="mr-4" @click="submit">submit</v-btn>
				<v-btn @click="clear">clear</v-btn>
			</form>
		</v-card-text>
		<div class="login-btn">
			<v-btn icon>
				<v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon color="red">fa fa-google fa-lg</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
			<v-btn block color="primary" @click="login" :loading="loading">{{$t("login.submit")}}</v-btn>
		</div>
	</v-card>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
	$_veeValidate: {
		validator: "new"
	},

	data: () => ({
		name: "admin@isocked.com",
		email: "password",
		select: null,
		items: ["Item 1", "Item 2", "Item 3", "Item 4"],
		checkbox: null,
		dictionary: {
			attributes: {
				email: "E-mail Address"
				// custom attributes
			},
			custom: {
				name: {
					required: () => "Name can not be empty",
					max: "The name field may not be greater than 10 characters"
					// custom messages
				},
				select: {
					required: "Select field is required"
				}
			}
		}
	}),

	mounted() {
		this.$validator.localize("en", this.dictionary);
	},

	methods: {
		submit() {
			this.$validator.validateAll();
		},
		// login() {
		// 	this.loading = true;
		// 	// handle login
		// 	setTimeout(() => {
		// 		this.$router.push("/dashboard");
		// 	}, 1000);
		// },
		clear() {
			this.name = "";
			this.email = "";
			this.select = null;
			this.checkbox = null;
			this.$validator.reset();
		}
	}
};
</script>
<style scoped lang="css"></style>
