<template>
  <v-app class="text-center">
    <Navbar />
    <div class="container">
      <h1 class="font-weight-bold display-3 mt-5 mb-5">Médico</h1>
      <form>
        <div class="d-flex align-items-center">
          <label for="inputEndPaciente" class="col-sm-2 col-form-label sm"
            >Endereço do Paciente :</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              @input="verificarPaciente"
              class="form-control"
              id="inputEndPaciente"
              placeholder="Endereço do Paciente"
              v-model="entradaUsuario"
            />
          </div>
        </div>
      </form>
      <div>
        <button
          type="button"
          class="btn btn-outline-success mt-3"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
          :disabled="botaoDesabilitado"
        >
          Ver exames
        </button>

        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-success text-white">
                <h5 class="modal-title">Exames do paciente: {{ paciente }}</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Table from "../components/Table";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  name: "Medico",
  data() {
    return {
      entradaUsuario: undefined,
      paciente: undefined,
    };
  },
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Table: Table,
  },
  computed: {
    ...mapGetters("drizzle", ["drizzleInstance"]),
    botaoDesabilitado: function () {
      return !this.entradaUsuario;
    },
  },
})
export default class Medico extends Vue {
  accounts = [];

  async verificarPaciente() {
    const resposta = await this.drizzleInstance.contracts.ExameMedico.methods
      .obterEnderecoDoPaciente()
      .call({ from: this.accounts[0] });
    this.paciente = resposta;
  }
}
</script>

<style scoped>
.verde-uea {
  background-color: #28a745;
}
</style>
