<template>
  <header>
    <div class="logo">
      <router-link to="/product" style="color: orangered" class="router-link">B-SHOES Admin</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/product">Sản phẩm</router-link></li>
        <li><router-link to="/account">Tài khoản</router-link></li>
        <li><router-link to="/order">Đơn hàng</router-link></li>
      </ul>
    </nav>
    <!-- <div class="search-box">
      <input type="text" placeholder="Tìm kiếm..." >
      <button><i class="fa fa-search"></i></button>
    </div> -->
    <div class="icon-box">
      <!-- <router-link to="/cart"><i class="fa fa-shopping-cart"></i></router-link> -->
      <router-link to="/login"><i class="fa-solid fa-right-to-bracket"></i></router-link>
    </div>
  </header>
</template>
