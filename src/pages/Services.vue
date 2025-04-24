<template>
  <div class="services-page">
    <Sidebar />

    <div class="content">
      <section class="hero">
        <h1>Наші Послуги</h1>
        <p>
          Ми пропонуємо широкий спектр медичних послуг для всіх членів вашої
          родини.
        </p>
      </section>

      <section class="services-list">
        <div class="service">
          <h3>Терапія</h3>
          <p>
            Висококваліфіковані терапевти діагностують і лікують різні
            захворювання, а також проводять профілактичні огляди.
          </p>
        </div>
        <div class="service">
          <h3>Педіатрія</h3>
          <p>
            Спеціалісти з дитячих захворювань надають консультації та лікування
            дітям від народження до 18 років.
          </p>
        </div>
        <div class="service">
          <h3>Гінекологія</h3>
          <p>
            Консультації та лікування жіночих захворювань, а також ведення
            вагітності та планування сім'ї.
          </p>
        </div>
        <div class="service">
          <h3>Дерматологія</h3>
          <p>
            Діагностика та лікування шкірних захворювань, а також естетичні
            процедури.
          </p>
        </div>
        <div class="service">
          <h3>УЗД</h3>
          <p>
            Виконання ультразвукових досліджень для діагностики стану органів і
            тканин.
          </p>
        </div>
        <div class="service">
          <h3>Аналізи</h3>
          <p>Широкий спектр лабораторних досліджень для точного діагнозу.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'; // Імпортуємо компонент сайдбара
</script>

<style scoped>
.services-page {
  display: flex;
  min-height: 100vh;
  margin-top: 70px;
}

.content {
  margin-left: 270px; /* Враховуємо ширину сайдбара */
  flex-grow: 1;
  padding: 20px;
}

.hero {
  background: linear-gradient(135deg, #007bff, #6c63ff);
  color: white;
  padding: 60px 20px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.services-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.service {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 16px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.service h3 {
  color: #007bff;
  margin-bottom: 10px;
}

.service p {
  font-size: 1.1rem;
  color: #333;
}
</style>
