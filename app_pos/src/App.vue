<script setup>
import NavbarMenu from "./components/NavbarMenu.vue";
import DataTable from "./components/DataTable.vue";
import Vue from "vue";
</script>

<template>
  <NavbarMenu />
  <div class="container">
    <div class="d-flex">
      <div class="p-2">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">{{menu}}</a></li>
            <li class="breadcrumb-item active" aria-current="page">Menu</li>
          </ol>
        </nav>
      </div>
      <div class="ml-auto p-2">
        <button class="btn btn-info">Add Data</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <DataTable />
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
  const posApp = {
                menu:"Test",
                submenu: "Menu",
    }
    const vm = new Vue(
        {
          el:"#app",
          data:posApp
        });
</script>
<style scoped></style>
