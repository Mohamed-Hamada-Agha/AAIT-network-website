<template>
  <section class="w-full">
    <!-- (1) Header: عنوان يمين + عرض الكل شمال -->
    <div class="flex items-center justify-between my-12">
      <h2 class="text-2xl font-bold">{{ title }}</h2>

      <NuxtLink
        :to="viewAllLink"
        class="text-base hover:underline"
      >
        عرض الكل
      </NuxtLink>
    </div>
    <!-- (2) Carousel: مساحة خارجية + أزرار يمين/شمال -->
    <div class="relative">
      <!-- (3) Slider viewport (مهم: overflow-hidden يمنع سكرول عرضي) -->
      <div class="overflow-hidden">
        <!-- Track بيتحرك translateX -->
        <div
          class="flex gap-6 transition-transform duration-500"
          :style="{ transform: `translateX(${translateX}px)` }"
        >
          <!-- كارت المنتج -->
          <div
            v-for="product in products"
            :key="product.id"
            class="min-w-[300px]"
          >
            <ProductCard
              :product="product"
              @toggle-fav="toggleFav"
              @add-to-cart="addToCart"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductCard from '~/components/Products/ProductCard.vue'
import BaseButton from './BaseButton.vue';

// Special Products Data
const spicalProudcts = ref([
  {
    id: 1,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/101.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  }
]);
const props = defineProps({
  title: { type: String, default: 'وصل حديثاً' },
  viewAllLink: { type: String, default: '/' },
  products: { type: Array, default: () => [] }
})
const cardWidth = 320
const gap = 24 // gap-6 = 24px تقريباً

const current = ref(0)

// نحسب الإزاحة بالبكسل
const translateX = computed(() => {

  return -(current.value * (cardWidth + gap))
})

const maxIndex = computed(() => {

  return Math.max(props.products.length - 1, 0)
})

const next = () => {
  if (current.value < maxIndex.value) current.value++
}

const prev = () => {
  if (current.value > 0) current.value--
}

// أمثلة events
const toggleFav = (id) => {
  // هنا انت تربطها بـ store أو API
  console.log('toggle fav', id)
}

const addToCart = (id) => {
  console.log('add to cart', id)
}
</script>
