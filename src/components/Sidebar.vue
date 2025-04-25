<template>
  <div id="sidebar" class="p-3">
    <div class="sidebar-header mb-4 d-flex align-items-center">
      <i class="fas fa-layer-group me-2 fs-4 text-primary"></i>
      <h4 class="m-0 text-primary">My Sidebar</h4>
    </div>

    <ul class="list-unstyled components">
      <li>
        <a
          href="#homeSubmenu"
          data-bs-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle d-flex align-items-center"
        >
          <i class="fas fa-home me-2"></i> Сторiнки сайту
        </a>
        <ul class="collapse list-unstyled ps-4 mt-2" id="homeSubmenu">
          <li><a href="/">Домашня сторінка</a></li>
          <li><a href="/Services">Про послуги</a></li>
          <li><a href="/Aboutus">Детальніше про нас </a></li>
        </ul>
      </li>

      <li>
        <a href="#" class="d-flex align-items-center">
          <i class="fas fa-briefcase me-2"></i> Ознайомитись з нашими
          спеціалістами
        </a>
      </li>
      <li>
        <a href="/FAQ" class="d-flex align-items-center">
          <i class="fas fa-envelope me-2"></i> Додаткова інформація
        </a>
      </li>
    </ul>

    <div class="mt-4">
      <a
        href="https://bootstrapious.com/tutorial/files/sidebar.zip"
        class="btn btn-primary w-100 mb-2"
        >Перейти в чат Telegram для запису</a
      >
    </div>
  </div>
</template>

<script setup>
// Можно добавить состояние активной вкладки и т.п.
</script>

<style scoped>
#sidebar {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #dee2e6;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

#sidebar .components a {
  color: #333;
  padding: 8px 0;
  display: block;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;
}

#sidebar .components a:hover,
#sidebar .components a:focus {
  background: #f1f1f1;
}

#sidebar .components .dropdown-toggle::after {
  margin-left: auto;
}

#sidebar .components li.active > a {
  font-weight: 600;
  color: #0d6efd;
}
</style>
