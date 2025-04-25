<template>
  <div class="main-layout home-page">
    <section class="hero">
      <h1>Медичний центр «Здоров’я» у м. Тернівка</h1>
      <p>
        Сучасна клініка з найкращими спеціалістами та індивідуальним підходом до
        кожного пацієнта.
      </p>
      <button class="btn btn-primary" @click="goToBooking">
        Записатися на прийом
      </button>
    </section>
    <section class="IndexCard">
      <div class="center-wrapper">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/medical1.jpeg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 class="card-title">
                  Наш медичний центр буде завжди радий допомогти вашому
                  здоров’ю!
                </h3>
                <p class="card-text">
                  Професiйнi лiкарi, новiтне обладнання та крутий персонал саме
                  для вас
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <h3>🔬 Сучасне обладнання</h3>
        <p>Діагностика та лікування з використанням новітніх технологій.</p>
      </div>
      <div class="feature">
        <h3>👩‍⚕️ Кваліфіковані спеціалісти</h3>
        <p>Лікарі з великим досвідом та людяним підходом.</p>
      </div>
      <div class="feature">
        <h3>🏥 Всі напрямки медицини</h3>
        <p>
          Терапія, педіатрія, гінекологія, дерматологія, УЗД, аналізи та багато
          іншого.
        </p>
      </div>
    </section>

    <section class="about">
      <h2>Про нас</h2>
      <p>
        Медичний центр «Здоров’я» — це місце, де поєднуються турбота, якість та
        сучасний підхід. Ми працюємо з 8:00 до 20:00 щодня. Прийом ведеться за
        попереднім записом у Telegram або за телефоном.
      </p>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToBooking() {
  router.push('/profile'); // або сторінка запису
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-left: 180px;
}

.hero {
  background: linear-gradient(135deg, #007bff, #6c63ff);
  color: white;
  padding: 60px 20px;
  border-radius: 20px;
  margin-bottom: 40px;
  margin-left: 120px;
  margin-top: 70px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
  margin-left: 120px;
}

.feature {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 16px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.about {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}
.IndexCard {
  margin-left: 25%;
  margin-bottom: 40px;
}
.IndexCard img {
  width: 200px;
  height: 250px;
  object-fit: cover;
  /* border-radius: 8px; */
}
</style>
