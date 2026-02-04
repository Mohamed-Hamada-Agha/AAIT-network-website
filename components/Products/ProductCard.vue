<template>
  <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
    <!-- صورة المنتج + القلب -->
    <div class="relative h-[230px] bg-gray-100">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />

      <!-- زر المفضلة -->
      <button
        type="button"
        @click="$emit('toggle-fav', product.id)"
        class="absolute top-3 left-3 w-9 h-9 bg-white rounded-full shadow flex items-center justify-center"
        aria-label="favorite"
      >
        <span class="text-xl">{{ product.isFav ? '♥' : '♡' }}</span>
      </button>
    </div>

    <!-- المحتوى -->
    <div class="p-4">
      <!-- التقييم + السعر -->
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center gap-1">
          <span
            v-for="i in 5"
            :key="i"
            class="text-lg"
          >
            {{ i <= product.rating ? '★' : '☆' }}
          </span>
        </div>

        <div class="text-cyan-600 font-bold">
          ريال {{ product.price }}
        </div>
      </div>

      <!-- الاسم + الوصف -->
      <div class="mb-4">
        <p class="font-semibold">{{ product.name }}</p>
        <p class="text-gray-500 text-sm">{{ product.description }}</p>
      </div>

      <!-- زر السلة -->
      <button
        v-if="!product.isOutOfStock"
        type="button"
        @click="$emit('add-to-cart', product.id)"
        class="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
      >
        🛒 إضافة إلى السلة
      </button>

      <button
        v-else
        type="button"
        class="w-full border border-cyan-500 text-cyan-600 font-bold py-3 rounded-lg"
        disabled
      >
        الكمية منتهية
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true }
})
defineEmits(['toggle-fav', 'add-to-cart'])
</script>
