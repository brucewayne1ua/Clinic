<template>
  <div class="faq-page max-w-4xl mx-auto px-4 py-10 text-gray-800">
    <h1 class="text-4xl font-bold mb-6 text-center">Додаткова інформація</h1>

    <div class="faq-item">
      <h2 class="text-2xl font-semibold mb-2">1. Як записатися на прийом?</h2>
      <p class="text-lg mb-4">
        Ви можете записатися на прийом через наш Telegram канал або за допомогою
        нашого онлайн-сервісу. Просто надішліть повідомлення або виберіть
        зручний час через спеціальну форму.
      </p>
    </div>

    <div class="faq-item">
      <h2 class="text-2xl font-semibold mb-2">
        2. Як я буду повідомлений про прийом?
      </h2>
      <p class="text-lg mb-4">
        Ми надішлемо вам підтвердження через Telegram, а за день до прийому ви
        отримаєте нагадування у вигляді SMS.
      </p>
    </div>

    <div class="faq-item">
      <h2 class="text-2xl font-semibold mb-2">3. Які години роботи?</h2>
      <p class="text-lg mb-4">
        Наш медичний центр працює з 8:00 до 20:00 щодня. Прийом проводиться за
        попереднім записом.
      </p>
    </div>

    <div class="faq-item">
      <h2 class="text-2xl font-semibold mb-2">4. Як оплатити послуги?</h2>
      <p class="text-lg mb-4">
        Оплата послуг здійснюється після прийому або перед ним, залежно від типу
        послуги. Ми приймаємо готівку, картки та безконтактні платежі.
      </p>
    </div>

    <div class="faq-item">
      <h2 class="text-2xl font-semibold mb-2">
        5. Чи є можливість онлайн-консультацій?
      </h2>
      <p class="text-lg mb-4">
        Так, ми пропонуємо можливість консультацій через відеозв'язок для
        зручності наших пацієнтів.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.faq-page {
  line-height: 1.8;
  margin-top: 70px;
  margin-bottom: 40px;
  margin-left: 120px; /* Відступ зліва */
  margin-right: 70px; /* Відступ справа */
}

.faq-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  margin-left: 240px;
}

.faq-item h2 {
  color: #333;
}

.faq-item p {
  color: #555;
}

.faq-page {
  line-height: 1.8;
  margin-top: 70px;
  margin-bottom: 40px;
  margin-left: 250px; /* Збільшений відступ зліва для сайдбара */
  margin-right: 70px; /* Відступ справа */
}

.faq-item p {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .faq-page {
    padding: 20px;
    margin-left: 20px; /* Менший відступ на мобільних пристроях */
    margin-right: 20px; /* Менший відступ на мобільних пристроях */
  }
}
</style>
