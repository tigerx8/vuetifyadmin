<template>
  <div id="dateRangePicker">
    <v-app>
      <v-content>
        <v-container>
          <v-daterange
            v-model="range"
            display-format="DD-MM-YYYY"
            no-title
            :input-props="inputProps"
            :menu-props="menuProps"
            :presets="presets"
          >
            <h3 slot="title">Vuetify Dater Range Picker - Next</h3>
          </v-daterange>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import { VDaterange } from "vuetify-daterange-picker";
import "vuetify-daterange-picker/dist/vuetify-daterange-picker.css";
import moment from "moment-timezone";
export default {
  name: "daterangepicker",
  components: { VDaterange },
  data() {
    return {
      range: {},
      inputProps: { solo: false, style: { width: "240px" } },
      menuProps: { offsetY: true, closeOnContentClick: false },
      start: moment(new Date()).format("YYYY-MM-DD"),
      end: moment(new Date()).format("YYYY-MM-DD"),
      presets: [
        {
          label: "Today",
          range: [
            moment(new Date()).format("YYYY-MM-DD"),
            moment(new Date()).format("YYYY-MM-DD")
          ]
        },
        {
          label: "Yesterday",
          range: [
            moment(subDays(new Date(), 1)).format("YYYY-MM-DD"),
            moment(subDays(new Date(), 1)).format("YYYY-MM-DD")
          ]
        },
        {
          label: "Last 30 Days",
          range: [
            moment(subDays(new Date(), 30)).format("YYYY-MM-DD"),
            moment(subDays(new Date(), 1)).format("YYYY-MM-DD")
          ]
        }
      ]
    };
  }
};
function subDays(dateObj, numDays) {
  dateObj.setDate(dateObj.getDate() - numDays);
  return dateObj;
}
function addDays(dateObj, numDays) {
  dateObj.setDate(dateObj.getDate() + numDays);
  return dateObj;
}
</script>
