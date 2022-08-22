<!-- eslint-disable prettier/prettier -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Pos | Vue Js</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="purchaseDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Purchase
        </a>
        <div class="dropdown-menu" aria-labelledby="purchaseDropdown">
          <a class="dropdown-item" href="#">Purchase Requitision</a>
          <a class="dropdown-item" href="#">Purchase Order</a>
          <a href="#" class="dropdown-item">Invoice</a>
          <a href="#" class="dropdown-item">Receipt</a>
          <a href="#" class="dropdown-item">Return</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="salesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sales
        </a>
        <div class="dropdown-menu" aria-labelledby="salesDropdown">
          <a href="#" class="dropdown-item">Order</a>
          <a href="#" class="dropdown-item">Transaction</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Keywords" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>