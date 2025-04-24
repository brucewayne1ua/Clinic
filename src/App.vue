<template>
  <div class="app-wrapper">
    <Navbar />
    <Sidebar />

    <div class="main-content">
      <router-view />
      <!-- Здесь подгружаются Home.vue, Profile.vue и т.д. -->
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style scoped>
:root {
  --sidebar-width: 250px;
  --navbar-height: 60px;
}

.app-wrapper {
  display: flex;
}

.main-content {
  margin-left: var(--sidebar-width);
  padding-top: var(--navbar-height);
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
