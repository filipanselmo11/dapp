<template>
  <div>
    <Navbar />
    <div class="container text-center">
      <h1 class="font-weight-bold display-3 mt-5">Paciente</h1>
      <drizzle-account units="Ether" :precision="2" class="mt-5 mb-3" />
      <div>
        <Qrcode/>
      </div>
      <div>
        <h3 class="mb-3">Submeta seu exame</h3>
        <input
          class="mt-3"
          type="file"
          id="fileInput"
          multiple
          @change="handleFileChange"
          accept=".pdf"
        />
        <br />
        <div class="d-flex justify-content-center">
          <button @click="onSubmit" class="btn btn-primary mt-3 mr-3">
            Enviar
          </button>
          <!-- Large modal -->
          <button
            class="btn btn-primary mt-3 mr-3"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            Ver Exames
          </button>
        </div>
      </div>
    </div>
    <!-- Large Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header"></div>
          <div class="modal-body">
            <div class="text-center mt-3">
              <div
                class="row p-3 mb-2 bg-primary text-white justify-content-between"
              >
                <h4 class="ml-2">Histórico de Exames Enviados</h4>
                <button class="btn btn-primary mr-2" @click="obterExames">
                  <i class="fas fa-sync-alt"></i>
                </button>
              </div>
            </div>
            <table class="table table-lg">
              <thead class="bg-primary text-white">
                <th v-for="header in tableHeader" :key="header">
                  {{ header }}
                </th>
              </thead>
              <tbody>
                <tr v-for="(exame, index) in listaDeExames" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ exame[1] }}</td>
                  <td>
                    <a class="link-texto" @click="openIpfsExame(exame[0])">
                      {{ exame[0] }}
                    </a>
                  </td>
                  <td>
                    {{ exame[2] }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary text-white" data-dismiss="modal">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import ipfs from "../store/ipfs";
import Qrcode from '../components/Qrcode';
let nome = "";
@Component({
  name: "Paciente",
  data() {
    return {
      file: undefined,
      listaDeExames: [],
      tableHeader: ["#", "Nome do Arquivo", "Endereço de Conteúdo", "Data"],
    };
  },
  components: {
    Navbar: Navbar,
    Footer: Footer,
    Qrcode: Qrcode,
  },

  created() {
    this.obterExames();
  },

  methods: {
    openIpfsExame(endereco) {
      window.open("https://ipfs.io/ipfs/" + endereco);
    },
  },
  computed: {
    ...mapGetters("drizzle", ["drizzleInstance"]),
  },
})
export default class Paciente extends Vue {
  ipfsService = ipfs;
  accounts = [];
  files = [];

  handleFileChange = (event) => {
    event.preventDefault();
    this.file = event.target.files[0];
    nome = this.file.name;
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(this.file);
    reader.onloadend = () => {
      this.$store.state.buffer = Buffer.from(reader.result);
    };
  };

  async onSubmit(event) {
    event.preventDefault();
    let ipfsResponse;

    if (this.$store.state.buffer) {
      ipfsResponse = await this.ipfsService.add(this.$store.state.buffer);
      const data = new Date();
      const dataFormatada = data.toLocaleString("pt-BR");
      this.drizzleInstance.contracts.ExameMedico.methods.enviarInfo.cacheSend(
        ipfsResponse.cid.string,
        nome,
        dataFormatada
      );
      this.$store.state.buffer = null;
    }
  }

  async obterExames() {
    const exameTam = await this.drizzleInstance.contracts.ExameMedico.methods
      .tamExames()
      .call({ from: this.accounts[0] });
    for (let i = 0; i < exameTam; i++) {
      const file = await this.drizzleInstance.contracts.ExameMedico.methods
        .obterInfo(i)
        .call({ from: this.accounts[0] });
      this.files.push(file);
    }
    this.listaDeExames = this.files;
    this.files = [];
  }
}
</script>
<style></style>
