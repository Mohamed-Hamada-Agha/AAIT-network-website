<template>
  <div class="w-full h-[570px] relative overflow-hidden bg-gray-900">
    <!-- Slides Container -->
    <div class="relative w-full h-full">
      <!-- الصور -->
      <div 
        v-for="(occasion, index) in occasions" 
        :key="index"
        :class="[
          'absolute inset-0 w-full h-full transition-all duration-700 ease-in-out',
          currentIndex === index 
            ? 'translate-x-0 opacity-100' 
            : index < currentIndex 
              ? '-translate-x-full opacity-0'
              : 'translate-x-full opacity-0'
        ]"
      >
        <img 
          :src="occasion.image" 
          :alt="occasion.title"
          class="w-full h-full object-cover"
        />
        
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex mt-24">
          <div class="p-6 md:p-10 w-full flex items-center justify-center flex-col gap-4">
        <h3 class="text-white text-3xl md:text-3xl font-bold mb-2"> {{ occasion.title }} </h3>
        <p class="text-white/90 text-lg md:text-xl"> {{ occasion.description }} </p>    
        <!-- <NuxtLink
          to="/"
          class=" px-28 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition"
        >
          {{ occasion.button || 'تسوق الآن' }}
        </NuxtLink> -->
        <div class="mt-8 text-center">
        <BaseButton label="تسوق الان" class=""/>
      </div>
       </div>
       </div>
      </div>
    </div>

    <!-- Dots Indicators -->
   <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(occasion, index) in occasions"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'transition-all duration-300 rounded-full',
          currentIndex === index 
            ? 'w-10 h-2.5 bg-white' 
            : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/90'
        ]"
        :aria-label="`Slide ${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from './BaseButton.vue';

const occasions = ref([
  {title: 'العنوان حسين الحمري', description: 'المحتوي ليندا نزار العسكر', button: 'تسوق الآن', image: '/images/karosal-1.jpg' },
  {title: 'العنوان أنس باشا', description: 'المحتوي مؤنس الخضري', button: 'تسوق الآن', image: '/images/karosal-2.png' },
  {title: 'العنوان حسين الحمري', description: 'المحتوي ليندا نزار العسكر', button: 'تسوق الآن', image: '/images/101.jpg' },
  {title: 'العنوان أنس باشا', description: 'المحتوي مؤنس الخضري', button: 'تسوق الآن', image: '/images/104.jpg' },
  {title: 'العنوان حسين الحمري', description: 'المحتوي ليندا نزار العسكر', button: 'تسوق الآن', image: '/images/105.jpg' },
]);


const currentIndex = ref(0);
const totalSlides = occasions.value.length;
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? totalSlides - 1 
    : currentIndex.value - 1;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoPlay = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000); // كل 3 ثواني
};

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>