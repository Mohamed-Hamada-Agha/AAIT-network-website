<template>
  <!-- Overlay -->
  <div
    class="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
    <!-- Modal Box -->
    <div class="bg-white rounded-xl w-[90%] max-w-lg p-4 relative">
        <!-- إغلاق المودال -->
        <button 
          @click="closeModal"
          class="absolute top-4 left-4 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class=" flex justify-center p-4 m-4">
          <img src="/assets/images/aait.png" >
        </div>

      <h2 class="text-xl font-semibold text-cyan-500 text-center mb-2">
        عفوا
      </h2>

      <p class="text-gray-600 text-center mb-6">
        يجب تسجيل الدخول أولًا
      </p>
      <div class="flex justify-center mb-4">
        <BaseButton label="تسجيل الدخول" @click="handleLogin" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import BaseButton from '../layout/BaseButton.vue';
  const emit = defineEmits(['close', 'login'])

  const closeModal = () => {
    emit('close')
  }
  const handleLogin = () => {
  emit('close')   // اقفل ExModal
  emit('login')   // افتح AuthModal
}

</script>
