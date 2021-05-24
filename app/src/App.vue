<template>
  <vue-page-transition v-if="isDrizzleInitialized" class="page" id="app">
    <router-view />
  </vue-page-transition>
  <div v-else>
    <div class="d-flex justify-content-center">
      <div
        class="spinner-border"
        style="
          width: 10rem;
          height: 10rem;
          position: fixed;
          top: 40%;
          left: 45%;
        "
        role="status"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  name: "App",
  computed: {
    ...mapGetters("drizzle", ["isDrizzleInitialized"]),
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  background-image: url("../public/images/wallpaper.png");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>