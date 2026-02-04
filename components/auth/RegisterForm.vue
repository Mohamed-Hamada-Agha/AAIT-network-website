<template>
  <div class="">
    <!-- Title -->
    <h2 class="text-2xl font-bold text-cyan-500 text-center mb-2">تسجيل الدخول</h2>
    <p class="text-sm text-gray-600 text-center mb-6">حساب جديد</p>

    <!-- Form -->
    <form @submit.prevent="handleRegister" class="space-y-4">
      
      <!-- Name -->
      <div class="flex flex-col">
        <label class="text-right text-gray-700 font-medium mb-2 text-sm">إسم المستخدم</label>
        <input 
          v-model="form.name"
          type="text" 
          placeholder="الرجاء ادخال إسم المستخدم"
          class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors"
          required
        >
      </div>

      <!-- Phone Number & City -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Phone -->
        <div class="flex flex-col">
          <label class="text-right text-gray-700 font-medium mb-2 text-sm">رقم الجوال</label>
          <div class="relative">
            <input 
              v-model="form.phone"
              type="tel" 
              placeholder="ادخل رقم الجوال"
              class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors"
              required
            >
          </div>
        </div>

        <!-- City -->
        <div class="flex flex-col">
          <label class="text-right text-gray-700 font-medium mb-2 text-sm">المدينة</label>
          <select 
            v-model="form.city"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-right focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
            required
          >
            <option value="">اختر المدينة الخاصة بك</option>
            <option value="riyadh">الرياض</option>
            <option value="jeddah">جدة</option>
            <option value="dammam">الدمام</option>
            <option value="mecca">مكة</option>
            <option value="medina">المدينة</option>
          </select>
          <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-cyan-500 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
        </div>
      </div>

      <!-- Terms Checkbox -->
      <div class="flex items-center justify-start gap-2">
          <input 
          v-model="form.acceptTerms"
          type="checkbox" 
          class="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500 cursor-pointer"
          required
        >
        <p class="text-sm text-gray-700 cursor-pointer">الموافقة على 
          <button 
          @click="$emit('switch', 'login')"
          class="text-cyan-500 hover:text-cyan-600 font-semibold underline"
        >
          الشروط والأحكام
        </button>
         </p>
      
      </div>

      <!-- Submit Button -->
      <!-- <button 
        type="submit"
        :disabled="!form.acceptTerms"
        class="w-full py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-lg font-semibold rounded-lg transition-colors shadow-lg"
      >
        تسجيل دخول
      </button> -->
      <div class="flex justify-center">
        <BaseButton label="تسجيل الدخول" class=" px-24" />
      </div>
    </form>

    <!-- Switch to Login -->
    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600">
        لديك حساب بالفعل ؟ 
        <button 
          @click="$emit('switch', 'login')"
          class="text-cyan-500 hover:text-cyan-600 font-semibold underline"
        >
          حساب جديد
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import BaseButton from '../layout/BaseButton.vue';
const emit = defineEmits(['switch']);

const form = ref({
  name: '',
  phone: '',
  city: '',
  acceptTerms: false
});

const handleRegister = () => {
  console.log('Register:', form.value);
  // TODO: API call
  alert('تم إنشاء الحساب بنجاح!');
};
</script>