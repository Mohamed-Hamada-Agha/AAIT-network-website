<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <!-- Modal Container -->
      <div 
       :class="[
       'bg-white rounded-2xl shadow-2xl w-full relative transition-all duration-500',
        currentView === 'login' ? 'max-w-md' : 'max-w-2xl']"
        @click.stop
      >
        <!-- Close Button -->
        <button 
          @click="closeModal"
          class="absolute top-4 left-4 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Modal Content -->
        <div class="p-8">
          <!-- Logo -->
          <div class="flex flex-col items-center mb-4">
            <div >
              <img src="/assets/images/aait.png" alt="" >
            </div>
            <!-- <h3 class="text-sm font-semibold">أوامر الشبكة</h3>
            <p class="text-xs">AWAMER ALSHABAKA</p> -->
          </div>

          <!-- Dynamic Content (Login or Register) -->
          <component 
            :is="currentView === 'login' ? LoginForm : RegisterForm"
            @switch="switchView"
          />

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  initialView: { type: String, default: 'login' } // 'login' or 'register'
});

const emit = defineEmits(['close', 'switch']);

const currentView = computed(() => props.initialView);

const closeModal = () => {
  emit('close');
};

const switchView = (view) => {
  emit('switch', view);
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>