<template>
  <form @submit.prevent="store">
    <div class="form-group">
      <label for="noTransaksi">Nomor Transaksi</label>
      <input
        type="text"
        class="form-control"
        id="noTransaksi"
        v-model="notransaksi"
        placeholder="no transaksi"
      />
    </div>
    <div class="form-group">
      <label for="tanggal">Tanggal</label>
      <input
        type="text"
        class="form-control"
        id="tanggal"
        placeholder="Tanggal"
        v-model="tanggal"
      />
    </div>
    <div class="form-group">
      <label for="supplier">Supplier</label>
      <select class="form-control" id="supplier" v-model="supplier">
        <option value=""></option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { def } from "@vue/shared";
import router from "../router";
export default {
  setup() {
    const data = reactive({
      notransaksi: "",
      tanggal: "",
      supplier: "",
    });
    const validation = ref([]);
    const router = useRouter();
    function simpan() {
      let notransaksi = data.notransaksi;
      let tanggal = data.tanggal;
      let supplier = data.supplier;
      axios
        .push("url", {
          notransaksi: notransaksi,
          tanggal: tanggal,
          supplier: supplier,
        })
        .then(() => {
          router.push({
            name: "data.index",
          });
        })
        .catch((error) => {
          validation.value = error.response.data;
        });
      return {
        validation,
        router,
        store,
      };
    }
  },
};
</script>
