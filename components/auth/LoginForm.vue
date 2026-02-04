<template>
  <div>
    <!-- Title -->
    <h2 class="text-xl font-semibold  text-cyan-500 text-center mb-2">تسجيل الدخول</h2>
    <p class="text-md text-gray-600 text-center mb-6">الرجاء ادخال رقم الجوال</p>

    <!-- Form -->
    <form @submit.prevent="handleLogin" class="space-y-4">
      
      <!-- Phone Number -->
    <div class="flex flex-col">
        <label class="text-right text-gray-700 font-medium mb-2 text-sm">رقم الجوال</label>
    <div class="relative">
      <input
        v-model="form.phone"
        type="tel"
        inputmode="tel"
        placeholder="ادخل رقم الجوال"
        class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-right focus:outline-none transition-colors pl-28"
        required
      />
      <!-- Country Code داخل خانة الإدخال -->
      <CountryPhoneInput class="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center gap-2 border-r border-gray-200 pr-3"/>
    </div>

    </div>
      <div class="flex justify-center">
        <BaseButton label="تسجيل الدخول" @click="handleLogin" class=" px-24" />
      </div>
    </form>

    <!-- Switch to Register -->
    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600">
        ليس لديك حساب ؟ 
        <button 
          @click="$emit('switch', 'register')"
          class="text-cyan-500 hover:text-cyan-600 font-semibold underline"
        >
          حساب جديد
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
    // import CountryPhoneInput from './CountryPhoneInput.vue';
import { ref, defineEmits } from 'vue';
import BaseButton from '../layout/BaseButton.vue';


const emit = defineEmits(['switch']);

const form = ref({
  phone: ''
});
const handleLogin = () => {
emit('close')   // اقفل ExModal
emit('login')   // افتح AuthModal
}
</script>