<template>
  <div>
    <Navbar />
    <div class="container d-flex justify-content-around mt-5">
      <div class="card shadow-lg mr-5 mt-5" style="width: 18rem">
        <div class="card-body d-flex justify-content-center">
          <i class="fas fa-user fa-6x"></i>
          <p class="card-text">
            Para enviar os exames e consultá-los clique aqui.
          </p>
        </div>
        <button @click="goTo('/paciente')" class="btn btn-primary">
          Paciente
        </button>
      </div>
      <div class="card shadow-lg mt-5" style="width: 18rem">
        <div class="card-body d-flex justify-content-center">
          <i class="fas fa-user-md fa-6x"></i>
          <p class="card-text">
            Para consultar os exames que foram enviados clique aqui.
          </p>
        </div>
        <button @click="goTo('/medico')" class="btn btn-primary">Médico</button>
      </div>
    </div>
    <Footer />
  </div>
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
