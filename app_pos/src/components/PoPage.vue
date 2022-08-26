<template>
    <div class="container">
        <router-link :to="{name: 'po.create'}" class="btn btn-primary">Tambah</router-link>
        <h3>
            Ini Purchase Order
        </h3>
        <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Tanggal</th>
        <th scope="col">Supplier</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(po, index) in data" :key="index">
        <th>{{data.noTransaksi}}</th>
        <td>{{data.tanggal}}</td>
        <td>{{data.supplier}}</td>
        <td>{{data.status}}</td>
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
    setup(){
        let data = ref([])
        onMounted(() =>{
            getDatapo()
        })
        function getDatapo(){
            axios.get('http://localhost:3000/api/po').then(Response
            =>{
                data.value = Response.data
            }).catch(error => {
                console.log(error,Response.data)
            })
            return{
                data, getDatapo
            }
        }
    }
}
</script>