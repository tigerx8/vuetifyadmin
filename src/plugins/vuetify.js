import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loade
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loade
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#3f51b5",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
})

Vue.use(Vuetify)

export default vuetify;