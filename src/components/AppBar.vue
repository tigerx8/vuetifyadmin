<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" class="primary" fixed dark app>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="hidden-sm-and-down">VueAdmin</span>
    </v-toolbar-title>
    <v-text-field flat solo-inverted hide-details prepend-inner-icon="search" clearable :label="$t('toobar.search')"  class="hidden-sm-and-down search">
    </v-text-field>
    <div class="flex-grow-1"></div>
    
    <v-btn text tile min-height="64px" href="mailto:tuanna587@gmail.com">Hire Me</v-btn>
    <v-btn icon href="https://github.com/tigerx8/vuetifyadmin">
      <v-icon class="fa-2x">fa-github</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon @click="handleFullScreen()">
      <v-icon>mdi-fullscreen</v-icon>
    </v-btn>
    <v-menu
      transition="slide-y-transition"
      bottom
      :nudge-bottom="14"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon flat slot="activator" v-on="on">
          <v-badge color="red" overlap>
            <span slot="badge">3</span>
            <v-icon medium>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <notification-list></notification-list>
      </template>
    </v-menu>
    <v-menu offset-y origin="center center" class="elelvation-1" :nudge-bottom="14" transition="scale-transition">
      
      <notification-list></notification-list>
    </v-menu>
    <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
      <v-btn icon large flat slot="activator">
        <v-avatar size="30px">
          <img src="/static/avatar/man_4.jpg" alt="Anh Tuan" />
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile
          v-for="(item, index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          @click.stop="item.click"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import NotificationList from "@/components/widgets/list/NotificationList"
import Util from "@/util"
export default {
  name: "AppToolbar",
  components: {
    NotificationList
  },
	props: {
		source: String
	},
	data: () => ({
		items: [
      {
        icon: "account_circle",
        href: "#",
        title: $t('toobar.profile'),
        click: this.handleProfile
      },
      {
        icon: "settings",
        href: "#",
        title: $t('toobar.settings'),
        click: this.handleSetting
      },
      {
        icon: "fullscreen_exit",
        href: "#",
        title: $t('toobar.logout'),
        click: this.handleLogut
      }
    ]
  }),
  computed: {
    toolbarColor() {
      return $vuetify.options.extra.mainNav
    }
  },
  methods: {
    handleDrawerToggle() {
      this.$emit("side-icon-click")
    },
    handleFullScreen() {
      Util.toggleFullScreen()
    },
    handleLogut() {
      //handle logout
      this.$router.push('/auth/login')
    },
    handleSetting() {

    },
    handleProfile() {

    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  border-radius: 0px;
}
</style>