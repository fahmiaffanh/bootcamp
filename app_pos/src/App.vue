<script setup>
import NavbarMenu from "./components/NavbarMenu.vue";
import FooterTest from "./components/FooterTest.vue";
import PoPage from "./components/PoPage.vue";
</script>

<template>
  <NavbarMenu />
  <div class="container">
    <!-- <div class="d-flex">
      <div class="p-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">{{menu}}</a></li>
            <li class="breadcrumb-item active" aria-current="page">Menu</li>
          </ol>
        </nav>
      </div>
      <div class="ml-auto p-2">
        <button class="btn btn-info">Count</button>
        <button class="btn btn-info ml-1">Add Data</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <DataTable />
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
    <PoPage />
    {{menu}}
    <footer><FooterTest/></footer>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  data() {
   menu : "Test" 
  }
};
</script>
<style scoped></style>
