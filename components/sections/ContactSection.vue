<template>
  <!-- Contact Us Section -->
  <section class="py-8 md:py-8">
    <div class="max-w-4xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-6 md:mb-8">
        <h2 class="text-2xl md:text-3xl lg:text-2xl font-bold text-cyan-500 mb-3 md:mb-4">تواصل معنا</h2>
        <p class=" ">نسعد دوما بتواصلك معنا دوما في خدمتك</p>
      </div>

      <!-- Social Icons -->
      <div class="flex items-center justify-center mb-8 md:mb-12">
        <IconsLinks />
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">

        <!-- Row 1: Phone + Email -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

          <!-- Phone Number -->
          <div class="flex flex-col">
            <label
              for="contact-phone"
              class="text-right text-gray-700 font-medium mb-2 text-sm md:text-base"
            >
              رقم الجوال
            </label>

            <div class="relative">
              <input
                id="contact-phone"
                name="phone"
                v-model="form.phone"
                type="tel"
                inputmode="tel"
                placeholder="ادخل رقم الجوال"
                class="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors text-sm md:text-base"
                autocomplete="tel"
              >
              <!-- Country Code -->
              <div class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <span class="text-gray-600 text-sm">+966</span>
                <img src="https://flagcdn.com/w20/sa.png" alt="SA" class="w-4 md:w-5">
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="flex flex-col">
            <label
              for="contact-email"
              class="text-right text-gray-700 font-medium mb-2 text-sm md:text-base"
            >
              البريد الالكتروني
            </label>

            <input
              id="contact-email"
              name="email"
              v-model="form.email"
              type="email"
              inputmode="email"
              placeholder="ادخل البريد الالكتروني"
              class="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors text-sm md:text-base"
              autocomplete="email"
            >
          </div>
        </div>

        <!-- Row 2: Subject -->
        <div class="flex flex-col">
          <label
            for="contact-subject"
            class="text-right text-gray-700 font-medium mb-2 text-sm md:text-base"
          >
            عنوان الرسالة
          </label>

          <input
            id="contact-subject"
            name="subject"
            v-model="form.subject"
            type="text"
            placeholder="ادخل عنوان الرسالة"
            class="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors text-sm md:text-base"
            autocomplete="off"
          >
        </div>

        <!-- Row 3: Message -->
        <div class="flex flex-col">
          <label
            for="contact-message"
            class="text-right text-gray-700 font-medium mb-2 text-sm md:text-base"
          >
            محتوى الرسالة
          </label>

          <textarea
            id="contact-message"
            name="message"
            v-model="form.message"
            rows="5"
            placeholder="ادخل محتوى الرسالة"
            class="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors resize-none text-sm md:text-base"
            autocomplete="off"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="mt-8 text-center">
        <BaseButton label="إرسال" class=""/>
      </div>

      </form>

    </div>
  </section>
</template>

<script setup>
import BaseButton from '../layout/BaseButton.vue';    
defineProps({
  form: { type: Object, required: true },
  handleSubmit: { type: Function, required: true },
})
</script>
