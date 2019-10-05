<template>
  <v-app>
    <v-navigation-drawer class="app--drawer" :mini-variant.sync="mini" app v-model="showDrawer" :width="drawWidth">
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense subheader v-for="item in items" :key="item.title">
        <!-- <v-subheader>Recent chat</v-subheader> -->
        <v-subheader v-if="item.heading" >{{ item.heading }}</v-subheader>
        <v-list-item >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="account_circle" value="true">
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(admin, i) in admins" :key="i" link>
              <v-list-item-title v-text="admin[0]"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(crud, i) in cruds" :key="i" @click.stop>
              <v-list-item-title v-text="crud[0]"></v-list-item-title>
              <v-list-item-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
	props: {
		source: String
	},
	data: () => ({
		dialog: false,
		drawer: null,
		items: [
			{ icon: 'contacts', text: 'Contacts' },
			{ icon: 'history', text: 'Frequently contacted' },
			{ icon: 'content_copy', text: 'Duplicates' },
			{
				icon: 'keyboard_arrow_up',
				'icon-alt': 'keyboard_arrow_down',
				text: 'Labels',
				model: true,
				children: [{ icon: 'add', text: 'Create label' }]
			},
			{
				icon: 'keyboard_arrow_up',
				'icon-alt': 'keyboard_arrow_down',
				text: 'More',
				model: false,
				children: [
					{ text: 'Import' },
					{ text: 'Export' },
					{ text: 'Print' },
					{ text: 'Undo changes' },
					{ text: 'Other contacts' }
				]
			},
			{ icon: 'settings', text: 'Settings' },
			{ icon: 'chat_bubble', text: 'Send feedback' },
			{ icon: 'help', text: 'Help' },
			{ icon: 'phonelink', text: 'App downloads' },
			{ icon: 'keyboard', text: 'Go to the old version' }
		]
	})
};
</script>
