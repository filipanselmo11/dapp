<template>
  <qrcode-vue class="text-center" :value="valor" :size="sizeQr" level="H" />
</template>

<script>
import QrcodeVue from "qrcode.vue";
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  name: "Qrcode",
  data() {
    return {
      valor: undefined,
      endereco: undefined,
      accounts: [],
      sizeQr: 200,
    };
  },

  components: {
    QrcodeVue: QrcodeVue,
  },
  methods: {},

  created() {
    this.valor = String(this.$store.state.accounts.activeAccount);
  },

  computed: {
    ...mapGetters("drizzle", ["drizzleInstance"]),
  },
})
export default class Qrcode extends Vue {
}
</script>

<style>
</style>