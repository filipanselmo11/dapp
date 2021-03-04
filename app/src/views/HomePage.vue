<template>
  <v-app>
    <Navbar />
    <div class="container d-flex justify-content-around mt-5">
      <div class="card shadow-lg mr-5 mt-5" style="width: 18rem;">
        <div class="card-body d-flex justify-content-center">
          <i class="fas fa-user fa-6x"></i>
        </div>
        <button @click="goTo('/paciente')" class="btn btn-success">
          PACIENTE
        </button>
      </div>
      <div class="card shadow-lg mt-5" style="width: 18rem;">
        <div class="card-body d-flex justify-content-center">
          <i class="fas fa-user-md fa-6x"></i>
        </div>
        <button @click="goTo('/medico')" class="btn btn-success">MÉDICO</button>
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "HomePage",
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  methods: {
    goTo(to) {
      this.$router.push(to);
    },
  },
};
</script>

<style></style>
