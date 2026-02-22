<template>
  <section class="w-full">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <NuxtLink
        :to="viewAllLink"
        class="text-base hover:underline transition-all"
      >
        عرض الكل
      </NuxtLink>
    </div>

    <!-- Products Grid -->
    <div
      class="
        grid
        gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @toggle-fav="toggleFav"
        @add-to-cart="addToCart"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from '~/components/Products/ProductCard.vue'

defineProps({
  title: {
    type: String,
    default: 'وصل حديثاً'
  },
  viewAllLink: {
    type: String,
    default: '/products'
  },
  products: {
    type: Array,
    required: true
  }
})

const toggleFav = (id) => {
  console.log('Toggle favorite:', id)
}

const addToCart = (id) => {
  console.log('Add to cart:', id)
}
</script>
