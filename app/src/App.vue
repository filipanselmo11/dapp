
<template>
  <div v-if="isDrizzleInitialized" id="app">
    <router-view/>
  </div>
  <div v-else>Loading App...</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  name: "App",
  computed: {
    ...mapGetters("drizzle", ["isDrizzleInitialized"])
  }
})
export default class App extends Vue {}
</script>