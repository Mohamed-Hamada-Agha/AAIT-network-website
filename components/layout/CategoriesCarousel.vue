<template>
  <div class="relative mx-4 md:mx-16 mt-8" dir="rtl">
    <div class="flex items-center justify-between mb-8 md:mb-12 mx-12">
      <h2 class="text-xl md:text-3xl font-bold text-gray-900">الأقسام الرئيسية</h2>
      <NuxtLink to="/categories" class="text-sm md:text-base hover:underline">
        عرض الكل
      </NuxtLink> 
    </div>

    <div class="relative w-full h-[110px] sm:h-[140px] md:h-[180px] overflow-hidden">
      <div
        v-for="(page, pageIndex) in pages"
        :key="pageIndex"
        :class="[
          'absolute inset-0 w-full transition-all duration-700 ease-in-out',
          currentIndex === pageIndex
            ? 'translate-x-0 opacity-100'
            : pageIndex < currentIndex
              ? 'translate-x-full opacity-0' 
              : '-translate-x-full opacity-0'
        ]"
      >
        <div class="flex items-center justify-center gap-6 md:justify-between w-full h-full">
        <NuxtLink
          v-for="(category, index) in page"
          :key="category.id"
          :to="category.to"
          class="flex-col items-center transition-all duration-300"
          :class="[
            index < 2
              ? 'flex'
              : index === 2
                ? 'hidden sm:flex'
                : index === 3
                  ? 'hidden md:flex'
                  : index === 4
                    ? 'hidden lg:flex'
                    : 'hidden'
          ]"
        >

            <div class="flex-none shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[140px] lg:h-[140px] rounded-full overflow-hidden border border-gray-100 shadow-sm">

              <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center gap-2 mt-6">
      <button
        v-for="(_, i) in pages"
        :key="i"
        @click="goToSlide(i)"
        :class="[
          'transition-all duration-300 rounded-full',
          currentIndex === i
            ? 'w-10 h-2 bg-cyan-500'
            : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
        ]"
        :aria-label="`page ${i + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
const categories = ref([
  {
    id: 1,
    name: 'هواتف',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80'
  },
  {
    id: 2,
    name: 'عطور',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80'
  },
  {
    id: 3,
    name: 'ملابس',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80'
  },
  {
    id: 4,
    name: 'الكترونيات',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80'
  },
  {
    id: 5,
    name: 'سيارات',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80'
  },
  {
    id: 6,
    name: 'دراجات',
    image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=400&q=80'
  },
  {
    id: 7,
    name: 'أزياء',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80'
  },
   {
    id: 2,
    name: 'عطور',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80'
  },
  {
    id: 8,
    name: 'إكسسوارات',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&q=80'
  },
   {
    id: 6,
    name: 'دراجات',
    image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=400&q=80'
  },
]);

const pages = computed(() => {
  const chunkSize = 5;
  const out = [];
  for (let i = 0; i < categories.value.length; i += chunkSize) {
    out.push(categories.value.slice(i, i + chunkSize));
  }
  return out;
});

const currentIndex = ref(0);
let timeoutId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % pages.value.length;
};

const scheduleNext = () => {
  timeoutId = setTimeout(() => {
    nextSlide();
    scheduleNext();
  }, 3000);
};

const stop = () => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = null;
};

const goToSlide = (i) => {
  currentIndex.value = i;
  stop();
  scheduleNext();
};

onMounted(() => {
  scheduleNext();
});

onUnmounted(() => {
  stop();
});
</script>
