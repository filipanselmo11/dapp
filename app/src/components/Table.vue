<template>
  <div>
    <table class="table">
      <thead class="bg-primary text-white">
        <th v-for="header in tableHeader" :key="header">{{ header }}</th>
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
          <td>{{ exame[2] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  name: "Table",
  data() {
    return {
      listaDeExames: [],
      tableHeader: ["#", "Nome do Arquivo", "Endereço de Conteúdo", "Data"],
    };
  },
  created() {
    this.getExames();
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
export default class Table extends Vue {
  accounts = [];
  files = [];
  async getExames() {
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

<style scoped>
.link-texto {
  text-decoration: underline blue;
}
</style>
